import React from "react";

const PrimaryButton2 = ({ handle, children }) => {
  return (
    <button
      onClick={handle}
      className="w-full h-14 font-medium bg-secondary hover:bg-green-500 hover:font-semibold text-white text-center rounded-xl text-lg my-3"
    >
      {children}
    </button>
  );
};

export default PrimaryButton2;
