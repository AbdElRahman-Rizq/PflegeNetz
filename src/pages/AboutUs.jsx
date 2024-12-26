import React from "react";
import { useTranslation } from "react-i18next";
import OurMission from "../components/aboutUs/OurMission.jsx";
import OurTeam from "../components/aboutUs/OurTeam.jsx";
import Story from "../components/aboutUs/Story.jsx";
import VideoSection from "../components/aboutUs/VideoSection.jsx";
import Footer from "../components/shared/Footer.jsx";
import Navbar from "../components/shared/Navbar.jsx";
import BeforeFooter from "../shared/components/BeforeFooter.jsx";
import Heading from "../shared/components/HeadingTitle.jsx";

export default function AboutUs() {
  const { t } = useTranslation("about");

  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <Heading
        title={t("hero_section.title")}
        subtitle={t("hero_section.subtitle")}
      />

      {/* Our Mission Section */}
      <OurMission />

      {/* Our Story Section */}
      <Story />

      {/* Meet the Team Section */}
      <OurTeam />

      {/* Video Section */}
      <div className="mb-5 space-y-5">
        <Heading
          title={t("video_section.title")}
          subtitle={t("video_section.text")}
        />
        <VideoSection
          videoSrc="/images/doctor1.png"
          altText="SA Netz mission video"
          buttonText={t("video_section.button")}
        />
      </div>

      {/* CTA Section */}
      <BeforeFooter
        title={t("cta_section.title")}
        buttonText={t("cta_section.button")}
        buttonLink={"/contactUs"}
        imageSrc={"/images/Group 1000001049.png"}
      />

      <Footer />
    </>
  );
}
