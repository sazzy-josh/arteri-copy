import React, { useState } from "react";
import SideMenu from "../components/nav/SideBar";
import Header from "../components/head/Header";
import PropTypes from "prop-types";

import { ReactComponent as Cancel } from "../assets/icons/close-btn-blue.svg";
import ProviderSideMenu from "../components/nav/ProviderSideBar";

const ProviderDashboardWrapper = ({ selectedSidebarLink, children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="w-full h-full flex flex-row justify-start items-start">
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
      <ProviderSideMenu />
      {/* <SideMenu
        isSidebarOpen={isSidebarOpen}
        selectedSidebarLink={selectedSidebarLink}
      /> */}

      <div className="w-full  md:ml-[245px] md:px-5 lg:px-10  duration-500">
        <Header setIsSidebarOpen={setIsSidebarOpen} />
        Joshua: dashboard wrapper
        {/* dashboard content goes here */}
        {children}
      </div>
    </div>
  );
};
ProviderDashboardWrapper.propTypes = {
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

export default ProviderDashboardWrapper;
