import React, { useContext, useEffect } from "react";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import { useNavigate } from "react-router-dom";
import RegistrationRedirect from "./RegistrationRedirect";

// context
import { RegistrationContext } from "../../contexts/authContext/RegistrationContext";

const AccountType = () => {
  let navigate = useNavigate();
  const { accountType, setAccountType, setSidebarImage } =
    useContext(RegistrationContext);
  useEffect(() => {
    setSidebarImage("image1");
  }, [setSidebarImage]);
  return (
    <>
      <section className="px-7 py-5 ">
        {accountType === "consumer" && (
          <>
            <h1 className="text-black text-2xl font-bold text-left mb-10 w-full md:hidden">
              Easier access to{" "}
              <span className="text-secondary "> financing</span> and tools for
              your personal <span className="text-secondary "> healthcare</span>{" "}
              and health business needs.
            </h1>
            <h1 className="text-black text-2xl font-semibold text-left mb-10 hidden w-full  md:block md:text-center md:text-3xl lg:text-left">
              Join us today, by creating an account.
            </h1>
          </>
        )}
        {accountType === "provider" && (
          <>
            <h1 className="text-black text-2xl font-bold text-left mb-10 w-full md:hidden">
              Create an account to access the tools and financing that your{" "}
              <span className="text-secondary "> healthcare</span> or{" "}
              <span className="text-secondary "> business</span> needs.
            </h1>
            <h1 className="text-black text-2xl font-semibold text-left mb-10 w-full hidden md:block md:text-3xl">
              Join us today, by creating an account.
            </h1>
          </>
        )}
        <p className="font-medium text-base text-black text-left mb-3 md:text-center lg:text-left">
          Select Account Type
        </p>
        <div className="text-left md:text-center lg:text-left">
          <label>
            <input
              type="radio"
              name="account-type"
              value="consumer"
              className="hidden"
              onChange={(e) => setAccountType(e.target.value)}
            />
            <p
              className={` cursor-pointer w-full h-14 leading-[50px]  font-medium bg-transparent text-lg border-2 text-center rounded-xl my-4 block mx-auto sm:w-4/6 md:w-40
               md:inline-block md:mr-7 ${
                 accountType === "consumer"
                   ? "border-primary text-primary"
                   : "border-gray-400 text-gray-400"
               }`}
            >
              Consumer
            </p>
          </label>
          <label>
            <p
              className={`cursor-pointer w-full h-14 leading-[50px] font-medium bg-transparent text-lg border-2  text-center rounded-xl my-4 block mx-auto sm:w-4/6 md:w-40  md:inline-block md:mr-5 ${
                accountType === "provider"
                  ? "border-primary text-primary"
                  : "border-gray-400 text-gray-400"
              }`}
            >
              Provider
            </p>
            <input
              type="radio"
              name="account-type"
              value="provider"
              className="hidden"
              onChange={(e) => setAccountType(e.target.value)}
            />
          </label>
        </div>
        <div className="mt-10 ">
          <PrimaryButton
            handle={() => navigate("/register/details", { replace: true })}
          >
            Next
          </PrimaryButton>
        </div>
      </section>
      <RegistrationRedirect />
    </>
  );
};

export default AccountType;
