import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import MobileNavbar from "../../components/MobileNavbar";
import "../../styles/registration.css";
import RegistrationRedirect2 from "../../utils/registration-utils/RegistrationRedirect2";
const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isResetEmail, setIsResetEmail] = useState("");
  //   let navigate = useNavigate();
  return (
    <>
      <MobileNavbar />
      <section className="p-7">
        {!isResetEmail ? (
          <>
            <h1 className="font-semibold text-3xl text-left text-gray-900 mb-6">
              Welcome back <br /> to Arteri
            </h1>
            <h3 className="text-left mb-12">
              Enter the email associated with your account and we will send you
              and instructions to reset your password
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
    </>
  );
};

export default ForgotPassword;
