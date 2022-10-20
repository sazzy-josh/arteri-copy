import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import MobileNavbar from "../../components/MobileNavbar";
import "../../styles/registration.css";
import RegistrationRedirect2 from "../../utils/registration-utils/RegistrationRedirect2";
import Axios from "axios";

// images
import LogoWhite from "../../assets/logo-white.svg";
import image3 from "../../assets/images/image-1.jpg";
// import icons
import AlertIcon from "../../assets/icons/alert-info.svg";
import CheckIcon from "../../assets/icons/check.svg";
import { ModalContext } from "../../contexts/ModalContext";

const ForgotPassword = () => {
  // contexts
  const { setIsContentLoading, setIsAlertOpen, alertProps, setAlertProps } =
    useContext(ModalContext);

  let navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState("");
  const [inputErrorMessage, setInputErrorMessage] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [isResetEmail, setIsResetEmail] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  // form validation from the frontend
  // const handleInputChange = (e) => {
  //   setEmail(e.target.value);
  //   if (!e.target.value.match(emailRegex) && e.target.value.length !== 0) {
  //     setIsEmailValid("invalid");
  //   } else if (e.target.value.length === 0) {
  //     setIsEmailValid("");
  //   } else {
  //     setIsEmailValid("valid");
  //   }
  // };

  // ---
  // const requestPasswordReset = async () => {
  //   if (isEmailValid === "valid") {
  //     let formData = new FormData();
  //     formData.append("identifier", email);

  //     // post formData to server
  //     try {
  //       const response = await Axios.post(
  //         "https://api.arteri.tk/api/account/password/request-reset",
  //         formData
  //       );

  //       // setEmail(() => "");
  //       setIsResetEmail(() => email);
  //     } catch (err) {
  //       if (err.response) {
  //         // client received an error response (5xx, 4xx)
  //         setAlertProps((prev) => ({
  //           ...prev,
  //           type: "fail",
  //           title: "Ooops! Sorry",
  //           subtitle: err.response.data.data.flash_message,
  //         }));
  //         setIsAlertOpen(true);
  //       }
  //     }
  //   } else {

  //     setIsEmailValid("invalid");
  //   }
  // };

  // ----
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   // isEmailValid === "valid"
  //   //   ? setIsResetEmail(email)
  //   //   : setIsEmailValid("invalid");

  // };

  const requestPasswordReset = async () => {
    setIsContentLoading(true);
    let formData = new FormData();
    formData.append("identifier", email);

    // post formData to server
    try {
      const response = await Axios.post(
        "https://api.arteri.tk/api/account/password/request-reset",
        formData
      );
      setIsContentLoading(false);

      setIsButtonDisabled(false);
      // setIsEmailValid("valid");
      setIsResetEmail(() => email);
    } catch (err) {
      setIsContentLoading(false);

      setIsButtonDisabled(false);
      if (err.response) {
        // setIsEmailValid("invalid");

        // client received an error response (5xx, 4xx)
        setAlertProps((prev) => ({
          ...prev,
          type: "fail",
          title: "Ooops! Sorry",
          subtitle: err.response.data?.data?.flash_message,

          // function () {
          //   if (err.response.data.data.errors.identifier) {
          //     return err.response.data.data.errors.identifier[0];
          //   } else {
          //     return err.response.data.data.flash_message;
          //   }
          // },
        }));

        setIsAlertOpen(true);
      }
    }
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
      <div className="bg-white flex-1 lg:pl-10 md:pr-10  md:py-10 md:ml-[350px] lg:ml-[440px]">
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
                      name="identifier"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (e.target.value) {
                          setIsButtonDisabled(false);
                        } else {
                          setIsButtonDisabled(true);
                        }
                      }}
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
                  {/* {isEmailValid === "invalid" && (
                    <p className="registration-input-error ">
                      *The email you entered is invalid
                    </p>
                  )} */}
                  <p
                    className={
                      inputErrorMessage ? "registration-input-error" : "hidden"
                    }
                  >
                    {inputErrorMessage}
                  </p>
                </label>
                <div className="my-8 sm:w-[400px] h-14 mx-auto md:mx-auto lg:mx-0">
                  <PrimaryButton
                    handle={(e) => {
                      e.preventDefault();
                      if (email) {
                        setIsButtonDisabled(true);
                        requestPasswordReset();
                      }
                    }}
                    isButtonDisabled={isButtonDisabled}
                  >
                    Send Instructions
                  </PrimaryButton>
                </div>
              </form>
              <RegistrationRedirect2 />
            </>
          ) : (
            <>
              <h1 className="font-semibold text-3xl text-left text-gray-900 mb-6 sm:text-center  lg:text-left">
                Code Verification
              </h1>
              <h3 className="text-left mb-16 sm:text-center  lg:text-left md:w-[400px] md:mx-auto lg:mx-0">
                {/* We have sent password recovery instructions to your mail */}
                We have sent password recovery instructions to your mail and
                phone number
              </h3>
              <form>
                <label className="mb-5 block">
                  <div className="relative sm:w-[400px] sm:mx-auto lg:mx-0">
                    <input
                      type="text"
                      className={`registration-input ${
                        isEmailValid === "invalid" && "invalid"
                      } ${isEmailValid === "valid" && "valid"}`}
                      name="email"
                      placeholder="Enter the code here"
                      value={verificationCode}
                      onChange={(e) => {
                        setVerificationCode(e.target.value);
                      }}
                    />

                    {/* <img
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
                    /> */}
                  </div>
                </label>
                <div className="my-8 sm:w-[400px] h-14 mx-auto md:mx-auto lg:mx-0">
                  <PrimaryButton
                    handle={(e) => {
                      e.preventDefault();
                      if (verificationCode.length > 0) {
                        // setIsVerified(true);
                        navigate(`/create-new-password/${verificationCode}`, {
                          replace: true,
                        });
                      }
                    }}
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
                  <p
                    onClick={() => {
                      if (email) {
                        requestPasswordReset();
                      } else {
                        setIsResetEmail("");
                      }
                    }}
                    className="text-secondary font-medium cursor-pointer"
                  >
                    Resend Instructions
                  </p>
                </div>
              </div>
            </>
          )}
        </section>

        {/* <Alert
          type={alertProps.type}
          title={alertProps.title}
          subtitle={alertProps.subtitle}
          modalTrigger={isModalOpen}
          setModalTrigger={setIsAlertOpen}
        /> */}
      </div>
    </div>
  );
};

export default ForgotPassword;
