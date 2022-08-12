import React from "react";
import {RiSendPlane2Line} from "react-icons/ri"

const InputBox = ({ type, changeText, sendMessage }) => {
  return (
    <>
      <div className="flex flex-1 flex-row justify-start border border-primary pl-2 rounded-md items-start h-14 w-full">
        <input
          type={type}
          onChange={changeText}
          autoComplete="off"
          placeholder="Type your message here"
          className="custom-file-input focus:outline-none focus:border-0 border-0 h-full w-full"
        />
        <span onClick={sendMessage} className="h-full bg-primary p-2 w-20 flex flex-row justify-center items-center text-white">
            <RiSendPlane2Line />
        </span>
      </div>
    </>
  );
};

export default InputBox;
