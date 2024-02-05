import { isAuthenticated } from "@/lib/auth.utils";
import { Routes } from "@/lib/routes.enum";
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === Routes.home) return NextResponse.next()
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
     * - bims-logo.svg (the logo)
     */
    '/((?!auth|_next/static|_next/image|favicon.ico|bims-logo.svg).*)',
  ],
}