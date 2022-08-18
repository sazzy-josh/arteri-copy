import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const AuthenticatedPrivateRoutes = () => {
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

export default AuthenticatedPrivateRoutes;
