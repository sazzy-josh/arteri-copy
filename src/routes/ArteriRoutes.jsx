import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Application from "../pages/dashboard/Application";

// import Home from "../pages/Home";
import Dashboard from "../pages/dashboard/Dashboard";
import ForgotPassword from "../pages/registration/ForgotPassword";
import Login from "../pages/registration/Login";

// import Home from "../pages/Home";
import Registration from "../pages/registration/Registration";
import AccountType from "../utils/registration-utils/AccountType";
import Details from "../utils/registration-utils/Details";
import OtherDetails from "../utils/registration-utils/OtherDetails";

const ArteriRoutes = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/register/type" replace={true} />}
        />
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/application" element={<Application />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Registration />}>
          <Route path="type" element={<AccountType />} />
          <Route path="details" element={<Details />} />
          <Route path="details-2" element={<OtherDetails />} />
        </Route>
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route
          path="*"
          element={<h1 className="my-5">This page does not exist</h1>}
        />
      </Routes>
    </>
  );
};

export default ArteriRoutes;
