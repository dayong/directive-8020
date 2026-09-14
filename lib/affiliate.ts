const AFFILIATE_HOSTS = ['instant-gaming.com'];

export function isAffiliateHref(href: string): boolean {
  try {
    const { hostname } = new URL(href);
    return AFFILIATE_HOSTS.some((host) => hostname === host || hostname.endsWith(`.${host}`));
  } catch {
    return false;
  }
}
