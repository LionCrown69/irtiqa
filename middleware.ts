import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en-us', 'en-gb', 'en-eu'],
 
  // Used when no locale matches
  defaultLocale: 'en-us',
  localeDetection: true
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(en-us|en-gb|en-eu)/:path*']
};
