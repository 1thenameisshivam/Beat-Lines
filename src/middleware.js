import { NextResponse } from "next/server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

// Middleware function to handle authentication
export async function middleware(request) {
  // Get session and authentication status in one call
  const { isAuthenticated } = getKindeServerSession();
  const isUserAuthenticated = await isAuthenticated();

  // If the user is trying to access a protected route and is not authenticated
  if (
    request.nextUrl.pathname.startsWith("/dashboard") &&
    !isUserAuthenticated
  ) {
    // Redirect to the login page if not authenticated
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Allow the request to proceed if authenticated or not a protected route
  return NextResponse.next();
}

// Config to apply middleware on specific routes
export const config = {
  matcher: "/dashboard/:path*", // Match /dashboard and all subpaths
};
