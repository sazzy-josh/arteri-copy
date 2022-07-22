import React, { useState } from "react";
import PrimaryButton from "../components/buttons/PrimaryButton";

const AccountType = () => {
  const [accountType, setAccountType] = useState("consumer");
  return (
    <section className="px-7 py-5 ">
      {accountType === "consumer" && (
        <h1 className="text-black text-2xl font-bold text-left mb-12 w-11/12">
          Easier access to <span className="text-secondary "> financing</span>{" "}
          and tools for your personal{" "}
          <span className="text-secondary "> healthcare</span> and health
          business needs.
        </h1>
      )}
      {accountType === "provider" && (
        <h1 className="text-black text-2xl font-bold text-left mb-12 w-11/12">
          Create an account to access the tools and financing that your{" "}
          <span className="text-secondary "> healthcare</span> or{" "}
          <span className="text-secondary "> business</span> needs.
        </h1>
      )}
      <p className="font-medium text-base text-black text-left mb-3">
        Select Account Type
      </p>
      <label className=" inline-block">
        <input
          type="radio"
          name="account-type"
          value="consumer"
          className="hidden"
          onChange={(e) => setAccountType(e.target.value)}
        />
        <p
          className={`w-80 h-14 leading-[50px]  font-semibold bg-transparent text-lg border-2 text-center rounded-xl my-4 block mx-auto ${
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
          className={`w-80 h-14 leading-[50px] font-semibold bg-transparent text-lg border-2  text-center rounded-xl my-4 block mx-auto ${
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
      {/* <p>account type is {accountType}</p> */}{" "}
      <div className="mt-10">
        <PrimaryButton>Next</PrimaryButton>
      </div>
    </section>
  );
};

export default AccountType;
