import React from "react";

const PrimaryButton = ({ handle, children }) => {
  return (
    <button
      onClick={handle}
      className="w-full h-14 border-none outline-none font-medium bg-secondary text-white text-center rounded-xl mx-auto text-lg my-3 block sm:w-[400px] md:mx-auto lg:mx-0 "
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
