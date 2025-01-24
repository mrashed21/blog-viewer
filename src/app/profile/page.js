import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { checkAuthentication } from "../lib/auth";

export default async function ProfilePage() {
  await checkAuthentication();
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-4 py-8 flex justify-center items-center min-h-screen ">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <div className="flex flex-col items-center">
            <img
              src={
                user.picture ||
                "https://i.ibb.co/BKsPZDR/Himalayan-Bliss-Trek.jpg"
              } // Fallback to default image
              alt={user.given_name || "User"}
              className="w-32 h-32 rounded-full object-cover border-4 border-blue-500"
            />
            <h1 className="mt-4 text-2xl font-semibold text-gray-800">
              Welcome, {user.given_name || "User"}!
            </h1>
          </div>
          <div className="mt-6">
            <h2 className="text-lg font-medium text-gray-700">
              User Information
            </h2>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li>
                <strong>Email:</strong> {user.email || "Not provided"}
              </li>
              <li>
                <strong>First Name:</strong> {user.given_name || "Not provided"}
              </li>
              <li>
                <strong>Last Name:</strong> {user.family_name || "Not provided"}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
