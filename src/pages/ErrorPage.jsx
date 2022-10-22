import React from "react";
import LogoBlue from "../assets/logo-blue.svg";
import Error404IconMobile from "../assets/404-icon-mobile.svg";
import Error404IconDesktop from "../assets/404-icon-desktop.svg";
import Error404IconDesktopBlob from "../assets/404-blob.svg";
import PrimaryButton from "../components/buttons/PrimaryButton";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  let navigate = useNavigate();
  return (
    <div className="bg-gray-50 px-8 py-10 h-screen md:px-12 md:py-12 ">
      <img src={LogoBlue} />
      <div className="h-full flex flex-col justify-center items-center lg:hidden">
        <img src={Error404IconMobile} />
        <p className="text-2xl text-black text-center font-semibold mb-10 mt-8">
          Ooops!... <br />
          Page Not Found
        </p>
        <div className="w-full h-14">
          <PrimaryButton handle={() => navigate("/login", { replace: true })}>
            Go to Homepage
          </PrimaryButton>
        </div>
      </div>
      <div className="h-full items-center hidden lg:flex lg:flex-col lg:justify-center relative">
        <img src={Error404IconDesktopBlob} className="absolute z-0" />
        <img src={Error404IconDesktop} className="relative z-10" />
        <div className="relative z-10">
          <p className="text-2xl text-black text-center font-semibold mb-10 mt-8">
            Ooops!... Page Not Found
          </p>
          <div className="sm:w-[400px] h-14">
            <PrimaryButton handle={() => navigate("/login", { replace: true })}>
              Go to Homepage
            </PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
