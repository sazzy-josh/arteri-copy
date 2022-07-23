import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const RegistrationRedirect = () => {
  let navigate = useNavigate();
  return (
    <>
      <div className="mb-6">
        <p className="text-black font-bold mt-2 mb-2">
          Already have an account?
        </p>
        <p
          className="text-secondary font-semibold cursor-pointer"
          onClick={() => {
            navigate("/login", { replace: true });
          }}
        >
          Login into account
        </p>
      </div>
      <NavLink to="/dashboard" className="text-blue-500 underline mb-2 block">
        Go to dashboard
      </NavLink>
    </>
  );
};

export default RegistrationRedirect;
