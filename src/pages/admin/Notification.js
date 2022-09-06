import React, { useState, useEffect } from "react";
import LargeCard from "../../components/cards/LargeCard";
import Container from "../../components/container/Container";
import Header from "../../components/head/Header";
import MobileHeader from "../../components/head/MobileHeader";
import ProviderMobileHeader from "../../components/head/ProviderMobileHeader";
import ProviderSideMenu from "../../components/nav/ProviderSideBar";
import SideMenu from "../../components/nav/SideBar";
import Notification from "../../components/Notification";

const ProviderNotifications = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-screen">
      <div className="w-full flex flex-row justify-start items-start">
        <div className="w-1/5 hidden lg:flex md:flex h-screen fixed mr-auto">
          <ProviderSideMenu selectNot={true} />
        </div>
        <div className="lg:w-4/5 w-full ml-auto">
          <Container>
            <div className="w-full my-5 lg:flex md:flex hidden">
              <Header />
            </div>
            <div className="w-screen lg:hidden md:hidden flex">
              <ProviderMobileHeader
                selectDash={true}
                open={isOpen}
                setOpen={() => setIsOpen(!isOpen)}
              />
            </div>
            {!isOpen && (
              <div className="w-full flex flex-row justify-start items-start">
                <div className="w-full">
                  <Notification />
                </div>
              </div>
            )}
          </Container>
        </div>
      </div>
    </div>
  );
};

export default ProviderNotifications;
