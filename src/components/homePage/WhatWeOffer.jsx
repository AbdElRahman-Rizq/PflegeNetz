import React from "react";

// Import icon images
import globalNetworkIcon from "../../../public/images/captive-portal.png";
import tailoredSolutionsIcon from "../../../public/images/all-match(1).png";
import streamlinedProcessesIcon from "../../../public/images/arrow-upload-progress 1.png";
import { IoIosArrowDropright } from "react-icons/io";

export const WhatWeOffer = () => {
  return (
    <section className="bg-[#e6f5ff] py-10 px-4 lg:py-16 mb-5 mx-8">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
            What <span className="text-gray-900">SA netz</span> offers you
          </h2>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mx-2">
          {/* Card 1: Global Talent Network */}
          <div className="bg-white rounded-lg relative shadow-md p-6 text-center border border-gray-200">
            <div className="flex justify-center mb-4">
              <div className="bg-primary-950 rounded-full p-4">
                <img
                  src={globalNetworkIcon}
                  alt="Global Talent Network"
                  className="w-12 h-12"
                />
              </div>
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Global Talent Network</h3>
            <p className="text-gray-600 text-sm mb-4">
              Access to an international network of highly qualified healthcare professionals.
            </p>
            <a href="#" className="text-gray-800 align-end font-semibold text-sm underline inline-flex items-center">
              Our Services
              <svg
                className="ml-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
               <IoIosArrowDropright className="ml-1 w-4 h-4 text-lg mt-2" />
              </svg>
            </a>
          </div>

          {/* Card 2: Tailored Solutions */}
          <div className="bg-white rounded-lg relative shadow-md p-6 text-center border border-gray-200">
            <div className="flex justify-center mb-4">
              <div className="bg-primary-950 rounded-full p-4">
                <img
                  src={tailoredSolutionsIcon}
                  alt="Tailored Solutions"
                  className="w-12 h-12"
                />
              </div>
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Tailored Solutions</h3>
            <p className="text-gray-600 text-sm mb-4">
              Tailored approaches for institutions and professionals.
            </p>
            <a href="#" className="text-gray-800 align-end font-semibold text-sm underline inline-flex items-center">
              For Institutions
              <svg
                className="ml-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
               <IoIosArrowDropright className="ml-1 w-4 h-4 text-lg mt-2" />
              </svg>
            </a>
          </div>

          {/* Card 3: Streamlined Processes */}
          <div className="bg-white rounded-lg relative shadow-md p-6 text-center border border-gray-200">
            <div className="flex justify-center mb-4">
              <div className="bg-primary-950 rounded-full p-4">
                <img
                  src={streamlinedProcessesIcon}
                  alt="Streamlined Processes"
                  className="w-12 h-12"
                />
              </div>
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Streamlined Processes</h3>
            <p className="text-gray-600 text-sm mb-4">
              Streamlined processes for fast and sustainable results.
            </p>
            <a href="#" className="text-gray-800 align-end font-semibold text-sm underline inline-flex items-center">
              About Us
              <svg
                className="ml-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
               <IoIosArrowDropright className="ml-1 w-4 h-4 text-lg mt-2" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

