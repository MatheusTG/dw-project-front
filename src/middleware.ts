import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
  const isAuthenticated = req.cookies.get('auth-token');

  const { pathname } = req.nextUrl;

  if (pathname === '/login' || pathname === '/favicon.ico') {
    if (isAuthenticated) return NextResponse.redirect(new URL('/', req.url));
    return NextResponse.next();
  }

  if (!isAuthenticated) return NextResponse.redirect(new URL('/login', req.url));

  return NextResponse.next();
}

export const config = {
  matcher: ['/:path', '/'],
};
