import React from "react";
import sendSvg from '../../assets/icons/send-svg.svg'

const InputBox = ({ type, changeText, sendMessage }) => {
  return (
    <>
      <div className="flex flex-1 flex-row justify-start rounded-lg pl-2 border-[2px] border-[#E4F1D5] items-start h-14 w-full">
        <input
          type={type}
          onChange={changeText}
          autoComplete="off"
          autoFocus
          placeholder="Type your message here..."
          className="custom-file-input focus:outline-none py-4 focus:border-0 border-0 h-full w-full pl-8 placeholder:text-md"
        />
        <span onClick={sendMessage} className="h-full cursor-pointer bg-[#8BC34A] hover:bg-[#354D19] transition duration-200 rounded-tr-lg rounded-br-lg overflow-y-hidden p-2 w-20 flex flex-row justify-center items-center text-white">
          <img src={sendSvg} alt="send-icon" />
        </span>
      </div>
    </>
  );
};

export default InputBox;
