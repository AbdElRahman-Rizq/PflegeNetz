import React from "react";
import { useTranslation } from "react-i18next";

// Import icon images
import { IoIosArrowDropright } from "react-icons/io";
import { GiMeshNetwork } from "react-icons/gi";
import { IoMedical } from "react-icons/io5";
import { VscServerProcess } from "react-icons/vsc";

export const WhatWeOffer = () => {
  const { t } = useTranslation("home");

  return (
    <section className="bg-[#e6f5ff] py-10 px-4 lg:py-16 mb-5 mx-8 md:animations">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
            {t("whatWeOffer.title")}
            <span className="text-gray-900"> SA netz</span> offers you
          </h2>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mx-2">
          {/* Card 1: Global Talent Network */}
          <div className="bg-white rounded-lg relative shadow-md p-6 text-center border border-gray-200">
            <div className="flex justify-center mb-4">
              <div className="bg-primary-950 text-white text-4xl  rounded-full p-4">
                <GiMeshNetwork />
              </div>
            </div>
            <h3 className="font-bold text-gray-800 mb-2">
              {t("whatWeOffer.services.0.title")}
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              {t("whatWeOffer.services.0.description")}
            </p>
            <a
              href="/services"
              className="text-gray-800 align-end font-semibold text-sm underline inline-flex items-center"
            >
              {t("whatWeOffer.services.0.link")}
              <IoIosArrowDropright className="ml-1 w-4 h-4 text-lg " />
            </a>
          </div>

          {/* Card 2: Tailored Solutions */}
          <div className="bg-white rounded-lg relative shadow-md p-6 text-center border border-gray-200">
            <div className="flex justify-center mb-4">
              <div className="bg-primary-950 text-4xl text-white rounded-full p-4">
                <IoMedical />
              </div>
            </div>
            <h3 className="font-bold text-gray-800 mb-2">
              {t("whatWeOffer.services.1.title")}
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              {t("whatWeOffer.services.1.description")}
            </p>
            <a
              href="/institutions"
              className="text-gray-800 align-end font-semibold text-sm underline inline-flex items-center"
            >
              {t("whatWeOffer.services.1.link")}
              <IoIosArrowDropright className="ml-1 w-4 h-4 text-lg " />
            </a>
          </div>

          {/* Card 3: Streamlined Processes */}
          <div className="bg-white rounded-lg relative shadow-md p-6 text-center border border-gray-200">
            <div className="flex justify-center mb-4">
              <div className="bg-primary-950 text-4xl text-white rounded-full p-4">
                <VscServerProcess />
              </div>
            </div>
            <h3 className="font-bold text-gray-800 mb-2">
              {t("whatWeOffer.services.2.title")}
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              {t("whatWeOffer.services.2.description")}
            </p>
            <a
              href="/about-us"
              className="text-gray-800 align-end font-semibold text-sm underline inline-flex items-center"
            >
              {t("whatWeOffer.services.2.link")}

              <IoIosArrowDropright className="ml-1 w-4 h-4 text-lg " />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
