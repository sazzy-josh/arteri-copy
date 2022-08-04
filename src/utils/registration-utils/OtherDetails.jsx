import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    accountType,
    setSidebarImage,
    isValid,
    setIsValid,
    inputField,
    setInputField,
  } = useContext(RegistrationContext);

  // regular expressions for password validation
  let passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])|(?=.*[!@#\$%\^&\*])(?=.{8,20})/;

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
    e.preventDefault();

    const newIsValid = {
      password: isValid.password,
      repeatPassword: isValid.repeatPassword,
    };
    const prevIsValid = {
      firstname: isValid.firstname,
      lastname: isValid.lastname,
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
      // alert("Hurray");
      setInputField({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        gender: "male",
        password: "",
        repeatPassword: "",
      });
      setIsValid({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        gender: "",
        password: "",
        repeatPassword: "",
      });
      setIsModalOpen(true);
    }
  };

  // validate input fields on change
  const validateInputChange = (e, inputField) => {
    const { name, value } = e.target;
    console.log(isValid);

    // handle error onChange
    if (name === "repeatPassword") {
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
      } else if (value.match(passwordRegex)) {
        setIsValid((prev) => ({ ...prev, [name]: "valid" }));
        console.log("match");
      } else if (
        value !== inputField.repeatPassword &&
        inputField.repeatPassword.length !== 0
      ) {
        console.log("mutated");

        setIsValid((prev) => ({ ...prev, repeatPassword: "invalid" }));
      } else if (value.length === 0) {
        console.log("empty");

        setIsValid((prev) => ({ ...prev, [name]: "" }));
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
    const { gender, password, repeatPassword } = inputField;
    if (!password.match(passwordRegex) || password.length === 0) {
      setIsValid((prev) => ({ ...prev, password: "invalid" }));
    } else {
      setIsValid((prev) => ({ ...prev, password: "valid" }));
    }
    if (repeatPassword !== password || repeatPassword.length === 0) {
      console.log("submit mismatch");
      setIsValid((prev) => ({ ...prev, repeatPassword: "invalid" }));
    } else {
      console.log("submit match");

      setIsValid((prev) => ({ ...prev, repeatPassword: "valid" }));
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
          {/* {gender} */}
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
                *The password should contain at least: <br /> 8 characters, one
                uppercase and one number
              </p>
            )}
          </label>
          <label className="mb-5 block">
            <p className="registration-input-label">Repeat Password</p>

            <div className="relative sm:w-[400px] sm:mx-auto lg:mx-0">
              <input
                type="password"
                className={`registration-input ${
                  isValid.repeatPassword === "invalid" && "invalid"
                } ${isValid.repeatPassword === "valid" && "valid"}`}
                name="repeatPassword"
                value={inputField.repeatPassword}
                onChange={handleInputChange}
              />

              <img
                src={AlertIcon}
                alt=""
                className={`registration-input-icon  ${
                  isValid.repeatPassword === "invalid" ? "visible" : "hidden"
                }`}
              />
              <img
                src={CheckIcon}
                alt=""
                className={`registration-input-icon  ${
                  isValid.repeatPassword === "valid" ? "visible" : "hidden"
                }`}
              />
            </div>
            {isValid.repeatPassword === "invalid" && (
              <p className="registration-input-error ">
                *The password does not match
              </p>
            )}
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
          <span className="text-primary capitalize ml-1">{accountType} </span>
        </p>
      </div>
      <Alert
        type={"success"}
        title={" Congratulations!"}
        subtitle={"Your account has been created successfully"}
        buttonText={"Go to Dashboard"}
        buttonHandle={() => navigate("/dashboard", { replace: true })}
        modalTrigger={isModalOpen}
        setModalTrigger={setIsModalOpen}
      />
    </>
  );
};

export default OtherDetails;
