import React from "react";
import vectorImg from "/assets/images/vector.png";
import TitleWithLine from "../../shared/components/TitleWithLine.jsx";
import DoctorsList from "./DoctorList.jsx";

export default function OurTeam() {
  return (
    <>
      <section className="px-4 md:py-10 py-4 max-w-[1278px] mx-auto md:px-6 lg:px-8  ">
        <div className="bg-[#E6F6FE] ">
          <div className="flex items-center p-5 flex-col justify-center text-secondary-700">
            <TitleWithLine text={"Meet Our Team"} vectorImg={vectorImg} />
            <p className="md:w-[400px] text-gray-600 md:mt-4 w-full text-center ">
              A team of experienced professionals in healthcare, recruitment,
              and international relations dedicated to delivering the best
              solutions for our partners
            </p>
          </div>

          <DoctorsList />
        </div>
      </section>
    </>
  );
}
