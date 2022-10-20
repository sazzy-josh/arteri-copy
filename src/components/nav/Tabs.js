import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import "../../styles/navigation.css";

const Tabs = ({ tabsArray = [] }) => {
  return (
    <div className="px-5 flex justify-start items-center gap-5 flex-wrap md:flex-nowrap md:justify-start mb-8 md:border-b border-gray-200">
      {tabsArray.map((item, index) => (
        <NavLink key={index} to={item.path} className="tab">
          {item.name}
        </NavLink>
      ))}
    </div>
  );
};
Tabs.propTypes = {
  tabsArray: PropTypes.arrayOf(PropTypes.object),
};
export default Tabs;
