import React, { useState, useEffect } from "react";
import LargeCard from "../../components/cards/LargeCard";
import Container from "../../components/container/Container";
import Header from "../../components/head/Header";
import MobileHeader from "../../components/head/MobileHeader";
import SideMenu from "../../components/nav/SideBar";
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
    <ConsumerDashboardWrapper>
      <div className="w-full flex flex-col justify-start items-start">
        <div className="">
          {/* <LargeCard /> */}
          <div className="my-5 lg:px-0 px-5">
            <p className="text-2xl font-bold">My Account</p>
          </div>
        </div>
        <div className="w-full">
          <div className="w-full">
            <div className="flex flex-row justify-start items-start whitespace-nowrap w-2/3">
              <p
                onClick={() => {
                  setProfile(true);
                  setPassword(false);
                  setSecurity(false);
                }}
                className={
                  showProfile
                    ? `w-full text-left pl-5 font-semibold cursor-pointer border-b-2 border-b-orange-500 pb-5`
                    : `w-full text-left pl-5 font-semibold cursor-pointer pb-5`
                }
              >
                Profile
              </p>
              <p
                onClick={() => {
                  setProfile(false);
                  setPassword(true);
                  setSecurity(false);
                }}
                className={
                  showPassword
                    ? `w-full text-left pl-5 font-semibold cursor-pointer border-b-2 border-b-orange-500 pb-5`
                    : `w-full text-left pl-5 font-semibold cursor-pointer pb-5`
                }
              >
                Password Settings
              </p>
              <p
                onClick={() => {
                  setProfile(false);
                  setPassword(false);
                  setSecurity(true);
                }}
                className={
                  showSecurity
                    ? `w-full text-left pl-5 font-semibold cursor-pointer border-b-2 border-b-orange-500 pb-5`
                    : `w-full text-left pl-5 font-semibold cursor-pointer pb-5`
                }
              >
                Security Settings
              </p>
            </div>
            <hr className="w-full bg-gray-400 lg:mx-0 mx-5" />
          </div>
        </div>

        <div className="w-full lg:px-0 px-5">
          {showProfile && <Profile />}
          {showPassword && <Password />}
          {showSecurity && <Security />}
        </div>
      </div>
    </ConsumerDashboardWrapper>
  );
};

export default Account;
