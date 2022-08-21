import React from "react";

const Container = ({ children }) => {
  return (
    <>
      <div className="w-full container lg:px-5 md:px-5 px-0 sm:mx-auto ">
        {children}
      </div>
    </>
  );
};

export default Container;
