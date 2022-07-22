import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import MobileNavbar from "../../components/MobileNavbar";
import NumberPagination from "../../components/registration/NumberPagination";

const Registration = () => {
  return (
    <>
      <MobileNavbar />
      <NumberPagination />
      <Outlet />
      <div className="mb-6">
        <p className="text-black font-bold mt-2 mb-2">
          Already have an account?
        </p>
        <p className="text-secondary font-semibold">Login into account</p>
      </div>
      <NavLink to="/dashboard" className="text-blue-500 underline">
        Go to dashboard
      </NavLink>
    </>
  );
};

export default Registration;
