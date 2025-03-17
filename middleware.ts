import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { getToken } from "next-auth/jwt"

export async function middleware(request: NextRequest) {
  // Bypass authentication in development
  if (process.env.NODE_ENV === "development") {
    return NextResponse.next()
  }

  // Normal authentication logic for production
  const token = await getToken({ req: request })

  if (!token) {
    const url = new URL("/auth/signin", request.url)
    url.searchParams.set("callbackUrl", request.nextUrl.pathname)
    return NextResponse.redirect(url)
  }

  // Role-based access control for "/coaching"
  if (request.nextUrl.pathname.startsWith("/coaching") && token.role !== "manager" && token.role !== "admin") {
    return NextResponse.redirect(new URL("/dashboard", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/calls/:path*",
    "/insights/:path*",
    "/coaching/:path*",
    "/team/:path*",
    "/analytics/:path*",
    "/settings/:path*",
    "/api/:path*",
  ],
}