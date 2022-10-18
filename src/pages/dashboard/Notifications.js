import React, { useState, useEffect } from "react";
import LargeCard from "../../components/cards/LargeCard";
import Container from "../../components/container/Container";
import Header from "../../components/head/Header";
import MobileHeader from "../../components/head/MobileHeader";
import SideMenu from "../../components/nav/SideBar";
import Notification from "../../components/Notification";
import ConsumerDashboardWrapper from "../../layouts/ConsumerDashboardWrapper";

const Notifications = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ConsumerDashboardWrapper>
      <div className="w-full flex flex-row justify-start items-start">
        <div className="w-full">
          <Notification />
        </div>
      </div>
    </ConsumerDashboardWrapper>
  );
};

export default Notifications;
