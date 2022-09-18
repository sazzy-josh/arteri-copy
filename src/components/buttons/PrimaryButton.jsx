import React from "react";

const PrimaryButton = ({ handle, isButtonDisabled, children }) => {
  return (
    <button
      onClick={handle}
      disabled={isButtonDisabled}
      className={` w-full h-14 border-none outline-none font-medium  text-white text-center rounded-xl mx-auto text-lg my-3 block sm:w-[400px] md:mx-auto lg:mx-0 ${
        isButtonDisabled ? "bg-[#a9d479] " : "bg-secondary"
      }`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
