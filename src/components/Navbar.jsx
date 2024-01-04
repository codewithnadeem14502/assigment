import React from "react";

const Navbar = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-800 text-white p-5 flex justify-center items-center  rounded-t-2xl">
      <div className="flex space-x-6">
        <a href="/" className="hover:text-gray-300">
          Home
        </a>
        <a href="/history" className="hover:text-gray-300">
          History
        </a>
        <a href="/catalog" className="hover:text-gray-300">
          Catalog
        </a>
        <a href="/menu" className="hover:text-gray-300">
          Menu
        </a>
      </div>
    </div>
  );
};

export default Navbar;
