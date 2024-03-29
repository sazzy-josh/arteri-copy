import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import PrimaryButton from "../../components/buttons/PrimaryButton";

import ConsumerDashboardWrapper from "../../layouts/ConsumerDashboardWrapper";

// import styles
import "../../styles/history.css";

const Claims = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [activeTab, setActiveTab] = useState("tab2");
  return (
    <ConsumerDashboardWrapper selectedSidebarLink={"claim"}>
      <section className="mt-5 px-5 ">
        <p className="text-3xl font-bold text-left mb-10 ">Claims History</p>
        <Outlet />
      </section>
    </ConsumerDashboardWrapper>
  );
};

export default Claims;
