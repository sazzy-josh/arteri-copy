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
  if (authToken && consumerAccountType) {
    return <Navigate to="/dashboard" replace={true} />;
  }
  if (authToken && providerAccountType) {
    return <Navigate to="/provider-dashboard" replace={true} />;
  }

  return (
    <>
      <Outlet />
    </>
  );
};

export default UnauthenticatedPrivateRoutes;
