import TitleWithLine from "./TitleWithLine.jsx";
import vectorImg from "/assets/images/vector.png";

import React from "react";

const HeroSection = ({
  title = "Your Path To Germany's Healthcare Sector",
  subtitle = "SA netz supports you every step of the way – from recognition to integration.",
  buttonText = "Get Started Now",
  doctorName = "Dr. Shimanta",
  doctorTitle = "Skin Specialist",
  img = "/images/doctor3.png",
  onSchedule = () => {},
  onGetStarted = () => {},
}) => {
  return (
    <section className="relative  px-6  md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="text-center md:text-left md:w-1/2">
          <TitleWithLine text={title} vectorImg={vectorImg} />
          <p className="text-lg text-gray-600 mt-3 mb-8">{subtitle}</p>
          <button
            onClick={onGetStarted}
            className="bg-[#00447C] text-white py-3 px-6 rounded-lg hover:bg-[#00447ce7] focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            {buttonText}
          </button>
        </div>

        {/* Doctor Card */}
        <div className="relative  md:w-1/2 flex justify-center">
          <div className="relative z-10 hidden md:block">
            <img
              src={img} // Replace with an actual doctor image
              alt="Doctor"
              className="w-[400px] h-[400px] relative  "
            />
            <div className="absolute bottom-10 flex flex-col justify-center items-center right-[220px] transform -translate-x-1/2 bg-white rounded-xl shadow-md px-4 py-3 text-center">
              <img
                src={img}
                alt="Doctor profile"
                className="w-10 bg-white shadow-lg h-10 rounded-full"
              />
              <h4 className="font-semibold text-gray-800">{doctorName}</h4>
              <p className="text-sm text-gray-500">{doctorTitle}</p>
              <button
                onClick={onSchedule}
                className="mt-2 bg-[#00447C] text-white px-4 w-40 py-2 rounded-xl hover:bg-[#00447ce7] transition"
              >
                Make Schedule
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Background */}
      <div className="hidden md:block absolute bottom-0 right-0 bg-[#00447C] w-1/2 h-64 rounded-tl-full"></div>
    </section>
  );
};

export default HeroSection;
