import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";

// components
import PrimaryButton from "../../components/buttons/PrimaryButton";
import { RegistrationContext } from "../../contexts/authContext/RegistrationContext";
import "../../styles/registration.css";
import RegistrationRedirect from "./RegistrationRedirect";

// import icons
import AlertIcon from "../../assets/icons/alert-info.svg";
import CheckIcon from "../../assets/icons/check.svg";
import Alert from "../../components/Alert";
import { PreloaderContext } from "../../contexts/PreloaderContext";

const OtherDetails = () => {
  // contexts
  const { setIsContentLoading } = useContext(PreloaderContext);

  let navigate = useNavigate();
  const [alertProps, setAlertProps] = useState({
    type: "",
    title: "",
    subtitle: "",
    buttonText: "",
  });
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    account_type,
    setSidebarImage,
    isValid,
    setIsValid,
    inputField,
    setInputField,
    inputErrorMessage,
    setInputErrorMessage,
  } = useContext(RegistrationContext);

  // regular expressions for password validation from the frontend
  // let passwordRegex =
  //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,20})/;

  // function to register users with email address and phone number
  const registerUserWithEmail = async () => {
    setIsContentLoading(true);

    let formData = new FormData();
    formData.append("first_name", inputField.first_name);
    formData.append("last_name", inputField.last_name);
    formData.append("email", inputField.email);
    formData.append("gender", inputField.gender);
    formData.append("phone", inputField.phone);
    formData.append("password", inputField.password);
    formData.append("password_confirmation", inputField.password_confirmation);
    formData.append("tos_accepted", inputField.tos_accepted);
    formData.append("account_type", account_type);

    // post formData to server
    try {
      const response = await Axios.post(
        "https://api.arteri.tk/api/account/create/with-email-address",
        formData
      );
      setIsContentLoading(false);

      setIsButtonDisabled(false);
      console.log("registered new user with email address");

      // client received a success response (2xx)
      localStorage.setItem("authToken", response.data.data.auth_token);
      localStorage.setItem("account_type", response.data.data.account_type);
      //navigate("/dashboard", { replace: true });
      if (response.data.data.account_type === "personal") {
        navigate("/dashboard", { replace: true });
      } else {
        navigate("/provider-dashboard", { replace: true });
      }

      setInputField({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        gender: "male",
        password: "",
        password_confirmation: "",
      });
      setIsValid({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        gender: "",
        password: "",
        password_confirmation: "",
      });
    } catch (err) {
      setIsButtonDisabled(false);
      setIsContentLoading(false);

      setInputErrorMessage({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        gender: "male",
        password: "",
        password_confirmation: "",
        tos_accepted: "",
      });
      setIsValid({
        first_name: "valid",
        last_name: "valid",
        email: "valid",
        phone: "valid",
        gender: "valid",
        password: "valid",
        password_confirmation: "valid",
      });
      for (const key in err.response.data.data.errors) {
        // console.log(err.response.data.data.errors[key][0]);
        console.log(key);
        setInputErrorMessage((prev) => ({
          ...prev,
          [key]: err.response.data.data.errors[key][0],
        }));
        setIsValid((prev) => ({
          ...prev,
          [key]: "invalid",
        }));
      }
      if (
        inputErrorMessage.first_name ||
        inputErrorMessage.last_name ||
        inputErrorMessage.email ||
        inputErrorMessage.phone
      ) {
        navigate("/register/details", { replace: true });
      } else {
        setIsModalOpen(true);
        setAlertProps((prev) => ({
          ...prev,
          type: "fail",
          title: "Ooops! Sorry",
          subtitle: err.response.data.data.flash_message,
        }));
      }
    }
  };

  // function to register users with phone number
  const registerUserWithPhone = async () => {
    setIsContentLoading(true);
    let formData = new FormData();
    formData.append("first_name", inputField.first_name);
    formData.append("last_name", inputField.last_name);
    formData.append("gender", inputField.gender);
    formData.append("phone", inputField.phone);
    formData.append("password", inputField.password);
    formData.append("password_confirmation", inputField.password_confirmation);
    formData.append("tos_accepted", inputField.tos_accepted);
    formData.append("account_type", account_type);

    // post formData to server
    try {
      const response = await Axios.post(
        "https://api.arteri.tk/api/account/create/with-phone-number",
        formData
      );
      setIsContentLoading(false);
      setIsButtonDisabled(false);
      console.log("registered new user with phone number");

      // client received a success response (2xx)
      localStorage.setItem("authToken", response.data.data.auth_token);
      navigate("/dashboard", { replace: true });

      setInputField({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        gender: "male",
        password: "",
        password_confirmation: "",
      });
      setIsValid({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        gender: "",
        password: "",
        password_confirmation: "",
      });
      setInputErrorMessage({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        gender: "male",
        password: "",
        password_confirmation: "",
        tos_accepted: "",
      });
    } catch (err) {
      // --- form validation from the frontend
      // if (err.response) {
      //   // client received an error response (5xx, 4xx)
      //   let dataErrorMessage;
      //   if (err.response.data.data.errors.email) {
      //     dataErrorMessage = err.response.data.data.errors.email[0];
      //     setAlertProps((prev) => ({
      //       ...prev,
      //       type: "fail",
      //       title: "Ooops! Sorry",
      //       subtitle: dataErrorMessage,
      //     }));
      //     setIsModalOpen(true);
      //   } else if (err.response.data.data.errors.phone) {
      //     dataErrorMessage = err.response.data.data.errors.phone[0];
      //     setAlertProps((prev) => ({
      //       ...prev,
      //       type: "fail",
      //       title: "Ooops! Sorry",
      //       subtitle: dataErrorMessage,
      //     }));
      //     setIsModalOpen(true);
      //   } else {
      //     setAlertProps((prev) => ({
      //       ...prev,
      //       type: "fail",
      //       title: "Ooops! Sorry",
      //       subtitle: err.response.data.flash_message,
      //     }));
      //     setIsModalOpen(true);
      //   }
      // }
      setIsButtonDisabled(false);
      setIsContentLoading(false);
      console.log(err.response.data);
      setInputErrorMessage({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        gender: "male",
        password: "",
        password_confirmation: "",
        tos_accepted: "",
      });
      setIsValid({
        first_name: "valid",
        last_name: "valid",
        phone: "valid",
        gender: "valid",
        password: "valid",
        password_confirmation: "valid",
      });
      for (const key in err.response.data.data.errors) {
        // console.log(err.response.data.data.errors[key][0]);
        console.log(key);
        setInputErrorMessage((prev) => ({
          ...prev,
          [key]: err.response.data.data.errors[key][0],
        }));
        setIsValid((prev) => ({
          ...prev,
          [key]: "invalid",
        }));
      }

      if (
        inputErrorMessage.first_name ||
        inputErrorMessage.last_name ||
        inputErrorMessage.phone
      ) {
        navigate("/register/details", { replace: true });
      } else {
        setIsModalOpen(true);
        setAlertProps((prev) => ({
          ...prev,
          type: "fail",
          title: "Ooops! Sorry",
          subtitle: err.response.data.data.flash_message,
        }));
      }
    }
  };

  useEffect(() => {
    setSidebarImage("image2");
  }, [setSidebarImage]);

  // control input fields on change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputField({ ...inputField, [name]: value });

    // --- form validation on the frontend ---
    // validateInputChange(e, inputField);
  };

  // control input fields on submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsButtonDisabled(true);

    // --- form validation on the frontend ---

    // const newIsValid = {
    //   password: isValid.password,
    //   password_confirmation: isValid.password_confirmation,
    //   tos_accepted: isValid.tos_accepted,
    // };
    // const prevIsValid = {
    //   first_name: isValid.first_name,
    //   last_name: isValid.last_name,
    //   email: isValid.email,
    //   phone: isValid.phone,
    // };
    // if (
    //   Object.values(newIsValid).includes("") ||
    //   Object.values(newIsValid).includes("invalid")
    // ) {
    //   validateInputSubmit();
    //   return;
    // } else if (
    //   Object.values(prevIsValid).includes("") ||
    //   Object.values(prevIsValid).includes("invalid")
    // ) {
    //   navigate("/register/details", { replace: true });
    // } else {
    //   // navigate("/login", { replace: true });

    //   registerUserWithEmail();
    // }

    if (inputField.email.length === 0) {
      registerUserWithPhone();
    } else {
      registerUserWithEmail();
      console.log("hurray");
    }
  };

  // ---- validate input fields on change (validation on the frontend) ----
  // const validateInputChange = (e, inputField) => {
  //   const { name, value } = e.target;

  //   // handle error onChange
  //   if (name === "password_confirmation") {
  //     if (value !== inputField.password) {
  //       setIsValid((prev) => ({ ...prev, [name]: "invalid" }));
  //     } else if (value.length === 0) {
  //       setIsValid((prev) => ({ ...prev, [name]: "" }));
  //     } else {
  //       setIsValid((prev) => ({ ...prev, [name]: "valid" }));
  //     }
  //   } else if (name === "password") {
  //     if (!value.match(passwordRegex) && value.length !== 0) {
  //       setIsValid((prev) => ({ ...prev, [name]: "invalid" }));
  //     } else if (value.length === 0) {
  //       setIsValid((prev) => ({ ...prev, [name]: "" }));
  //     } else if (
  //       value !== inputField.password_confirmation &&
  //       inputField.password_confirmation.length !== 0
  //     ) {
  //       setIsValid((prev) => ({ ...prev, password_confirmation: "invalid" }));
  //     } else if (value.match(passwordRegex)) {
  //       setIsValid((prev) => ({ ...prev, [name]: "valid" }));
  //     } else {
  //       setIsValid((prev) => ({ ...prev, [name]: "valid" }));
  //     }
  //   } else {
  //     if (value.length !== 0 && value.length < 3) {
  //       setIsValid((prev) => ({ ...prev, [name]: "invalid" }));
  //     } else if (value.length === 0) {
  //       setIsValid((prev) => ({ ...prev, [name]: "" }));
  //     } else {
  //       setIsValid((prev) => ({ ...prev, [name]: "valid" }));
  //     }
  //   }
  // };

  // ----- handle error on submit (validation on frontend) -----
  // const validateInputSubmit = () => {
  //   const { gender, password, password_confirmation } = inputField;
  //   if (!password.match(passwordRegex) || password.length === 0) {
  //     setIsValid((prev) => ({ ...prev, password: "invalid" }));
  //   } else {
  //     setIsValid((prev) => ({ ...prev, password: "valid" }));
  //   }
  //   if (
  //     password_confirmation !== password ||
  //     password_confirmation.length === 0
  //   ) {
  //     setIsValid((prev) => ({ ...prev, password_confirmation: "invalid" }));
  //   } else {
  //     setIsValid((prev) => ({ ...prev, password_confirmation: "valid" }));
  //   }
  // };

  return (
    <>
      <section className="px-7 py-3">
        <form>
          <div className="mb-5 sm:w-[400px]  sm:mx-auto lg:mx-0">
            <p className=" registration-input-label ">Gender</p>
            <div className=" flex justify-start items-center gap-7">
              <label className="cursor-pointer">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  className="hidden"
                  // onChange={(e) => setGender(e.target.value)}
                  onChange={handleInputChange}
                />
                <span
                  className={` cursor-pointer w-7 h-7 border-2    rounded-full  inline-block relative before:absolute before:w-2/5 before:h-2/5 before:bg-primary before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full ${
                    inputField.gender === "male"
                      ? "before:inline-block border-primary"
                      : "before:hidden border-gray-400"
                  } `}
                ></span>
                <span
                  className={` capitalize inline-block font-medium ml-2  -translate-y-2 ${
                    inputField.gender === "male"
                      ? " text-primary"
                      : " text-gray-400"
                  } `}
                >
                  Male
                </span>
              </label>
              <label className="cursor-pointer">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  className="hidden"
                  // onChange={(e) => setGender(e.target.value)}
                  onChange={handleInputChange}
                />
                <span
                  className={` cursor-pointer w-7 h-7 border-2 rounded-full inline-block relative before:absolute before:w-2/5 before:h-2/5 before:bg-primary before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full ${
                    inputField.gender === "female"
                      ? "before:block border-primary"
                      : "before:hidden border-gray-400"
                  } `}
                ></span>
                <span
                  className={` capitalize inline-block font-medium ml-2  -translate-y-2 ${
                    inputField.gender === "female"
                      ? " text-primary"
                      : " text-gray-400"
                  } `}
                >
                  Female
                </span>
              </label>
            </div>
          </div>

          <label className="mb-5 block">
            <p className="registration-input-label">Password</p>

            <div className="relative sm:w-[400px] sm:mx-auto lg:mx-0">
              <input
                type={showPassword ? "text" : "password"}
                className={`registration-input ${
                  isValid.password === "invalid" && "invalid"
                } ${isValid.password === "valid" && "valid"}`}
                name="password"
                value={inputField.password}
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
                  isValid.password === "invalid" ? "visible" : "hidden"
                }`}
              />
              <img
                src={CheckIcon}
                alt=""
                className={`registration-input-icon  ${
                  isValid.password === "valid" ? "visible" : "hidden"
                }`}
              />
            </div>
            <p
              className={
                inputErrorMessage.password
                  ? "registration-input-error"
                  : "hidden"
              }
            >
              {inputErrorMessage.password}
            </p>
          </label>
          <label className="mb-5 block">
            <p className="registration-input-label">Repeat Password</p>

            <div className="relative sm:w-[400px] sm:mx-auto lg:mx-0">
              <input
                type={showRepeatPassword ? "text" : "password"}
                className={`registration-input ${
                  isValid.password_confirmation === "invalid" && "invalid"
                } ${isValid.password_confirmation === "valid" && "valid"}`}
                name="password_confirmation"
                value={inputField.password_confirmation}
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
                  isValid.password_confirmation === "invalid"
                    ? "visible"
                    : "hidden"
                }`}
              />
              <img
                src={CheckIcon}
                alt=""
                className={`registration-input-icon  ${
                  isValid.password_confirmation === "valid"
                    ? "visible"
                    : "hidden"
                }`}
              />
            </div>
            <p
              className={
                inputErrorMessage.password_confirmation
                  ? "registration-input-error"
                  : "hidden"
              }
            >
              {inputErrorMessage.password_confirmation}
            </p>
          </label>
          <label className="mt-8 mb-3  block">
            <div className="relative flex justify-start items-start sm:w-[400px] sm:mx-auto lg:mx-0 ">
              <input
                type="checkbox"
                className={`ml-auto hidden`}
                name="tos_accepted"
                onChange={(e) => {
                  if (e.target.checked) {
                    setInputField({ ...inputField, tos_accepted: "yes" });
                    setIsValid((prev) => ({ ...prev, tos_accepted: "valid" }));
                  } else {
                    setInputField({ ...inputField, tos_accepted: "" });
                    setIsValid((prev) => ({
                      ...prev,
                      tos_accepted: "invalid",
                    }));
                  }
                }}
              />
              <div
                className={` min-w-[24px] h-6 flex justify-center items-center rounded-md mr-2 ${
                  inputField.tos_accepted === "yes"
                    ? "bg-secondary"
                    : "bg-none border-2 border-secondary"
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
              <p className="font-medium text-left text-sm inline-block w-5/6">
                I agree to Arteri{" "}
                <Link to="/" className="text-secondary">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link to="/" className="text-secondary">
                  {" "}
                  Privacy Policy
                </Link>{" "}
              </p>
            </div>
          </label>
          <p
            className={
              inputErrorMessage.tos_accepted
                ? "registration-input-error mb-2 flex gap-2 items-center"
                : "hidden"
            }
          >
            <svg
              className="w-5 h-5 inline-block"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="12"
                cy="12"
                r="11"
                stroke="#FF0000"
                stroke-width="2"
              />
              <path
                d="M12 7V12"
                stroke="#FF0000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 16V16.5"
                stroke="#FF0000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            {inputErrorMessage.tos_accepted}
          </p>
          <div className="mt-10 mb-5">
            <PrimaryButton
              handle={handleSubmit}
              isButtonDisabled={isButtonDisabled}
            >
              Create My Account
            </PrimaryButton>
          </div>
        </form>
      </section>
      <RegistrationRedirect />
      <div className="sm:w-[400px] sm:mx-auto lg:mx-0 ">
        <p className="py-2 px-3 mb-3 inline-block rounded-xl bg-blue-100 text-gray-400 font-medium">
          Account Type:
          <span className="text-primary capitalize ml-1">{account_type} </span>
        </p>
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

export default OtherDetails;
