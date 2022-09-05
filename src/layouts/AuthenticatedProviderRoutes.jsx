import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const AuthenticatedProviderRoutes = () => {
  return (
    <>
      {localStorage.getItem("authToken") ||
      sessionStorage.getItem("authToken") ? (
        <Outlet />
      ) : (
        <Navigate to="/login" replace={true} />
      )}
    </>
  );
};

export default AuthenticatedProviderRoutes;
