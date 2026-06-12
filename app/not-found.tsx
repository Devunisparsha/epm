import React from "react";
import Link from "next/link";
import { SearchX, Home } from "lucide-react";

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="bg-white p-8 sm:p-12 rounded-xl shadow-2xl text-center max-w-lg w-full transform transition-all duration-300 hover:scale-105">
        <SearchX
          className="w-24 h-24 text-blue-600 mx-auto mb-6 opacity-80"
          strokeWidth={1.5}
        />
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight">
          404
        </h1>
        <p className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4">
          Page Not Found
        </p>

        <Link
          href="/"
          className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-bold rounded-full shadow-lg text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 transition-all hover:-translate-y-1"
          aria-label="Go back to the church's home page"
        >
          <Home className="w-5 h-5 mr-3" />
          Return to Our Home
        </Link>
      </div>
      <footer className="mt-10 text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Devuni Sparsha. All rights reserved.
      </footer>
    </div>
  );
};

export default NotFoundPage;
