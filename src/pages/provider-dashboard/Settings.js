import React, { useState, useEffect } from "react";
import LargeCard from "../../components/cards/LargeCard";
import Container from "../../components/container/Container";
import Header from "../../components/head/Header";
import MobileHeader from "../../components/head/MobileHeader";
import ProviderMobileHeader from "../../components/head/ProviderMobileHeader";
import ProviderSideMenu from "../../components/nav/ProviderSideBar";
import SideMenu from "../../components/nav/SideBar";
import Password from "../../components/profile/Password";
import Profile from "../../components/profile/Profile";
import Security from "../../components/profile/Security";
import ProviderKeys from "../../components/settings/ProviderKeys";
import ProviderTools from "../../components/settings/ProviderTools";

const ProviderSettings = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTools, setTools] = useState(true);
  const [showKeys, setKeys] = useState(false);
  return (
    <div className="w-screen">
      <div className="w-full flex flex-row justify-start items-start">
        <div className="w-1/5 hidden lg:flex md:flex h-screen fixed mr-auto">
          <ProviderSideMenu selectSettings={true} />
        </div>
        <div className="lg:w-4/5 w-full ml-auto">
          <Container>
            <div className="w-full my-5 lg:flex md:flex hidden">
              <Header />
            </div>
            <div className="w-screen lg:hidden md:hidden flex">
              <ProviderMobileHeader
                selectSettings={true}
                open={isOpen}
                setOpen={() => setIsOpen(!isOpen)}
              />
            </div>
            {!isOpen && (
              <div className="w-full flex flex-col justify-start items-start">
                <div className="">
                  {/* <LargeCard /> */}
                  <div className="my-5 lg:px-0 px-5">
                    <p className="text-2xl font-bold">Settings</p>
                  </div>
                </div>
                <div className="w-full">
                  <div className="w-full">
                    <div className="flex flex-row justify-start items-start whitespace-nowrap w-2/3">
                      <p
                        onClick={() => {
                          setTools(true);
                          setKeys(false);
                        }}
                        className={
                          showTools
                            ? `w-full text-left pl-5 font-semibold cursor-pointer border-b-2 border-b-orange-500 pb-5`
                            : `w-full text-left pl-5 font-semibold cursor-pointer pb-5`
                        }
                      >
                        Tools Settings
                      </p>
                      <p
                        onClick={() => {
                          setTools(false);
                          setKeys(true);
                        }}
                        className={
                          showKeys
                            ? `w-full text-left pl-5 font-semibold cursor-pointer border-b-2 border-b-orange-500 pb-5`
                            : `w-full text-left pl-5 font-semibold cursor-pointer pb-5`
                        }
                      >
                        BNPL Keys
                      </p>
                     
                    </div>
                    <hr className="w-full bg-gray-400 lg:mx-0 mx-5" />
                  </div>
                </div>

                <div className="w-full lg:px-0 px-5">
                  {showTools && <ProviderTools />}
                  {showKeys && <ProviderKeys />}
                </div>
              </div>
            )}
          </Container>
        </div>
      </div>
    </div>
  );
};

export default ProviderSettings;
