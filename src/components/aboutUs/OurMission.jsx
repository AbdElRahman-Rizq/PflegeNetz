import React from "react";
import { useTranslation } from "react-i18next";
import TitleWithLine from "../../shared/components/TitleWithLine.jsx";
import vectorImg from "/assets/images/vector.png";
import ValuesList from "./ValueList.jsx";

export default function OurMission() {
  const { t } = useTranslation("about");

  return (
    <>
      <section className="px-4 md:py-10 mt-5  py-4 max-w-[1278px] mx-auto md:px-6 lg:px-8 ">
        <div className="flex justify-between flex-col md:flex-row">
          {/* Left side */}
          <div>
            <div className="text-center sm:text-left">
              <div className="flex items-center gap-2  justify-center md:justify-normal">
                <span className="text-2xl text-secondary-700 md:text-3xl lg:text-4xl font-bold">
                  {t("mission_section.Ftitle")}
                </span>

                <TitleWithLine
                  text={t("mission_section.Stitle")}
                  vectorImg={vectorImg}
                />
              </div>
              <h3 className="text-sm font-bold text-center px-5 md:text-left  text-[#3C4959] mt-2">
                {t("mission_section.title")}
              </h3>
              <p className="text-[#3C4959] mt-5 w-full px-12 text-center md:text-left md:w-[550px]">
                {t("mission_section.content")}
              </p>
            </div>

            <div>
              <div className="flex mt-8 items-center gap-2  justify-center md:justify-normal">
                <span className="text-2xl text-secondary-700 md:text-3xl lg:text-4xl font-bold">
                  {t("values_section.Ftitle")}
                </span>
                <TitleWithLine
                  text={t("values_section.Stitle")}
                  vectorImg={vectorImg}
                />
              </div>
              <ValuesList />
            </div>
          </div>
          {/* Right side */}
          <div>
            <div className="flex justify-center items-center">
              <div className="relative">
                <img
                  src={"/images/4194abf9d56a42aee82293c69a8972be.jpeg"}
                  alt={"nursing"}
                  className="md:w-[400px]  md:h-[450px] rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
