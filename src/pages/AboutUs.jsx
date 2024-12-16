import OurMission from "../components/aboutUs/OurMission.jsx";
import OurTeam from "../components/aboutUs/OurTeam.jsx";
import Story from "../components/aboutUs/Story.jsx";
import VideoSection from "../components/aboutUs/VideoSection.jsx";
import Footer from "../components/shared/Footer.jsx";
import Navbar from "../components/shared/Navbar.jsx";
import BeforeFooter from "../shared/components/BeforeFooter.jsx";
import Heading from "../shared/components/HeadingTitle.jsx";
export default function AboutUs() {
  return (
    <>
      <Navbar />
      <Heading
        title={"About Us"}
        subtitle={
          "SA netz is your partner for innovative solutions in the healthcare sector – competent, reliable, and global."
        }
      />
      <OurMission />
      <Story />
      <OurTeam />
      <div className="mb-5">
        <Heading
          title={"A Glimpse Into Our Mission"}
          subtitle={
            "Discover how SA netz transforms lives, creates connections, and shapes the future of German healthcare. Our video shares insights into our vision, values, and the people driving our success"
          }
        />
        <VideoSection
          videoSrc="/images/doctor1.png"
          altText="SA Netz mission video"
        />
      </div>

      <BeforeFooter
        title={"Join Our Team"}
        description={"Loem"}
        buttonText={"Apply"}
        buttonLink={"/"}
        imageSrc={"/images/Group 1000001049.png"}
      />

      <Footer />
    </>
  );
}
