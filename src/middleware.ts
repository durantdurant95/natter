import { getSessionCookie } from "better-auth/cookies";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const sessionCookie = getSessionCookie(request, {
    // Optionally pass config if cookie name, prefix or useSecureCookies option is customized in auth config.
    cookieName: "session_token",
    cookiePrefix: "better-auth",
    useSecureCookies: process.env.NODE_ENV === "production", // Only use secure cookies in production
  });

  if (!sessionCookie) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"], // Specify the routes the middleware applies to, including all children routes
};
