import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/number-navigation.css";

const NumberPagination = () => {
  return (
    <div className="lg:flex md:justify-between md:items-start md:px-5 md:mb-4">
      <div className="my-6 md:mt-0">
        <NavLink to="/register/type" className="number-navigation">
          1
        </NavLink>
        <span className="w-20 inline-block border border-gray-400 md:w-16  "></span>
        <NavLink to="/register/details" className="number-navigation">
          2
        </NavLink>
        <span className="w-20 inline-block border  border-gray-400 md:w-16  "></span>
        <NavLink to="/register/details-2" className="number-navigation">
          3
        </NavLink>
      </div>
      <p className="hidden lg:block font-semibold text-secondary md:mt-2">
        Go back to Homepage
      </p>
    </div>
  );
};

export default NumberPagination;
