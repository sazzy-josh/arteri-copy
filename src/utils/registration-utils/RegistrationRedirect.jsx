import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const RegistrationRedirect = () => {
  let navigate = useNavigate();
  return (
    <>
      <div className="mb-6 md:flex md:items-center md:gap-3 md:px-8 md:justify-center lg:justify-start">
        <p className="text-black font-medium mt-2 mb-2">
          Already have an account?
        </p>
        <p
          className="text-secondary font-medium cursor-pointer"
          onClick={() => {
            navigate("/login", { replace: true });
          }}
        >
          Login into account
        </p>
      </div>
      <NavLink
        to="/dashboard"
        className="text-blue-500 underline mb-2 text-center block md:text-center md:ml-8 lg:text-left"
      >
        Go to dashboard
      </NavLink>
    </>
  );
};

export default RegistrationRedirect;
