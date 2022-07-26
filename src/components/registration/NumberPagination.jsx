import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/number-navigation.css";

const NumberPagination = () => {
  return (
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
  );
};

export default NumberPagination;
