import React from "react";
import { useTranslation } from "react-i18next";  // Import the hook
import SharedButton from "../../shared/components/Button.jsx";
import TitleWithLine from "../../shared/components/TitleWithLine.jsx";
import vectorImg from "/assets/images/vector.png";

// Reusable InfoBox Component
const InfoBox = ({ icon, title, description }) => {
  return (
    <div className="flex items-center flex-col text-center gap-4 animations">
      <div className="bg-[#00457C] text-white p-2 rounded-md">
        <span className="text-xl">{icon}</span>
      </div>
      <div className="w-[250px]">
        <h3 className="font-bold text-secondary-700">{title}</h3>
        <p className="text-secondary-700 text-sm">{description}</p>
      </div>
    </div>
  );
};

const MedicalInstitutions = () => {
  const { t } = useTranslation("service"); // Using the translation hook

  const infoBoxes = [
    {
      icon: "📩",
      title: t("medicalInstitutions.keyServices.0"),  // Translated title
      description: t("medicalInstitutions.keyServices.1"),  // Translated description
    },
    {
      icon: "✅",
      title: t("medicalInstitutions.keyServices.2"),
      description: t("medicalInstitutions.keyServices.3"),
    },
    {
      icon: "⚙️",
      title: t("medicalInstitutions.keyServices.4"),
      description: t("medicalInstitutions.keyServices.5"),
    },
    {
      icon: "👥",
      title: t("medicalInstitutions.keyServices.6"),
      description: t("medicalInstitutions.keyServices.7"),
    },
  ];

  return (
    <div className="px-10 md:py-10 py-4 animations">
      <div className="bg-blue-50 relative z-0 p-10">
        {/* Header Section */}
        <div className="text-center md:text-left md:ms-12 mb-12">
          <TitleWithLine text={t("medicalInstitutions.title")} vectorImg={vectorImg} />
          <p className="text-secondary-700 md:w-[600px] w-full  md:mt-4">
            {t("medicalInstitutions.content")}
          </p>
        </div>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-8">
          {/* Left Info Boxes */}
          <div className="flex flex-col gap-6">
            {infoBoxes.slice(0, 2).map((box, index) => (
              <InfoBox
                key={index}
                icon={box.icon}
                title={box.title}
                description={box.description}
              />
            ))}
          </div>

          {/* Image Section */}
          <div>
            <img
              src="/images/1a435717888959d2d1915158bee1a377.png"
              alt={t("imgInfo.healthcareSupportAlt")}
              className="rounded-lg shadow-lg hidden md:block w-[300px] h-[400px]"
            />
          </div>

          {/* Right Info Boxes */}
          <div className="flex flex-col gap-6">
            {infoBoxes.slice(2).map((box, index) => (
              <InfoBox
                key={index}
                icon={box.icon}
                title={box.title}
                description={box.description}
              />
            ))}
          </div>
        </div>

        {/* Button */}
        <div className="text-center mt-12">
          <SharedButton href="/" title={t("medicalInstitutions.ctaButton")} />
        </div>
      </div>
    </div>
  );
};

export default MedicalInstitutions;
