import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import MobileNavbar from "../../components/MobileNavbar";
import NumberPagination from "../../components/registration/NumberPagination";
import LogoWhite from "../../assets/logo-white.svg";
import image1 from "../../assets/images/image-1.jpg";
import image2 from "../../assets/images/image-2.jpg";
import image3 from "../../assets/images/image-3.jpg";

// context
import { RegistrationContext } from "../../contexts/authContext/RegistrationContext";

const Registration = () => {
  const [accountType, setAccountType] = useState("consumer");
  const [sidebarImage, setSidebarImage] = useState("");

  return (
    <>
      <RegistrationContext.Provider
        value={{ accountType, setAccountType, setSidebarImage }}
      >
        <div className=" md:flex">
          <div className=" w-[350px]  h-auto relative hidden md:block lg:w-[440px] md:h-screen">
            {sidebarImage === "image1" && (
              <>
                <div className="w-full h-full absolute  bg-primary opacity-75 pl-6 pr-3 py-10 md:flex md:flex-col md:items-start md:justify-between">
                  <img src={LogoWhite} alt="" />
                  <h1 className="text-white text-2xl font-bold text-left mb-10 w-full">
                    Easier access to{" "}
                    <span className="text-secondary "> financing</span> and
                    tools for your personal{" "}
                    <span className="text-secondary "> healthcare</span> and
                    health business needs.
                  </h1>
                </div>
                <img src={image1} alt="" className="object-cover  h-full " />
              </>
            )}
            {sidebarImage === "image2" && (
              <>
                <div className="w-full h-full absolute  bg-primary opacity-75 pl-6 pr-3 py-10 md:flex md:flex-col md:items-start md:justify-between">
                  <img src={LogoWhite} alt="" />
                  <h1 className="text-white text-2xl font-bold text-left mb-10 w-full">
                    Create an account to access the tools and financing that
                    your <span className="text-secondary "> healthcare</span> or{" "}
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
          <section className="flex-1 lg:pl-10 md:py-10">
            <MobileNavbar />
            <NumberPagination />
            <Outlet />
          </section>
        </div>
      </RegistrationContext.Provider>
    </>
  );
};

export default Registration;
