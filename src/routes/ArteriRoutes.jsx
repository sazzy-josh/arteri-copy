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
// financial history
import Repayment from "../utils/financial-history/Repayment";
import RecoverPassword from "../pages/registration/RecoverPassword";
import Help from "../pages/dashboard/Help";
import Notifications from "../pages/dashboard/Notifications";
import History from "../pages/dashboard/History";
import AuthenticatedPrivateRoutes from "../layouts/AuthenticatedPrivateRoutes";
import UnauthenticatedPrivateRoutes from "../layouts/UnauthenticatedPrivateRoutes";
import Loans from "../utils/financial-history/Loans";
import BNPL from "../utils/financial-history/BNPL";
import HistoryDetails from "../pages/dashboard/HistroryDetails";
import ProviderDashboard from "../pages/admin/Dashboard";
import AccountVerification from "../pages/dashboard/AccountVerification";

const ArteriRoutes = () => {
  // const [authToken, setAuthToken] = useState(null);
  // useEffect(() => {
  //   if (
  //     localStorage.getItem("authToken") ||
  //     sessionStorage.getItem("authToken")
  //   ) {
  //     setAuthToken(localStorage.getItem("authToken"));
  //   } else {
  //     setAuthToken(null);
  //   }
  // });
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            localStorage.getItem("authToken") ||
            sessionStorage.getItem("authToken") ? (
              <Navigate to="/dashboard" replace={true} />
            ) : (
              <Navigate to="/login" replace={true} />
            )
          }
        />

        <Route element={<AuthenticatedPrivateRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/application" element={<Application />} />
          <Route path="/my-account" element={<Account />} />
          <Route
            path="/account/verification"
            element={<AccountVerification />}
          />
          <Route path="/notifications" element={<Notifications />} />
          <Route
            path="/history"
            // element={<Navigate to="/history/repayment" replace={true} />}
            element={<History />}
          >
            <Route path="repayment" element={<Repayment />} />
            <Route path="loans" element={<Loans />} />
            <Route path="bnpl" element={<BNPL />} />
            {/* <Route path="details/:id" element={<HistoryDetails />} /> */}
          </Route>
          <Route path="/history/details/:id" element={<HistoryDetails />} />
          <Route path="/help" element={<Help />} />
        </Route>

        <Route path="/provider-dashboard" element={<ProviderDashboard />} />

        <Route element={<UnauthenticatedPrivateRoutes />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Registration />}>
            <Route path="type" element={<AccountType />} />
            <Route path="details" element={<Details />} />
            <Route path="details-2" element={<OtherDetails />} />
          </Route>
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route
            path="create-new-password/:code"
            element={<RecoverPassword />}
          />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default ArteriRoutes;
