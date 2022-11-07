import React from "react";

const SecondaryButton = ({ handle, children, isButtonDisabled }) => {
  return (
    <button
      onClick={handle}
      disabled={ isButtonDisabled }
      className={`w-full h-14 font-medium bg-transparent text-lg border-2 border-secondary  text-center rounded-xl my-3 block mx-auto ${ isButtonDisabled ? "cursor-not-allowed bg-[#CEE6B2] text-[#CEE6B2] border-[#CEE6B2]" : "hover:bg-[#E6F2D9]"}`} 
    >
      {children}
    </button>
  );
};

export default SecondaryButton;
