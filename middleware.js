// import { authMiddleware } from "@clerk/nextjs/server";

// export default authMiddleware();

// export const config = {
//   matcher: [
//     "/((?!_next|.*\\..*).*)", // Exclude static files and internal paths
//     "/(api|trpc)(.*)",
//   ],
// };

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  return response;
}

export const config = {
  matcher: ['/api/:path*'],
};
