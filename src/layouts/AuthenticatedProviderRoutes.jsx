import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const AuthenticatedProviderRoutes = () => {
  const authToken =
    localStorage.getItem("authToken") || sessionStorage.getItem("authToken");
  const providerAccountType =
    localStorage.getItem("accountType") === "provider" ||
    sessionStorage.getItem("accountType") === "provider";
  const consumerAccountType =
    localStorage.getItem("accountType") === "personal" ||
    sessionStorage.getItem("accountType") === "personal";

  if (authToken && providerAccountType) {
    return <Outlet />;
  }
  if (authToken && consumerAccountType) {
    return <Navigate to="/dashboard" replace={true} />;
  }
  return (
    <>
      <Navigate to="/login" replace={true} />
    </>
  );
};

export default AuthenticatedProviderRoutes;
