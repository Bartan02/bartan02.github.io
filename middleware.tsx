import createMiddleware from 'next-intl/middleware';
import intlConfig from './next-intl.config';
export default createMiddleware(intlConfig);

export const config = {
    matcher: ['/', '/(en|nl|fr|pl)/:path*']
};