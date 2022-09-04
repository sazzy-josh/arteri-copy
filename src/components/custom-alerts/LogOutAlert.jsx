import React from "react";

const LogOutAlert = ({ title, modalTrigger, setModalTrigger }) => {
  return (
    <>
      <div
        className={`fixed top-0 left-0 z-[999] w-screen h-screen  ${
          modalTrigger ? "block" : "hidden"
        }`}
      >
        <div className=" opacity-50 bg-black w-screen h-screen"></div>
        <div className="absolute  bg-white rounded-lg py-10 w-11/12 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:w-[450px] md:w-[500px]">
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute  top-5 right-5 w-6 h-6  cursor-pointer p-1"
            onClick={() => setModalTrigger(false)}
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

          <p className="text-black font-semibold capitalize text-2xl mb-3">
            {title}
          </p>

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

export default LogOutAlert;
