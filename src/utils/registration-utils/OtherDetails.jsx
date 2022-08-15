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

const OtherDetails = () => {
  let navigate = useNavigate();
  const [alertProps, setAlertProps] = useState({
    type: "",
    title: "",
    subtitle: "",
    buttonText: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    account_type,
    setSidebarImage,
    isValid,
    setIsValid,
    inputField,
    setInputField,
  } = useContext(RegistrationContext);
  const [authtToken, setAuthToken] = useState("");
  useEffect(() => {
    console.log("authtkoen state is: " + authtToken);
    localStorage.setItem("token", JSON.stringify(authtToken));
  }, [authtToken]);

  // regular expressions for password validation
  let passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,20})/;

  const registerNewUser = async () => {
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

    try {
      const response = await Axios.post(
        "https://api.arteri.tk/api/account/create/with-email-address",
        formData
      );
      console.log("response is: ", response);
      console.log(response.data);
      console.log("my token is ", response.data.data.auth_token);

      setAuthToken((prev) => response.data.data.auth_token);

      // client received a success response (2xx)
      setAlertProps((prev) => ({
        ...alertProps,
        type: "success",
        title: "Congratulations",
        subtitle: "You have successfully registered!",
        buttonText: "Go to dashboard",
      }));
      setIsModalOpen(true);
      console.log(response.data.data);
      console.log(response.data.data.auth_token);

      // setInputField({
      //   first_name: "",
      //   last_name: "",
      //   email: "",
      //   phone: "",
      //   gender: "male",
      //   password: "",
      //   password_confirmation: "",
      // });
      // setIsValid({
      //   first_name: "",
      //   last_name: "",
      //   email: "",
      //   phone: "",
      //   gender: "",
      //   password: "",
      //   password_confirmation: "",
      // });
    } catch (err) {
      if (err.response) {
        // client received an error response (5xx, 4xx)
        let errTest;
        if (err.response.data.data.errors.email) {
          errTest = err.response.data.data.errors.email[0];
          setAlertProps((prev) => ({
            ...prev,
            type: "fail",
            title: "Ooops! Sorry",
            subtitle: errTest,
          }));
          setIsModalOpen(true);
        } else if (err.response.data.data.errors.phone) {
          errTest = err.response.data.data.errors.phone[0];
          setAlertProps((prev) => ({
            ...prev,
            type: "fail",
            title: "Ooops! Sorry",
            subtitle: errTest,
          }));
          setIsModalOpen(true);
        } else {
          setAlertProps((prev) => ({
            ...prev,
            type: "fail",
            title: "Ooops! Sorry",
            subtitle: err.response.data.flash_message,
          }));
          setIsModalOpen(true);
        }
        console.log(err.response.data);
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
    validateInputChange(e, inputField);
  };

  // control input fields on submit
  const handleSubmit = (e) => {
    console.log("eweee", inputField);
    e.preventDefault();

    const newIsValid = {
      password: isValid.password,
      password_confirmation: isValid.password_confirmation,
      tos_accepted: isValid.tos_accepted,
    };
    const prevIsValid = {
      first_name: isValid.first_name,
      last_name: isValid.last_name,
      email: isValid.email,
      phone: isValid.phone,
    };
    console.log(newIsValid);
    if (
      Object.values(newIsValid).includes("") ||
      Object.values(newIsValid).includes("invalid")
    ) {
      console.log(" wrong newIsValid");
      validateInputSubmit();
      return;
    } else if (
      Object.values(prevIsValid).includes("") ||
      Object.values(prevIsValid).includes("invalid")
    ) {
      console.log("wrong preIsValid");
      navigate("/register/details", { replace: true });
    } else {
      // navigate("/login", { replace: true });

      registerNewUser();
    }
  };

  // validate input fields on change
  const validateInputChange = (e, inputField) => {
    const { name, value } = e.target;
    console.log(isValid);

    // handle error onChange
    if (name === "password_confirmation") {
      console.log("value after if" + value);

      if (value !== inputField.password) {
        setIsValid((prev) => ({ ...prev, [name]: "invalid" }));
      } else if (value.length === 0) {
        setIsValid((prev) => ({ ...prev, [name]: "" }));
      } else {
        setIsValid((prev) => ({ ...prev, [name]: "valid" }));
      }
    } else if (name === "password") {
      if (!value.match(passwordRegex) && value.length !== 0) {
        console.log("mismatch");
        setIsValid((prev) => ({ ...prev, [name]: "invalid" }));
      } else if (value.length === 0) {
        console.log("empty");

        setIsValid((prev) => ({ ...prev, [name]: "" }));
      } else if (
        value !== inputField.password_confirmation &&
        inputField.password_confirmation.length !== 0
      ) {
        console.log("mutated");

        setIsValid((prev) => ({ ...prev, password_confirmation: "invalid" }));
      } else if (value.match(passwordRegex)) {
        setIsValid((prev) => ({ ...prev, [name]: "valid" }));
        console.log("match");
      } else {
        console.log("success");

        setIsValid((prev) => ({ ...prev, [name]: "valid" }));
      }
    } else {
      if (value.length !== 0 && value.length < 3) {
        setIsValid((prev) => ({ ...prev, [name]: "invalid" }));
      } else if (value.length === 0) {
        setIsValid((prev) => ({ ...prev, [name]: "" }));
      } else {
        setIsValid((prev) => ({ ...prev, [name]: "valid" }));
      }
    }
  };

  // ----- handle error on submit -----
  const validateInputSubmit = () => {
    console.log("validate subit");
    const { gender, password, password_confirmation } = inputField;
    if (!password.match(passwordRegex) || password.length === 0) {
      setIsValid((prev) => ({ ...prev, password: "invalid" }));
    } else {
      setIsValid((prev) => ({ ...prev, password: "valid" }));
    }
    if (
      password_confirmation !== password ||
      password_confirmation.length === 0
    ) {
      console.log("submit mismatch");
      setIsValid((prev) => ({ ...prev, password_confirmation: "invalid" }));
    } else {
      console.log("submit match");
      setIsValid((prev) => ({ ...prev, password_confirmation: "valid" }));
    }
  };

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
                type="password"
                className={`registration-input ${
                  isValid.password === "invalid" && "invalid"
                } ${isValid.password === "valid" && "valid"}`}
                name="password"
                value={inputField.password}
                onChange={handleInputChange}
              />

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
            {isValid.password === "invalid" && (
              <p className="registration-input-error ">
                *The password should contain at least: 8 characters, one
                uppercase, one number and one special character
              </p>
            )}
          </label>
          <label className="mb-5 block">
            <p className="registration-input-label">Repeat Password</p>

            <div className="relative sm:w-[400px] sm:mx-auto lg:mx-0">
              <input
                type="password"
                className={`registration-input ${
                  isValid.password_confirmation === "invalid" && "invalid"
                } ${isValid.password_confirmation === "valid" && "valid"}`}
                name="password_confirmation"
                value={inputField.password_confirmation}
                onChange={handleInputChange}
              />

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
            {isValid.password_confirmation === "invalid" && (
              <p className="registration-input-error ">
                *The password does not match
              </p>
            )}
          </label>
          <label className="my-8  block">
            <div className="relative flex justify-start items-start sm:w-[400px] sm:mx-auto lg:mx-0 ">
              <input
                type="checkbox"
                className={`ml-auto hidden`}
                name="tos_accepted"
                onChange={(e) => {
                  if (e.target.checked) {
                    setInputField({ ...inputField, tos_accepted: "yes" });
                    setIsValid((prev) => ({ ...prev, tos_accepted: "valid" }));

                    console.log("checked", inputField);
                  } else {
                    setInputField({ ...inputField, tos_accepted: "" });
                    setIsValid((prev) => ({
                      ...prev,
                      tos_accepted: "invalid",
                    }));

                    console.log("unchecked", inputField);
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

              {/* <img
                src={AlertIcon}
                alt=""
                className={`registration-input-icon  ${
                  isValid.password_confirmation === "invalid" ? "visible" : "hidden"
                }`}
              />
              <img
                src={CheckIcon}
                alt=""
                className={`registration-input-icon  ${
                  isValid.password_confirmation === "valid" ? "visible" : "hidden"
                }`}
              /> */}
            </div>
          </label>
          <div className="mt-10 mb-5">
            <PrimaryButton handle={handleSubmit}>
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
