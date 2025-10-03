// "use client";
// import { useAuth } from "@/context/auth-context";
// import Link from "next/link";

// export default function Navbar() {
//   const { signOut, user } = useAuth();
//   return (
//     <nav className="relative z-50 bg-slate-900 border-b border-gray-200/50 dark:border-gray-700/50">
//       <div className="container mx-auto px-6">
//         <div className="flex items-center justify-between h-16">
//           <Link href="/" className="flex items-center space-x-3">
//             <span className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-200 bg-clip-text text-transparent">
//               StreamMatch
//             </span>
//           </Link>

//           {/* Only show navigation links if user is authenticated */}
//           {user && (
//             <div className=" md:flex items-center space-x-8">
//               <Link
//                 href="/matches"
//                 className="text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 font-medium transition-colors duration-200"
//               >
//                 Discover
//               </Link>
//               <Link
//                 href="/matches/list"
//                 className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-200"
//               >
//                 Matches
//               </Link>
//               <Link
//                 href="/chat"
//                 className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 font-medium transition-colors duration-200"
//               >
//                 Messages
//               </Link>
//               <Link
//                 href="/profile"
//                 className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium transition-colors duration-200"
//               >
//                 Profile
//               </Link>
//             </div>
//           )}

//           {user ? (
//             <button
//               onClick={signOut}
//               className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white text-sm font-medium rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-200 shadow-md hover:shadow-lg"
//             >
//               <svg
//                 className="w-4 h-4 mr-1"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
//                 />
//               </svg>
//               Sign Out
//             </button>
//           ) : (
//             <Link
//               href="/auth"
//               className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-pink-500 to-red-500 text-white text-sm font-medium rounded-lg hover:from-pink-600 hover:to-red-600 transition-all duration-200 shadow-md hover:shadow-lg"
//             >
//               Sign In
//             </Link>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// }







// "use client";
// import { useAuth } from "@/context/auth-context";
// import Link from "next/link";

// export default function Navbar() {
//   const { signOut, user } = useAuth();
//   return (
//     <nav className="relative z-50 bg-slate-900 border-b border-gray-200/50 dark:border-gray-700/50">
//       <div className="container mx-auto px-6">
//         <div className="flex flex-col md:flex-row md:items-center md:justify-between py-4 md:py-0">
//           <Link href="/" className="flex items-center space-x-3 mb-4 md:mb-0">
//             <span className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-200 bg-clip-text text-transparent">
//               StreamMatch
//             </span>
//           </Link>

//           {/* Only show navigation links if user is authenticated */}
//           {user && (
//             <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 mb-4 md:mb-0">
//               <Link
//                 href="/matches"
//                 className="text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 font-medium transition-colors duration-200"
//               >
//                 Discover
//               </Link>
//               <Link
//                 href="/matches/list"
//                 className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-200"
//               >
//                 Matches
//               </Link>
//               <Link
//                 href="/chat"
//                 className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 font-medium transition-colors duration-200"
//               >
//                 Messages
//               </Link>
//               <Link
//                 href="/profile"
//                 className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium transition-colors duration-200"
//               >
//                 Profile
//               </Link>
//             </div>
//           )}

//           {user ? (
//             <button
//               onClick={signOut}
//               className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white text-sm font-medium rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-200 shadow-md hover:shadow-lg"
//             >
//               <svg
//                 className="w-4 h-4 mr-1"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
//                 />
//               </svg>
//               Sign Out
//             </button>
//           ) : (
//             <Link
//               href="/auth"
//               className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-pink-500 to-red-500 text-white text-sm font-medium rounded-lg hover:from-pink-600 hover:to-red-600 transition-all duration-200 shadow-md hover:shadow-lg"
//             >
//               Sign In
//             </Link>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// }










"use client";
import { useAuth } from "@/context/auth-context";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react"; // hamburger and X icons
import LanguageDropdown from "./language";

export default function Navbar() {
  const { signOut, user } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  

  return (
    <nav className="relative z-50 bg-slate-900 border-b border-gray-200/50 dark:border-gray-700/50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <span className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-200 bg-clip-text text-transparent">
              StreamMatch
            </span>
          </Link>

          {/* Mobile Menu Button */}
          {user && (
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-300 hover:bg-gray-800 transition"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          )}

          {/* Desktop Links */}
          {user && (
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/matches"
                className="text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 font-medium transition-colors duration-200"
              >
                Discover
              </Link>
              <Link
                href="/matches/list"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-200"
              >
                Matches
              </Link>
              <Link
                href="/chat"
                className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 font-medium transition-colors duration-200"
              >
                Messages
              </Link>
              <Link
                href="/profile"
                className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium transition-colors duration-200"
              >
                Profile
              </Link>
            </div>
          )}

          {/* Auth Button */}
          {user ? (
            <button
              onClick={signOut}
              className="hidden md:inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white text-sm font-medium rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <svg
                className="w-4 h-4 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
              Sign Out
            </button>
          ) : (
            <Link
              href="/auth"
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-pink-500 to-red-500 text-white text-sm font-medium rounded-lg hover:from-pink-600 hover:to-red-600 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Sign In
            </Link>
          )}
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && user && (
          <div className="flex flex-col mt-2 space-y-2 md:hidden">
            <Link
              href="/matches"
              className="px-4 py-2 rounded-lg text-gray-300 hover:bg-gray-800 transition"
              onClick={() => setMenuOpen(false)}
            >
              Discover
            </Link>
            <Link
              href="/matches/list"
              className="px-4 py-2 rounded-lg text-gray-300 hover:bg-gray-800 transition"
              onClick={() => setMenuOpen(false)}
            >
              Matches
            </Link>
            <Link
              href="/chat"
              className="px-4 py-2 rounded-lg text-gray-300 hover:bg-gray-800 transition"
              onClick={() => setMenuOpen(false)}
            >
              Messages
            </Link>
            <Link
              href="/profile"
              className="px-4 py-2 rounded-lg text-gray-300 hover:bg-gray-800 transition"
              onClick={() => setMenuOpen(false)}
            >
              Profile
            </Link>
            <button
              onClick={() => {
                signOut();
                setMenuOpen(false);
              }}
              className="px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg hover:from-red-600 hover:to-red-700 transition"
            >
              Sign Out
            </button>
          </div>
          
        )}

      </div>

      {/* <LanguageDropdown/> */}
    </nav>
  );
}
