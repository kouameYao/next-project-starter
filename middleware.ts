import { betterFetch } from '@better-fetch/fetch';
import type { Session } from 'better-auth';
import { type NextRequest, NextResponse } from 'next/server';
import { createI18nMiddleware } from 'next-international/middleware';

const I18nMiddleware = createI18nMiddleware({
  locales: ['en', 'fr'],
  defaultLocale: 'en',
  urlMappingStrategy: 'rewrite'
});

const publicPaths = [
  '/login',
  '/signup',
  '/forgot-password',
  '/reset-password',
  '/accept-invitation',
  '/check-email'
];

export async function middleware(request: NextRequest) {
  const isPublicPath = publicPaths.some((path) =>
    request.nextUrl.pathname.startsWith(path)
  );

  if (isPublicPath) {
    return I18nMiddleware(request);
  }

  const host = request.headers.get('host');
  const protocol = request.headers.get('x-forwarded-proto') || 'http';

  const { data: session } = await betterFetch<Session>(
    '/api/auth/get-session',
    {
      baseURL: `${protocol}://${host}`,
      headers: {
        cookie: request.headers.get('cookie') || ''
      }
    }
  );

  if (!session) {
    return NextResponse.redirect(
      `${protocol}://${host}/login?callbackUrl=${encodeURIComponent(
        request.nextUrl.pathname
      )}`
    );
  }

  return I18nMiddleware(request);
}

export const config = {
  matcher: [
    '/((?!_next/static|api|_next/image|favicon.ico|fonts|.*\\.(?:svg|png|jpg|jpeg|gif|webp|otf|ttf|woff|woff2)$).*)'
  ]
};
