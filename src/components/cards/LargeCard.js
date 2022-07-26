import React from "react";

const LargeCard = ({children, classNames}) => {
  return (
    <>
      <div className={`rounded-md shadow-md bg-white mr-5 px-5 py-5 ${classNames}`}>{children}</div>
    </>
  );
};

export default LargeCard;
