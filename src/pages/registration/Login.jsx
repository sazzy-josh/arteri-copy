import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import MobileNavbar from "../../components/MobileNavbar";
import "../../styles/registration.css";
import RegistrationRedirect2 from "../../utils/registration-utils/RegistrationRedirect2";

// images
import LogoWhite from "../../assets/logo-white.svg";
import image1 from "../../assets/images/image-1.jpg";
// import icons
import AlertIcon from "../../assets/icons/alert-info.svg";
import CheckIcon from "../../assets/icons/check.svg";
import Alert from "../../components/Alert";

const Login = () => {
  let navigate = useNavigate();
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoginValid, setIsLoginValid] = useState({
    email: "",
    password: "",
  });
  const [loginInputField, setLoginInputField] = useState({
    email: "",
    password: "",
  });

  // regular expressions for email and password validation
  let emailRegex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  let passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,20})/;

  // control input fields on change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginInputField({ ...loginInputField, [name]: value });
    validateInputChange(e, loginInputField);
  };
  // control input fields on submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // const newIsValid = {
    //   password: isValid.password,
    //   repeatPassword: isValid.repeatPassword,
    // };

    if (
      Object.values(isLoginValid).includes("") ||
      Object.values(isLoginValid).includes("invalid")
    ) {
      console.log(" wrong newIsValid");
      validateInputSubmit();
      return;
    } else {
      setLoginInputField({
        email: "",
        password: "",
      });
      setIsLoginValid({
        email: "",
        password: "",
      });
      setIsModalOpen(true);
    }
  };

  // validate input fields on change
  const validateInputChange = (e, loginInputField) => {
    const { name, value } = e.target;
    console.log(isLoginValid);

    // handle error onChange
    if (name === "password") {
      if (!value.match(passwordRegex) && value.length !== 0) {
        console.log("mismatch");
        setIsLoginValid((prev) => ({ ...prev, [name]: "invalid" }));
      }
      // else if (value.match(passwordRegex)) {
      //   setIsLoginValid((prev) => ({ ...prev, [name]: "valid" }));
      //   console.log("match");
      // }
      else if (value.length === 0) {
        console.log("empty");

        setIsLoginValid((prev) => ({ ...prev, [name]: "" }));
      } else {
        console.log("success");

        setIsLoginValid((prev) => ({ ...prev, [name]: "valid" }));
      }
    }
    // else {
    //   if (value.length !== 0 && value.length < 3) {
    //     setIsLoginValid((prev) => ({ ...prev, [name]: "invalid" }));
    //   } else if (value.length === 0) {
    //     setIsLoginValid((prev) => ({ ...prev, [name]: "" }));
    //   } else {
    //     setIsLoginValid((prev) => ({ ...prev, [name]: "valid" }));
    //   }
    // }

    if (name === "email") {
      if (!value.match(emailRegex) && value.length !== 0) {
        setIsLoginValid((prev) => ({ ...prev, [name]: "invalid" }));
      } else if (value.length === 0) {
        setIsLoginValid((prev) => ({ ...prev, [name]: "" }));
      } else {
        setIsLoginValid((prev) => ({ ...prev, [name]: "valid" }));
      }
    }
  };

  // ----- handle error on submit -----
  const validateInputSubmit = () => {
    const { email, password } = loginInputField;

    if (!email.match(emailRegex) || email.length === 0) {
      setIsLoginValid((prev) => ({ ...prev, email: "invalid" }));
    } else {
      setIsLoginValid((prev) => ({ ...prev, email: "valid" }));
    }
    if (!password.match(passwordRegex) || password.length === 0) {
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
                    className={`registration-input ${
                      isLoginValid.email === "invalid" && "invalid"
                    } ${isLoginValid.email === "valid" && "valid"}`}
                    name="email"
                    placeholder="Yourmail@mail.com"
                    value={loginInputField.email}
                    onChange={handleInputChange}
                  />

                  <img
                    src={AlertIcon}
                    alt=""
                    className={`registration-input-icon  ${
                      isLoginValid.email === "invalid" ? "visible" : "hidden"
                    }`}
                  />
                  <img
                    src={CheckIcon}
                    alt=""
                    className={`registration-input-icon  ${
                      isLoginValid.email === "valid" ? "visible" : "hidden"
                    }`}
                  />
                </div>
                {isLoginValid.email === "invalid" && (
                  <p className="registration-input-error ">
                    *The email you entered is invalid
                  </p>
                )}
              </label>
              <label className="mb-5 block">
                <p className="registration-input-label">Password</p>

                <div className="relative sm:w-[400px] sm:mx-auto lg:mx-0">
                  <input
                    type="password"
                    className={`registration-input ${
                      isLoginValid.password === "invalid" && "invalid"
                    } ${isLoginValid.password === "valid" && "valid"}`}
                    name="password"
                    value={loginInputField.password}
                    onChange={handleInputChange}
                  />

                  <img
                    src={AlertIcon}
                    alt=""
                    className={`registration-input-icon  ${
                      isLoginValid.password === "invalid" ? "visible" : "hidden"
                    }`}
                  />
                  <img
                    src={CheckIcon}
                    alt=""
                    className={`registration-input-icon  ${
                      isLoginValid.password === "valid" ? "visible" : "hidden"
                    }`}
                  />
                </div>
                {isLoginValid.password === "invalid" && (
                  <p className="registration-input-error ">
                    *The password should contain at least: 8 characters, one
                    uppercase, one number and one special character
                  </p>
                )}
              </label>

              <p
                className="text-right cursor-pointer text-secondary font-medium my-5 pr-3 sm:w-[400px] sm:pr-0 sm:mx-auto lg:mx-0"
                onClick={() => {
                  navigate("/forgot-password", { replace: true });
                }}
              >
                Forgot password?
              </p>
              <PrimaryButton handle={handleSubmit}>
                Login into account
              </PrimaryButton>
            </form>
            <RegistrationRedirect2 />
          </section>
        </div>
      </div>
      <Alert
        type={"success"}
        title={" Logged In!"}
        buttonText={"Go to Dashboard"}
        buttonHandle={() => navigate("/dashboard", { replace: true })}
        modalTrigger={isModalOpen}
        setModalTrigger={setIsModalOpen}
      />
    </>
  );
};

export default Login;
