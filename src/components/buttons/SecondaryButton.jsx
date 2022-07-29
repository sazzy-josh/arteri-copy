import React from "react";

const SecondaryButton = ({ handle, children, color }) => {
  return (
    <button
      onClick={handle}
      //   style={{ backgroundColor: theme("colors.primary") }}
      className="w-full h-14 font-medium bg-transparent text-lg border-2 border-secondary hover:bg-secondary hover:text-white text-center rounded-xl my-3 block mx-auto "
    >
      {children}
    </button>
  );
};

export default SecondaryButton;
