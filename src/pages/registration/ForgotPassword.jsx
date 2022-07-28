import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import MobileNavbar from "../../components/MobileNavbar";
import "../../styles/registration.css";
import RegistrationRedirect2 from "../../utils/registration-utils/RegistrationRedirect2";

// images
import LogoWhite from "../../assets/logo-white.svg";
import image3 from "../../assets/images/image-1.jpg";

const ForgotPassword = () => {
  let navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [isResetEmail, setIsResetEmail] = useState("");
  //   let navigate = useNavigate();
  return (
    <div className=" md:flex">
      <div className=" w-[350px]  h-auto fixed hidden md:block lg:w-[440px] md:h-screen">
        <div className="w-full h-full absolute z-10 bg-primary opacity-75 "></div>
        <div className="w-full h-full absolute z-30 pl-6 pr-3 py-10 md:flex md:flex-col md:items-start md:justify-between">
          <img src={LogoWhite} alt="" className="relative z-20" />
          <h1 className="text-white text-4xl font-bold text-left mb-10 w-full relative z-20 lg:text-5xl">
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
              <label className="mb-5 block">
                <p className="registration-input-label">Email Address</p>

                <input
                  type="text"
                  className="registration-input"
                  name="email"
                  value={email}
                  placeholder="yourmail@mail.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <div className="my-8">
                <PrimaryButton handle={() => setIsResetEmail(email)}>
                  Send Instructions
                </PrimaryButton>
              </div>
              <RegistrationRedirect2 />
            </>
          ) : (
            <>
              <h1
                className="font-semibold text-3xl text-left text-gray-900 mb-6"
                //   onClick={() => Linking.openURL("email@gmail.com")}
              >
                Check your mail
              </h1>
              <h3 className="text-left mb-16">
                We have sent password recovery instructions to your mail
              </h3>

              <div className="my-8">
                <PrimaryButton>Open Mail</PrimaryButton>
              </div>
              <div className="mb-6">
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
                <p className="text-black font-medium mt-2 mb-2">Or</p>
                <p className="text-secondary font-medium cursor-pointer">
                  Resend Instructions
                </p>
              </div>
            </>
          )}
        </section>
      </div>
    </div>
  );
};

export default ForgotPassword;
