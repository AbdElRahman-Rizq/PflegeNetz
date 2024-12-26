import React from "react";
import TitleWithLine from "../../shared/components/TitleWithLine.jsx";
import vectorImg from "/assets/images/vector.png";
import { useTranslation } from "react-i18next";

import { VscServerProcess } from "react-icons/vsc";
import { IoLanguage } from "react-icons/io5";
import { SiJoplin } from "react-icons/si";
import { MdMiscellaneousServices } from "react-icons/md";

const images = [
  {
    src: <VscServerProcess />,
  },
  {
    src: <IoLanguage />,
  },
  {
    src: <SiJoplin />,
  },
  {
    src: <MdMiscellaneousServices />,
  },
];

const WhatWeDo = () => {
  const { t } = useTranslation("applicant");

  return (
    <div className="bg-[#CCE8FF] p-8 animations">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-8">
          <TitleWithLine
            text={t("applicant.services_section.title")}
            vectorImg={vectorImg}
          />
          <p className="text-gray-600 mt-3 text-xs">
            {t("applicant.services_section.content")}
          </p>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-1 gap-10">
          {/* Image */}
          <div>
            <img
              src="/images/025248738706e4226156f345d3a76b6b.jpeg"
              alt="Building entrance"
              className="rounded-lg shadow-lg md:w-[500px] md:h-full w-full"
            />
          </div>

          {/* Key Services List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {t("applicant.services_section.key_services", {
              returnObjects: true,
            }).map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center sm:text-left"
              >
                {/* Dynamic Icon */}
                <div className="bg-[#00447C] text-white flex items-center justify-center text-3xl w-10 h-10 mb-4 rounded">
                  {images[index % images.length].src}
                </div>
                <h3 className="text-lg font-semibold text-center text-secondary-700 mb-2">
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
