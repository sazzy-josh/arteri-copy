import React, { useContext, useEffect } from "react";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import { useNavigate } from "react-router-dom";
import RegistrationRedirect from "./RegistrationRedirect";

// context
import { RegistrationContext } from "../../contexts/authContext/RegistrationContext";

const AccountType = () => {
  let navigate = useNavigate();
  const { account_type, setaccount_type, setSidebarImage } =
    useContext(RegistrationContext);
  useEffect(() => {
    setSidebarImage("image1");
  }, [setSidebarImage]);
  return (
    <>
      <section className="px-7 py-5 ">
        {account_type === "personal" && (
          <>
            <h1 className="text-black text-2xl font-bold text-left mb-10 w-full sm:text-center md:hidden md:text-left">
              Easier access to{" "}
              <span className="text-secondary "> financing</span> and tools for
              your personal <span className="text-secondary "> healthcare</span>{" "}
              and health business needs.
            </h1>
            <h1 className="text-black text-2xl font-semibold text-left mb-12 hidden w-full  md:block md:text-center md:text-3xl lg:text-left ">
              Join us today, by creating an account.
            </h1>
          </>
        )}
        {account_type === "provider" && (
          <>
            <h1 className="text-black text-2xl font-bold text-left mb-10 w-full sm:text-center md:hidden md:text-left">
              Create an account to access the tools and financing that your{" "}
              <span className="text-secondary "> healthcare</span> or{" "}
              <span className="text-secondary "> business</span> needs.
            </h1>
            <h1 className="text-black text-2xl font-semibold text-left mb-12 w-full hidden md:block md:text-center md:text-3xl lg:text-left">
              Join us today, by creating an account.
            </h1>
          </>
        )}
        <p className="font-medium text-base text-black text-left mb-3 sm:text-center lg:text-left">
          Select Account Type
        </p>
        <div className="text-left md:text-center lg:text-left">
          <label>
            <input
              type="radio"
              name="account-type"
              value="personal"
              className="hidden"
              onChange={(e) => setaccount_type(e.target.value)}
            />
            <p
              className={` cursor-pointer w-full h-14 leading-[50px]  font-medium bg-transparent text-lg border-2 text-center rounded-xl my-4 block mx-auto sm:w-4/6 md:w-40
               md:inline-block md:mr-7 ${
                 account_type === "personal"
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
                account_type === "provider"
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
              onChange={(e) => setaccount_type(e.target.value)}
            />
          </label>
        </div>
        <div className="mt-10 sm:w-[400px] h-14 mx-auto md:mx-auto lg:mx-0 ">
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
