import { defaultLocale, locales, type Locale } from './strings';

export { defaultLocale, locales };
export type { Locale };

export function getLocaleFromUrl(url: URL): Locale {
  const [, segment] = url.pathname.split('/');
  if (segment && (locales as readonly string[]).includes(segment)) {
    return segment as Locale;
  }
  return defaultLocale;
}

export function localizePath(path: string, locale: Locale): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  if (locale === defaultLocale) {
    return normalized;
  }
  return `/${locale}${normalized === '/' ? '/' : normalized}`;
}

export function alternateLocale(locale: Locale): Locale {
  return locale === 'sv' ? 'en' : 'sv';
}

const translationMap: Record<string, Record<Locale, string>> = {
  '/': { sv: '/', en: '/en/' },
  '/about/': { sv: '/about/', en: '/en/about/' },
  '/contact/': { sv: '/contact/', en: '/en/contact/' },
  '/products/mbot/': { sv: '/products/mbot/', en: '/en/products/mbot/' },
  '/blog/': { sv: '/blog/', en: '/blog/' },
  '/security/': { sv: '/security/', en: '/en/security/' },
  '/products/mbot/security/': {
    sv: '/products/mbot/security/',
    en: '/en/products/mbot/security/',
  },
};

export function translatePath(currentPath: string, targetLocale: Locale): string {
  const cleaned = currentPath.replace(/\/(en)\//, '/').replace(/^\/(en)$/, '/');
  const lookupKey = cleaned.endsWith('/') ? cleaned : `${cleaned}/`;
  const mapped = translationMap[lookupKey];
  if (mapped) {
    return mapped[targetLocale];
  }
  return targetLocale === defaultLocale ? cleaned : `/${targetLocale}${cleaned}`;
}
