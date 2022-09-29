import React from "react";
import SecondaryButton from "../buttons/SecondaryButton";
import PrimaryButton2 from "../forms/buttons/PrimaryButton";
import TextArea from "../forms/text/TextArea";
import TextField from "../forms/text/TextField";

const Cost = ({
  handleAccept,
  handleDecline,
  button,
  changeLoanReason,
  changeLoanAmount,
  changeMedicalProvider,
  reasonValue,
  amountValue,
  providerValue,
}) => {
  return (
    <div>
      <div>
        <div>
          <p className="font-bold text-left mb-5">Reason for taking loan</p>
          <TextArea
            value={reasonValue}
            changeText={changeLoanReason}
            placeholder="Write your reason here"
          />
        </div>
        <div className="w-full flex lg:flex-row flex-col justify-start items-center lg:my-10">
          <div className="lg:w-1/2 w-full lg:mr-5 lg:my-0 my-2">
            <p className="text-left font-bold mb-5">Cost of Care</p>
            <TextField
              value={amountValue}
              changeText={changeLoanAmount}
              type="number"
            />
          </div>
          <div className="lg:w-1/2 w-full">
            <p className="text-left font-bold mb-5">
              Name of Facility/Care Provider
            </p>
            <TextField
              value={providerValue}
              changeText={changeMedicalProvider}
              type="text"
            />
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
    </div>
  );
};

export default Cost;
