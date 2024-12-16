import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import vectorImg from "/assets/images/vector.png";
import groupImage from "../../../public/images/Group2.png";

export const CallToAction = () => {
  return (
    <section className="py-10 px-4 lg:py-16 flex flex-col lg:flex-row w-full">
      <div className="w-full mx-8 flex flex-col lg:flex-row justify-between">
        {/* Text Section */}
        <div className="text-left lg:w-1/2 mb-6 mt-6 lg:mb-0 mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Take Action With 
           <br/>
            <span className="relative ">
            SA Netz
              
              <img
                src={vectorImg}
                alt=""
                className="absolute w-[210px] z-0 h-[7px] left-1/2 transform -translate-x-1/2 rotate-[0.4deg] bottom-[-10px] md:top-[35px]"
              />
            </span>
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Trust our expertise and start your journey with us.
          </p>
          <div className="flex flex-col sm:flex-row items-center w-[100%]">
            <div className="relative w-full sm:w-64">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaPhoneAlt className="text-gray-400" />
              </span>
              <input
                type="text"
                placeholder="Enter your phone number"
                className="input text-opacity-95 text-sm input-bordered border-[.7px] border-gray-300 rounded-lg border-r-0 w-full pl-10 pr-3 p-3"
              />
            </div>
            <button className="btn bg-primary-950 text-white px-4 py-3 border-[.7px] rounded-r-md border-l-current text-sm m-[-9px] z-10">

              Contact Now
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="">
          <img src={groupImage} alt="Group Image" width={"90%"}/>
        </div>
      </div>
    </section>
  );
};
