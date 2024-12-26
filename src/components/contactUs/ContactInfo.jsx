import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faClock, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

export const ContactInfo = () => {
  const { t } = useTranslation("contact");

  return (
    <div className="flex-1">
      <div className="bg-custom-blue rounded-lg">
        <div className="relative mb-8 p-[3px] overflow-hidden border border-blue-400 rounded-md shadow-md">
          <iframe
            title={t("contactPage.mapSection.title")}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.995697605345!2d-74.23800308459358!3d40.69457347933464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3ad7100b9b1ff%3A0x5bf8c0c59cf51b38!2s1441%20Morris%20Ave%2C%20Union%2C%20NJ%2007083!5e0!3m2!1sen!2sus!4v1693249342907!5m2!1sen!2sus"
            className="w-full h-[250px] border-none rounded-lg"
          ></iframe>
          <div className="absolute bottom-4 left-4 bg-white rounded-md p-4 shadow-lg w-80">
            <div className="flex items-center">
              <div className="w-12 h-12 mr-3 flex items-center justify-center bg-primary-700 rounded-full shadow-[0_0_10px_rgba(156,201,59,0.5)]">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-white text-xl" />
              </div>
              <div>
                <h4 className="font-semibold">{t("contactPage.directContactInformationSection.title")}</h4>
                <p className="text-sm text-gray-600">{t("contactPage.directContactInformationSection.content.address")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <div className="flex items-center gap-3 p-4 rounded-lg shadow-md">
          <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-primary-700 rounded-full shadow-[0_0_10px_rgba(156,201,59,0.5)]">
            <FontAwesomeIcon icon={faClock} className="text-white text-2xl" />
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold">{t("contactPage.officeHoursSection.title")}</h4>
            <p className="text-sm text-gray-600">{t("contactPage.officeHoursSection.content")}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-4 rounded-lg shadow-md">
          <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-primary-700 rounded-full shadow-[0_0_15px_rgba(156,201,59,0.5)]">
            <FontAwesomeIcon icon={faEnvelope} className="text-white text-2xl" />
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold">{t("contactPage.directContactInformationSection.title")}</h4>
            <p className="text-sm text-gray-600">{t("contactPage.directContactInformationSection.content.email")}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-4 rounded-lg shadow-md">
          <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-primary-700 rounded-full shadow-[0_0_10px_rgba(156,201,59,0.5)]">
            <FontAwesomeIcon icon={faPhone} className="text-white text-2xl" />
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold">{t("contactPage.directContactInformationSection.title")}</h4>
            <p className="text-sm text-gray-600">{t("contactPage.directContactInformationSection.content.phone")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
