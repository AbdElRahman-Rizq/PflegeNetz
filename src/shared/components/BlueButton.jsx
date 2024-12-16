import React from "react";
import PropTypes from "prop-types";

const BlueButton = ({
  title,
  href,
  className = "bg-[#00457C] hover:bg-[#00447ce5] text-white  py-3 px-6 rounded-lg shadow-md transition duration-300",
}) => {
  return (
    <a
      href={href}
      className={`${className}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {title}
    </a>
  );
};

BlueButton.propTypes = {
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default BlueButton;
