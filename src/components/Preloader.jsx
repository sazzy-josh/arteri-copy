import React from "react";
import { ThreeDots } from "react-loader-spinner";

const Preloader = () => {
  return (
    <div className="fixed z-[99999] left-0 top-0 w-screen h-screen bg-white opacity-80 flex items-center justify-center ">
      <ThreeDots
        height="80"
        width="80"
        radius="8"
        color="#3385D7"
        ariaLabel="three-dots-loading"
        visible={true}
      />
    </div>
  );
};

export default Preloader;
