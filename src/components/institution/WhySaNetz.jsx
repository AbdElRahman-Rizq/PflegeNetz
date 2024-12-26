import React, { useEffect, useState } from "react";
import doctor2Img from "/images/Frame_doctor.png";
import ellipse1Img from "/images/Frame_plus.png";
import ellipse2Svg from "/images/first-half_vector.png";
import vectorImg from "/assets/images/vector.png";
import { useTranslation } from "react-i18next";

const WhySaNetz = () => {
  const { t } = useTranslation("institution");

  const [height, setHeight] = useState("80vh");

  useEffect(() => {
    const updateHeight = () => {
      if (window.innerWidth < 768) {
        // Mobile screen
        setHeight("70vh");
      } else {
        // Laptop/PC screen
        setHeight("80vh");
      }
    };

    // Initial check
    updateHeight();

    // Add resize listener
    window.addEventListener("resize", updateHeight);

    // Cleanup listener on unmount
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <section
      style={{
        display: "block",
        paddingTop: "7%",
        width: "99%",
        height: height,
        backgroundImage: `url(${ellipse2Svg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col md:flex-row items-center gap-8 justify-between px-10 overflow-hidden animations">
        <div className="flex flex-col items-start w-full">
          <h1 className="text-5xl font-semibold text-center md:text-left text-custom-900">
            {t("why_work_with_us.title")}
            <span className="relative ml-2">
              <img
                src={vectorImg}
                alt=""
                className="absolute w-[5.6em] h-[8px]"
                style={{
                  bottom: "0",
                  right: "0",
                  transform: "rotate(-0.43deg)",
                }}
              />
            </span>
          </h1>
          <p className="mt-5 text-gray-600 text-center md:text-left xl:w-[33em] pb-2">
            {t("why_work_with_us.content")}
          </p>
          <ul className="mt-5 text-gray-600 xl:w-[40em] flex flex-col justify-center pl-2 list-disc list-inside">
            {t("why_work_with_us.points", { returnObjects: true }).map(
              (point, index) => (
                <li
                  key={index}
                  className="mb-2 flex flex-col md:flex-row text-center md:text-left items-center"
                >
                  <img
                    src={ellipse1Img}
                    alt="Ellipse 1"
                    className="xl:w-5 h-5 mr-2"
                  />
                  <span className="block xl:inline-block md:text-left font-semibold xl:text-lg mx-2">
                    {point.title}:
                  </span>
                  {point.content}
                </li>
              )
            )}
          </ul>
        </div>
        <div className="relative hidden md:block pt-2 md:mt-0 pr-10 mr-4">
          <img
            src={doctor2Img}
            alt="Doctor"
            style={{ zIndex: 100 }}
            className="w-[25em] mt-5"
          />
          <img
            src={ellipse1Img}
            alt="Ellipse 1"
            style={{ zIndex: 10 }}
            className="absolute bottom-1 right-7 w-1/3"
          />
          <img
            src={ellipse2Svg}
            alt="Ellipse 2"
            style={{ zIndex: 0 }}
            className="absolute top-[-1.2em] left-1/3 transform -translate-x-1/2 w-1/4"
          />
        </div>
      </div>
    </section>
  );
};

export default WhySaNetz;
