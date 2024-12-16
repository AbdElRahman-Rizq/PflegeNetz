import React from "react";

export default function BeforeFooter({
  title,
  description,
  buttonText,
  buttonLink,
  imageSrc,
}) {
  return (
    <div>
      <div className="bg-[#011632] text-white py-16 px-8 flex items-center justify-between">
        {/* Left Section */}
        <div className="max-w-md">
          <h2 className="text-4xl font-bold mb-2">{title}</h2>
          <p className="text-sm text-secondary-400">{description}</p>
          <a
            href={buttonLink}
            className="mt-6 flex items-center w-fit gap-2 bg-[#00457C] text-white py-2 px-4 rounded-md shadow hover:bg-[#00447ce2] transition"
          >
            {buttonText}
          </a>
        </div>

        {/* Right Section - Image Group */}
        <div className="flex absolute right-0">
          <img
            src={imageSrc}
            alt="Footer Illustration"
            className="relative w-[400px] bottom-[14px] z-0 hidden md:block rounded-lg shadow"
          />
        </div>
      </div>
    </div>
  );
}
