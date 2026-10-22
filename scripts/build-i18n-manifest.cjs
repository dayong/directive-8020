// Generate the small, public-only data needed by Edge Middleware. No content body or server fs enters its bundle.
const fs = require('node:fs');
const path = require('node:path');
const Module = require('node:module');
const ts = require('typescript');

function buildI18nManifest() {
  const originalResolve = Module._resolveFilename;
  const originalTs = require.extensions['.ts'];
  try {
    Module._resolveFilename = function(request, parent, ...rest) {
      return originalResolve.call(this, request.startsWith('@/') ? path.join(process.cwd(), request.slice(2)) : request, parent, ...rest);
    };
    require.extensions['.ts'] = (module, filename) => module._compile(ts.transpileModule(fs.readFileSync(filename, 'utf8'), {
      compilerOptions: { module: ts.ModuleKind.CommonJS, esModuleInterop: true, target: ts.ScriptTarget.ES2020 },
    }).outputText, filename);
    const { locales } = require('../i18n/config.ts');
    const { getTranslatedPaths } = require('../lib/routes.ts');
    const { getUiStrings } = require('../i18n/ui.ts');
    const manifest = {
      paths: Object.fromEntries(locales.map((locale) => [locale, getTranslatedPaths(locale).sort()])),
      errors: Object.fromEntries(locales.map((locale) => {
        const { notFoundTitle: title, notFoundBody: body, home } = getUiStrings(locale).errors;
        return [locale, { title, body, home }];
      })),
    };
    const file = path.join(process.cwd(), 'i18n/generated/route-manifest.json');
    const output = JSON.stringify(manifest, null, 2) + '\n';
    fs.mkdirSync(path.dirname(file), { recursive: true });
    if (!fs.existsSync(file) || fs.readFileSync(file, 'utf8') !== output) fs.writeFileSync(file, output);
    return manifest;
  } finally {
    Module._resolveFilename = originalResolve;
    if (originalTs) require.extensions['.ts'] = originalTs;
    else delete require.extensions['.ts'];
  }
}
module.exports = buildI18nManifest;
if (require.main === module) buildI18nManifest();
