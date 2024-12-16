// const TitleWithLine = ({ text, vectorImg }) => {
//   return (
//     <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
//       <span className="relative text-secondary-700">
//         {text}
//         {/* The line under the title */}
//         <img
//           src={vectorImg}
//           alt=""
//           className="absolute w-[214.43px] z-0 h-[10.31px]"
//           style={{
//             top: "40px",
//             left: "50%",
//             transform: "translateX(-50%) rotate(-0.43deg)",
//           }}
//         />
//       </span>
//     </h2>
//   );
// };

// export default TitleWithLine;

const TitleWithLine = ({ text, vectorImg }) => {
  return (
    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
      <span className="relative text-secondary-700">
        {text}
        {/* The line under the title */}
        <img
          src={vectorImg}
          alt=""
          className="absolute w-[214.43px] z-0 h-[10.31px] left-1/2 transform -translate-x-1/2 rotate-[-0.43deg] top-[25px] md:top-[40px]"
        />
      </span>
    </h2>
  );
};

export default TitleWithLine;
