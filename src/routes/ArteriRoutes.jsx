import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// import Home from "../pages/Home";
import Registration from "../pages/registration/Registration";
import AccountType from "../utils/AccountType";
import Details from "../utils/Details";

const ArteriRoutes = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/register/type" replace={true} />}
        />
        <Route path="register" element={<Registration />}>
          <Route path="type" element={<AccountType />} />
          <Route path="details" element={<Details />} />
          <Route path="details-2" element={<h1>other details</h1>} />
        </Route>
      </Routes>
    </>
  );
};

export default ArteriRoutes;
