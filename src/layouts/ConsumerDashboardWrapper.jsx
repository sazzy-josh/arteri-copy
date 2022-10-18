import React, { useState } from "react";
import SideMenu from "../components/nav/SideBar";
import Header from "../components/head/Header";
import PropTypes from "prop-types";

import { ReactComponent as Cancel } from "../assets/icons/close-btn-blue.svg";

const ConsumerDashboardWrapper = ({ selectedSidebarLink, children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="w-full flex flex-row justify-start items-start">
      {isSidebarOpen && (
        <>
          {" "}
          <div className="bg-gray-700 transition duration-1000 fixed h-screen w-screen opacity-80 p-5 md:hidden"></div>
          <div
            onClick={() => setIsSidebarOpen(false)}
            className=" bg-white cursor-pointer w-9 h-9 rounded-md fixed top-6 right-5  flex justify-center items-center md:hidden"
          >
            <Cancel />
          </div>
        </>
      )}
      <SideMenu
        selectDash={true}
        isSidebarOpen={isSidebarOpen}
        selectedSidebarLink={selectedSidebarLink}
      />

      <div className="w-full bg-green-200 lg:bg-white md:bg-red-300 md:ml-60 md:px-5  duration-500">
        <Header setIsSidebarOpen={setIsSidebarOpen} />
        {/* dashboard content goes here */}
        {children}
      </div>
    </div>
  );
};
ConsumerDashboardWrapper.propTypes = {
  selectedSidebarLink: PropTypes.oneOf([
    "dashboard",
    "application",
    "account",
    "history",
    "claim",
    "notification",
    "help",
  ]),
};

export default ConsumerDashboardWrapper;
