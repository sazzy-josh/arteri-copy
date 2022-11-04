import React from "react";
import PrimaryButton from "../buttons/PrimaryButton";
import SecondaryButton from "../buttons/SecondaryButton";
import LargeCard from "../cards/LargeCard";
import PrimaryButton2 from "../forms/buttons/PrimaryButton";

const Terms = ({handleAccept, handleDecline, acceptTerms , accept}) => {
  return (
    <div className="w-full">
      <div className="w-full">
        <LargeCard>
          <div className="w-full text-left">
            <div>
              <h2 className="w-full font-semibold text-[30px] text-left text-[#333333]">
                Terms of Service
              </h2>
            </div>
            <div className="pr-0 lg:pr-32 my-10 text-[#808080]">
              <p className="my-10  text-xl">Accepting the Terms</p>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text. All the Lorem Ipsum generators on
                the Internet tend to repeat predefined chunks as necessary.
              </p>
              <br/>
              <p>
                making this the first true generator on the Internet. It uses a
                dictionary of over 200 Latin words, combined with a handful of
                model sentence structures, to generate Lorem Ipsum which looks
                reasonable. The generated Lorem Ipsum is therefore always free
                from repetition, injected humour, or non-characteristic words
                etc.
              </p>
            </div>
            <div className="w-full flex lg:flex-row flex-col justify-between items-center mt-16">
              <div className="flex flex-row justify-start items-center lg:w-2/3 w-full">
                {/* <input checked={accept} onChange={acceptTerms} className="focus:bg-secondary border-green-200 text-secondary mr-2" type="checkbox" />{" "} */}
                <label className="my-9 block text-left mx-auto lg:mx-0 ">
                <div className="relative inline-flex justify-start items-start  ">
                  <input
                    type="checkbox"
                    className={`ml-auto hidden`}
                    checked={accept}
                    onChange={() => {
                      acceptTerms()
                    }}
                  />

                  <div
                    className={` min-w-[24px] w-6 h-6 flex justify-center items-center rounded-md mr-2 ${
                     accept
                        ? "bg-secondary"
                        : "bg-none border-2 border-gray-400"
                    }`}
                  >
                    <svg
                      className="w-4/6 h-4/6 m-auto"
                      viewBox="0 0 16 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.15381 5.23529L5.48955 9.47793L14.161 0.99265"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  
                </div>
              </label>
                <div className=""> <span>I agree to Arteri</span> <span className="text-[#8BC34A]"> Terms of Service </span> and <span className="text-[#8BC34A]"> Privacy Policy </span>  </div>
              </div>
              <div className="flex lg:flex-row md:flex-row flex-col justify-start items-center lg:w-1/3 w-full lg:gap-x-4 gap-y-4">
                <div className="lg:w-1/2 h-14 w-full ">
                  <SecondaryButton handle={handleDecline}>
                    Decline
                  </SecondaryButton>
                </div>
                {/* 
                </div> */}
                <div className="lg:w-1/2 w-full h-14">
                <PrimaryButton handle={handleAccept}>
                    Accept
                  </PrimaryButton>
                  
                </div>
              </div>
            </div>
          </div>
        </LargeCard>
      </div>
    </div>
  );
};

export default Terms;
