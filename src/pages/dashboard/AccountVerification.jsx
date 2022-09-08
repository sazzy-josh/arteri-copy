import React, { useContext, useState, useEffect } from "react";
import Axios from "axios";
// import { NavLink, Outlet } from "react-router-dom";

// import components
import PrimaryButton from "../../components/buttons/PrimaryButton";
import Container from "../../components/container/Container";
import Header from "../../components/head/Header";
import MobileHeader from "../../components/head/MobileHeader";
import SideMenu from "../../components/nav/SideBar";
// import { PreloaderContext } from "../../contexts/PreloaderContext";

// import styles
import "../../styles/registration.css";
import { Navigate, useNavigate } from "react-router-dom";
import Preloader from "../../components/Preloader";
import Alert from "../../components/Alert";

const AccountVerification = () => {
  let navigate = useNavigate();
  const [isFetching, setIsFetching] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [isUserPhone, setIsUserPhone] = useState(null);
  const [isUserEmail, setIsUserEmail] = useState(null);
  const [isUserVerified, setIsUserVerified] = useState(null);

  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [alertProps, setAlertProps] = useState({
    type: "",
    title: "",
    subtitle: "",
    buttonText: "",
  });
  const [phoneVerificationCode, setPhoneVerificationCode] = useState("");
  const [emailVerificationCode, setEmailVerificationCode] = useState("");
  let loggedInToken;
  const getUserDetails = async () => {
    try {
      if (localStorage.getItem("authToken")) {
        loggedInToken = localStorage.getItem("authToken");
      } else {
        loggedInToken = sessionStorage.getItem("authToken");
      }
      const response = await Axios.get(
        "https://api.arteri.tk/api/user/profile/get",
        { headers: { Authorization: `Bearer ${loggedInToken}` } }
      );
      console.log(response.data);
      console.log(response.data.data.user_profile.email);
      console.log(response.data.data.user_profile.phone);
      setIsFetching(false);
      if (response.data.data.user_profile.email) {
        setIsUserEmail(true);
      }
      if (response.data.data.user_profile.phone) {
        setIsUserPhone(true);
      }
      if (
        response.data.data.user_profile.phone_verified_at ||
        response.data.data.user_profile.email_verified_at
      ) {
        setIsUserVerified(true);
      }
    } catch (err) {
      setIsFetching(false);

      console.log(err.response);
      // if (err.response) {
      // }
    }
  };

  const verifyUserPhone = async () => {
    setIsFetching(true);
    let formData = new FormData();
    formData.append("verification_code", phoneVerificationCode);
    try {
      if (localStorage.getItem("authToken")) {
        loggedInToken = localStorage.getItem("authToken");
      } else {
        loggedInToken = sessionStorage.getItem("authToken");
      }
      const response = await Axios.post(
        "https://api.arteri.tk/api/account/phone-number/verify",
        formData,
        { headers: { Authorization: `Bearer ${loggedInToken}` } }
      );
      setIsFetching(false);

      console.log(response);
    } catch (err) {
      setIsFetching(false);
      setIsAlertOpen(true);
      setAlertProps((prev) => ({
        ...alertProps,
        type: "fail",
        title: "Oops!",
        subtitle: err?.response?.data?.data?.flash_message,
      }));

      console.log(err.response);
    }
  };
  const verifyUserEmail = async () => {
    setIsFetching(true);

    let formData = new FormData();
    formData.append("verification_code", emailVerificationCode);
    try {
      if (localStorage.getItem("authToken")) {
        loggedInToken = localStorage.getItem("authToken");
      } else {
        loggedInToken = sessionStorage.getItem("authToken");
      }
      const response = await Axios.post(
        "https://api.arteri.tk/api/account/email-address/verify",
        formData,
        { headers: { Authorization: `Bearer ${loggedInToken}` } }
      );
      setIsFetching(false);

      console.log(response);
    } catch (err) {
      console.log(err.response);
      setIsFetching(false);
      setIsAlertOpen(true);
      setAlertProps((prev) => ({
        ...alertProps,
        type: "fail",
        title: "Oops!",
        subtitle: err?.response?.data?.data?.flash_message,
      }));
    }
  };
  const resendPhoneCode = async () => {
    setIsFetching(true);

    try {
      if (localStorage.getItem("authToken")) {
        loggedInToken = localStorage.getItem("authToken");
      } else {
        loggedInToken = sessionStorage.getItem("authToken");
      }
      const response = await Axios.post(
        "https://api.arteri.tk/api/account/phone-number/resend-verification-code",
        {},
        { headers: { Authorization: `Bearer ${loggedInToken}` } }
      );
      setIsFetching(false);
      setIsAlertOpen(true);
      setAlertProps((prev) => ({
        ...alertProps,
        type: "success",
        title: "Congratulations!",
        subtitle: response?.data?.data?.flash_message,
      }));

      console.log(response);
    } catch (err) {
      console.log(err.response);
      setIsFetching(false);
      setIsAlertOpen(true);
      setAlertProps((prev) => ({
        ...alertProps,
        type: "fail",
        title: "Oops!",
        subtitle: err?.response?.data?.data?.flash_message,
      }));
    }
  };
  const resendEmailCode = async () => {
    setIsFetching(true);

    try {
      if (localStorage.getItem("authToken")) {
        loggedInToken = localStorage.getItem("authToken");
      } else {
        loggedInToken = sessionStorage.getItem("authToken");
      }
      const response = await Axios.post(
        "https://api.arteri.tk/api/account/email-address/resend-verification-code",
        {},
        { headers: { Authorization: `Bearer ${loggedInToken}` } }
      );
      setIsFetching(false);
      setIsAlertOpen(true);
      setAlertProps((prev) => ({
        ...alertProps,
        type: "success",
        title: "Congratulations!",
        subtitle: response?.data?.data?.flash_message,
      }));

      console.log(response);
    } catch (err) {
      console.log(err.response);
      setIsFetching(false);
      setIsAlertOpen(true);
      setAlertProps((prev) => ({
        ...alertProps,
        type: "fail",
        title: "Oops!",
        subtitle: err?.response?.data?.data?.flash_message,
      }));
    }
  };

  useEffect(() => getUserDetails, []);

  return (
    <>
      {isFetching ? (
        <Preloader />
      ) : (
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
                      Verification codes have been sent to your email address
                      and phone number. Enter them in the respective boxes
                      below.
                    </h3>
                    <form>
                      <label className="mb-5 block">
                        <p className="registration-input-label ">
                          Phone Number
                        </p>
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
                          isButtonDisabled={!phoneVerificationCode}
                          handle={(e) => {
                            e.preventDefault();
                            verifyUserPhone();
                          }}
                        >
                          Verify Phone Number
                        </PrimaryButton>
                      </div>
                    </form>
                    <div className="mb-6 lg:w-[450px]">
                      <div className="flex flex-col justify-center items-center gap-2 lg:flex-row lg:justify-start lg:gap-3">
                        <p className=" inline-block text-black font-medium mt-2 mb-2">
                          Didn't receive any code?
                        </p>
                        <p
                          className=" inline-block text-secondary font-medium cursor-pointer"
                          onClick={resendPhoneCode}
                        >
                          Resend verification code
                        </p>
                      </div>
                    </div>

                    {/* verify user email address */}
                    {isUserEmail && (
                      <>
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
                              isButtonDisabled={!emailVerificationCode}
                              handle={(e) => {
                                e.preventDefault();
                                verifyUserEmail();
                              }}
                            >
                              Verify Email
                            </PrimaryButton>
                          </div>
                        </form>
                        <div className="mb-6 lg:w-[450px]">
                          <div className="flex flex-col justify-center items-center gap-2 lg:flex-row lg:justify-start lg:gap-3">
                            <p className=" text-black font-medium mt-2 mb-2">
                              Didn't receive any code?
                            </p>
                            <p
                              className=" text-secondary font-medium cursor-pointer"
                              onClick={resendEmailCode}
                            >
                              Resend verification code
                            </p>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                )}
              </Container>
            </div>
          </div>
        </div>
      )}
      <Alert
        type={alertProps.type}
        title={alertProps.title}
        subtitle={alertProps.subtitle}
        modalTrigger={isAlertOpen}
        setModalTrigger={setIsAlertOpen}
      />
    </>
  );
};

export default AccountVerification;
