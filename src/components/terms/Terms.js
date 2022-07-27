import React from "react";
import LargeCard from "../cards/LargeCard";

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
            <div className=" pr-32 my-10">
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
          </div>
        </LargeCard>
      </div>
    </div>
  );
};

export default Terms;
