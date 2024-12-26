import React from "react";
import { useTranslation } from "react-i18next";  // Import the hook
import Heading from "../shared/components/HeadingTitle.jsx";
import HealthcareProfessionals from "../components/services/HealthCare.jsx";
import MedicalInstitutions from "../components/services/MedicalInstitutions.jsx";
import WhyChooseSA from "../components/services/WhyChoseNetz.jsx";
import BeforeFooter from "../shared/components/BeforeFooter.jsx";
import Navbar from "../components/shared/Navbar.jsx";
import Footer from "../components/shared/Footer.jsx";

export default function Services() {
  const { t } = useTranslation("service"); // Using the translation hook

  return (
    <>
      <Navbar />
      <Heading
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
      />
      <HealthcareProfessionals />
      <MedicalInstitutions />
      <WhyChooseSA />

      <BeforeFooter
        title={t("exploreOpportunities.title")}
        description={t("exploreOpportunities.content")}
        buttonText={t("exploreOpportunities.ctaButton")}
        buttonLink={"/"}
        imageSrc={"/images/Group 1000001049.png"}
      />

      <Footer />
    </>
  );
}
