import React from "react";
import { Outlet } from "react-router-dom";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import NumberPagination from "../../components/registration/NumberPagination";

const Registration = () => {
  return (
    <>
      <NumberPagination />
      <Outlet />
      <PrimaryButton>Next</PrimaryButton>
      <p className="text-black font-bold mt-7 mb-2">Already have an account?</p>
      <p className="text-secondary font-semibold">Login into account</p>
    </>
  );
};

export default Registration;
