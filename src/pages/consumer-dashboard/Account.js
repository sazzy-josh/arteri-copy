import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import LargeCard from "../../components/cards/LargeCard";
import Container from "../../components/container/Container";
import Header from "../../components/head/Header";
import MobileHeader from "../../components/head/MobileHeader";
import SideMenu from "../../components/nav/SideBar";
import Tabs from "../../components/nav/Tabs";
import Password from "../../components/profile/Password";
import Profile from "../../components/profile/Profile";
import Security from "../../components/profile/Security";
import ConsumerDashboardWrapper from "../../layouts/ConsumerDashboardWrapper";

const Account = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showProfile, setProfile] = useState(true);
  const [showPassword, setPassword] = useState(false);
  const [showSecurity, setSecurity] = useState(false);
  return (
    <ConsumerDashboardWrapper selectedSidebarLink={"account"}>
      <div className="w-full flex flex-col justify-start items-start">
        <div className="">
          {/* <LargeCard /> */}
          <div className="my-5 lg:px-0 px-5">
            <p className="text-2xl font-bold">My Account</p>
          </div>
        </div>

        <Tabs
          tabsArray={[
            { name: "Profile", path: "/my-account/profile" },
            { name: "Password Settings", path: "/my-account/password" },
            { name: "Security Settings", path: "/my-account/security" },
          ]}
        />

        <div className="w-full lg:px-0 px-5">
          <Outlet />
          {/* {showProfile && <Profile />}
          {showPassword && <Password />}
          {showSecurity && <Security />} */}
        </div>
      </div>
    </ConsumerDashboardWrapper>
  );
};

export default Account;
