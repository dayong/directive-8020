#!/usr/bin/env node
// Pulls Google Search Console data (Search Analytics + Sitemaps) with a
// service-account key. Dependency-free: JWT signing uses node:crypto.
//
// Key file: $GSC_KEY_FILE or ~/.config/directive-8020/gsc-service-account.json
// Property: $GSC_SITE or auto-detected from the account's verified properties.
//
// Usage: node scripts/gsc-fetch.mjs [--start YYYY-MM-DD] [--end YYYY-MM-DD]
// Output: gsc-data/<run-date>/ (gitignored)

import { createSign } from 'node:crypto';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';

const KEY_PATH =
  process.env.GSC_KEY_FILE || join(homedir(), '.config', 'directive-8020', 'gsc-service-account.json');
const API = 'https://www.googleapis.com/webmasters/v3';
const MAX_ROWS = 100_000;

function isoDate(date) {
  return date.toISOString().slice(0, 10);
}

function daysAgo(n) {
  const date = new Date();
  date.setUTCDate(date.getUTCDate() - n);
  return date;
}

function parseArgs(argv) {
  const args = {};
  for (let i = 0; i < argv.length; i += 1) {
    if (argv[i] === '--start') args.start = argv[++i];
    else if (argv[i] === '--end') args.end = argv[++i];
    else if (argv[i] === '--tag') args.tag = argv[++i];
  }
  return args;
}

function readKey() {
  if (!existsSync(KEY_PATH)) {
    console.error(`Service-account key not found: ${KEY_PATH}`);
    console.error('Set GSC_KEY_FILE or place the JSON key at the default path.');
    process.exit(1);
  }
  return JSON.parse(readFileSync(KEY_PATH, 'utf8'));
}

async function getAccessToken(key) {
  const now = Math.floor(Date.now() / 1000);
  const encode = (value) => Buffer.from(JSON.stringify(value)).toString('base64url');
  const unsigned = `${encode({ alg: 'RS256', typ: 'JWT' })}.${encode({
    iss: key.client_email,
    scope: 'https://www.googleapis.com/auth/webmasters.readonly',
    aud: 'https://oauth2.googleapis.com/token',
    iat: now,
    exp: now + 3600,
  })}`;
  const assertion = `${unsigned}.${createSign('RSA-SHA256').update(unsigned).sign(key.private_key, 'base64url')}`;

  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer', assertion }),
  });
  if (!res.ok) throw new Error(`Token exchange failed: ${res.status} ${await res.text()}`);
  return (await res.json()).access_token;
}

async function callApi(token, path, init = {}) {
  const res = await fetch(`${API}${path}`, {
    ...init,
    headers: {
      authorization: `Bearer ${token}`,
      ...(init.body ? { 'content-type': 'application/json' } : {}),
    },
  });
  if (!res.ok) throw new Error(`${init.method || 'GET'} ${path} -> ${res.status} ${await res.text()}`);
  return res.json();
}

async function searchAnalytics(token, site, body) {
  const rows = [];
  while (rows.length < MAX_ROWS) {
    const data = await callApi(token, `/sites/${encodeURIComponent(site)}/searchAnalytics/query`, {
      method: 'POST',
      body: JSON.stringify({ ...body, rowLimit: 25_000, startRow: rows.length }),
    });
    const batch = data.rows ?? [];
    rows.push(...batch);
    if (batch.length < 25_000) break;
  }
  return rows;
}

function totals(rows) {
  return rows.reduce(
    (acc, row) => ({
      clicks: acc.clicks + row.clicks,
      impressions: acc.impressions + row.impressions,
    }),
    { clicks: 0, impressions: 0 }
  );
}

function pickSite(sites, requested) {
  if (requested) {
    const match = sites.find((site) => site.siteUrl === requested);
    if (!match) throw new Error(`Property not found: ${requested}\nAvailable:\n${sites.map((s) => `  ${s.siteUrl}`).join('\n')}`);
    return match.siteUrl;
  }
  const preferred = sites.find((site) => site.siteUrl === 'sc-domain:directive-8020.com');
  const fallback = sites.find((site) => site.siteUrl.includes('directive-8020.com'));
  if (!preferred && !fallback) {
    throw new Error(`No directive-8020.com property in this account.\nAvailable:\n${sites.map((s) => `  ${s.siteUrl}`).join('\n')}`);
  }
  return (preferred ?? fallback).siteUrl;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const key = readKey();
  console.log(`Service account: ${key.client_email}`);

  const token = await getAccessToken(key);
  const siteList = await callApi(token, '/sites');
  const sites = siteList.siteEntry ?? [];
  const site = pickSite(sites, process.env.GSC_SITE);
  console.log(`Property: ${site}`);
  console.log(`Permissions: ${sites.map((s) => `${s.siteUrl} (${s.permissionLevel})`).join(', ')}`);

  const end = args.end ?? isoDate(daysAgo(3));
  const start = args.start ?? isoDate(daysAgo(30));
  const prevEnd = isoDate(new Date(Date.parse(`${start}T00:00:00Z`) - 86_400_000));
  const prevStart = isoDate(new Date(Date.parse(`${start}T00:00:00Z`) - 28 * 86_400_000));
  const trendStart = isoDate(new Date(Date.parse(`${end}T00:00:00Z`) - 92 * 86_400_000));

  const runDir = join(
    process.cwd(),
    'gsc-data',
    `${new Date().toISOString().slice(0, 10)}${args.tag ? `-${args.tag}` : ''}`
  );
  mkdirSync(runDir, { recursive: true });

  const reports = {
    'daily.json': { startDate: trendStart, endDate: end, dimensions: ['date'] },
    'pages-current.json': { startDate: start, endDate: end, dimensions: ['page'] },
    'pages-previous.json': { startDate: prevStart, endDate: prevEnd, dimensions: ['page'] },
    'queries-current.json': { startDate: start, endDate: end, dimensions: ['query'] },
    'queries-previous.json': { startDate: prevStart, endDate: prevEnd, dimensions: ['query'] },
    'query-pages-current.json': { startDate: start, endDate: end, dimensions: ['query', 'page'] },
    'countries-current.json': { startDate: start, endDate: end, dimensions: ['country'] },
    'devices-current.json': { startDate: start, endDate: end, dimensions: ['device'] },
  };

  const meta = {
    fetchedAt: new Date().toISOString(),
    serviceAccount: key.client_email,
    site,
    current: { start, end },
    previous: { start: prevStart, end: prevEnd },
    trend: { start: trendStart, end },
  };

  for (const [file, body] of Object.entries(reports)) {
    const rows = await searchAnalytics(token, site, { ...body, type: 'web', dataState: 'all' });
    writeFileSync(join(runDir, file), JSON.stringify(rows));
    const { clicks, impressions } = totals(rows);
    console.log(`${file}: ${rows.length} rows, ${clicks} clicks, ${impressions} impressions`);
  }

  const sitemaps = await callApi(token, `/sites/${encodeURIComponent(site)}/sitemaps`);
  writeFileSync(join(runDir, 'sitemaps.json'), JSON.stringify(sitemaps));
  writeFileSync(join(runDir, 'meta.json'), JSON.stringify(meta, null, 2));

  console.log(`\nCurrent window: ${start} → ${end}`);
  console.log(`Previous window: ${prevStart} → ${prevEnd}`);
  console.log(`Saved to ${runDir}`);
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
