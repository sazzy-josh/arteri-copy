import React from "react";

const LargeCard = ({children}) => {
  return (
    <>
      <div className="rounded-md shadow-md bg-white mr-5 px-5 py-5">{children}</div>
    </>
  );
};

export default LargeCard;
