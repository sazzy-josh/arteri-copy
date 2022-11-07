import React from "react";

const PrimaryButton = ({ handle, isButtonDisabled, children }) => {
  return (
    <button
      onClick={handle}
      disabled={isButtonDisabled}
      className={` w-full h-full border-none outline-none font-medium  text-white  text-center rounded-xl mx-auto text-lg my-3 block sm:w-full  transition duration-200 ${
        isButtonDisabled ? "bg-[#CEE6B2] cursor-not-allowed" : "bg-secondary"
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
