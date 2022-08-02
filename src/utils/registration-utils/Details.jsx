import React, { useState, useContext, useEffect } from "react";
import "../../styles/registration.css";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import RegistrationRedirect from "./RegistrationRedirect";
import { RegistrationContext } from "../../contexts/authContext/RegistrationContext";

// import icons
import AlertIcon from "../../assets/icons/alert-info.svg";
import CheckIcon from "../../assets/icons/check.svg";

const Details = () => {
  let navigate = useNavigate();
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [email, setEmail] = useState("");
  // const [phone, setPhone] = useState("");
  const [countries, setCountries] = useState("");

  const [inputField, setInputField] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    // countries: "",
  });
  const [isValid, setIsValid] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    // countries: "",
  });
  const [isSubmit, setIsSubmit] = useState(false);

  // const [inputErrors, setInputErrors] = useState();

  // contexts
  const { accountType, setSidebarImage } = useContext(RegistrationContext);

  // set sidebar images from context
  useEffect(() => {
    setSidebarImage("image2");
  }, [setSidebarImage]);

  // fetch countries dial code
  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      });
  }, []);

  // control input fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputField({ ...inputField, [name]: value });
    validateInputChange(e, inputField);
  };

  // control input fields
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      Object.values(isValid).includes("") ||
      Object.values(isValid).includes("invalid")
    ) {
      // console.log("don't submit");
      validateInputSubmit();
      return;
    } else {
      navigate("/register/details-2", { replace: true });
      // console.log("submit");
    }
    console.log(Object.values(isValid));
  };

  let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  // validate input fields on change
  const validateInputChange = (e, inputField) => {
    const { name, value } = e.target;
    // Regex for email validation
    console.log(isValid);
    // setIsSubmit(false);

    // handle error onChange
    if (name === "email") {
      if (!e.target.value.match(pattern) && e.target.value.length !== 0) {
        // setIsSubmit(false);
        setIsValid((prev) => ({ ...prev, [name]: "invalid" }));
      } else if (value.length === 0) {
        setIsValid((prev) => ({ ...prev, [name]: "" }));
      } else {
        // setIsSubmit(true);

        setIsValid((prev) => ({ ...prev, [name]: "valid" }));
      }
    } else if (name === "phone") {
      if (value.length !== 0 && value.length < 10) {
        setIsValid((prev) => ({ ...prev, [name]: "invalid" }));
      } else if (value.length === 0) {
        setIsValid((prev) => ({ ...prev, [name]: "" }));
      } else {
        setIsValid((prev) => ({ ...prev, [name]: "valid" }));
      }
    } else {
      if (value.length !== 0 && value.length < 3) {
        // setIsSubmit(false);
        setIsValid((prev) => ({ ...prev, [name]: "invalid" }));
        console.log("short");
      } else if (value.length === 0) {
        // setIsSubmit(false);

        setIsValid((prev) => ({ ...prev, [name]: "" }));
      } else {
        // setIsSubmit(true);

        console.log("ok");
        setIsValid((prev) => ({ ...prev, [name]: "valid" }));
      }
    }

    // ----- handle error on submit -----
    // const { firstname, lastname, email, phone } = inputField;
    // if (firstname.length < 3 || firstname.length === 0) {
    //   setIsValid((prev) => ({ ...prev, firstname: "invalid" }));
    // } else {
    //   setIsValid((prev) => ({ ...prev, firstname: "valid" }));
    // }
    // if (lastname.length < 3 || lastname.length === 0) {
    //   setIsValid((prev) => ({ ...prev, lastname: "invalid" }));
    // } else {
    //   setIsValid((prev) => ({ ...prev, lastname: "valid" }));
    // }
    // if (email.length < 3 || email.length === 0) {
    //   setIsValid((prev) => ({ ...prev, email: "invalid" }));
    // } else {
    //   setIsValid((prev) => ({ ...prev, email: "valid" }));
    // }
  };

  // ----- handle error on submit -----
  const validateInputSubmit = () => {
    const { firstname, lastname, email, phone } = inputField;
    console.log(isValid);
    if (firstname.length < 3 || firstname.length === 0) {
      setIsValid((prev) => ({ ...prev, firstname: "invalid" }));
    } else {
      setIsValid((prev) => ({ ...prev, firstname: "valid" }));
    }
    if (lastname.length < 3 || lastname.length === 0) {
      setIsValid((prev) => ({ ...prev, lastname: "invalid" }));
    } else {
      setIsValid((prev) => ({ ...prev, lastname: "valid" }));
    }
    if ((!email.match(pattern) && email.length !== 0) || email.length === 0) {
      setIsValid((prev) => ({ ...prev, email: "invalid" }));
    } else {
      setIsValid((prev) => ({ ...prev, email: "valid" }));
    }
    if ((phone.length !== 0 && phone.length < 10) || phone.length === 0) {
      setIsValid((prev) => ({ ...prev, phone: "invalid" }));
    } else {
      setIsValid((prev) => ({ ...prev, phone: "valid" }));
    }
  };
  return (
    <>
      <section className="px-7 py-3">
        {/* {JSON.stringify(inputField)} */}
        {JSON.stringify(isSubmit)}
        {/* {isSubmit} */}
        <form>
          <label className="mb-5  block ">
            <p className="registration-input-label">First Name</p>
            <div className="relative">
              <input
                type="text"
                className={`registration-input ${
                  isValid.firstname === "invalid" && "invalid"
                } ${isValid.firstname === "valid" && "valid"}`}
                name="firstname"
                value={inputField.firstname}
                placeholder="Enter your first name"
                onChange={handleInputChange}
              />

              <img
                src={AlertIcon}
                alt=""
                className={`registration-input-icon  ${
                  isValid.firstname === "invalid" ? "visible" : "hidden"
                }`}
              />
              <img
                src={CheckIcon}
                alt=""
                className={`registration-input-icon  ${
                  isValid.firstname === "valid" ? "visible" : "hidden"
                }`}
              />
            </div>
            {isValid.firstname === "invalid" && (
              <p className="registration-input-error ">
                *The firstname you entered is invalid
              </p>
            )}
          </label>
          <label className="mb-5 block">
            <p className="registration-input-label">Last Name</p>

            <div className="relative">
              <input
                type="text"
                className={`registration-input ${
                  isValid.lastname === "invalid" && "invalid"
                } ${isValid.lastname === "valid" && "valid"}`}
                name="lastname"
                value={inputField.lastname}
                placeholder="Enter your last name"
                onChange={handleInputChange}
              />

              <img
                src={AlertIcon}
                alt=""
                className={`registration-input-icon  ${
                  isValid.lastname === "invalid" ? "visible" : "hidden"
                }`}
              />
              <img
                src={CheckIcon}
                alt=""
                className={`registration-input-icon  ${
                  isValid.lastname === "valid" ? "visible" : "hidden"
                }`}
              />
            </div>
            {isValid.lastname === "invalid" && (
              <p className="registration-input-error ">
                *The lastname you entered is invalid
              </p>
            )}
          </label>
          <label className="mb-5 block">
            <p className="registration-input-label">Email Address</p>

            <div className="relative">
              <input
                type="text"
                className={`registration-input ${
                  isValid.email === "invalid" && "invalid"
                } ${isValid.email === "valid" && "valid"}`}
                name="email"
                value={inputField.email}
                placeholder="Enter your last name"
                onChange={handleInputChange}
              />

              <img
                src={AlertIcon}
                alt=""
                className={`registration-input-icon  ${
                  isValid.email === "invalid" ? "visible" : "hidden"
                }`}
              />
              <img
                src={CheckIcon}
                alt=""
                className={`registration-input-icon  ${
                  isValid.email === "valid" ? "visible" : "hidden"
                }`}
              />
            </div>
            {isValid.email === "invalid" && (
              <p className="registration-input-error ">
                *The email you entered is invalid
              </p>
            )}
          </label>
          <label className="mb-5 block">
            <p className="registration-input-label">Phone Number </p>
            <div
              className={`registration-input-2 relative  w-[95%] ml-0 h-14 border rounded-xl my-3 block mx-auto  border-gray-400 outline-none sm:w-[400px] lg:mx-0 ${
                isValid.phone === "invalid" && "invalid"
              } ${isValid.phone === "valid" && "valid"}`}
            >
              <select
                name="country-code"
                className=" bg-transparent w-1/4 h-full p-[2px] text-sm font-medium text-black border-r border-gray-400 outline-none "
              >
                <option value="Nigeria">+234</option>
                {countries &&
                  countries.map((item, index) => (
                    <option value={item.name} key={index}>
                      +{item.callingCodes[0]}
                    </option>
                  ))}
              </select>
              <input
                type="tel"
                className=" px-4 w-3/4 h-full bg-transparent  outline-none "
                name="phone"
                value={inputField.phone}
                onChange={handleInputChange}
              />
              <img
                src={AlertIcon}
                alt=""
                className={` w-[16px]  absolute -right-[25px] top-1/2 -translate-y-1/2  ${
                  isValid.phone === "invalid" ? "visible" : "hidden"
                }`}
              />
              <img
                src={CheckIcon}
                alt=""
                className={` w-[16px]  absolute -right-[25px] top-1/2 -translate-y-1/2  ${
                  isValid.phone === "valid" ? "visible" : "hidden"
                }`}
              />
            </div>
            {isValid.phone === "invalid" && (
              <p className="registration-input-error ">
                *The number you entered is invalid
              </p>
            )}
          </label>

          <div className="mt-10 mb-5">
            <PrimaryButton handle={handleSubmit}>Next</PrimaryButton>
          </div>
        </form>
      </section>
      <RegistrationRedirect />
      <div className="sm:w-[400px] sm:mx-auto lg:mx-0 ">
        <p className="py-2 px-3 mb-3 inline-block rounded-xl bg-blue-100 text-gray-400 font-medium">
          Account Type:{" "}
          <span className="text-primary capitalize ml-1">{accountType} </span>
        </p>
      </div>
    </>
  );
};

export default Details;
