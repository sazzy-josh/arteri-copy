import React from "react";

const PrimaryButton = ({ handle, children }) => {
  return (
    <button
      onClick={handle}
      className="w-80 h-14 px-16 font-semibold bg-secondary text-white text-center rounded-xl mx-auto text-lg my-3 block"
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
