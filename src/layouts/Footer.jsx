import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-yellow-200 shadow dark:bg-gray-900">
      <div className="w-full mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="/" className="flex items-center mb-4 sm:mb-0">
            <img src={logo} className="h-20 mr-3" alt="Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap"></span>
          </a>
          <ul className="flex flex-wrap gap-8 items-center mb-6 text-xl font-medium text-teal-950 sm:mb-0 ">
            <Link to="/characters">Characters</Link>
            <Link to="/locations">Locations</Link>
            <Link to="/episodes">Episodes</Link>
          </ul>
        </div>
        <hr className="my-6 border-teal-950 sm:mx-auto" />
        <span className="block text-sm text-black sm:text-center">
          © 2023 <a href="/" className="hover:underline"></a>. All Rights
          Reserved.
        </span>
      </div>
    </footer>
  );
}
