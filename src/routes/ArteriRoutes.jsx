import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Application from "../pages/dashboard/Application";

// import Home from "../pages/Home";
import Dashboard from "../pages/dashboard/Dashboard";
import Registration from "../pages/registration/Registration";
import Login from "../pages/registration/Login";
import ForgotPassword from "../pages/registration/ForgotPassword";
import ErrorPage from "../pages/ErrorPage";

import AccountType from "../utils/registration-utils/AccountType";
import Details from "../utils/registration-utils/Details";
import OtherDetails from "../utils/registration-utils/OtherDetails";

import Account from "../pages/dashboard/Account";

import RecoverPassword from "../pages/registration/RecoverPassword";
import Help from "../pages/dashboard/Help";
import Notifications from "../pages/dashboard/Notifications";
import History from "../pages/dashboard/History";

const ArteriRoutes = () => {
  const [authToken, setAuthToken] = useState("");

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            localStorage.getItem("authToken") ? (
              <Navigate to="/dashboard" replace={true} />
            ) : (
              <Navigate to="/register/type" replace={true} />
            )
          }
        />
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/application" element={<Application />} />
        <Route path="/my-account" element={<Account />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/history" element={<History />} />
        <Route path="/help" element={<Help />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Registration />}>
          <Route path="type" element={<AccountType />} />
          <Route path="details" element={<Details />} />
          <Route path="details-2" element={<OtherDetails />} />
        </Route>
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="create-new-password" element={<RecoverPassword />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default ArteriRoutes;
