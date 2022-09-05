import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const UnauthenticatedPrivateRoutes = () => {
  const authToken =
    localStorage.getItem("authToken") || sessionStorage.getItem("authToken");
  const providerAccountType =
    localStorage.getItem("accountType") === "provider" ||
    sessionStorage.getItem("accountType") === "provider";
  const consumerAccountType =
    localStorage.getItem("accountType") === "personal" ||
    sessionStorage.getItem("accountType") === "personal";
  return (
    <>
      {authToken && consumerAccountType ? (
        <Navigate to="/dashboard" replace={true} />
      ) : (
        <Outlet />
      )}
      {authToken && providerAccountType ? (
        <Navigate to="/provider-dashboard" replace={true} />
      ) : (
        <Outlet />
      )}
    </>
  );
};

export default UnauthenticatedPrivateRoutes;
