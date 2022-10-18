import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

// import components
import Container from "../../components/container/Container";
import Header from "../../components/head/Header";
import MobileHeader from "../../components/head/MobileHeader";
// import HistoryPageNavigation from "../../components/history/HistoryPageNavigation";
import SideMenu from "../../components/nav/SideBar";
import ConsumerDashboardWrapper from "../../layouts/ConsumerDashboardWrapper";

// import styles
import "../../styles/history.css";

const History = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ConsumerDashboardWrapper>
      <section className="my-5 px-5">
        <p className="text-2xl font-bold text-left mb-10">Financing History</p>
      </section>
      <Outlet />
    </ConsumerDashboardWrapper>
  );
};

export default History;
