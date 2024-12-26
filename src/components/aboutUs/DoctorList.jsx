import React from "react";
import { useTranslation } from "react-i18next";
import SharedButton from "../../shared/components/Button.jsx";

export default function DoctorsList() {
  const { t } = useTranslation("team_section"); // Assuming "team_section" namespace for translations
  const doctors = t("doctors", { returnObjects: true }); // Fetch array of doctors from translations

  return (
    <section className="px-6 animations">
      <div className="md:max-w-4xl md:mx-auto">
        {doctors.map((doctor, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center gap-6 p-6 mb-8"
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
              <h2 className="text-xl font-bold text-gray-800">
                {doctor.name}{" "}
                <span className="text-gray-500 text-sm">
                  ({t("specialty_label")} {doctor.specialty})
                </span>
              </h2>
              <p className="mt-5 text-gray-600 text-sm">{doctor.description}</p>
              <div className="mt-5">
                <SharedButton title={t("contact_button")} href="/ContactUs" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
