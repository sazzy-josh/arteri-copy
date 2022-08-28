import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import MobileNavbar from "../../components/MobileNavbar";
import "../../styles/registration.css";
import RegistrationRedirect2 from "../../utils/registration-utils/RegistrationRedirect2";
import Axios from "axios";

// images
import LogoWhite from "../../assets/logo-white.svg";
import image1 from "../../assets/images/image-1.jpg";
// import icons
import AlertIcon from "../../assets/icons/alert-info.svg";
import CheckIcon from "../../assets/icons/check.svg";
import Alert from "../../components/Alert";

const Login = () => {
  let navigate = useNavigate();
  const [authToken, setAuthToken] = useState("");
  const [alertProps, setAlertProps] = useState({
    type: "",
    title: "",
    subtitle: "",
    buttonText: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
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
      if (longLiveAuthToken) {
        localStorage.setItem("authToken", response.data.data.auth_token);
      } else {
        sessionStorage.setItem("authToken", response.data.data.auth_token);
      }

      // client received a success response (2xx)
      setAlertProps((prev) => ({
        ...alertProps,
        type: "success",
        // title: "Congratulations",
        title: "Logged in",
      }));
      setIsModalOpen(true);

      setLoginInputField({
        identifier: "",
        password: "",
      });
      setIsLoginValid({
        identifier: "",
        password: "",
      });
      navigate("/dashboard", { replace: true });
    } catch (err) {
      if (err.response) {
        // client received an error response (5xx, 4xx)
        console.log(err.response.data);

        setLoginErrorMessage({
          identifier: "",
          password: "",
        });
        setIsLoginValid({
          identifier: "",
          password: "",
        });
        for (const key in err.response.data.data.errors) {
          // console.log(err.response.data.data.errors[key][0]);
          console.log(key);
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
        setIsModalOpen(true);
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
                <p className="registration-input-label">Email Address</p>

                <div className="relative sm:w-[400px] sm:mx-auto lg:mx-0">
                  <input
                    type="email"
                    className="registration-input"
                    name="identifier"
                    placeholder="Yourmail@mail.com"
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
                    type="password"
                    className="registration-input"
                    name="password"
                    value={loginInputField.password}
                    onChange={handleInputChange}
                  />
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
              <PrimaryButton handle={handleSubmit}>
                Login into account
              </PrimaryButton>
            </form>
            <RegistrationRedirect2 />
          </section>
        </div>
      </div>
      <Alert
        type={alertProps.type}
        title={alertProps.title}
        subtitle={alertProps.subtitle}
        buttonText={alertProps.buttonText}
        buttonHandle={() => navigate("/dashboard", { replace: true })}
        modalTrigger={isModalOpen}
        setModalTrigger={setIsModalOpen}
      />
    </>
  );
};

export default Login;
