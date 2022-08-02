import React from "react";
import SecondaryButton from "../buttons/SecondaryButton";
import PrimaryButton2 from "../forms/buttons/PrimaryButton";
import TextField from "../forms/text/TextField";

const Details = ({ handleAccept, handleDecline }) => {
  return (
    <div className="w-full">
      <div className="w-full flex lg:flex-row flex-col justify-start items-center">
        <div className="lg:w-1/2 w-full lg:mr-5 lg:my-0 my-2">
          <p className="text-left font-bold mb-5">Employer or Business Name</p>
          <TextField type="text" />
        </div>
        <div className="lg:w-1/2 w-full">
          <p className="text-left font-bold mb-5">Valid Government Issued ID</p>
          <TextField type="file" />
        </div>
      </div>
      <div className="w-full flex lg:flex-row flex-col justify-start items-center lg:my-10">
        <div className="lg:w-1/2 w-full lg:mr-5 lg:my-0 my-2">
          <p className="text-left font-bold mb-5">
            Employment Confirmation Letter
          </p>
          <TextField type="file" />
        </div>
        <div className="lg:w-1/2 w-full">
          <p className="text-left font-bold mb-5">
            Business Registration Document
          </p>
          <TextField type="file" />
        </div>
      </div>
      <div className="w-full flex lg:flex-row flex-col justify-start items-center lg:my-10">
        <div className="lg:w-1/2 w-full lg:mr-5 lg:my-0 my-2">
          <p className="text-left font-bold mb-5">BVN</p>
          <TextField type="number" />
        </div>
        <div className="lg:w-1/2 w-full">
          <p className="text-left font-bold mb-5">Type of Employment</p>
          <TextField type="text" />
        </div>
      </div>
      <div className="w-full flex flex-row justify-between items-center">
        <div></div>
        <div className="flex lg:flex-row md:flex-row flex-col justify-start items-center lg:w-1/3 w-full">
          <div className="lg:w-1/2 w-full lg:mr-5 md:mr-1">
            <SecondaryButton handle={handleDecline}>
              <span>Back</span>
            </SecondaryButton>
          </div>
          <div className="lg:w-1/2 w-full">
            <PrimaryButton2 handle={handleAccept}>
              <span>Next</span>
            </PrimaryButton2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
