import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import MobileNavbar from "../../components/MobileNavbar";
import NumberPagination from "../../components/registration/NumberPagination";

// context
import { RegistrationContext } from "../../contexts/authContext/RegistrationContext";

const Registration = () => {
  const [accountType, setAccountType] = useState("consumer");
  console.log(accountType + "checking");
  return (
    <>
      <RegistrationContext.Provider value={{ accountType, setAccountType }}>
        <MobileNavbar />
        <NumberPagination />
        <Outlet />
      </RegistrationContext.Provider>
    </>
  );
};

export default Registration;
