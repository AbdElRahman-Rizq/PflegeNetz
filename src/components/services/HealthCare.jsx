import React from "react";
import SharedButton from "../../shared/components/Button.jsx";
import TitleWithLine from "../../shared/components/TitleWithLine.jsx";
import vectorImg from "/assets/images/vector.png";
const HealthcareProfessionals = () => {
  return (
    <div className="flex  justify-evenly items-center md:p-8 p-4 text-center md:text-left ">
      {/* Text Section */}
      <div className=" mb-8 lg:mb-0 lg:mr-8">
        <TitleWithLine
          vectorImg={vectorImg}
          text={"For Healthcare Professionals"}
        />
        <p className="text-gray-600 md:w-[450px] w-full my-6">
          We support you on your journey to Germany's healthcare system – from
          the first application to successful integration.
        </p>
        <SharedButton title="For Applicants" href="/" />
      </div>

      {/* Image Section */}
      <div className="relative hidden md:block ">
        <img
          src="/images/97b4f13e82d6a129d7fabbcc35ef3a7a.jpeg"
          alt="Healthcare support"
          className="rounded-3xl  shadow-lg w-[400px] h-[300px] "
        />
        {/* Info Boxes */}
        <div className="absolute top-4 left-40 bg-[#E5F4FF] w-[350px] flex justify-between items-center gap-2  rounded-lg shadow-md">
          <img src="/images/Ellipse 2.svg" alt="" className="w-14 h-14" />
          <p className="text-xs text-secondary-700 font-bold">
            Support in the recognition of your medical qualifications.
          </p>
        </div>
        <div className="absolute top-20 right-40 w-[350px] flex justify-between items-center gap-2 bg-[#E5F4FF]  rounded-lg shadow-md">
          <img src="/images/Ellipse 2.svg" alt="" className="w-14 h-14" />
          <p className="text-xs text-secondary-700 font-bold">
            Access to attractive job offers in hospitals, clinics, and care
            facilities.
          </p>
        </div>
        <div className="absolute top-36 left-32 w-[350px] flex justify-between items-center gap-2 bg-[#E5F4FF]  rounded-lg shadow-md">
          <img src="/images/Ellipse 2.svg" alt="" className="w-14 h-14" />
          <p className="text-xs text-secondary-700 font-bold">
            Assistance with visa applications, accommodation, and cultural
            integration.
          </p>
        </div>
        <div className="absolute top-52 right-40 w-[350px] flex justify-between items-center gap-2 bg-[#E5F4FF] rounded-lg shadow-md">
          <img src="/images/Ellipse 2.svg" alt="" className="w-14 h-14" />
          <p className="text-sm text-secondary-700 font-bold">
            Specialized German courses for medical terms.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HealthcareProfessionals;
