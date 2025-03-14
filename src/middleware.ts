import { getSessionCookie } from "better-auth/cookies";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  // Debug all available cookies
  console.log("All cookies:", request.cookies.getAll());

  const sessionCookie = getSessionCookie(request, {
    // Optionally pass config if cookie name, prefix or useSecureCookies option is customized in auth config.
    cookieName: "session_token",
    cookiePrefix: "better-auth",
    useSecureCookies: process.env.NODE_ENV === "production", // Only use secure cookies in production
  });
  console.log("Session cookie:", sessionCookie);

  // Try alternative cookie name patterns if the main one fails
  if (!sessionCookie) {
    const allCookies = request.cookies.getAll();
    const authCookies = allCookies.filter(
      (cookie) =>
        cookie.name.includes("auth") ||
        cookie.name.includes("session") ||
        cookie.name.includes("token")
    );
    console.log("Potential auth cookies:", authCookies);
  }

  if (!sessionCookie) {
    console.log("No session cookie found. Redirecting to login page.");
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"], // Specify the routes the middleware applies to, including all children routes
};
