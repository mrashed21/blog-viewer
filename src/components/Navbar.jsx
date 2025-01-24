import {
  LoginLink,
  LogoutLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";

export default async function Navbar() {
  const { isAuthenticated, getUser } = getKindeServerSession();
  const authenticated = await isAuthenticated();
  const user = await getUser();

  return (
    <header className="bg-gray-200  p-4">
      <nav className="flex justify-between items-center max-w-6xl mx-auto">
        <div className="flex space-x-4">
          <Link href="/" className="hover:text-red-400 font-bold text-xl">
            Blog Viewer
          </Link>
        </div>
        <div className="flex gap-5">
          <Link href="/" className="hover:text-red-400">
            Home
          </Link>
          {authenticated && (
            <Link href="/profile" className="hover:text-red-400">
              Profile
            </Link>
          )}
        </div>
        <div>
          {authenticated ? (
            <div className="flex items-center space-x-4">
              {/* <span>Welcome, {user.given_name}</span> */}
              <img
                src={
                  user.picture ||
                  "https://i.ibb.co.com/BKsPZDR/Himalayan-Bliss-Trek.jpg"
                } // Fallback to default image
                alt={user.first_name || "User"}
                className="w-8 h-8 rounded-full"
              />
              <LogoutLink className="bg-gray-900 text-white px-3 py-1 rounded">
                Logout
              </LogoutLink>
            </div>
          ) : (
            <div className="flex gap-5">
              <LoginLink className="bg-gray-900 text-white px-3 py-1 rounded">
                Login
              </LoginLink>
              <RegisterLink className="bg-gray-900 text-white px-3 py-1 rounded">
                Register
              </RegisterLink>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
