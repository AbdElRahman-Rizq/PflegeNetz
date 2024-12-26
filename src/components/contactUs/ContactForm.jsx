import React from "react";
import SharedButton from "../../shared/components/Button.jsx";
import { useTranslation } from "react-i18next";

export const ContactForm = () => {
  const { t } = useTranslation("contact");

  return (
    <div className="bg-custom-blue rounded-lg p-[1.9px]">
      <div className="flex-1 bg-white p-6 rounded-lg border-blue-400 border h-full">
        <h2 className="text-lg font-bold mb-4">{t("contactPage.contactFormSection.title")}</h2>
        <form>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
    <div>
      <label
        className="block text-sm font-medium mb-2"
        htmlFor="firstName"
      >
        {t("contactPage.contactFormSection.fields.firstName")}
      </label>
      <input
        type="text"
        id="firstName"
        className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
        placeholder={t("contactPage.contactFormSection.placeholders.firstName")}
      />
    </div>
    <div>
      <label
        className="block text-sm font-medium mb-2"
        htmlFor="lastName"
      >
        {t("contactPage.contactFormSection.fields.lastName")}
      </label>
      <input
        type="text"
        id="lastName"
        className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
        placeholder={t("contactPage.contactFormSection.placeholders.lastName")}
      />
    </div>
  </div>
  <div className="mb-4">
    <label className="block text-sm font-medium mb-2" htmlFor="email">
      {t("contactPage.contactFormSection.fields.email")}
    </label>
    <input
      type="email"
      id="email"
      className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
      placeholder={t("contactPage.contactFormSection.placeholders.email")}
    />
  </div>
  <div className="mb-4">
    <label className="block text-sm font-medium mb-2" htmlFor="phone">
      {t("contactPage.contactFormSection.fields.phone")}
    </label>
    <input
      type="text"
      id="phone"
      className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
      placeholder="+1 (555) 000-0000"
    />
  </div>
  <div className="mb-4">
    <label className="block text-sm font-medium mb-2" htmlFor="subject">
      {t("contactPage.contactFormSection.fields.subject")}
    </label>
    <input
      type="text"
      id="subject"
      className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
      placeholder={t("contactPage.contactFormSection.placeholders.subject")}
    />
  </div>
  <div className="mb-4">
    <label className="block text-sm font-medium mb-2" htmlFor="message">
      Message
    </label>
    <textarea
      id="message"
      className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
      placeholder={t("contactPage.contactFormSection.placeholders.message")}
      rows="4"
    ></textarea>
  </div>
  <div className="flex justify-center items-center">
    <SharedButton title="Book an appointment" href="/" />
  </div>
</form>

      </div>
    </div>
  );
};
