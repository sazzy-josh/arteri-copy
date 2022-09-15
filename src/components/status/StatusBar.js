import React from "react";

const StatusBar = ({text, positive}) => {
  return (
    <>
      <div className={positive ? 'rounded-xl border bg-green-100 text-green-500 px-2 py-1 text-center' : 'rounded-xl border bg-red-100 text-red-500 px-2 py-1 text-center'}>
        <span>{text}</span>
      </div>
    </>
  );
};

export default StatusBar;
