import React from "react";
import Navbar from "../components/shared/Navbar.jsx";
import Footer from "../components/shared/Footer.jsx";
import HeroSection from "../shared/components/HeroSection.jsx";
import WhatWeDo from "../components/applicants/WhatWeDo.jsx";
import Benefits from "../components/applicants/Benifits.jsx";
import Testimonials from "../components/applicants/Testimonials.jsx";
import { FAQAccordion } from "../shared/components/FAQsAccordion.jsx";
import BeforeFooter from "../shared/components/BeforeFooter.jsx";
import HowItWorks from "../components/applicants/HowItWorks.jsx";

export default function Applicants() {
  const handleGetStarted = () => {
    console.log("Get Started button clicked!");
  };

  const handleMakeSchedule = () => {
    console.log("Make Schedule button clicked!");
  };

  const testimonials = [
    {
      image: "testimonial1",
      name: "Hospital Director",
      location: "Stuttgart",
      subtitle:
        "SA netz is the key to our success. Their expertise and dedication helped us attract the best professionals",
    },
    {
      image: "testimonial2",
      name: "Rajesh",
      location: "Doctor from India",
      subtitle:
        "Thanks to SA netz, I was able to achieve my dream of working in Germany. Their support was unmatched.",
    },
    {
      image: "testimonial3",
      name: "CEO",
      location: "Frankfurt",
      subtitle:
        "Working with SA netz was one of the best decisions we've made. Their professionalism is impressive.",
    },
  ];

  const faqs = [
    {
      question: "How can I apply for a position?",
      answer: [
        "You can apply directly through our website by filling out the application form.",
        "Make sure to attach all the required documents to avoid delays.",
      ],
    },
    {
      question: "What support does SA netz offer during relocation?",
      answer: [
        "We assist with visa applications, finding accommodation, and providing local guidance.",
        "Our team ensures a smooth relocation process for all applicants.",
      ],
    },
    {
      question: "Is there a cost for the services provided?",
      answer: [
        "Our services are free for applicants. Employers cover all associated costs.",
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <HeroSection
        onGetStarted={handleGetStarted}
        onSchedule={handleMakeSchedule}
        doctorName="Dr. Tomas"
        doctorTitle="Skin Specialist"
        img="/images/doctor3.png"
      />{" "}
      <WhatWeDo />
      <Benefits />
      <HowItWorks />
      <Testimonials
        title="Experiences of Our Applicants"
        subtitle="We use only the best quality materials on the market in order to provide the best products to our patients."
        testimonials={testimonials}
        buttonText="Apply Now"
        onButtonClick={() => alert("Button clicked!")}
      />{" "}
      <BeforeFooter
        title={"Your Journey Starts Here"}
        description={
          "With SA netz, starting your career in Germany’s healthcare system is easier and more secure. Apply now and take the next step"
        }
        buttonText={"Apply Now"}
        buttonLink={"/"}
        imageSrc={"/images/Group 1000001049.png"}
      />
      <FAQAccordion
        title="Frequently Asked Questions"
        subtitle={
          "We use only the best quality materials on the market in order to provide the best products to our patients."
        }
        faqs={faqs}
      />
      <Footer />
    </>
  );
}
