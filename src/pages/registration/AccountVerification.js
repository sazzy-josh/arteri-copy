import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

// import components
import Preloader from "../../components/Preloader";
import PrimaryButton from "../../components/buttons/PrimaryButton";

// import styles
import "../../styles/registration.css";

// images
import LogoWhite from "../../assets/logo-white.svg";
import image1 from "../../assets/images/image-1.jpg";
import MobileNavbar from "../../components/MobileNavbar";

// context
import { useContext } from "react";
import { ModalContext } from "../../contexts/ModalContext";

const AccountVerification = () => {
  // contexts
  const { setIsAlertOpen, alertProps, setAlertProps } =
    useContext(ModalContext);

  let navigate = useNavigate();
  const loggedInToken = sessionStorage.getItem("identifier");
  const keepLoggedIn = JSON.parse(sessionStorage.getItem("keepLoggedIn"));
  console.log("uid", loggedInToken);
  console.log("span", keepLoggedIn);
  const [isFetching, setIsFetching] = useState(true);
  // const [isUserPhone, setIsUserPhone] = useState(null);
  const [isUserEmail, setIsUserEmail] = useState(null);
  const [userAccountType, setUserAccountType] = useState(null);

  const [phoneVerificationCode, setPhoneVerificationCode] = useState("");
  const [emailVerificationCode, setEmailVerificationCode] = useState("");

  useEffect(() => {
    const getUserDetails = async () => {
      console.log("fetching user details");
      try {
        // if (localStorage.getItem("authToken")) {
        //   loggedInToken = localStorage.getItem("authToken");
        // } else {
        //   loggedInToken = sessionStorage.getItem("authToken");
        // }
        const response = await Axios.get(
          "https://api.arteri.tk/api/user/profile/get",
          { headers: { Authorization: `Bearer ${loggedInToken}` } }
        );
        console.log("fetch successful", response);
        setIsFetching(false);
        setUserAccountType(response.data.data.user_profile.account_type);
        if (response.data.data.user_profile.email) {
          setIsUserEmail(true);
        }
        // if (response.data.data.user_profile.phone) {
        //   setIsUserPhone(true);
        // }
        console.log(loggedInToken);

        // checks if the signed-in user is verified or not
        if (
          response.data?.data?.user_profile?.phone_verified_at ||
          response.data?.data?.user_profile?.email_verified_at
        ) {
          console.log("span2", keepLoggedIn);

          saveAndRedirectUser(
            keepLoggedIn,
            response.data?.data?.user_profile?.account_type
          );
          console.log("user is verified and is longlive");

          sessionStorage.removeItem("identifier");
          sessionStorage.removeItem("keepLoggedIn");
        } else {
          console.log("user is not verified");
        }
      } catch (err) {
        setIsFetching(false);
        // localStorage.removeItem("authToken");
        // sessionStorage.removeItem("authToken");
        // localStorage.removeItem("accountType");
        // sessionStorage.removeItem("accountType");
        // navigate("/login", { replace: true });
        console.log("error fetching with token");
        console.log(err);
        navigate("/login", { replace: true });
      }
    };
    loggedInToken ? getUserDetails() : navigate("/login", { replace: true });
  }, []);

  // save users to browser storage and navigate them to their corresponding
  const saveAndRedirectUser = (keepLoggedIn, accountType) => {
    if (keepLoggedIn && accountType === "personal") {
      console.log("consumer checks longlive");
      // if the user ticks the  "keep-me-loggedIn" checkbox and user is a consumer
      localStorage.setItem("authToken", loggedInToken);
      localStorage.setItem("accountType", accountType);
      navigate("/dashboard", { replace: true });
    } else if (keepLoggedIn && accountType === "provider") {
      console.log("provider checks longlive");

      // if the user ticks the  "keep-me-loggedIn" checkbox and user is a provider
      localStorage.setItem("authToken", loggedInToken);
      localStorage.setItem("accountType", accountType);
      navigate("/provider-dashboard", { replace: true });
    } else if (!keepLoggedIn && accountType === "personal") {
      console.log("consumer unchecks longlive");

      // if the user does not tick the  "keep-me-loggedIn" checkbox and user is a consumer

      sessionStorage.setItem("authToken", loggedInToken);
      sessionStorage.setItem("accountType", accountType);
      navigate("/dashboard", { replace: true });
    } else if (!keepLoggedIn && accountType === "provider") {
      console.log("provider checks longlive");

      // if the user does not tick the  "keep-me-loggedIn" checkbox and user is a provider

      sessionStorage.setItem("authToken", loggedInToken);
      sessionStorage.setItem("accountType", accountType);
      navigate("/provider-dashboard", { replace: true });
    } else {
      console.log("error in the logic");
    }
  };

  const verifyUserPhone = async () => {
    setIsFetching(true);
    let formData = new FormData();
    formData.append("verification_code", phoneVerificationCode);
    try {
      // if (localStorage.getItem("authToken")) {
      //   loggedInToken = localStorage.getItem("authToken");
      // } else {
      //   loggedInToken = sessionStorage.getItem("authToken");
      // }
      const response = await Axios.post(
        "https://api.arteri.tk/api/account/phone-number/verify",
        formData,
        { headers: { Authorization: `Bearer ${loggedInToken}` } }
      );
      saveAndRedirectUser(keepLoggedIn, userAccountType);
      setIsFetching(false);
      sessionStorage.removeItem("identifier");
      sessionStorage.removeItem("keepLoggedIn");
      // if (userAccountType === "personal") {
      //   localStorage.setItem("authToken", loggedInToken);
      //   localStorage.setItem(
      //     "accountType",
      //     response.data.data.user_profile.account_type
      //   );
      //   navigate("/dashboard", { replace: true });
      // } else if (userAccountType === "provider") {
      //   navigate("/provider-dashboard", { replace: true });
      // }

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
      // if (localStorage.getItem("authToken")) {
      //   loggedInToken = localStorage.getItem("authToken");
      // } else {
      //   loggedInToken = sessionStorage.getItem("authToken");
      // }
      const response = await Axios.post(
        "https://api.arteri.tk/api/account/email-address/verify",
        formData,
        { headers: { Authorization: `Bearer ${loggedInToken}` } }
      );
      saveAndRedirectUser(keepLoggedIn, userAccountType);

      setIsFetching(false);
      sessionStorage.removeItem("identifier");
      sessionStorage.removeItem("keepLoggedIn");

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
      // if (localStorage.getItem("authToken")) {
      //   loggedInToken = localStorage.getItem("authToken");
      // } else {
      //   loggedInToken = sessionStorage.getItem("authToken");
      // }
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
      // if (localStorage.getItem("authToken")) {
      //   loggedInToken = localStorage.getItem("authToken");
      // } else {
      //   loggedInToken = sessionStorage.getItem("authToken");
      // }
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

  return (
    <>
      {isFetching ? (
        <Preloader />
      ) : (
        <main className=" md:flex">
          <div className=" w-[350px]  h-auto fixed hidden md:block lg:w-[440px] md:h-screen">
            <div className="w-full h-full absolute z-10 bg-primary opacity-75 "></div>
            <div className="w-full h-full absolute z-30 pl-6 pr-3 py-10 md:flex md:flex-col md:items-start md:justify-between lg:pl-10">
              <img src={LogoWhite} alt="" className="relative z-20" />
              <h1 className="text-white text-4xl font-bold text-left mb-10 w-full relative z-20 lg:text-5xl lg:leading-tight">
                Welcome <br /> Back To Arteri
              </h1>
            </div>
            {<img src={image1} alt="" className="object-cover  h-full" />}
          </div>
          <section className=" flex-1 lg:pl-10 md:pr-10 md:py-10 md:ml-[350px] lg:ml-[440px]">
            <p
              className="text-right mb-10 hidden font-semibold cursor-pointer text-secondary md:mt-2 md:block "
              onClick={() => {
                navigate("/login", { replace: true });
              }}
            >
              {" "}
              Go back to Homepage
            </p>
            <MobileNavbar />
            <div className="p-7">
              <h1 className="font-semibold text-3xl text-left text-gray-900 mb-6 sm:text-center  lg:text-left">
                Account Verification
              </h1>

              <h3 className="text-left mb-8 sm:text-center  sm:mx-auto sm:w-[500px] md:w-[400px] lg:text-left lg:mx-0">
                Verification codes have been sent to your email address and
                phone number. Enter them in the respective boxes below.
              </h3>
              <form>
                <label className="mb-5 block">
                  <p className="registration-input-label ">Phone Number</p>
                  <div className=" sm:w-[400px] sm:mx-auto lg:mx-0">
                    <input
                      type="text"
                      className="w-full ml-0 h-14  text-sm border-2 rounded-xl my-3 block mx-auto pl-4 pr-10 font-normal border-gray-300 outline-none sm:w-[400px] sm:mx-auto md:pr-14 md:text-base lg:mx-0 focus:border-blue-500 "
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
                      <div className=" sm:w-[400px] sm:mx-auto lg:mx-0">
                        <input
                          type="text"
                          className="w-full ml-0 h-14  text-sm border-2 rounded-xl my-3 block mx-auto pl-4 pr-10 font-normal border-gray-300 outline-none sm:w-[400px] sm:mx-auto md:pr-14 md:text-base lg:mx-0 focus:border-blue-500"
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
          </section>
        </main>
      )}
    </>
  );
};

export default AccountVerification;
