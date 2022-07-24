import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const RegistrationRedirect2 = () => {
  let navigate = useNavigate();
  return (
    <>
      <div className="mb-6">
        <p className="text-black font-medium mt-2 mb-2">
          Don't have an account?
        </p>
        <p
          className="text-secondary font-medium cursor-pointer"
          onClick={() => {
            navigate("/register/type", { replace: true });
          }}
        >
          Create an account
        </p>
      </div>
      <NavLink to="/dashboard" className="text-blue-500 underline mb-2 block">
        Go to dashboard
      </NavLink>
    </>
  );
};

export default RegistrationRedirect2;
