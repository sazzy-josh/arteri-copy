import React, { useState } from "react";
import PrimaryButton from "../../components/buttons/PrimaryButton";
// import { NavLink, Outlet } from "react-router-dom";

// import components
import Container from "../../components/container/Container";
import Header from "../../components/head/Header";
import MobileHeader from "../../components/head/MobileHeader";
import SideMenu from "../../components/nav/SideBar";

// import styles
import "../../styles/registration.css";

const AccountVerification = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [phoneVerificationCode, setPhoneVerificationCode] = useState("");
  const [emailVerificationCode, setEmailVerificationCode] = useState("");
  return (
    <div className="w-screen">
      <div className="w-full flex flex-row justify-start items-start">
        <div className="w-1/5 hidden lg:flex md:flex h-screen fixed mr-auto">
          <SideMenu selectAccount={true} />
        </div>
        <div className="lg:w-4/5 w-full ml-auto">
          <Container>
            <div className="w-full my-5 lg:flex md:flex hidden">
              <Header />
            </div>
            <div className="w-screen lg:hidden md:hidden flex">
              <MobileHeader
                selectAccount={true}
                open={isOpen}
                setOpen={() => setIsOpen(!isOpen)}
              />
            </div>
            {!isOpen && (
              <div className="p-5 md:ml-16 lg:ml-20">
                <h1 className="font-semibold text-3xl text-left text-gray-900 mb-6 sm:text-center  lg:text-left">
                  Account Verification
                </h1>
                <h3 className="text-left mb-8 sm:text-center  lg:text-left md:w-[400px] md:mx-auto lg:mx-0">
                  Verification codes have been sent to your email address and
                  phone number. Enter them in the respective boxes below.
                </h3>
                <form>
                  <label className="mb-5 block">
                    <p className="registration-input-label ">Phone Number</p>
                    <div className="relative sm:w-[400px] sm:mx-auto lg:mx-0">
                      <input
                        type="text"
                        className={`registration-input`}
                        name="tel"
                        placeholder="Enter code here"
                        value={phoneVerificationCode}
                        onChange={(e) => {
                          setPhoneVerificationCode(e.target.value);
                        }}
                      />
                    </div>
                  </label>
                  <div className="my-8">
                    <PrimaryButton
                      handle={(e) => {
                        e.preventDefault();
                        console.log("verify phone number");
                      }}
                    >
                      Verify Phone Number
                    </PrimaryButton>
                  </div>
                </form>
                <div className="mb-6 lg:w-[450px]">
                  <div className="lg:flex lg:items-center lg:gap-3">
                    <p className="text-black font-medium mt-2 mb-2">
                      Didn't receive any code?
                    </p>
                    <p
                      className="text-secondary font-medium cursor-pointer"
                      //   onClick={() => {
                      //     setIsResetEmail("");
                      //     setEmail("");
                      //   }}
                    >
                      Resend verification code
                    </p>
                  </div>
                </div>

                {/* verify user email address */}
                <form className="mt-10">
                  <label className="mb-5 block">
                    <p className="registration-input-label">
                      Email Address (Optional)
                    </p>
                    <div className="relative sm:w-[400px] sm:mx-auto lg:mx-0">
                      <input
                        type="text"
                        className={`registration-input`}
                        name="email"
                        placeholder="Enter code here"
                        value={emailVerificationCode}
                        onChange={(e) => {
                          setEmailVerificationCode(e.target.value);
                        }}
                      />
                    </div>
                  </label>
                  <div className="my-8">
                    <PrimaryButton
                      handle={(e) => {
                        e.preventDefault();
                        console.log("verify phone number");
                      }}
                    >
                      Verify Email
                    </PrimaryButton>
                  </div>
                </form>
                <div className="mb-6 lg:w-[450px]">
                  <div className="lg:flex lg:items-center lg:gap-3">
                    <p className="text-black font-medium mt-2 mb-2">
                      Didn't receive any code?
                    </p>
                    <p
                      className="text-secondary font-medium cursor-pointer"
                      //   onClick={() => {
                      //     setIsResetEmail("");
                      //     setEmail("");
                      //   }}
                    >
                      Resend verification code
                    </p>
                  </div>
                </div>
              </div>
            )}
          </Container>
        </div>
      </div>
    </div>
  );
};

export default AccountVerification;
