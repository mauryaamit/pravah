// src/middleware.ts — Route protection
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Routes that don't require authentication
const PUBLIC_PATHS = ['/login', '/signup', '/onboarding'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get('pravah-token')?.value;

  // Allow public routes
  const isPublic = PUBLIC_PATHS.some(p => pathname === p || pathname.startsWith(p + '/'));
  if (isPublic) {
    // Redirect authenticated users away from login and signup
    if (token && (pathname === '/login' || pathname === '/signup')) {
      return NextResponse.redirect(new URL('/aarambh', request.url));
    }
    return NextResponse.next();
  }

  // Check for JWT cookie
  if (!token) {
    const loginUrl = new URL('/login', request.url);
    // Preserve the intended destination for post-login redirect
    loginUrl.searchParams.set('from', pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  // Exclude Next.js internals, API routes, and all static public assets
  matcher: [
    '/((?!_next/static|_next/image|favicon\\.ico|logo\\.png|images/|paintings/|fonts/|icons/|sounds/|manifest\\.json|sw\\.js|workbox-.*\\.js|api/).*)',
  ],
};
