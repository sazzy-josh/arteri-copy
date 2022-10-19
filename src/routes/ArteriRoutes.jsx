import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Application from "../pages/consumer-dashboard/Application";

// import Home from "../pages/Home";
import Dashboard from "../pages/consumer-dashboard/Dashboard";
import Registration from "../pages/registration/Registration";
import Login from "../pages/registration/Login";
import ForgotPassword from "../pages/registration/ForgotPassword";
import ErrorPage from "../pages/ErrorPage";

import AccountType from "../utils/registration-utils/AccountType";
import Details from "../utils/registration-utils/Details";
import OtherDetails from "../utils/registration-utils/OtherDetails";

import Account from "../pages/consumer-dashboard/Account";
// financial history
import Repayment from "../utils/financial-history/Repayment";
import RecoverPassword from "../pages/registration/RecoverPassword";
import Help from "../pages/consumer-dashboard/Help";
import Notifications from "../pages/consumer-dashboard/Notifications";
import History from "../pages/consumer-dashboard/History";
import AuthenticatedConsumerRoutes from "../layouts/AuthenticatedConsumerRoutes";
import UnauthenticatedPrivateRoutes from "../layouts/UnauthenticatedPrivateRoutes";
import Loans from "../utils/financial-history/Loans";
import BNPL from "../utils/financial-history/BNPL";
import HistoryDetails from "../pages/consumer-dashboard/HistroryDetails";
import EditLoan from "../pages/consumer-dashboard/EditLoan";
import ProviderDashboard from "../pages/provider-dashboard/Dashboard";
import AccountVerification from "../pages/registration/AccountVerification";
import ProviderAccount from "../pages/provider-dashboard/MyAccount";
import ProviderHelp from "../pages/provider-dashboard/Help";
import ProviderHistory from "../pages/provider-dashboard/History";
import ProviderNotifications from "../pages/provider-dashboard/Notification";
import ProviderSettings from "../pages/provider-dashboard/Settings";
import AuthenticatedProviderRoutes from "../layouts/AuthenticatedProviderRoutes";

// Contexts
import { ModalContext } from "../contexts/ModalContext";
import Preloader from "../components/Preloader";
import LogOutAlert from "../components/custom-alerts/LogOutAlert";
import Alert from "../components/Alert";
import ProviderApplication from "../pages/provider-dashboard/Application";
import ProviderClaims from "../pages/provider-dashboard/Claims";
import ConsumerClaims from "../pages/consumer-dashboard/Claims";
import ProviderReceivedClaims from "../utils/provider-dashboard/ReceivedClaims";
import ProviderAcceptedClaims from "../utils/provider-dashboard/AcceptedClaims";
import ProviderDeclinedClaims from "../utils/provider-dashboard/DeclinedClaims";
import ConsumerReceivedClaims from "../utils/consumer-dashboard/ReceivedClaims";
import ConsumerAcceptedClaims from "../utils/consumer-dashboard/AcceptedClaims";
import ConsumerDeclinedClaims from "../utils/consumer-dashboard/DeclinedClaims";
import NewClaim from "../pages/provider-dashboard/NewClaim";

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
            // element={<Navigate to="/history/loans" replace={true} />}
            element={<History />}
          >
            <Route path="loans" element={<Loans />} />
            <Route path="bnpl" element={<BNPL />} />
            {/* <Route path="details/:id" element={<HistoryDetails />} /> */}
          </Route>
          <Route path="/consumer-claims" element={<ConsumerClaims />}>
            <Route
              path="/consumer-claims/received"
              element={<ConsumerReceivedClaims />}
            />
            <Route
              path="/consumer-claims/accepted"
              element={<ConsumerAcceptedClaims />}
            />
            <Route
              path="/consumer-claims/declined"
              element={<ConsumerDeclinedClaims />}
            />
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
          <Route path="/provider-claims" element={<ProviderClaims />}>
            <Route
              path="/provider-claims/received"
              element={<ProviderReceivedClaims />}
            />
            <Route
              path="/provider-claims/accepted"
              element={<ProviderAcceptedClaims />}
            />
            <Route
              path="/provider-claims/declined"
              element={<ProviderDeclinedClaims />}
            />
          </Route>
          <Route path="/provider-claim/create" element={<NewClaim />} />
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
