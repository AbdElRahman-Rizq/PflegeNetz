import React from "react";
import TitleWithLine from "../../shared/components/TitleWithLine.jsx";
import vectorImg from "/assets/images/vector.png";
import BlueButton from "../../shared/components/BlueButton.jsx";

const HowItWorks = () => {
  return (
    <div className="md:p-8 p-4">
      {/* Title Section */}
      <div className="mb-10">
        <TitleWithLine text={"How It Works?"} vectorImg={vectorImg} />
      </div>

      {/* Steps Section */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-4 md:gap-2">
        {/* Step 1 */}
        <div className="relative w-full md:w-1/4 text-center h-52">
          <div className="absolute top-3 left-3">
            <div className="w-8 h-8 bg-[#66BAFF] text-white rounded-br-2xl flex items-center justify-center font-bold">
              1
            </div>
          </div>
          <div className="h-full flex flex-col justify-center items-center border-dashed p-6 border-l-4 border-t-4 border-secondary-500">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-[#00457C] text-white rounded-md flex items-center justify-center">
                ⚙️
              </div>
            </div>
            <h3 className="text-lg font-semibold text-[#00457C] mb-2">
              Initial consultation
            </h3>
            <p className="text-secondary-700 text-sm">
              We discuss your goals and review your qualifications
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="relative w-full md:w-1/4 text-center h-52">
          <div className="absolute bottom-3 left-3">
            <div className="w-8 h-8 bg-[#66BAFF] text-white rounded-tr-2xl flex items-center justify-center font-bold">
              2
            </div>
          </div>
          <div className="h-full flex flex-col justify-center items-center border-dashed p-6 border-b-4 border-l-4 border-secondary-500">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-[#00457C] text-white rounded-md flex items-center justify-center">
                ⚙️
              </div>
            </div>
            <h3 className="text-lg font-semibold text-[#00457C] mb-2">
              Application process
            </h3>
            <p className="text-secondary-700 text-sm">
              We assist you in preparing all the necessary documents.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="relative w-full md:w-1/4 text-center h-52">
          <div className="absolute top-3 left-3">
            <div className="w-8 h-8 bg-[#66BAFF] text-white rounded-br-2xl flex items-center justify-center font-bold">
              3
            </div>
          </div>
          <div className="h-full flex flex-col justify-center items-center border-dashed p-6 border-l-4 border-t-4 border-secondary-500">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-[#00457C] text-white rounded-md flex items-center justify-center">
                ⚙️
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Job placement
            </h3>
            <p className="text-gray-500 text-sm">
              You gain access to job opportunities that match your skills.
            </p>
          </div>
        </div>

        {/* Step 4 */}
        <div className="relative w-full md:w-1/4 text-center h-52">
          <div className="absolute bottom-3 left-3">
            <div className="w-8 h-8 bg-[#66BAFF] text-white rounded-tr-2xl flex items-center justify-center font-bold">
              4
            </div>
          </div>
          <div className="h-full flex flex-col justify-center items-center border-dashed p-6 border-l-4 border-b-4 border-secondary-500">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-[#00457C] text-white rounded-full flex items-center justify-center">
                ⚙️
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Integration
            </h3>
            <p className="text-gray-500 text-sm">
              We support you upon your arrival in Germany and assist with your
              integration.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="text-center mt-12">
        <BlueButton title="Get Started Now" href="/" />
      </div>
    </div>
  );
};

export default HowItWorks;
