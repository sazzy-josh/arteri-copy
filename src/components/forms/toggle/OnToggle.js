import React from "react";
import { BsToggleOn, BsToggleOff } from "react-icons/bs";

const OnToggle = ({ click, on }) => {
  return (
    <>
      <div
        onClick={click}
        className={
          on
            ? `text-secondary text-2xl cursor-pointer`
            : `text-gray-400 text-2xl cursor-pointer`
        }
      >
        {on ? <BsToggleOn /> : <BsToggleOff />}
      </div>
    </>
  );
};

export default OnToggle;
