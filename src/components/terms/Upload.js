import React from "react";
import SecondaryButton from "../buttons/SecondaryButton";
import PrimaryButton2 from "../forms/buttons/PrimaryButton";

const Upload = ({ handleAccept, handleDecline, changeMedicalDoc, value}) => {
  return (
    <div className="h-96 flex flex-col justify-center items-center w-full">
      <div className="rounded-md shadow-sm bg-white max-w-lg flex flex-col justify-center items-center p-5">
        <label className="border border-dotted border-primary rounded-md flex flex-col justify-center items-center py-10 px-10 cursor-pointer">
          <svg
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M51.3327 23.3337V35.0003C51.3327 46.667 46.666 51.3337 34.9993 51.3337H20.9993C9.33268 51.3337 4.66602 46.667 4.66602 35.0003V21.0003C4.66602 9.33366 9.33268 4.66699 20.9993 4.66699H32.666"
              stroke="#413F3F"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M51.3327 23.3337H41.9993C34.9993 23.3337 32.666 21.0003 32.666 14.0003V4.66699L51.3327 23.3337Z"
              stroke="#9747FF"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <p className="text-center text-sm text-black font-semibold mt-5">
            Click to select a PDF or Image file of your medical report to upload
          </p>
          {/* <p className="text-center text-sm">Or drag and drop file here</p> */}
          <input defaultValue={value} onChange={changeMedicalDoc} type="file" className="hidden" />
        </label>
      </div>
      <div className="flex lg:flex-row md:flex-row flex-col justify-start items-center lg:w-1/2 my-5 w-full">
          <div className="lg:w-1/3 w-full lg:mr-5 md:mr-1">
            <SecondaryButton handle={handleDecline}>
              <span>Back</span>
            </SecondaryButton>
          </div>
          <div className="lg:w-2/3 w-full">
            <PrimaryButton2 handle={handleAccept}>
              <span>Upload Documents</span>
            </PrimaryButton2>
          </div>
        </div>
    </div>
  );
};

export default Upload;
