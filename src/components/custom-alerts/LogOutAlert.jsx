import React from "react";

const LogOutAlert = ({
  title,
  modalTrigger,
  setModalTrigger,
  buttonHandle,
}) => {
  return (
    <>
      <div
        className={`fixed top-0 left-0 z-50 w-screen h-screen  ${
          modalTrigger ? "block" : "hidden"
        }`}
      >
        <div className=" opacity-50 bg-black w-screen h-screen"></div>
        <div className="absolute z-50 bg-white rounded-lg py-10 px-5 w-11/12 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:w-[450px] md:w-[600px] md:py-28 md:px-10">
          <p className="text-black font-semibold capitalize text-[22px]  mb-9  text-center md:text-3xl md:mb-12">
            Are you sure you want <br /> to logout?
          </p>
          <div className="flex flex-col items-center gap-6 md:flex-row md:justify-center">
            <button
              className="border border-[#DE4307] text-[#DE4307] font-medium w-full h-14 rounded-lg  cursor-pointer md:w-44"
              onClick={buttonHandle}
            >
              Yes, Logout
            </button>
            <button
              className=" text-white bg-primary font-medium w-full h-14 rounded-lg  cursor-pointer md:w-44"
              onClick={() => setModalTrigger(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogOutAlert;
