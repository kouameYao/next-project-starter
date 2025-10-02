import { createI18nServer } from 'next-international/server';

import { locales } from './types';

export const { getI18n, getScopedI18n, getStaticParams } = createI18nServer({
  en: () => import('./en'),
  fr: () => import('./fr')
});

export { locales };
