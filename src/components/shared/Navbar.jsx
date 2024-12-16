import React, { useState } from "react";
import logo from "../../../public/assets/images/logo.png";
import { Link, useLocation } from "react-router-dom";
import SharedButton from "../../shared/components/Button";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="px-8">
      <nav className="bg-custom-50 py-5 mx-auto my-6 rounded-lg">
        <div className="container flex justify-between items-center px-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link to={"/"}>
              <img src={logo} alt="Logo" className="h-8 mr-2" />
            </Link>
          </div>

          {/* Hamburger Menu for Mobile */}
          <button
            className="md:hidden text-blue-900"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Links */}
          <ul
            className={`${
              menuOpen ? "block" : "hidden"
            } md:flex items-center md:space-x-6 text-blue-900 z-50 md:space-y-0 space-y-4 md:static absolute bg-custom-50 md:bg-transparent top-[100px] left-0 w-full md:w-auto md:py-0 py-4 px-10 md:px-0`}
          >
            {[
              { path: "/", label: "Home" },
              { path: "/about-us", label: "About" },
              { path: "/services", label: "Services" },
              { path: "/institution", label: "For Institution" },
              { path: "/applicants", label: "For Applicants" },
              { path: "/contactus", label: "Contact" },
            ].map(({ path, label }) => (
              <li key={path}>
                <Link
                  to={path}
                  className={`font-bold hover:text-primary-800 ${
                    isActive(path) ? "text-primary-800" : ""
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Button */}
          <SharedButton
            title="Book Now"
            href="/contactus"
            className="hidden md:block bg-primary-700 hover:bg-primary-800 text-white px-5 py-3 rounded-md transition-colors duration-300"
          />
        </div>
      </nav>
    </div>
  );
}
