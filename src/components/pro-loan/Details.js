import React from "react";
import SecondaryButton from "../buttons/SecondaryButton";
import PrimaryButton2 from "../forms/buttons/PrimaryButton";
import TextField from "../forms/text/TextField";

const Details = ({
  handleAccept,
  handleDecline,
  button,
  changeEmployerName,
  changeIdCard,
  changeEmploymentLetter,
  changeBusinessDoc,
  changeBvn,
  changeEmploymentType,
  employerNameValue,
  idCardValue,
  employmentLetterValue,
  businessDocValue,
  bvnValue,
  employementTypeValue,
}) => {
  return (
    <div className="w-full">
      <div className="w-full flex lg:flex-row flex-col justify-start items-center">
        <div className="lg:w-1/2 w-full lg:mr-5 lg:my-0 my-2">
          <p className="text-left font-bold mb-5">Name of Facility</p>
          <TextField
            value={employerNameValue}
            changeText={changeEmployerName}
            type="text"
          />
        </div>
        <div className="lg:w-1/2 w-full">
          <p className="text-left font-bold mb-5">Facility Address</p>
          <TextField
            value={idCardValue}
            changeText={changeIdCard}
            type="text"
          />
        </div>
      </div>
      <div className="w-full flex lg:flex-row flex-col justify-start items-center lg:my-10">
        <div className="lg:w-1/2 w-full lg:mr-5 lg:my-0 my-2">
          <p className="text-left font-bold mb-5">
            Street Address
          </p>
          <TextField
            value={employmentLetterValue}
            changeText={changeEmploymentLetter}
            type="text"
          />
        </div>
        <div className="lg:w-1/2 w-full">
          <p className="text-left font-bold mb-5">
            City
          </p>
          <TextField
            value={businessDocValue}
            changeText={changeBusinessDoc}
            type="text"
          />
        </div>
      </div>
      <div className="w-full flex lg:flex-row flex-col justify-start items-center lg:my-10">
        <div className="lg:w-1/2 w-full lg:mr-5 lg:my-0 my-2">
          <p className="text-left font-bold mb-5">State</p>
          <TextField value={bvnValue} changeText={changeBvn} type="number" />
        </div>
        <div className="lg:w-1/2 w-full">
          <p className="text-left font-bold mb-5">Type of Facility</p>
          <TextField
            value={employementTypeValue}
            changeText={changeEmploymentType}
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
  );
};

export default Details;
