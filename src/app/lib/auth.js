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

  if (!authenticated) {
    const url = new URL("/api/auth/login", req.url);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/protected-route/:path*", "/another-protected-path/:path*"], // Define your protected routes
};
