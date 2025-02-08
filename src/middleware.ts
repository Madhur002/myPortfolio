import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Add cache control headers
  response.headers.set(
    'Cache-Control',
    'public, max-age=31536000, immutable'
  );

  return response;
}

export const config = {
  matcher: [
    '/static/:path*',
    '/images/:path*',
    '/_next/image/:path*',
  ],
}; 