import React, { useState, useEffect } from "react";
import LargeCard from "../../components/cards/LargeCard";
import Container from "../../components/container/Container";
import Header from "../../components/head/Header";
import MobileHeader from "../../components/head/MobileHeader";
import SideMenu from "../../components/nav/SideBar";
import Password from "../../components/profile/Password";
import Profile from "../../components/profile/Profile";
import Security from "../../components/profile/Security";

const Account = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showProfile, setProfile] = useState(true);
  const [showPassword, setPassword] = useState(false);
  const [showSecurity, setSecurity] = useState(false);
  return (
    <div className="w-screen">
      <div className="w-full flex flex-row justify-start items-start">
        <div className="w-1/5 hidden lg:flex md:flex">
          <SideMenu selectDash={true} />
        </div>
        <div className="lg:w-4/5 w-full">
          <Container>
            <div className="w-full my-5 lg:flex md:flex hidden">
              <Header />
            </div>
            <div className="w-screen lg:hidden md:hidden flex">
              <MobileHeader
                selectDash={true}
                open={isOpen}
                setOpen={() => setIsOpen(!isOpen)}
              />
            </div>
            {!isOpen && (
              <div className="w-full flex flex-col justify-start items-start">
                <div className="">
                  {/* <LargeCard /> */}
                  <div className="my-5">
                    <p className="text-2xl font-bold">My Account</p>
                  </div>
                </div>
                <div className="w-full">
                  <div className="w-full">
                    <div className="flex flex-row justify-start items-start w-2/3">
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
                    <hr className="w-full bg-gray-400" />
                  </div>
                </div>

                <div className="w-full">
                  {showProfile && <Profile />}
                  {showPassword && <Password />}
                  {showSecurity && <Security />}
                </div>
              </div>
            )}
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Account;
