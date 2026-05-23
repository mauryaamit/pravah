// src/middleware.ts — Route protection
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Routes that don't require authentication
const PUBLIC_PATHS = ['/login', '/onboarding'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow public routes
  const isPublic = PUBLIC_PATHS.some(p => pathname === p || pathname.startsWith(p + '/'));
  if (isPublic) return NextResponse.next();

  // Check for JWT cookie
  const token = request.cookies.get('pravah-token')?.value;
  if (!token) {
    const loginUrl = new URL('/login', request.url);
    // Preserve the intended destination for post-login redirect
    loginUrl.searchParams.set('from', pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  // Exclude Next.js internals and all static assets
  matcher: [
    '/((?!_next/static|_next/image|favicon\\.ico|fonts/|icons/|sounds/|manifest\\.json|sw\\.js|api/).*)',
  ],
};
