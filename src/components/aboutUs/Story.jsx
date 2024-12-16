import React from "react";
import TitleWithLine from "../../shared/components/TitleWithLine.jsx";
import vectorImg from "/assets/images/vector.png";

export default function Story() {
  return (
    <>
      <section className="px-4 py-10 md:max-w-[1278px] mx-auto md:px-6 lg:px-8">
        <div className="flex justify-around items-center">
          <div>
            <img
              src="/images/65546916b942345607c0b40ed85efb07.jpeg"
              alt="Doctor and nursing team"
              className="rounded-md md:w-[404px] hidden md:block md:h-[302px] object-cover"
            />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xl text-secondary-700 md:text-3xl lg:text-4xl font-bold">
                The
              </span>
              <TitleWithLine text={" Story"} vectorImg={vectorImg} />
              <span className="text-2xl text-secondary-700 md:text-3xl lg:text-4xl font-bold">
                Behind SA netz
              </span>
            </div>{" "}
            <p className="md:w-[500px] mt-4 text-secondary-700">
              Our journey began with a simple idea: to help the German
              healthcare system find the best talents worldwide. With experience
              in international healthcare and a deep understanding of the needs
              of German institutions, we have created a platform that combines
              trust and efficiency."
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
