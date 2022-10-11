import React, { useState } from "react";
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
import AuthenticatedConsumerRoutes from "../layouts/AuthenticatedConsumerRoutes";
import UnauthenticatedPrivateRoutes from "../layouts/UnauthenticatedPrivateRoutes";
import Loans from "../utils/financial-history/Loans";
import BNPL from "../utils/financial-history/BNPL";
import HistoryDetails from "../pages/dashboard/HistroryDetails";
import EditLoan from "../pages/dashboard/EditLoan";
import ProviderDashboard from "../pages/admin/Dashboard";
import AccountVerification from "../pages/registration/AccountVerification";
import ProviderAccount from "../pages/admin/MyAccount";
import ProviderHelp from "../pages/admin/Help";
import ProviderHistory from "../pages/admin/History";
import ProviderNotifications from "../pages/admin/Notification";
import ProviderSettings from "../pages/admin/Settings";
import AuthenticatedProviderRoutes from "../layouts/AuthenticatedProviderRoutes";

// Contexts
import { ModalContext } from "../contexts/ModalContext";
import Preloader from "../components/Preloader";
import LogOutAlert from "../components/custom-alerts/LogOutAlert";
import Alert from "../components/Alert";
import ProviderApplication from "../pages/admin/Application";
import Claims from "../pages/admin/Claims";

const ArteriRoutes = () => {
  const [isContentLoading, setIsContentLoading] = useState(false);
  const [isLogOutModalOpen, setIsLogOutModalOpen] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [alertProps, setAlertProps] = useState({
    type: "",
    title: "",
    subtitle: "",
    buttonText: "",
    buttonHandle: "",
  });

  return (
    <ModalContext.Provider
      value={{
        isContentLoading,
        setIsContentLoading,
        isLogOutModalOpen,
        setIsLogOutModalOpen,
        isAlertOpen,
        setIsAlertOpen,
        alertProps,
        setAlertProps,
      }}
    >
      {isContentLoading && <Preloader />}
      {isLogOutModalOpen && <LogOutAlert />}
      {isAlertOpen && (
        <Alert
          type={alertProps.type}
          title={alertProps.title}
          subtitle={alertProps.subtitle}
          buttonText={alertProps.buttonText}
        />
      )}

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

        <Route path="/account/verification" element={<AccountVerification />} />
        {/* Routes available to users that are logged in but are consumers */}

        <Route element={<AuthenticatedConsumerRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/application" element={<Application />} />
          <Route path="/my-account" element={<Account />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route
            path="/history"
            // element={<Navigate to="/history/repayment" replace={true} />}
            element={<History />}
          >
            {/* <Route path="repayment" element={<Repayment />} /> */}
            <Route path="loans" element={<Loans />} />
            <Route path="bnpl" element={<BNPL />} />
            {/* <Route path="details/:id" element={<HistoryDetails />} /> */}
          </Route>
          <Route path="/history/details/:id" element={<HistoryDetails />} />
          <Route path="/history/edit/:id" element={<EditLoan />} />
          <Route path="/help" element={<Help />} />
        </Route>

        {/* Routes available to users that are logged in but are providers */}
        <Route element={<AuthenticatedProviderRoutes />}>
          <Route path="/provider-dashboard" element={<ProviderDashboard />} />
          <Route path="provider-account" element={<ProviderAccount />} />
          <Route path="provider-help" element={<ProviderHelp />} />
          <Route
            path="provider-notifications"
            element={<ProviderNotifications />}
          />
          <Route path="provider-settings" element={<ProviderSettings />} />
          <Route path="provider-loan" element={<ProviderApplication />} />
          <Route
            path="/provider-history"
            // element={<Navigate to="/history/repayment" replace={true} />}
            element={<ProviderHistory />}
          >
            <Route path="repayment" element={<Repayment />} />
            <Route path="loans" element={<Loans />} />
            <Route path="bnpl" element={<BNPL />} />
            {/* <Route path="details/:id" element={<HistoryDetails />} /> */}
          </Route>
          <Route path="/provider-claims" element={<Claims />}>
            <Route path="/provider-claims/received" element={<p>received</p>} />
            <Route path="/provider-claims/accepted" element={<p>accepted</p>} />
            <Route path="/provider-claims/declined" element={<p>declined</p>} />
          </Route>
        </Route>

        {/* Routes available to users that are not logged in */}
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
    </ModalContext.Provider>
  );
};

export default ArteriRoutes;
