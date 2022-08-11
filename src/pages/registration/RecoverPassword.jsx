import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import MobileNavbar from "../../components/MobileNavbar";
import "../../styles/registration.css";

// images
import LogoWhite from "../../assets/logo-white.svg";
import image3 from "../../assets/images/image-1.jpg";
// import icons
import AlertIcon from "../../assets/icons/alert-info.svg";
import CheckIcon from "../../assets/icons/check.svg";
import Alert from "../../components/Alert";

const RecoverPassword = () => {
  let navigate = useNavigate();
  let passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,20})/;
  const [recoverInputField, setRecoverInputField] = useState({
    password: "",
    repeatPassword: "",
  });
  const [isRecoverValid, setIsRecoverValid] = useState({
    password: "",
    repeatPassword: "",
  });
  const [isPasswordMatch, setIsPasswordMatch] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // control input fields on change
  const handleInputChange = (e) => {
    console.log("typing");
    const { name, value } = e.target;
    setRecoverInputField({ ...recoverInputField, [name]: value });
    validateInputChange(e, recoverInputField);
  };
  // validate input fields on change
  const validateInputChange = (e, recoverInputField) => {
    const { name, value } = e.target;

    if (name === "repeatPassword") {
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
        value !== recoverInputField.repeatPassword &&
        recoverInputField.repeatPassword.length !== 0
      ) {
        console.log("mutated");

        setIsRecoverValid((prev) => ({ ...prev, repeatPassword: "invalid" }));
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
  const handleSubmit = (e) => {
    console.log("eweee", recoverInputField);
    e.preventDefault();

    if (
      Object.values(isRecoverValid).includes("") ||
      Object.values(isRecoverValid).includes("invalid")
    ) {
      console.log(" wrong isRecoverValid");
      return;
    } else {
      setRecoverInputField({
        password: "",
        repeatPassword: "",
      });
      setIsRecoverValid({
        password: "",
        repeatPassword: "",
      });

      //   registerNewUser();
      setIsModalOpen(true);
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
                  type="password"
                  className={`registration-input ${
                    isRecoverValid.password === "invalid" && "invalid"
                  } ${isRecoverValid.password === "valid" && "valid"}`}
                  name="password"
                  value={recoverInputField.password}
                  onChange={handleInputChange}
                  //   value={test}
                  //   onChange={(e) => setTest(e.target.value)}
                />
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
              <p className="text-sm mb-3  font-medium text-left text-[#B3B3B3]">
                Passoword must contain Numbers
              </p>
              <p className="text-sm mb-3 text-primary font-medium text-left">
                Passoword must contain uppercase and lowercase alphabets
              </p>
              <p className="text-sm mb-3 text-primary font-medium text-left">
                Passoword must contain Special Characters
              </p>
            </div>
            <label className="mb-5 block">
              <p className="registration-input-label">Repeat Password</p>

              <div className="relative sm:w-[400px] sm:mx-auto lg:mx-0">
                <input
                  type="password"
                  className={`registration-input ${
                    isRecoverValid.repeatPassword === "invalid" && "invalid"
                  } ${isRecoverValid.repeatPassword === "valid" && "valid"}`}
                  name="repeatPassword"
                  value={recoverInputField.repeatPassword}
                  onChange={handleInputChange}
                />
                <img
                  src={AlertIcon}
                  alt=""
                  className={`registration-input-icon  ${
                    isRecoverValid.repeatPassword === "invalid"
                      ? "visible"
                      : "hidden"
                  }`}
                />
                <img
                  src={CheckIcon}
                  alt=""
                  className={`registration-input-icon  ${
                    isRecoverValid.repeatPassword === "valid"
                      ? "visible"
                      : "hidden"
                  }`}
                />
              </div>
            </label>
            {isPasswordMatch === "true" && (
              <div className="bg-[#EAF2FB] rounded-xl p-4 sm:w-[400px] sm:mx-auto lg:mx-0">
                <p className=" font-medium text-left text-sm text-[#B3B3B3]">
                  Both pasword match
                </p>
              </div>
            )}
            {isPasswordMatch === "false" && (
              <div className="bg-[#EAF2FB] rounded-xl p-4 sm:w-[400px] sm:mx-auto lg:mx-0">
                <p className=" font-medium text-left text-sm text-[#B3B3B3]">
                  Both pasword does not match
                </p>
              </div>
            )}
            <div className="my-8">
              <PrimaryButton handle={handleSubmit}>
                Reset Password
              </PrimaryButton>
            </div>
          </form>
        </section>
      </div>
      <Alert
        type={"success"}
        title={" Congratulations!"}
        subtitle={"Your password has been updated"}
        buttonText={"Go to Dashboard"}
        buttonHandle={() => navigate("/dashboard", { replace: true })}
        modalTrigger={isModalOpen}
        setModalTrigger={setIsModalOpen}
      />
    </div>
  );
};

export default RecoverPassword;
