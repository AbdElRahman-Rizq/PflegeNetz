import React from "react";
import SharedButton from "../../shared/components/Button.jsx";
import TitleWithLine from "../../shared/components/TitleWithLine.jsx";
import vectorImg from "/assets/images/vector.png";
const WhyChooseSA = () => {
  const points = [
    "Individual advice for professionals and institutions",
    "Fast access to qualified applicants",
    "Holistic approach: from mediation to integration",
    "Trusted partner with comprehensive industry knowledge.",
  ];

  const images = [
    "/images/doctor1.png", // Replace with your actual image paths
    "/images/doctor2.png",
  ];

  return (
    <div className="px-10 py-10 ">
      {/* Header Section */}
      <div className="text-left mb-8">
        <TitleWithLine text={"Why Choose SA netz?"} vectorImg={vectorImg} />
        <p className="text-secondary-700 md:w-[500px] mt-6">
          Whether you are a professional or an institution – our expertise,
          global network, and commitment to quality make the difference.
        </p>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-12">
        {/* Points Section */}
        <div className="flex flex-col gap-6">
          {points.map((point, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="bg-blue-900 rounded-full w-6 h-6 flex justify-center items-center">
                <span className="block w-6 h-6 bg-blue-900 rounded-full"></span>
              </div>
              <p className="text-gray-800">{point}</p>
            </div>
          ))}
          {/* Button Section */}
          <div className="text-left mt-8">
            <SharedButton href="/" title="Contact Us Now" />
          </div>
        </div>

        {/* Images Section */}
        <div className="grid grid-cols-2 gap-4">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Image ${index + 1}`}
              className="w-40 h-40 rounded-lg shadow-md"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseSA;
