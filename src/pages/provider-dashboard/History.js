import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

// import components
import Container from "../../components/container/Container";
import Header from "../../components/head/Header";
import MobileHeader from "../../components/head/MobileHeader";
import ProviderMobileHeader from "../../components/head/ProviderMobileHeader";
import ProviderSideMenu from "../../components/nav/ProviderSideBar";
// import HistoryPageNavigation from "../../components/history/HistoryPageNavigation";
import SideMenu from "../../components/nav/SideBar";
import ProviderDashboardWrapper from "../../layouts/ProviderDashboardWrapper";

// import styles
import "../../styles/history.css";

const ProviderHistory = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [activeTab, setActiveTab] = useState("tab2");
  return (
    <ProviderDashboardWrapper selectedSidebarLink={"history" || "repay"}>
      <section className="my-5 px-5">
        <p className="text-2xl font-bold text-left mb-10">Financing History</p>
      </section>
      <Outlet />
    </ProviderDashboardWrapper>
  );
};

export default ProviderHistory;
