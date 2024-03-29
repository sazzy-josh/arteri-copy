import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import MobileNavbar from "../../components/MobileNavbar";
import NumberPagination from "../../components/registration/NumberPagination";

// images
import LogoWhite from "../../assets/logo-white.svg";
import image1 from "../../assets/images/image-1.jpg";
import image2 from "../../assets/images/image-2.jpg";
import image3 from "../../assets/images/image-3.jpg";

// context
import { RegistrationContext } from "../../contexts/authContext/RegistrationContext";
// import Alert from "../../components/Alert";
import { useContext } from "react";
import { ModalContext } from "../../contexts/ModalContext";

const Registration = () => {
  // modal contexts
  const { setIsAlertOpen, alertProps, setAlertProps } =
    useContext(ModalContext);

  const [account_type, setaccount_type] = useState("personal");
  const [sidebarImage, setSidebarImage] = useState("");
  const [isValid, setIsValid] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    gender: "",
    password: "",
    password_confirmation: "",
    tos_accepted: "",
  });
  const [inputField, setInputField] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    gender: "male",
    password: "",
    password_confirmation: "",
    tos_accepted: "invalid",
  });
  const [inputErrorMessage, setInputErrorMessage] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    gender: "male",
    password: "",
    password_confirmation: "",
    tos_accepted: "",
  });
  // const [alertProps, setAlertProps] = useState({
  //   type: "",
  //   title: "",
  //   subtitle: "",
  //   buttonText: "",
  // });
  // const [isModalOpen, setIsModalOpen] = useState(false);

  let navigate = useNavigate();

  return (
    <>
      <RegistrationContext.Provider
        value={{
          account_type,
          setaccount_type,
          setSidebarImage,
          isValid,
          setIsValid,
          inputField,
          setInputField,
          inputErrorMessage,
          setInputErrorMessage,
          alertProps,
          setAlertProps,
        }}
      >
        <div className=" md:flex bg-white">
          <div className=" w-[350px]  h-auto fixed hidden md:block lg:w-[440px] md:h-screen">
            {sidebarImage === "image1" && (
              <>
                <div className="w-full h-full absolute z-10 bg-primary opacity-75 "></div>
                <div className="w-full h-full absolute z-30 pl-6 pr-3 py-10 md:flex md:flex-col md:items-start md:justify-between">
                  <img src={LogoWhite} alt="" className="relative z-20" />
                  <h1 className="text-white text-2xl font-bold text-left mb-10 w-full relative z-20">
                    Easier access to{""}
                    <span className="text-secondary "> financing</span> and
                    tools for your personal{""}
                    <span className="text-secondary "> healthcare</span> and
                    health business needs.
                  </h1>
                </div>
                <img src={image1} alt="" className="object-cover  h-full " />
              </>
            )}
            {sidebarImage === "image2" && (
              <>
                <div className="w-full h-full absolute z-10 bg-primary opacity-75 "></div>
                <div className="w-full h-full absolute z-30 pl-6 pr-3 py-10 md:flex md:flex-col md:items-start md:justify-between">
                  <img src={LogoWhite} alt="" />
                  <h1 className="text-white text-2xl font-bold text-left mb-10 w-full">
                    Create an account to access the tools and financing that
                    your <span className="text-secondary "> healthcare</span> or
                    {""}
                    <span className="text-secondary "> business</span> needs.
                  </h1>
                </div>
                <img src={image2} alt="" className="object-cover  h-full" />
              </>
            )}
            {sidebarImage === "image3" && (
              <img src={image3} alt="" className="object-cover  h-full" />
            )}
          </div>
          <section className="flex-1 lg:pl-10 md:py-10 md:ml-[350px] lg:ml-[440px] min-h-screen ">
            <MobileNavbar />
            <div className="lg:flex md:justify-between md:items-start md:px-5 md:mb-4">
              <NumberPagination />
              <p
                className="hidden font-semibold cursor-pointer text-secondary md:mt-2 lg:block "
                onClick={() => {
                  navigate("/login", { replace: true });
                }}
              >
                Go back to Homepage
              </p>
            </div>
            <Outlet />
          </section>
          {/* <Alert
            type={alertProps.type}
            title={alertProps.title}
            subtitle={alertProps.subtitle}
            buttonText={alertProps.buttonText}
            buttonHandle={() => navigate("/dashboard", { replace: true })}
            modalTrigger={isModalOpen}
            setModalTrigger={setIsModalOpen}
          /> */}
        </div>
      </RegistrationContext.Provider>
    </>
  );
};

export default Registration;
