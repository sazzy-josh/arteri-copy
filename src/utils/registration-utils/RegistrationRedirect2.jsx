import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const RegistrationRedirect2 = () => {
  let navigate = useNavigate();
  return (
    <>
      <div className="mb-6  md:flex md:items-center md:gap-3 md:px-8 md:justify-center lg:justify-start">
        <p className="text-black font-medium mt-2 mb-2 inline-block">
          Don't have an account?
        </p>
        <br />
        <p
          className="text-secondary font-medium cursor-pointer inline-block"
          onClick={() => {
            navigate("/register/type", { replace: true });
          }}
        >
          Create an account
        </p>
      </div>
      {/* <div className="sm:w-[400px] sm:mx-auto lg:mx-0 ">
        <NavLink
          to="/dashboard"
          className="text-blue-500 underline mb-2 text-center inline-block"
        >
          Go to dashboard
        </NavLink>
      </div> */}
    </>
  );
};

export default RegistrationRedirect2;
