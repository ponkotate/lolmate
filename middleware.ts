import { auth } from '@/auth';

export default auth((req) => {
  if (!req.auth) {
    return Response.redirect(new URL('/login', req.url));
  }
});

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|login).*)']
};
