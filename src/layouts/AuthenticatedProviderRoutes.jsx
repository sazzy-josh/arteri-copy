import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const AuthenticatedProviderRoutes = () => {
  return (
    <>
      {(localStorage.getItem("authToken") ||
        sessionStorage.getItem("authToken")) &&
      (localStorage.getItem("accountType") === "provider" ||
        sessionStorage.getItem("accountType") === "provider") ? (
        <Outlet />
      ) : (
        <Navigate to="/back" replace={true} />
      )}
    </>
  );
};

export default AuthenticatedProviderRoutes;
