import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import MobileNavbar from "../../components/MobileNavbar";
import "../../styles/registration.css";
import RegistrationRedirect2 from "../../utils/registration-utils/RegistrationRedirect2";

// images
import LogoWhite from "../../assets/logo-white.svg";
import image1 from "../../assets/images/image-1.jpg";

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
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])|(?=.*[!@#\$%\^&\*])(?=.{8,20})/;

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
            <label className="mb-5 block">
              <p className="registration-input-label">Email Address</p>

              <input
                type="email"
                className="registration-input"
                name="email"
                placeholder="yourmail@mail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label className="mb-5 block">
              <p className="registration-input-label"> Password</p>

              <input
                type="password"
                className="registration-input"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <p
              className="text-right cursor-pointer text-secondary font-medium my-5 sm:w-[400px]  sm:mx-auto lg:mx-0"
              onClick={() => {
                navigate("/forgot-password", { replace: true });
              }}
            >
              Forgot password?
            </p>
            <PrimaryButton>Login into account</PrimaryButton>
            <RegistrationRedirect2 />
          </section>
        </div>
        `
      </div>
    </>
  );
};

export default Login;
