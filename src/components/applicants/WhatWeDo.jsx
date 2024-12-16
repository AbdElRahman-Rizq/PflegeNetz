import React from "react";
import TitleWithLine from "../../shared/components/TitleWithLine.jsx";
import vectorImg from "/assets/images/vector.png";
const WhatWeDo = () => {
  return (
    <div className="bg-[#CCE8FF] p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className=" mb-8">
          <TitleWithLine text={"What We Do For You?"} vectorImg={vectorImg} />
          <p className="text-gray-600 mt-3 text-xs">
            We provide comprehensive support to help you start your medical
            career in Germany
          </p>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-1 gap-10">
          {/* Image */}
          <div>
            <img
              src="/images/025248738706e4226156f345d3a76b6b.jpeg" // Replace this with the actual image URL
              alt="Building entrance"
              className="rounded-lg shadow-lg md:w-[500px] md:h-full w-full "
            />
          </div>

          {/* WhatWeDo List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                title: "Recognition of qualifications",
                description:
                  "We help you get your medical qualifications recognized.",
              },
              {
                title: "German language courses",
                description:
                  "Specialized language courses to perfect your professional terminology.",
              },
              {
                title: "Job placement",
                description:
                  "Access to attractive positions in hospitals, clinics, and care facilities.",
              },
              {
                title: "Relocation WhatWeDo",
                description:
                  "Support with visa applications, accommodation, and cultural integration.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center sm:text-left"
              >
                <div className="bg-[#00447C] w-10 h-10 mb-4 rounded"></div>
                <h3 className="text-lg font-semibold  text-center text-secondary-700 mb-2">
                  {service.title}
                </h3>
                <p className="text-secondary-700 text-sm text-center">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
