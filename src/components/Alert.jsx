import React, { useState } from "react";

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
  return (
    <>
      <div
        className={`fixed top-0 left-0 z-[999] w-screen h-screen  ${
          modalTrigger ? "block" : "hidden"
        }`}
      >
        <div className=" opacity-50 bg-black w-screen h-screen"></div>
        <div className="absolute  bg-white rounded-lg py-10 w-11/12 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:w-[450px] md:w-[500px]">
          {/* <img
            src={CloseBtn}
            alt=""
            className="absolute  top-5 right-5 w-6 h-6  cursor-pointer p-1"
            onClick={() => setModalTrigger(false)}
          /> */}
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25.9999 25.7598L2.23438 2"
              stroke="#292D32"
              strokeWidth="3"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M25.7656 2.24023L2 26"
              stroke="#292D32"
              strokeWidth="3"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {type === "fail" && (
            <div className="rounded-full flex justify-center items-center bg-[#DE4307] w-28 h-28 mx-auto border-[10px] border-[#FEE9E1] mb-6">
              <svg
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M28.9999 28.7598L5.23438 5"
                  stroke="white"
                  strokeWidth="10"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M28.7656 5.24023L5 29"
                  stroke="white"
                  strokeWidth="10"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          )}
          {type === "success" && (
            <div className="rounded-full flex justify-center items-center bg-[#00A03E] w-28 h-28 mx-auto border-[10px] border-[#E0FFEC] mb-6">
              <svg
                width="37"
                height="29"
                viewBox="0 0 37 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.66602 13.5229L14.0941 22.951L32.9503 4.09486"
                  stroke="white"
                  strokeWidth="8"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          )}
          <p className="text-black font-semibold capitalize text-2xl mb-3">
            {title}
          </p>
          <p className="text-gray-500 mb-2 px-2">{subtitle}</p>
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
