import React from "react";
import SharedButton from "../../shared/components/Button.jsx";
import TitleWithLine from "../../shared/components/TitleWithLine.jsx";
import { useTranslation } from "react-i18next";
import vectorImg from "/assets/images/vector.png";

const HealthcareProfessionals = () => {
  const { t } = useTranslation("service");

  return (
    <div className="flex justify-evenly items-center md:p-8 p-4 text-center md:text-left animations">
      {/* Text Section */}
      <div className="mb-8 lg:mb-0 lg:mr-8">
        <TitleWithLine
          vectorImg={vectorImg}
          text={t("imgInfo.forHealthcareProfessionals")}
        />
        <p className="text-gray-600 md:w-[450px] w-full my-6">
          {t("imgInfo.healthcareSupportDescription")}
        </p>
        <SharedButton title={t("imgInfo.forApplicants")} href="/" />
      </div>

      {/* Image Section */}
      <div className="relative hidden md:block">
        <img
          src="/images/97b4f13e82d6a129d7fabbcc35ef3a7a.jpeg"
          alt={t("imgInfo.healthcareSupportAlt")}
          className="rounded-3xl shadow-lg w-[400px] h-[300px]"
        />
        {/* Info Boxes */}
        <div className="absolute top-4 left-40 bg-[#E5F4FF] w-[350px] flex justify-between items-center gap-2 rounded-lg shadow-md">
          <img src="/images/Ellipse 2.svg" alt="" className="w-14 h-14" />
          <p className="text-xs text-secondary-700 font-bold">
            {t("imgInfo.recognitionSupport")}
          </p>
        </div>
        <div className="absolute top-20 right-40 w-[350px] flex justify-between items-center gap-2 bg-[#E5F4FF] rounded-lg shadow-md">
          <img src="/images/Ellipse 2.svg" alt="" className="w-14 h-14" />
          <p className="text-xs text-secondary-700 font-bold">
            {t("imgInfo.jobOffersSupport")}
          </p>
        </div>
        <div className="absolute top-36 left-32 w-[350px] flex justify-between items-center gap-2 bg-[#E5F4FF] rounded-lg shadow-md">
          <img src="/images/Ellipse 2.svg" alt="" className="w-14 h-14" />
          <p className="text-xs text-secondary-700 font-bold">
            {t("imgInfo.visaIntegrationSupport")}
          </p>
        </div>
        <div className="absolute top-52 right-40 w-[350px] flex justify-between items-center gap-2 bg-[#E5F4FF] rounded-lg shadow-md">
          <img src="/images/Ellipse 2.svg" alt="" className="w-14 h-14" />
          <p className="text-sm text-secondary-700 font-bold">
            {t("imgInfo.germanCoursesSupport")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HealthcareProfessionals;
