import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import MobileNavbar from "../../components/MobileNavbar";
import "../../styles/registration.css";
import RegistrationRedirect2 from "../../utils/registration-utils/RegistrationRedirect2";

// images
import LogoWhite from "../../assets/logo-white.svg";
import image3 from "../../assets/images/image-1.jpg";
// import icons
import AlertIcon from "../../assets/icons/alert-info.svg";
import CheckIcon from "../../assets/icons/check.svg";

const ForgotPassword = () => {
  let navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState("");
  const [isResetEmail, setIsResetEmail] = useState("");
  const handleInputChange = (e) => {
    setEmail(e.target.value);
    if (!e.target.value.match(emailRegex) && e.target.value.length !== 0) {
      setIsEmailValid("invalid");
    } else if (e.target.value.length === 0) {
      setIsEmailValid("");
    } else {
      setIsEmailValid("valid");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    isEmailValid === "valid"
      ? setIsResetEmail(email)
      : setIsEmailValid("invalid");
  };

  // Regex for email validation
  let emailRegex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  return (
    <div className=" md:flex">
      <div className=" w-[350px]  h-auto fixed hidden md:block lg:w-[440px] md:h-screen">
        <div className="w-full h-full absolute z-10 bg-primary opacity-75 "></div>
        <div className="w-full h-full absolute z-30 pl-6 pr-3 py-10 md:flex md:flex-col md:items-start md:justify-between lg:pl-10">
          <img src={LogoWhite} alt="" className="relative z-20" />
          <h1 className="text-white text-4xl font-bold text-left mb-10 w-full relative z-20 lg:text-5xl lg:leading-tight">
            Welcome <br /> Back To Arteri
          </h1>
        </div>
        <img src={image3} alt="" className="object-cover  h-full " />
      </div>
      <div className="flex-1 lg:pl-10 md:pr-10  md:py-10 md:ml-[350px] lg:ml-[440px]">
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
        <section className="p-7">
          {!isResetEmail ? (
            <>
              <h1 className="font-semibold text-3xl text-left text-gray-900 mb-6 sm:mx-auto sm:text-center md:hidden">
                Welcome back <br /> to Arteri
              </h1>
              <h1 className="font-semibold text-4xl text-left text-gray-900 mb-6 hidden md:block md:text-center lg:text-left">
                Forgot Password
              </h1>
              <h3 className="text-left mb-12 sm:text-center sm:mx-auto sm:w-[500px] md:w-[400px] lg:text-left lg:mx-0 ">
                Enter the email associated with your account and we will send
                you and instructions to reset your password
              </h3>
              <form>
                <label className="mb-5 block">
                  <p className="registration-input-label">Email Address</p>

                  <div className="relative sm:w-[400px] sm:mx-auto lg:mx-0">
                    <input
                      type="email"
                      className={`registration-input ${
                        isEmailValid === "invalid" && "invalid"
                      } ${isEmailValid === "valid" && "valid"}`}
                      name="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={handleInputChange}
                    />

                    <img
                      src={AlertIcon}
                      alt=""
                      className={`registration-input-icon  ${
                        isEmailValid === "invalid" ? "visible" : "hidden"
                      }`}
                    />
                    <img
                      src={CheckIcon}
                      alt=""
                      className={`registration-input-icon  ${
                        isEmailValid === "valid" ? "visible" : "hidden"
                      }`}
                    />
                  </div>
                  {isEmailValid === "invalid" && (
                    <p className="registration-input-error ">
                      *The email you entered is invalid
                    </p>
                  )}
                </label>
                <div className="my-8">
                  <PrimaryButton handle={handleSubmit}>
                    Send Instructions
                  </PrimaryButton>
                </div>
              </form>
              <RegistrationRedirect2 />
            </>
          ) : (
            <>
              <h1 className="font-semibold text-3xl text-left text-gray-900 mb-6 sm:text-center  lg:text-left">
                Check your mail
              </h1>
              <h3 className="text-left mb-16 sm:text-center  lg:text-left md:w-[400px] md:mx-auto lg:mx-0">
                We have sent password recovery instructions to your mail
              </h3>

              <div className="my-8">
                <PrimaryButton
                  handle={() =>
                    navigate("/create-new-password", { replace: true })
                  }
                >
                  Open Mail
                </PrimaryButton>
              </div>
              <div className="mb-6 lg:w-[450px]">
                <div className="lg:flex lg:items-center lg:gap-3">
                  <p className="text-black font-medium mt-2 mb-2">
                    Didn't receive any email?
                  </p>
                  <p
                    className="text-secondary font-medium cursor-pointer"
                    onClick={() => {
                      setIsResetEmail("");
                      setEmail("");
                    }}
                  >
                    Try another email address
                  </p>
                </div>
                <div className="lg:flex lg:items-center lg:justify-center lg:gap-3 ">
                  <p className="text-black font-medium mt-2 mb-2">Or</p>
                  <p className="text-secondary font-medium cursor-pointer">
                    Resend Instructions
                  </p>
                </div>
              </div>
            </>
          )}
        </section>
      </div>
    </div>
  );
};

export default ForgotPassword;
