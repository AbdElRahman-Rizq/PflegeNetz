import TitleWithLine from "./TitleWithLine.jsx";
import vectorImg from "/assets/images/vector.png";
const Heading = ({ title, subtitle }) => {
  return (
    <div className="flex items-center text-center sm:text-left px-5 flex-col justify-center text-secondary-700">
      <TitleWithLine vectorImg={vectorImg} text={title} />
      <div className="text-center mt-5 md:mt-0  flex justify-center items-center">
        <p className="md:w-[450px] text-gray-600 md:mt-4 w-full text-center ">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default Heading;
