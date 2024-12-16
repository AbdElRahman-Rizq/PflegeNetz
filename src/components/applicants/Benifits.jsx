import React from "react";
import Heading from "../../shared/components/HeadingTitle.jsx";
import BlueButton from "../../shared/components/BlueButton.jsx";

const Benefits = () => {
  return (
    <div className=" py-10 px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Image Section */}
        <div className="mb-8 flex justify-center">
          <div className="relative inline-block">
            <img
              src="/images/Frame 37012.png" // Replace with actual icon
              alt="Doctor"
              className="rounded-lg "
            />
          </div>
        </div>

        <Heading
          title={"Your Benefits with"}
          subtitle={
            "          We make your path to Germany`s healthcare system easier and more secure."
          }
        />

        {/* Benefits Section */}
        <div className=" text-left md:px-40 flex flex-col items-center space-y-3">
          <div className="w-full  ">
            {[
              {
                title: "Individual support",
                description: "Tailored solutions for your career goals.",
              },
              {
                title: "Global network",
                description:
                  "Access to renowned German healthcare institutions.",
              },
              {
                title: "Comprehensive assistance",
                description:
                  "From application to arrival – we are by your side.",
              },
            ].map((benefit, index) => (
              <div key={index} className="flex gap-4 p-4 ">
                <div className="w-6 h-6  rounded-full bg-gradient-to-t from-blue-900 to-blue-600  flex-shrink-0"></div>
                <div className="flex items-center text-center w-full">
                  <h3 className="font-semibold text-blue-900">
                    <span>{benefit.title}: </span>
                    <span className="text-black font-normal text-sm">
                      {benefit.description}
                    </span>
                  </h3>
                  {/* <p className="text-gray-600">{benefit.description}</p> */}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-8">
          <BlueButton title="Apply Now" href="" />
        </div>
      </div>
    </div>
  );
};

export default Benefits;
