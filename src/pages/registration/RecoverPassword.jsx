import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import MobileNavbar from "../../components/MobileNavbar";
import "../../styles/registration.css";
import Axios from "axios";

// images
import LogoWhite from "../../assets/logo-white.svg";
import image3 from "../../assets/images/image-1.jpg";
// import icons
import AlertIcon from "../../assets/icons/alert-info.svg";
import CheckIcon from "../../assets/icons/check.svg";
import Alert from "../../components/Alert";

const RecoverPassword = () => {
  let navigate = useNavigate();
  let { code } = useParams();
  let passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,20})/;
  const [recoverInputField, setRecoverInputField] = useState({
    password: "",
    password_confirmation: "",
  });
  const [isRecoverValid, setIsRecoverValid] = useState({
    password: "",
    password_confirmation: "",
  });
  const [isPasswordMatch, setIsPasswordMatch] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [alertProps, setAlertProps] = useState({
    type: "",
    title: "",
    subtitle: "",
  });

  // control input fields on change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRecoverInputField({ ...recoverInputField, [name]: value });
    validateInputChange(e, recoverInputField);
  };
  // validate input fields on change
  const validateInputChange = (e, recoverInputField) => {
    const { name, value } = e.target;

    if (name === "password_confirmation") {
      if (value !== recoverInputField.password) {
        setIsPasswordMatch((prev) => "false");
        setIsRecoverValid((prev) => ({ ...prev, [name]: "invalid" }));
      } else if (value.length === 0) {
        setIsRecoverValid((prev) => ({ ...prev, [name]: "" }));
      } else {
        setIsPasswordMatch((prev) => "true");

        setIsRecoverValid((prev) => ({ ...prev, [name]: "valid" }));
      }
    } else if (name === "password") {
      if (!value.match(passwordRegex) && value.length !== 0) {
        console.log("mismatch");
        setIsRecoverValid((prev) => ({ ...prev, [name]: "invalid" }));
      } else if (value.length === 0) {
        console.log("empty");

        setIsRecoverValid((prev) => ({ ...prev, [name]: "" }));
      } else if (
        value !== recoverInputField.password_confirmation &&
        recoverInputField.password_confirmation.length !== 0
      ) {
        console.log("mutated");

        setIsRecoverValid((prev) => ({
          ...prev,
          password_confirmation: "invalid",
        }));
      } else if (value.match(passwordRegex)) {
        setIsRecoverValid((prev) => ({ ...prev, [name]: "valid" }));
        console.log("match");
      } else {
        console.log("success");

        setIsRecoverValid((prev) => ({ ...prev, [name]: "valid" }));
      }
    }
  };
  // control input fields on submit
  const handleSubmit = async (e) => {
    console.log("eweee", recoverInputField);
    e.preventDefault();

    if (
      Object.values(isRecoverValid).includes("") ||
      Object.values(isRecoverValid).includes("invalid")
    ) {
      return;
    } else {
      // setRecoverInputField({
      //   password: "",
      //   password_confirmation: "",
      // });
      // setIsRecoverValid({
      //   password: "",
      //   password_confirmation: "",
      // });

      setIsButtonDisabled(true);
      let formData = new FormData();
      formData.append("verification_code", code);
      formData.append("password", recoverInputField.password);
      formData.append(
        "password_confirmation",
        recoverInputField.password_confirmation
      );

      // post formData to server
      try {
        const response = await Axios.post(
          "https://api.arteri.tk/api/account/password/reset",
          formData
        );

        navigate("/login", { replace: true });
        setIsButtonDisabled(false);
      } catch (err) {
        setIsButtonDisabled(false);
        if (err.response) {
          // client received an error response (5xx, 4xx)

          setAlertProps((prev) => ({
            ...prev,
            type: "fail",
            title: "Ooops! Sorry",
            subtitle: err.response.data.data.flash_message,
          }));
          setIsModalOpen(true);
        }
      }
    }
  };

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
          <h1 className="font-semibold text-3xl text-left text-gray-900 mb-6 sm:mx-auto sm:w-[500px] sm:text-center md:w-[400px] md:text-left lg:mx-0 ">
            Create New Password
          </h1>

          <h3 className="text-left mb-12 sm:text-center sm:mx-auto sm:w-[500px] md:w-[400px] md:text-left lg:mx-0 ">
            Your new password must be different from the old password
          </h3>

          <form>
            <label className="mb-5 block">
              <p className="registration-input-label">Password</p>
              <div className="relative sm:w-[400px] sm:mx-auto lg:mx-0">
                <input
                  type={showPassword ? "text" : "password"}
                  className={`registration-input ${
                    isRecoverValid.password === "invalid" && "invalid"
                  } ${isRecoverValid.password === "valid" && "valid"}`}
                  name="password"
                  value={recoverInputField.password}
                  onChange={handleInputChange}
                />

                {/* show password/ hide password icons */}
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

                {/* check/error icons */}
                <img
                  src={AlertIcon}
                  alt=""
                  className={`registration-input-icon  ${
                    isRecoverValid.password === "invalid" ? "visible" : "hidden"
                  }`}
                />
                <img
                  src={CheckIcon}
                  alt=""
                  className={`registration-input-icon  ${
                    isRecoverValid.password === "valid" ? "visible" : "hidden"
                  }`}
                />
              </div>
            </label>
            <div className="bg-[#EAF2FB] rounded-xl p-4 mb-6 sm:w-[400px] sm:mx-auto lg:mx-0">
              <p
                className={`text-sm mb-3  font-medium text-left ${
                  /\d/.test(recoverInputField.password)
                    ? "text-primary"
                    : "text-[#B3B3B3]"
                } `}
              >
                Passoword must contain Numbers
              </p>
              <p
                className={`text-sm mb-3  font-medium text-left ${
                  /(?=.*[a-z])(?=.*[A-Z])/.test(recoverInputField.password)
                    ? "text-primary"
                    : "text-[#B3B3B3]"
                } `}
              >
                Passoword must contain uppercase and lowercase alphabets
              </p>
              <p
                className={`text-sm mb-3  font-medium text-left ${
                  /(?=.*[!@#\$%\^&\*])/.test(recoverInputField.password)
                    ? "text-primary"
                    : "text-[#B3B3B3]"
                } `}
              >
                Passoword must contain Special Characters
              </p>
              {/* <p
                className={`text-sm mb-3  font-medium text-left  text-[#B3B3B3]`}
              >
                Passoword must contain Numbers
              </p> */}
              {/* <p className="text-sm mb-3 text-primary font-medium text-left">
                Passoword must contain uppercase and lowercase alphabets
              </p> */}
              {/* <p className="text-sm mb-3 text-primary font-medium text-left">
                Passoword must contain Special Characters
              </p> */}
            </div>
            <label className="mb-5 block">
              <p className="registration-input-label">Repeat Password</p>

              <div className="relative sm:w-[400px] sm:mx-auto lg:mx-0">
                <input
                  type={showRepeatPassword ? "text" : "password"}
                  className={`registration-input ${
                    isRecoverValid.password_confirmation === "invalid" &&
                    "invalid"
                  } ${
                    isRecoverValid.password_confirmation === "valid" && "valid"
                  }`}
                  name="password_confirmation"
                  value={recoverInputField.password_confirmation}
                  onChange={handleInputChange}
                />

                {/* show password/ hide password icons */}

                <svg
                  onClick={() => setShowRepeatPassword(!showRepeatPassword)}
                  className={`show-hide-password ${
                    !showRepeatPassword ? "hidden" : "visible"
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
                  onClick={() => setShowRepeatPassword(!showRepeatPassword)}
                  className={`show-hide-password ${
                    showRepeatPassword ? "hidden" : "visible"
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

                {/* check/error icons */}
                <img
                  src={AlertIcon}
                  alt=""
                  className={`registration-input-icon  ${
                    isRecoverValid.password_confirmation === "invalid"
                      ? "visible"
                      : "hidden"
                  }`}
                />
                <img
                  src={CheckIcon}
                  alt=""
                  className={`registration-input-icon  ${
                    isRecoverValid.password_confirmation === "valid"
                      ? "visible"
                      : "hidden"
                  }`}
                />
              </div>
            </label>

            <div className="bg-[#EAF2FB] rounded-xl p-4 sm:w-[400px] sm:mx-auto lg:mx-0">
              <p
                className={` font-medium text-left text-sm ${
                  recoverInputField.password ===
                  recoverInputField.password_confirmation
                    ? "text-primary"
                    : "text-[#B3B3B3]"
                } `}
              >
                Both pasword match
              </p>
            </div>

            {/* {isPasswordMatch === "true" && (
              <div className="bg-[#EAF2FB] rounded-xl p-4 sm:w-[400px] sm:mx-auto lg:mx-0">
                <p className=" font-medium text-left text-sm text-[#B3B3B3]">
                  Both pasword match
                </p>
              </div>
            )} */}
            {/* {isPasswordMatch === "false" && (
              <div className="bg-[#EAF2FB] rounded-xl p-4 sm:w-[400px] sm:mx-auto lg:mx-0">
                <p className=" font-medium text-left text-sm text-[#B3B3B3]">
                  Both pasword does not match
                </p>
              </div>
            )} */}
            <div className="my-8">
              <PrimaryButton
                handle={handleSubmit}
                isButtonDisabled={isButtonDisabled}
              >
                Reset Password
              </PrimaryButton>
            </div>
          </form>
        </section>
      </div>
      <Alert
        type={alertProps.type}
        title={alertProps.title}
        subtitle={alertProps.subtitle}
        modalTrigger={isModalOpen}
        setModalTrigger={setIsModalOpen}
      />
    </div>
  );
};

export default RecoverPassword;
