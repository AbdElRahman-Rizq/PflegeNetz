import React from "react";

const ValueCard = ({ title, description }) => {
  return (
    <div className="flex md:items-start items-center space-x-4  p-2">
      {/* Icon (shield or placeholder) */}
      <div className="flex-shrink-0">
        <div className="w-6 h-6 rounded-full text-white flex items-center justify-center">
          <svg
            className="w-6 h-6 text-secondary-700 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9.5 11.5 11 13l4-3.5M12 20a16.405 16.405 0 0 1-5.092-5.804A16.694 16.694 0 0 1 5 6.666L12 4l7 2.667a16.695 16.695 0 0 1-1.908 7.529A16.406 16.406 0 0 1 12 20Z"
            />
          </svg>
        </div>
      </div>

      {/* Title and Description */}
      <div>
        <h3 className="text-lg font-bold text-secondary-700">{title}</h3>
        <p className="text-sm text-secondary-700 font-semibold">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ValueCard;
