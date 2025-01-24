// import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
// import { redirect } from "next/navigation";

// export async function checkAuthentication() {
//   const { isAuthenticated } = getKindeServerSession();
//   const authenticated = await isAuthenticated();

//   if (!authenticated) {
//     redirect("/api/auth/login");
//   }

//   return authenticated;
// }
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const { isAuthenticated } = getKindeServerSession();
  const authenticated = await isAuthenticated();

  const publicRoutes = ["/", "/login", "/api/auth/login"]; // Define public routes here
  const pathname = req.nextUrl.pathname;

  // Allow public routes without authentication
  if (publicRoutes.includes(pathname)) {
    return NextResponse.next();
  }

  // Redirect to login if not authenticated
  if (!authenticated) {
    const loginUrl = new URL("/api/auth/login", req.url);
    return NextResponse.redirect(loginUrl);
  }

  // Allow request if authenticated
  return NextResponse.next();
}

// Apply middleware to all routes except public ones
export const config = {
  matcher: [
    "/((?!api/auth/login|login|$).*)", // Protect everything except the home page ("/") and "/login"
  ],
};
