import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="sm:flex p-4 gap-6 justify-between sm:items-center">
        <div>
          <a href="/" className="flex items-center">
            <img src={logo} className="h-20 " to="/" alt="Logo" />
          </a>{" "}
        </div>{" "}
        <div className="block absolute top-10 left-10 sm:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex  items-center px-3 py-2 rounded hover:text-white"
          >
            <svg
              className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
            <svg
              className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            </svg>
          </button>
        </div>
        <div
          className={`w-full flex-grow justify-between lg:flex lg:items-left lg:w-auto ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="text-xl text-white flex gap-3 flex-col p-4 md:p-0 mt-4 sm:flex-row md:space-x-8 md:mt-0 md:border-0 ">
            <Link
              to="/characters"
              className="cursor-pointer hover:text-yellow-200"
            >
              Characters
            </Link>
            <Link
              to="/locations"
              className="cursor-pointer hover:text-yellow-200"
            >
              Locations
            </Link>
            <Link
              to="/episodes"
              className="cursor-pointer hover:text-yellow-200"
            >
              Episodes
            </Link>
          </ul>
        </div>
      </nav>
    </>
  );
}
