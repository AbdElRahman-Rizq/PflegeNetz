import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "/images/logo.png";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const location = useLocation();
  const { t } = useTranslation('navbar');
  

  const isActive = (path) => location.pathname === path;

  return (
    <footer className="bg-white p-6 shadow-md mt-6 flex flex-col">
      {/* Footer Content */}
      <div className="container flex flex-col md:flex-row justify-between items-center">
        {/* Logo */}
        <img src={logo} alt="Logo" className="h-6 mb-4 md:mb-0" />

        {/* Navigation Links */}
        <ul className="flex flex-wrap justify-center space-x-4 md:space-x-6 text-custom-950 mb-4 md:mb-0">
          {[
            { path: "/", label: t('navbar.home') },
            { path: "/about-us", label: t('navbar.about') },
            { path: "/services", label: t('navbar.services') },
            { path: "/institution", label: t('navbar.forInstitution') },
            { path: "/applicants", label: t('navbar.forApplicants') },
            { path: "/contactus", label: t('navbar.contact') },

            { path: "/cookies", label: "Cookies" },
            { path: "/terms_conditions", label: "Terms & Conditions" },
            { path: "/privacy_policy", label: "Privacy & Policy" },
            { path: "/imprint", label: "Imprint" },
          ].map(({ path, label }) => (
            <li key={path}>
              <Link
                to={path}
                className={`hover:text-primary-800 font-bold ${
                  isActive(path) ? "text-primary-800" : ""
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Divider */}
      <div className="border-t border-2 border-custom-900 my-2"></div>

      {/* Footer Bottom */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-3 space-y-4 md:space-y-0">
        {/* Terms and Conditions */}
        <p className="text-sm text-custom-900 text-center md:text-left">
          All rights reserved © FutTech GmbH |{" "}
          <Link to="/terms" className="hover:underline">
            {t('footer.contactUs')}
          </Link>
        </p>

        {/* Social Media Icons */}
        <ul className="flex space-x-4">
          <a
            href="https://www.facebook.com"
            className="text-white hover:text-primary-700 border-2 border-primary-700 rounded-full bg-primary-700 hover:bg-white p-2"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com"
            className="text-white hover:text-primary-700 border-2 border-primary-700 rounded-full bg-primary-700 hover:bg-white p-2"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com"
            className="text-white hover:text-primary-700 border-2 border-primary-700 rounded-full bg-primary-700 hover:bg-white p-2"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://www.youtube.com"
            className="text-white hover:text-primary-700 border-2 border-primary-700 rounded-full bg-primary-700 hover:bg-white p-2"
          >
            <FaYoutube />
          </a>
          <a
            href="https://www.twitter.com"
            className="text-white hover:text-primary-700 border-2 border-primary-700 rounded-full bg-primary-700 hover:bg-white p-2"
          >
            <FaTwitter />
          </a>
        </ul>
      </div>
    </footer>
  );
}
