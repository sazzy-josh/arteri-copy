import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const AuthenticatedProviderRoutes = () => {
  const authToken =
    localStorage.getItem("authToken") || sessionStorage.getItem("authToken");
  const accountType =
    localStorage.getItem("accountType") === "provider" ||
    sessionStorage.getItem("accountType") === "provider";
  return (
    <>
      {authToken && accountType ? (
        <Outlet />
      ) : (
        <Navigate to="/login" replace={true} />
      )}
    </>
  );
};

export default AuthenticatedProviderRoutes;
