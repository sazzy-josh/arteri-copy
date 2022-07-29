import React from "react";
import PrimaryButton from "../buttons/PrimaryButton";
import SecondaryButton from "../buttons/SecondaryButton";
import LargeCard from "../cards/LargeCard";
import PrimaryButton2 from "../forms/buttons/PrimaryButton";

const Terms = () => {
  return (
    <div className="w-full">
      <div className="w-full">
        <LargeCard>
          <div className="w-full text-left">
            <div>
              <h2 className="w-full font-bold text-2xl text-left">
                Terms of Service
              </h2>
            </div>
            <div className="pr-0 lg:pr-32 my-10">
              <p className="my-10">Accepting the Terms</p>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text. All the Lorem Ipsum generators on
                the Internet tend to repeat predefined chunks as necessary,.
              </p>
              <p>
                making this the first true generator on the Internet. It uses a
                dictionary of over 200 Latin words, combined with a handful of
                model sentence structures, to generate Lorem Ipsum which looks
                reasonable. The generated Lorem Ipsum is therefore always free
                from repetition, injected humour, or non-characteristic words
                etc.
              </p>
            </div>
            <div className="w-full flex lg:flex-row flex-col justify-between items-center mt-20">
              <div className="flex flex-row justify-start items-center lg:w-2/3 w-full">
                <input className="bg-green-200 mr-2" type="checkbox" />{" "}
                <p>I agree to Arteri Terms of Service and Privacy Policy</p>
              </div>
              <div className="flex lg:flex-row md:flex-row flex-col justify-start items-center lg:w-1/3 w-full">
                <div className="lg:w-1/2 w-full lg:mr-2">
                  <SecondaryButton>
                    <span>Decline</span>
                  </SecondaryButton>
                </div>
                <div className="lg:w-1/2 w-full">
                  <PrimaryButton2>
                    <span>Accept</span>
                  </PrimaryButton2>
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
