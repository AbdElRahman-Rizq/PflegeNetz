import React from "react";
import { FaUserPlus, FaHandshake, FaTools, FaClock } from "react-icons/fa";
import companyImg from "../../../public/images/company.png";
import vectorImg from "/assets/images/vector2.png";

export const ServicesForInstitute = () => {
  return (
    <section className="bg-custom-100 py-10 px-4 lg:py-16 my-10">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-ledt my-8">
         


          <h2 className="lg:text-4xl font-semibold">
          Our Services for 
          <span className="relative ml-2">
          Medical Institutions
            <img 
              src={vectorImg}
              alt=""
              className="absolute w-[10.6em] h-[6px]"
              style={{
                bottom: '0',
                right: '0',
                transform: 'rotate(-0.43deg)',
              }}
            />
          </span>
        </h2>
          <p className="text-custom-600 mt-2 font-semibold">
            SA netz provides tailored solutions to address the staffing shortages in your
            organization. Our services include:
          </p>
        </div>


        {/* Image */}
        <div className="flex justify-center mb-10">
          <img
            src={companyImg}
            alt="Company Entrance"
            width={800}
            height={400}
            className="rounded-lg shadow-md"
          />
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 lg:grid-cols-4">
          {/* Card 1: Recruitment */}
          <div className="bg-white rounded-lg shadow-md py-5 px-3 xl:w-[90%] h-[100%] text-center">
            <div className="bg-custom-500 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
              <FaUserPlus className="text-white text-2xl" />
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Recruitment</h3>
            <p className="text-sm text-gray-600">
              Access to a global network of qualified professionals who meet your needs.
            </p>
          </div>

          {/* Card 2: Integration Management */}
          <div className="bg-white rounded-lg shadow-md py-5 px-3 xl:w-[90%] h-[100%] text-center">
            <div className="bg-custom-500 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
              <FaHandshake className="text-white text-2xl" />
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Integration Management</h3>
            <p className="text-sm text-gray-600">
              Supporting professionals with language, culture, and administrative processes
              for seamless integration.
            </p>
          </div>

          {/* Card 3: Tailor-made solutions */}
          <div className="bg-white rounded-lg shadow-md py-5 px-3 xl:w-[90%] h-[100%] text-center">
            <div className="bg-custom-500 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
              <FaTools className="text-white text-2xl" />
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Tailor-made solutions</h3>
            <p className="text-sm text-gray-600">
              Each placement is individually tailored to the needs of your facility.
            </p>
          </div>

          {/* Card 4: Long-term cooperation */}
          <div className="bg-white rounded-lg shadow-md py-5 px-3 xl:w-[90%] h-[100%] text-center">
            <div className="bg-custom-500 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
              <FaClock className="text-white text-2xl" />
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Long-term cooperation</h3>
            <p className="text-sm text-gray-600">
              We accompany you throughout the entire process — from selection to integration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
