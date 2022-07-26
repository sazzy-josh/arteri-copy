import React from "react";

const SmallCard = ({ children, classNames }) => {
  return (
    <>
      <div
        className={`rounded-md shadow-sm text-center px-5 py-5 font-bold flex flex-col justify-center items-center text-2xl ${classNames}`}
      >
        {children}
      </div>
    </>
  );
};

export default SmallCard;
