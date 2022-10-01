import React from "react";
import SecondaryButton from "../buttons/SecondaryButton";
import PrimaryButton2 from "../forms/buttons/PrimaryButton";
import TextField from "../forms/text/TextField";

const Work = ({
  handleAccept,
  handleDecline,
  button,
  changeWorkIndustry,
  changeWorkPosition,
  changeWorkLength,
  changeWorkAddress,
  industryValue,
  positionValue,
  yearlengthValue,
  addressValue,
}) => {
  return (
    <div className="w-full">
      <div className="w-full flex lg:flex-row flex-col justify-start items-center">
        <div className="lg:w-1/2 w-full lg:mr-5 lg:my-0 my-2">
          <p className="text-left font-bold mb-5">Bank Name</p>
          <TextField
            value={industryValue}
            changeText={changeWorkIndustry}
            type="text"
          />
        </div>
        <div className="lg:w-1/2 w-full">
          <p className="text-left font-bold mb-5">Account Name</p>
          <TextField
            value={positionValue}
            changeText={changeWorkPosition}
            type="text"
          />
        </div>
      </div>
      <div className="w-full flex lg:flex-row flex-col justify-start items-center lg:my-10">
        <div className="lg:w-1/2 w-full lg:mr-5 lg:my-0 my-2">
          <p className="text-left font-bold mb-5">Account Number</p>
          <TextField
            value={yearlengthValue}
            changeText={changeWorkLength}
            type="number"
          />
        </div>
        <div className="lg:w-1/2 w-full">
         
        </div>
      </div>

      {button && (
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
      )}
    </div>
  );
};

export default Work;
