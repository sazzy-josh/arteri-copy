import React, { useState, useEffect } from "react";
import LargeCard from "../../components/cards/LargeCard";
import Container from "../../components/container/Container";
import Header from "../../components/head/Header";
import MobileHeader from "../../components/head/MobileHeader";
import ProviderMobileHeader from "../../components/head/ProviderMobileHeader";
import ProviderSideMenu from "../../components/nav/ProviderSideBar";
import SideMenu from "../../components/nav/SideBar";
import Notification from "../../components/Notification";
import ProviderDashboardWrapper from "../../layouts/ProviderDashboardWrapper";

const ProviderNotifications = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ProviderDashboardWrapper selectedSidebarLink={"notification"}>
      <div className="w-full flex flex-row justify-start items-start">
        <div className="w-full">
          <Notification />
        </div>
      </div>
    </ProviderDashboardWrapper>
  );
};

export default ProviderNotifications;
