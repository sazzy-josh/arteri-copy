import React, {useState} from "react";
import OnToggle from "../forms/toggle/OnToggle";

const ProviderTools = () => {
  const [isOn, setIsOn] = useState(false);
  const [loginOn, setLoginOn] = useState(true);
  const [allowOn, setAllowOn] = useState(false);

  return (
    <div>
      <div>
        <div className="flex flex-col justify-start items-start my-10">
          <div className="flex lg:flex-row flex-col justify-start items-start w-full my-10">
            <div className="flex flex-row justify-start items-start mr-10">
              <p className="mr-5 font-semibold">SMS Portal</p>
              <OnToggle click={() => setAllowOn(!allowOn)} on={allowOn} />
              <p className="ml-10 text-secondary">Coming Soon</p>
            </div>
            <div className="flex flex-row justify-start items-start">
              <p className="mr-5 font-semibold">Patient Management Flow</p>
              <OnToggle click={() => setLoginOn(!loginOn)} on={!loginOn} />
              <p className="ml-10 text-secondary">Coming Soon</p>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col justify-start items-start w-full my-10">
            <div className="flex flex-row justify-start items-start mr-10">
              <p className="mr-5 font-semibold">Book Keeping</p>
              <OnToggle click={() => setAllowOn(!allowOn)} on={allowOn} />
              <p className="ml-10 text-secondary">Coming Soon</p>
            </div>
            <div className="flex flex-row justify-start items-start">
              <p className="mr-5 font-semibold">Inventory Management</p>
              <OnToggle click={() => setLoginOn(!loginOn)} on={!loginOn} />
              <p className="ml-10 text-secondary">Coming Soon</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderTools;
