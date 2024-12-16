import React from "react";

export default function Footer() {
  return (
    <div>
      <div className="bg-[#011632] text-white py-16 px-8 flex items-center justify-between">
        {/* Left Section */}
        <div className="max-w-md">
          <h2 className="text-4xl font-bold mb-2">Join Our Team</h2>
          <p className="text-lg">Loema</p>
          <button className="mt-6 flex items-center gap-2 bg-[#00457C] text-white py-2 px-4 rounded-md shadow hover:bg-[#00447ce2] transition">
            Apply
          </button>
        </div>

        {/* Right Section - Image Group */}
        <div className="flex  absolute right-0">
          <img
            src="/images/Group 1000001049.png"
            alt="Team Member 1"
            className=" relative w-[400px] bottom-2 z-0 hidden md:block  rounded-lg shadow"
          />
        </div>
      </div>
    </div>
  );
}
