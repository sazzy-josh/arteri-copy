import React from "react";

const LargeCard = ({ children, classNames }) => {
  return (
    <>
      <div
        className={`rounded-lg dashboard-custom-shadow bg-white mr-5 p-7 ${classNames}`}
      >
        {children}
      </div>
    </>
  );
};

export default LargeCard;
