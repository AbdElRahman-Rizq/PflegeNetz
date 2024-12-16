import React from "react";
import PropTypes from "prop-types";

const SharedButton = ({
  title,
  href,
  className = "bg-primary-700 hover:bg-primary-800 cursor-pointer text-white px-8 py-3 rounded-md transition-colors duration-300",
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

SharedButton.propTypes = {
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default SharedButton;
