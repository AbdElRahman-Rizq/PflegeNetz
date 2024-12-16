import React from "react";
import TitleWithLine from "../../shared/components/TitleWithLine.jsx";
import vectorImg from "/assets/images/vector.png";
import ValuesList from "./ValueList.jsx";

export default function OurMission() {
  return (
    <>
      <section className="px-4 md:py-10 py-4 max-w-[1278px] mx-auto md:px-6 lg:px-8">
        <div className="flex justify-between  flex-col md:flex-row">
          {/* left side */}
          <div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl text-secondary-700 md:text-3xl lg:text-4xl font-bold">
                  Our
                </span>
                <TitleWithLine text={" Mission"} vectorImg={vectorImg} />
              </div>
              <h3 className="text-sm font-bold  text-[#3C4959] mt-2">
                Creating Sustainable Connections
              </h3>
              <p className="text-[#3C4959] mt-5 w-full md:w-[550px]">
                SA netz was founded with a clear vision: to bridge the gap
                between healthcare professionals and German medical
                institutions. We believe that global collaboration is the best
                solution to address the growing shortage of skilled
                professionals in Germany's healthcare sector."
              </p>
            </div>

            <div>
              <div className="flex mt-8 items-center gap-2">
                <span className="text-2xl text-secondary-700 md:text-3xl lg:text-4xl font-bold">
                  What We
                </span>
                <TitleWithLine text={" Stand For"} vectorImg={vectorImg} />
              </div>
              <ValuesList />
            </div>
          </div>
          {/* right side */}
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
