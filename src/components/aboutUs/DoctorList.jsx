import React from "react";
import SharedButton from "../../shared/components/Button.jsx";

const doctors = [
  {
    name: "Dr. Brent",
    specialty: "General & Cosmetic Service",
    description:
      "Dr. Brent provides general and cosmetic dentistry services at Northern Heights Dental in Flagstaff, Arizona. He has extensive experience in general and cosmetic dentistry, including full restoration, implants, wisdom teeth extractions, Invisalign, and dentures. Dr. Brent and his younger sister grew up in Massachusetts with a mother who worked as a hygienist and a grandfather who was a general.",
    image: "/images/doctor1.png",
  },
  {
    name: "Dr. Ashish J. Vashi",
    specialty: "Implant Dentistry",
    description:
      "Dr. Brent provides general and cosmetic dentistry services at Northern Heights Dental in Flagstaff, Arizona. He has extensive experience in general and cosmetic dentistry, including full restoration, implants, wisdom teeth extractions, Invisalign, and dentures. Dr. Brent and his younger sister grew up in Massachusetts with a mother who worked as a hygienist and a grandfather who was a general.",
    image: "/images/doctor2.png",
  },
];

export default function DoctorsList() {
  return (
    <section className="px-6">
      <div className="md:max-w-4xl md:mx-auto">
        {doctors.map((doctor, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center gap-6 p-6 mb-8 "
          >
            {/* Doctor Image */}
            <div className="flex-shrink-0">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-full md:w-52 md:h-52 rounded-md object-cover"
              />
            </div>

            {/* Doctor Info */}
            <div>
              <h2 className="text-xl  font-bold text-gray-800">
                {doctor.name}{" "}
                <span className="text-gray-500 text-sm">
                  ( Specialty in {doctor.specialty} )
                </span>
              </h2>
              <p className="mt-5 text-gray-600 text-sm">{doctor.description}</p>
              <div className="mt-5">
                <SharedButton title="Contact us" href="/ContactUs" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
