import React from "react";

const SmallCard = ({ children, classNames }) => {
  return (
    <>
      <div
        className={`rounded-md text-center px-5 py-2 w-2/3 h-16 font-bold flex flex-col justify-center items-center text-2xl ${classNames}`}
      >
        {children}
      </div>
    </>
  );
};

export default SmallCard;
