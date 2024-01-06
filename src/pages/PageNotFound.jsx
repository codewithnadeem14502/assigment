// PageNotFound.js
import React from "react";
import { Link } from "react-router-dom";
const PageNotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-blue-900 text-white p-3">
      <div className="text-center">
        <h1 className="text-5xl font-extrabold mb-4">Oops! Page Not Found</h1>
        <p className="text-lg mb-8">
          The page you are looking for might be in another vault.
        </p>
        <Link
          to="/"
          className="bg-white text-blue-500 px-6 py-3 rounded-full hover:bg-blue-100 transition duration-300"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
