import React, { useState } from "react";
import OnToggle from "../forms/toggle/OnToggle";
import CheckboxField from "../inputs/Checkbox";

const Security = () => {
  const [loginOn, setLoginOn] = useState(true);
  const [allowOn, setAllowOn] = useState(false);

  return (
    <div>
      <div>
        <div className="my-5">
          <p className="font-semibold text-[#333333] text-2xl text-left">
            Account Security
          </p>
        </div>

        {/*This container houses the 2FA and Login button */}
        <div className="flex flex-col gap-y-8 lg:flex-row lg:gap-x-28 w-full my-10">
          <div className="flex flex-row w-full lg:w-auto justify-between  lg:gap-x-4 items-center">
            <p className="font-medium">Two Factor Authentication</p>
            <CheckboxField />
          </div>

          <div className="flex flex-row w-full lg:w-auto  lg:gap-x-4 justify-between items-center">
            <p className="font-medium">Login Notification</p>
            <CheckboxField />
          </div>
        </div>

        <p className="lg:mt-20 mt-14 font-semibold text-2xl text-[#333333] text-left ">
          Notifications
        </p>

        <div className="flex flex-col gap-y-8 lg:flex-row lg:gap-x-32 mt-10">
          <div className="flex flex-row w-full lg:w-auto justify-between lg:gap-x-4 items-center">
            <p className="font-medium">Allow Notification</p>
            <CheckboxField />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Security;
