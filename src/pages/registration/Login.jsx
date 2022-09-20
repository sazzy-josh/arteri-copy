import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import MobileNavbar from "../../components/MobileNavbar";
import "../../styles/registration.css";
import RegistrationRedirect2 from "../../utils/registration-utils/RegistrationRedirect2";
import Axios from "axios";

// images
import LogoWhite from "../../assets/logo-white.svg";
import image1 from "../../assets/images/image-1.jpg";

import { ModalContext } from "../../contexts/ModalContext";

const Login = () => {
  // preloader contexts
  const { setIsContentLoading, setIsAlertOpen, alertProps, setAlertProps } =
    useContext(ModalContext);
  let navigate = useNavigate();

  // states
  // const [authToken, setAuthToken] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  // const [alertProps, setAlertProps] = useState({
  //   type: "",
  //   title: "",
  //   subtitle: "",
  //   buttonText: "",
  // });
  // const [isModalOpen, setIsAlertOpen] = useState(false);
  const [isLoginValid, setIsLoginValid] = useState({
    identifier: "",
    password: "",
  });
  const [loginErrorMessage, setLoginErrorMessage] = useState({
    identifier: "",
    password: "",
  });
  const [loginInputField, setLoginInputField] = useState({
    identifier: "",
    password: "",
  });
  const [longLiveAuthToken, setLongLiveAuthToken] = useState(false);

  // regular expressions for email and password validation
  let emailRegex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  let passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,20})/;

  // control input fields on change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginInputField({ ...loginInputField, [name]: value });

    // form validation from the fontend
    // validateInputChange(e, loginInputField);
  };

  // control input fields on submit
  const handleSubmit = (e) => {
    setIsButtonDisabled(true);
    e.preventDefault();

    // handling form validation on form submission from the fontend
    // if (
    //   Object.values(isLoginValid).includes("") ||
    //   Object.values(isLoginValid).includes("invalid")
    // ) {
    //   validateInputSubmit();
    //   return;
    // } else {
    //   loginUser();
    // }
    loginUser();
  };

  // post formData to server
  const loginUser = async () => {
    setIsContentLoading(true);
    let formData = new FormData();
    formData.append("identifier", loginInputField.identifier);
    formData.append("password", loginInputField.password);

    // post formData to server
    try {
      const response = await Axios.post(
        "https://api.arteri.tk/api/account/log-in",
        formData
      );

      // setAuthToken(response.data.data.auth_token);
      // if (longLiveAuthToken) {
      //   localStorage.setItem("authToken", response.data.data.auth_token);
      //   localStorage.setItem("accountType", response.data.data.account_type);
      // } else {
      //   sessionStorage.setItem("authToken", response.data.data.auth_token);
      //   sessionStorage.setItem("accountType", response.data.data.account_type);
      // }

      setIsButtonDisabled(false);
      setIsContentLoading(false);
      // client received a success response (2xx)

      setLoginInputField({
        identifier: "",
        password: "",
      });
      setIsLoginValid({
        identifier: "",
        password: "",
      });
      sessionStorage.setItem("identifier", response?.data?.data?.auth_token);
      sessionStorage.setItem("keepLoggedIn", longLiveAuthToken);
      navigate("/account/verification", {
        replace: true,
      });
    } catch (err) {
      setIsButtonDisabled(false);
      setIsContentLoading(false);
      if (err.message) {
        setAlertProps((prev) => ({
          ...prev,
          type: "fail",
          title: "Ooops! Sorry",
          subtitle: err.message,
        }));
        setIsAlertOpen(true);
      }
      if (err.response) {
        // client received an error response (5xx, 4xx)

        setLoginErrorMessage({
          identifier: "",
          password: "",
        });
        setIsLoginValid({
          identifier: "",
          password: "",
        });
        for (const key in err.response.data.data.errors) {
          setLoginErrorMessage((prev) => ({
            ...prev,
            [key]: err.response.data.data.errors[key][0],
          }));
          setIsLoginValid((prev) => ({
            ...prev,
            [key]: "invalid",
          }));
        }
        setAlertProps((prev) => ({
          ...prev,
          type: "fail",
          title: "Ooops! Sorry",
          subtitle: err.response.data.data.flash_message,
        }));
        setIsAlertOpen(true);
      }
    }
  };

  // validate input fields on change
  const validateInputChange = (e, loginInputField) => {
    const { name, value } = e.target;

    // handle error onChange
    if (name === "password") {
      if (value.length === 0) {
        setIsLoginValid((prev) => ({ ...prev, [name]: "" }));
      } else {
        setIsLoginValid((prev) => ({ ...prev, [name]: "valid" }));
      }
    }

    if (name === "identifier") {
      if (value.length === 0) {
        setIsLoginValid((prev) => ({ ...prev, [name]: "" }));
      } else {
        setIsLoginValid((prev) => ({ ...prev, [name]: "valid" }));
      }
    }
  };

  // ----- handle error on submit -----
  const validateInputSubmit = () => {
    const { identifier, password } = loginInputField;

    if (identifier.length === 0) {
      setIsLoginValid((prev) => ({ ...prev, identifier: "invalid" }));
    } else {
      setIsLoginValid((prev) => ({ ...prev, identifier: "valid" }));
    }
    if (password.length === 0) {
      setIsLoginValid((prev) => ({ ...prev, password: "invalid" }));
    } else {
      setIsLoginValid((prev) => ({ ...prev, password: "valid" }));
    }
  };
  return (
    <>
      <div className=" md:flex">
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
        <div className="flex-1 lg:pl-10 md:pr-10 md:py-10 md:ml-[350px] lg:ml-[440px]">
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
          <section className="px-7 py-7">
            <h1 className="font-semibold text-3xl text-left text-gray-900 mb-14 pr-20 sm:p-0 sm:text-center md:hidden ">
              Welcome back to Arteri
            </h1>
            <form>
              <label className="mb-5 block">
                <p className="registration-input-label">
                  Email Address / Phone Number
                </p>

                <div className="relative sm:w-[400px] sm:mx-auto lg:mx-0">
                  <input
                    type="email"
                    className="registration-input"
                    name="identifier"
                    placeholder="Enter email address or phone"
                    value={loginInputField.identifier}
                    onChange={handleInputChange}
                  />
                </div>
                {/* {isLoginValid.identifier === "invalid" && (
                  <p className="registration-input-error ">
                    *The email you entered is invalid
                  </p>
                )} */}

                <p
                  className={
                    loginErrorMessage.identifier
                      ? "registration-input-error"
                      : "hidden"
                  }
                >
                  {loginErrorMessage.identifier}
                </p>
              </label>
              <label className="mb-5 block">
                <p className="registration-input-label">Password</p>

                <div className="relative sm:w-[400px] sm:mx-auto lg:mx-0">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="registration-input"
                    name="password"
                    value={loginInputField.password}
                    onChange={handleInputChange}
                  />
                  <svg
                    onClick={() => setShowPassword(!showPassword)}
                    className={`show-hide-password ${
                      !showPassword ? "hidden" : "visible"
                    }`}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.58 11.9999C15.58 13.9799 13.98 15.5799 12 15.5799C10.02 15.5799 8.42004 13.9799 8.42004 11.9999C8.42004 10.0199 10.02 8.41992 12 8.41992C13.98 8.41992 15.58 10.0199 15.58 11.9999Z"
                      stroke="#B3B3B3"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 20.27C15.53 20.27 18.82 18.19 21.11 14.59C22.01 13.18 22.01 10.81 21.11 9.39997C18.82 5.79997 15.53 3.71997 12 3.71997C8.46997 3.71997 5.17997 5.79997 2.88997 9.39997C1.98997 10.81 1.98997 13.18 2.88997 14.59C5.17997 18.19 8.46997 20.27 12 20.27Z"
                      stroke="#B3B3B3"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <svg
                    onClick={() => setShowPassword(!showPassword)}
                    className={`show-hide-password ${
                      showPassword ? "hidden" : "visible"
                    }`}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.53 9.46992L9.47004 14.5299C8.82004 13.8799 8.42004 12.9899 8.42004 11.9999C8.42004 10.0199 10.02 8.41992 12 8.41992C12.99 8.41992 13.88 8.81992 14.53 9.46992Z"
                      stroke="#B3B3B3"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17.82 5.76998C16.07 4.44998 14.07 3.72998 12 3.72998C8.46997 3.72998 5.17997 5.80998 2.88997 9.40998C1.98997 10.82 1.98997 13.19 2.88997 14.6C3.67997 15.84 4.59997 16.91 5.59997 17.77"
                      stroke="#B3B3B3"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.42004 19.5299C9.56004 20.0099 10.77 20.2699 12 20.2699C15.53 20.2699 18.82 18.1899 21.11 14.5899C22.01 13.1799 22.01 10.8099 21.11 9.39993C20.78 8.87993 20.42 8.38993 20.05 7.92993"
                      stroke="#B3B3B3"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15.5099 12.7C15.2499 14.11 14.0999 15.26 12.6899 15.52"
                      stroke="#B3B3B3"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.47 14.53L2 22"
                      stroke="#B3B3B3"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22 2L14.53 9.47"
                      stroke="#B3B3B3"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p
                  className={
                    loginErrorMessage.password
                      ? "registration-input-error"
                      : "hidden"
                  }
                >
                  {loginErrorMessage.password}
                </p>
              </label>
              <div className="sm:w-[400px] sm:pr-0 sm:mx-auto lg:mx-0 text-right">
                <p
                  className=" inline-block cursor-pointer text-secondary font-medium my-5 pr-3"
                  onClick={() => {
                    navigate("/forgot-password", { replace: true });
                  }}
                >
                  Forgot password?
                </p>
              </div>
              <label className="my-9 block sm:w-[400px] text-left mx-auto lg:mx-0 ">
                <div className="relative inline-flex justify-start items-start  ">
                  <input
                    type="checkbox"
                    className={`ml-auto hidden`}
                    name="tos_accepted"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setLongLiveAuthToken(true);
                      } else {
                        setLongLiveAuthToken(false);
                      }
                    }}
                  />
                  <div
                    className={` min-w-[24px] h-6 flex justify-center items-center rounded-md mr-2 ${
                      longLiveAuthToken
                        ? "bg-secondary"
                        : "bg-none border-2 border-gray-400"
                    }`}
                  >
                    <svg
                      className="w-4/6 h-4/6 m-auto"
                      viewBox="0 0 16 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.15381 5.23529L5.48955 9.47793L14.161 0.99265"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <p
                    className={`font-medium text-left  inline-block w-5/6 ${
                      longLiveAuthToken ? "text-secondary" : "text-gray-400"
                    }`}
                  >
                    Keep me logged in
                  </p>
                </div>
              </label>
              <PrimaryButton
                handle={handleSubmit}
                isButtonDisabled={isButtonDisabled}
              >
                Login into account
              </PrimaryButton>
            </form>
            <RegistrationRedirect2 />
          </section>
        </div>
      </div>
      {/* {isContentLoading && <Preloader />} */}
      {/* <Alert
        type={alertProps.type}
        title={alertProps.title}
        subtitle={alertProps.subtitle}
        buttonText={alertProps.buttonText}
        buttonHandle={() => navigate("/dashboard", { replace: true })}
        modalTrigger={isModalOpen}
        setModalTrigger={setIsAlertOpen}
      /> */}
    </>
  );
};

export default Login;
