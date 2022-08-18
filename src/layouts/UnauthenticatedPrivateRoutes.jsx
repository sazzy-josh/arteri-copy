import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const UnauthenticatedPrivateRoutes = () => {
  return (
    <>
      {localStorage.getItem("authToken") ||
      sessionStorage.getItem("authToken") ? (
        <Navigate to="/dashboard" replace={true} />
      ) : (
        <Outlet />
      )}
    </>
  );
};

export default UnauthenticatedPrivateRoutes;
