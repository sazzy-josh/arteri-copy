import React from "react";

const Container = ({ children }) => {
  return (
    <>
      <div className="w-full container px-5">{children}</div>
    </>
  );
};

export default Container;
