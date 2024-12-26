import React from "react";
import { FaUserPlus, FaHandshake, FaTools, FaClock } from "react-icons/fa";
import companyImg from "/images/company.png";
import vectorImg from "/assets/images/vector2.png";
import { useTranslation } from "react-i18next";

export const ServicesForInstitute = () => {
  const { t } = useTranslation("institution");

  return (
    <section className="bg-custom-100 py-10 px-10 lg:py-16 my-10 animations">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-left md:my-8 ">
          <h2 className="lg:text-4xl  text-center md:text-left font-semibold">
            {t("services_section.Ftitle")}
            <span className="relative ml-2">
              {t("services_section.title")}
              <img
                src={vectorImg}
                alt=""
                className="absolute w-[10.6em] h-[6px]"
                style={{
                  bottom: "0",
                  right: "0",
                  transform: "rotate(-0.43deg)",
                }}
              />
            </span>
          </h2>
          <p className="text-custom-600 mt-2 text-center md:text-left mb-4 md:mb-0 font-semibold">
            {t("services_section.content")}
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
            <h3 className="font-bold text-gray-800 mb-2">
              {t("services_section.key_services.0.title")}
            </h3>
            <p className="text-sm text-gray-600">
              {t("services_section.key_services.0.content")}
            </p>
          </div>

          {/* Card 2: Integration Management */}
          <div className="bg-white rounded-lg shadow-md py-5 px-3 xl:w-[90%] h-[100%] text-center">
            <div className="bg-custom-500 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
              <FaHandshake className="text-white text-2xl" />
            </div>
            <h3 className="font-bold text-gray-800 mb-2">
              {t("services_section.key_services.1.title")}
            </h3>
            <p className="text-sm text-gray-600">
              {t("services_section.key_services.1.content")}
            </p>
          </div>

          {/* Card 3: Tailor-made Solutions */}
          <div className="bg-white rounded-lg shadow-md py-5 px-3 xl:w-[90%] h-[100%] text-center">
            <div className="bg-custom-500 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
              <FaTools className="text-white text-2xl" />
            </div>
            <h3 className="font-bold text-gray-800 mb-2">
              {t("services_section.key_services.2.title")}
            </h3>
            <p className="text-sm text-gray-600">
              {t("services_section.key_services.2.content")}
            </p>
          </div>

          {/* Card 4: Long-term Cooperation */}
          <div className="bg-white rounded-lg shadow-md py-5 px-3 xl:w-[90%] h-[100%] text-center">
            <div className="bg-custom-500 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
              <FaClock className="text-white text-2xl" />
            </div>
            <h3 className="font-bold text-gray-800 mb-2">
              {t("services_section.key_services.3.title")}
            </h3>
            <p className="text-sm text-gray-600">
              {t("services_section.key_services.3.content")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
