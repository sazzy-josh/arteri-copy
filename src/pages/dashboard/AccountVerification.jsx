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
              <>
                <h1 className="font-semibold text-3xl text-left text-gray-900 mb-6 sm:text-center  lg:text-left">
                  Account Verification
                </h1>
                <h3 className="text-left mb-16 sm:text-center  lg:text-left md:w-[400px] md:mx-auto lg:mx-0">
                  Verification codes have been sent to your email address and
                  phone number. Enter them in the respective boxes below.
                </h3>
                <form>
                  <label className="mb-5 block">
                    <div className="relative sm:w-[400px] sm:mx-auto lg:mx-0">
                      <input
                        type="text"
                        className={`registration-input `}
                        name="email"
                        placeholder="Enter code here"
                        // value={verificationCode}
                        // onChange={(e) => {
                        //   setVerificationCode(e.target.value);
                        // }}
                      />
                    </div>
                  </label>
                  <div className="my-8">
                    <PrimaryButton
                    //   handle={(e) => {
                    //     e.preventDefault();
                    //     if (verificationCode.length > 0) {
                    //       // setIsVerified(true);
                    //       console.log("Verified");
                    //       navigate(`/create-new-password/${verificationCode}`, {
                    //         replace: true,
                    //       });
                    //     }
                    //   }}
                    >
                      Create New Password
                    </PrimaryButton>
                  </div>
                </form>
                <div className="mb-6 lg:w-[450px]">
                  <div className="lg:flex lg:items-center lg:gap-3">
                    <p className="text-black font-medium mt-2 mb-2">
                      Didn't receive any email?
                    </p>
                    <p
                      className="text-secondary font-medium cursor-pointer"
                      //   onClick={() => {
                      //     setIsResetEmail("");
                      //     setEmail("");
                      //   }}
                    >
                      Try another email address
                    </p>
                  </div>
                  <div className="lg:flex lg:items-center lg:justify-center lg:gap-3 ">
                    <p className="text-black font-medium mt-2 mb-2">Or</p>
                    <p
                      //   onClick={() => {
                      //     if (email) {
                      //       requestPasswordReset();
                      //     } else {
                      //       setIsResetEmail("");
                      //     }
                      //   }}
                      className="text-secondary font-medium cursor-pointer"
                    >
                      Resend Instructions
                    </p>
                  </div>
                </div>
              </>
            )}
          </Container>
        </div>
      </div>
    </div>
  );
};

export default AccountVerification;
