import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo or Brand Name */}
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-2xl font-bold text-white">
              Blog Viewer
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-6">
            <Link href="/" className="hover:text-white transition">
              Home
            </Link>
            <Link href="/about" className="hover:text-white transition">
              About
            </Link>
            <Link href="/contact" className="hover:text-white transition">
              Contact
            </Link>
            <Link href="/privacy" className="hover:text-white transition">
              Privacy Policy
            </Link>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
              aria-label="Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22 12c0-5.522-4.478-10-10-10S2 6.478 2 12c0 5.006 3.675 9.128 8.438 9.877v-6.987H7.898v-2.89h2.54V9.678c0-2.507 1.492-3.89 3.773-3.89 1.094 0 2.238.195 2.238.195v2.463h-1.26c-1.242 0-1.63.774-1.63 1.562v1.878h2.773l-.443 2.89h-2.33V22C18.326 21.128 22 17.006 22 12z" />
              </svg>
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
              aria-label="Twitter"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.48 4.48 0 0 0 1.96-2.48 8.93 8.93 0 0 1-2.83 1.08 4.48 4.48 0 0 0-7.64 4.09A12.72 12.72 0 0 1 3.16 4.6a4.47 4.47 0 0 0 1.39 5.98c-.66-.02-1.28-.2-1.82-.5v.05a4.49 4.49 0 0 0 3.59 4.4 4.5 4.5 0 0 1-2.03.08 4.48 4.48 0 0 0 4.18 3.1A9 9 0 0 1 2 18.58a12.7 12.7 0 0 0 6.88 2.02c8.26 0 12.78-6.84 12.78-12.78l-.01-.58a9.15 9.15 0 0 0 2.26-2.34z" />
              </svg>
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
              aria-label="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.16c3.204 0 3.584.012 4.847.07 1.366.062 2.633.315 3.608 1.29.974.975 1.228 2.242 1.29 3.608.058 1.263.07 1.642.07 4.847 0 3.204-.012 3.584-.07 4.847-.062 1.366-.316 2.633-1.29 3.608-.975.974-2.242 1.227-3.608 1.29-1.263.058-1.642.07-4.847.07-3.204 0-3.584-.012-4.847-.07-1.366-.062-2.633-.316-3.608-1.29-.974-.975-1.228-2.242-1.29-3.608C2.172 15.584 2.16 15.204 2.16 12c0-3.204.012-3.584.07-4.847.062-1.366.316-2.633 1.29-3.608.975-.974 2.242-1.227 3.608-1.29C8.416 2.172 8.796 2.16 12 2.16m0-2.16C8.736 0 8.332.013 7.052.072 5.731.133 4.556.463 3.604 1.416 2.65 2.37 2.32 3.544 2.258 4.865.013 8.332 0 8.736 0 12c0 3.264.013 3.668.072 4.948.06 1.321.391 2.496 1.344 3.448.953.953 2.128 1.283 3.448 1.344C8.332 23.987 8.736 24 12 24c3.264 0 3.668-.013 4.948-.072 1.321-.06 2.496-.391 3.448-1.344.953-.953 1.283-2.128 1.344-3.448.059-1.28.072-1.684.072-4.948 0-3.264-.013-3.668-.072-4.948-.06-1.321-.391-2.496-1.344-3.448-.953-.953-2.128-1.283-3.448-1.344C15.668.013 15.264 0 12 0z" />
                <circle cx="12" cy="12" r="3.6" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-6 pt-6 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Blog Viewer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
