import React, { useState } from "react";
import OnToggle from "../forms/toggle/OnToggle";

const Security = () => {
  const [isOn, setIsOn] = useState(false);
  const [loginOn, setLoginOn] = useState(true);
  const [allowOn, setAllowOn] = useState(false);

  return (
    <div>
      <div>
        <div className="my-5">
          <p className="font-bold text-left">Security Settings</p>
        </div>
        <div className="flex flex-row justify-start items-start my-10">
          <p className="mr-5 font-semibold">Two factor authentication</p>
          <OnToggle click={() => setIsOn(!isOn)} on={isOn} />
        </div>
        <div className="flex flex-col justify-start items-start my-10">
          <p className="font-bold">Notifications</p>
          <div className="flex lg:flex-row flex-col justify-start items-start w-full my-10">
            <div className="flex flex-row justify-start items-start mr-10">
              <p className="mr-5 font-semibold">Allow Notification</p>
              <OnToggle click={() => setAllowOn(!allowOn)} on={allowOn} />
            </div>
            <div className="flex flex-row justify-start items-start">
              <p className="mr-5 font-semibold">Login Notification</p>
              <OnToggle click={() => setLoginOn(!loginOn)} on={loginOn} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Security;
