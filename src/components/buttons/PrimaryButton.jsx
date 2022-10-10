import React from "react";

const PrimaryButton = ({ handle, isButtonDisabled, children }) => {
  return (
    <button
      onClick={handle}
      disabled={isButtonDisabled}
      className={` w-full h-14 border-none outline-none font-medium  text-white  text-center rounded-xl mx-auto text-lg my-3 block sm:w-[400px] md:mx-auto lg:mx-0  ${
        isButtonDisabled ? "bg-[#CEE6B2] " : "bg-secondary"
      } ${
        !isButtonDisabled
          ? "hover:bg-[#354D19] active:bg-[#354D19] active:border-2 active:border-[#8BC34A] "
          : null
      }
      `}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
