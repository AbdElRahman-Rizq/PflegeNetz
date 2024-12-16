import VideoSection from "../../components/aboutUs/VideoSection";
import vectorImg from "/assets/images/vector.png";
export const Welcoming = () => {
  return (
    <div className="mb-5">
      <h2
        style={{ lineHeight: "1.5" }}
        className="text-2xl md:text-3xl lg:text-4xl font-bold my-5 text-center md:w-[50%] mx-auto "
      >
        We're{" "}
        <span className="relative">
          Welcoming New {" "}
          {/* the line under the title */}
          <img
            src={vectorImg}
            alt=""
            className="absolute w-[214.43px] z-0 h-[5px] left-1/2 transform -translate-x-1/2 rotate-[-0.43deg] top-[28px] md:top-[40px]"
          />
        </span>
         Patients And Can’t Wait To Meet You.
      </h2>
      <h3 className="text-secondary-700 text-center md:w-[30%] mb-3 mx-auto">
        We use only the best quality materials on the market in order to provide
        the best products to our patients.
      </h3>
      <VideoSection
        videoSrc="/images/doctor1.png"
        altText="SA Netz mission video"
      />
    </div>
  );
};
