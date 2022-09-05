import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const AuthenticatedConsumerRoutes = () => {
  const authToken =
    localStorage.getItem("authToken") || sessionStorage.getItem("authToken");
  const accountType =
    localStorage.getItem("accountType") === "personal" ||
    sessionStorage.getItem("accountType") === "personal";
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

export default AuthenticatedConsumerRoutes;
