import React from "react";
import { useTranslation } from "react-i18next";

// Import icon images
import starIcon from "/images/star.png";
import handsIcon from "/images/hands.png";
import paperIcon from "/images/paper.png";
import vectorImg from "/assets/images/vector2.png";

export const NumbersThatSpeak = () => {
  const { t } = useTranslation("home");

  return (
    <section className="px-4 py-8 hidden md:block animations">
      <div className="flex flex-col md:flex-row text-center justify-between gap-6">
        <div className="text-left lg:w-[40%] m-auto ">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-custom-600 mb-4 pr-10">
            <span className="relative ">
              {t("numbersThatSpeak.title")}
              <img
                src={vectorImg}
                alt=""
                className="absolute w-[214.43px] z-0 h-[9px] left-1/2 transform -translate-x-1/2 rotate-[-0.43deg] top-[25px] md:top-[40px]"
              />
            </span>
          </h2>
          <p className="text-sm line-clamp-6 font-body text-gray-600 mb-6 mt-2">
            {t("numbersThatSpeak.description")}
          </p>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-rows-2 gap-1 w-full md:w-1/3 mr-7">
          {/* Card 1: Satisfaction */}
          <div className="bg-white w-[80%] rounded-lg shadow-lg tex-sm py-6 text-center border border-gray-200 mb-5">
            <div className="flex justify-center mb-2 border-2 border-custom-150 bg-custom-150 rounded-full w-16 h-16 mx-auto pt-3">
              <img src={starIcon} alt="Satisfaction" className="w-10 h-10" />
            </div>
            <p className="text-secondary-600 text-2xl font-bold">4.9/5</p>
            <p className="text-secondary-500 text-sm">
              {t("numbersThatSpeak.satisfaction")}
            </p>
          </div>

          {/* Card 2: Partners Shift */}
          <div className="bg-white w-[80%] rounded-lg shadow-lg tex-sm py-6 text-center border border-gray-200 mt-5">
            <div className="flex justify-center mb-2 border-2 border-custom-400 bg-custom-400 rounded-full w-16 h-16 mx-auto pt-2">
              <img src={handsIcon} alt="Partners Shift" className="w-10 h-10" />
            </div>
            <p className="text-secondary-600 text-2xl font-bold">100+</p>
            <p className="text-secondary-500 text-sm">
              {t("numbersThatSpeak.partnersShift")}
            </p>
          </div>

          {/* Card 3: Success Rate */}
          <div className="bg-white w-[80%] rounded-lg shadow-lg tex-sm py-6 text-center border border-gray-200 mb-5">
            <div className="flex justify-center mb-2 border-2 border-custom-400 bg-custom-400 rounded-full w-16 h-16 mx-auto pt-2">
              <img src={paperIcon} alt="Success Rate" className="w-9 h-9" />
            </div>
            <p className="text-secondary-600 text-2xl font-bold">+98%</p>
            <p className="text-secondary-500 text-sm">
              {t("numbersThatSpeak.successRate")}
            </p>
          </div>

          {/* Card 4: Crafts */}
          <div className="bg-white w-[80%] rounded-lg shadow-lg tex-sm py-6 text-center border border-gray-200 mt-5">
            <div className="flex justify-center mb-2 border-2 border-custom-150 bg-custom-150 rounded-full w-16 h-16 mx-auto pt-2">
              <img src={paperIcon} alt="Crafts" className="w-9 h-9" />
            </div>
            <p className="text-secondary-600 text-2xl font-bold">+2000</p>
            <p className="text-secondary-500 text-sm">
              {t("numbersThatSpeak.crafts")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
