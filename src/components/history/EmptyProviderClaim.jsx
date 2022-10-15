import React from "react";
import { useNavigate } from "react-router-dom";

const EmptyProviderClaim = () => {
  let navigate = useNavigate();
  return (
    <div className="w-full">
      <div className="bg-[#F6FAFD] w-32 h-32 mt-5 mb-2 mx-auto rounded-full flex justify-center items-center">
        <svg
          width="65"
          height="65"
          viewBox="0 0 65 65"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M55.5221 30.6041V19.0666C55.5221 8.15207 52.9763 5.41663 42.7388 5.41663H22.2638C12.0263 5.41663 9.48047 8.15207 9.48047 19.0666V49.5624C9.48047 56.7666 13.4347 58.4729 18.2284 53.327L18.2554 53.2999C20.4763 50.9437 23.8617 51.1333 25.7846 53.7062L28.52 57.3624"
            stroke="#3385D7"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21.668 18.9584H43.3346"
            stroke="#3385D7"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M24.375 29.7916H40.625"
            stroke="#3385D7"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M49.3221 40.0028L39.7347 49.5904C39.3555 49.9695 39.0034 50.6737 38.9221 51.1883L38.4075 54.8445C38.218 56.1716 39.1388 57.0925 40.4659 56.9029L44.1222 56.3883C44.6368 56.307 45.368 55.9549 45.7201 55.5757L55.3076 45.9883C56.9597 44.3362 57.7451 42.4133 55.3076 39.9758C52.8972 37.5654 50.9742 38.3507 49.3221 40.0028Z"
            stroke="#3385D7"
            strokeWidth="2.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M47.9375 41.384C48.75 44.309 51.025 46.584 53.95 47.3965"
            stroke="#3385D7"
            strokeWidth="2.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <h3 className="text-2xl text-black font-semibold my-4">
        No claim request yet
      </h3>
      <p className="text-[#B3B3B3]">
        Tap the button below to apply for a new claim
      </p>
      <div className=" ">
        <button
          onClick={() => navigate("/provider-claim/create", { replace: true })}
          className=" w-44 h-12 border-none outline-none font-medium  text-white text-center rounded-xl mx-auto text-lg my-4 block  bg-secondary"
        >
          New Claim
        </button>
      </div>
    </div>
  );
};

export default EmptyProviderClaim;
