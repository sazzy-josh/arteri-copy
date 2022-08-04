import React, { useState } from "react";
import SuccessIcon from "../assets/icons/check-white.svg";
import FailureIcon from "../assets/icons/close-btn-white.svg";
import CloseBtn from "../assets/icons/close-btn.svg";

const Alert = ({
  type,
  title,
  subtitle,
  buttonText,
  buttonHandle,
  modalTrigger,
  setModalTrigger,
}) => {
  //   const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <div
        className={`fixed top-0 left-0 z-20 w-screen h-screen  ${
          modalTrigger ? "block" : "hidden"
        }`}
      >
        <div className=" opacity-50 bg-black w-screen h-screen"></div>
        <div className="absolute  bg-white rounded-lg py-10 w-11/12 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:w-[450px] md:w-[500px]">
          <img
            src={CloseBtn}
            alt=""
            className="absolute  top-5 right-5 w-6 h-6  cursor-pointer p-1"
            onClick={() => setModalTrigger(false)}
          />
          {type === "fail" && (
            <div className="rounded-full flex justify-center items-center bg-[#DE4307] w-28 h-28 mx-auto border-[10px] border-[#FEE9E1] mb-6">
              <img src={FailureIcon} alt="" className="" />
            </div>
          )}
          {type === "success" && (
            <div className="rounded-full flex justify-center items-center bg-[#00A03E] w-28 h-28 mx-auto border-[10px] border-[#E0FFEC] mb-6">
              <img
                src={SuccessIcon}
                alt=""
                className="transition duration-300"
              />
            </div>
          )}
          <p className="text-black font-semibold capitalize text-2xl mb-3">
            {title}
          </p>
          <p className="text-gray-500 mb-2">{subtitle}</p>
          {buttonText && (
            <button
              className="bg-secondary text-white font-medium w-48 h-12 rounded-md my-4 cursor-pointer"
              onClick={buttonHandle}
            >
              {buttonText}
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Alert;
