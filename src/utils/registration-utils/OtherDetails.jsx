import React, { useState, useEffect, useContext } from "react";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import { RegistrationContext } from "../../contexts/authContext/RegistrationContext";
import "../../styles/registration.css";
import RegistrationRedirect from "./RegistrationRedirect";

const OtherDetails = () => {
  const [gender, setGender] = useState("male");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const { accountType, setSidebarImage } = useContext(RegistrationContext);
  useEffect(() => {
    setSidebarImage("image2");
  }, [setSidebarImage]);
  return (
    <>
      <section className="px-7 py-3">
        <div className="mb-5 sm:w-[400px]  sm:mx-auto lg:mx-0">
          <p className=" registration-input-label ">Gender</p>
          <div className=" flex justify-start items-center gap-7">
            <label className="cursor-pointer">
              <input
                type="radio"
                name="gender"
                value="male"
                className="hidden"
                onChange={(e) => setGender(e.target.value)}
              />
              <span
                className={` cursor-pointer w-7 h-7 border-2    rounded-full  inline-block relative before:absolute before:w-2/5 before:h-2/5 before:bg-primary before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full ${
                  gender === "male"
                    ? "before:inline-block border-primary"
                    : "before:hidden border-gray-400"
                } `}
              ></span>
              <span
                className={` capitalize inline-block font-medium ml-2  -translate-y-2 ${
                  gender === "male" ? " text-primary" : " text-gray-400"
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
                onChange={(e) => setGender(e.target.value)}
              />
              <span
                className={` cursor-pointer w-7 h-7 border-2 rounded-full inline-block relative before:absolute before:w-2/5 before:h-2/5 before:bg-primary before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full ${
                  gender === "female"
                    ? "before:block border-primary"
                    : "before:hidden border-gray-400"
                } `}
              ></span>
              <span
                className={` capitalize inline-block font-medium ml-2  -translate-y-2 ${
                  gender === "female" ? " text-primary" : " text-gray-400"
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

          <input
            type="password"
            className="registration-input"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label className="mb-5 block">
          <p className="registration-input-label">Repeat Password</p>

          <input
            type="password"
            className="registration-input"
            name="password"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
          />
        </label>
        <div className="mt-10 mb-5">
          <PrimaryButton>Create My Account</PrimaryButton>
        </div>
      </section>
      <RegistrationRedirect />
      <div className="sm:w-[400px] sm:mx-auto lg:mx-0 ">
        <p className="py-2 px-3 mb-3 inline-block rounded-xl bg-blue-100 text-gray-400 font-medium">
          Account Type:
          <span className="text-primary capitalize ml-1">{accountType} </span>
        </p>
      </div>
    </>
  );
};

export default OtherDetails;
