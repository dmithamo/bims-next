import { isAuthenticated } from "@/lib/auth.utils";
import { Routes } from "@/lib/routes.enum";
import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  return !isAuthenticated() ? NextResponse.redirect(new URL(Routes.login, request.url)) : NextResponse.next()
}


export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - auth (auth routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!auth|_next/static|_next/image|favicon.ico).*)',
  ],
}