import React from "react";
import SecondaryButton from "../buttons/SecondaryButton";
import PrimaryButton2 from "../forms/buttons/PrimaryButton";
import Cost from "./Cost";
import Details from "./Details";
import NextOfKin from "./NextOfKin";
import Work from "./Work";

const ReviewPage = ({
  handleAccept,
  handleDecline,
  employerNameValue,
  idCardValue,
  employmentLetterValue,
  businessDocValue,
  bvnValue,
  employementTypeValue,
  reasonValue,
  amountValue,
  providerValue,
  industryValue,
  positionValue,
  yearlengthValue,
  addressValue,
  nokNameValue,
  nokRelationshipValue,
  nokPhoneValue,
  nokEmailValue,
}) => {
  return (
    <div className="bg-white rounded-md p-5 mr-10">
      <div>
        <p className="font-bold text-2xl text-left mb-10">
          Employment and Bank Details
        </p>
        <Details
          employerNameValue={employerNameValue}
          idCardValue={idCardValue}
          employmentLetterValue={employmentLetterValue}
          businessDocValue={businessDocValue}
          bvnValue={bvnValue}
          employementTypeValue={employementTypeValue}
          button={false}
        />
        <Cost
          reasonValue={reasonValue}
          amountValue={amountValue}
          providerValue={providerValue}
          button={false}
        />
      </div>
      <div>
        <p className="font-bold text-2xl text-left mb-10">Work Details</p>
        <Work
          industryValue={industryValue}
          positionValue={positionValue}
          yearlengthValue={yearlengthValue}
          addressValue={addressValue}
          button={false}
        />
      </div>
      <div>
        <p className="font-bold text-2xl text-left mb-10">
          Next of Kin Details
        </p>
        <NextOfKin
          nokNameValue={nokNameValue}
          nokRelationshipValue={nokRelationshipValue}
          nokPhoneValue={nokPhoneValue}
          nokEmailValue={nokEmailValue}
          button={false}
        />
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

export default ReviewPage;
