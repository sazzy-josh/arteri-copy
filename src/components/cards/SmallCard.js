import React from "react";

const SmallCard = ({ children, classNames }) => {
  return (
    <>
      <div
        className={`rounded-lg shadow-sm  p-5 font-bold flex flex-col justify-center items-center gap-2  ${classNames}`}
      >
        {children}
      </div>
    </>
  );
};

export default SmallCard;
