import React, { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import PrimaryButton from "../../components/buttons/PrimaryButton";

// import components
import Container from "../../components/container/Container";
import Header from "../../components/head/Header";
import MobileHeader from "../../components/head/MobileHeader";
import ProviderMobileHeader from "../../components/head/ProviderMobileHeader";
import ProviderSideMenu from "../../components/nav/ProviderSideBar";
import ProviderDashboardWrapper from "../../layouts/ProviderDashboardWrapper";

// import styles
import "../../styles/history.css";

const Claims = () => {
  let navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  // const [activeTab, setActiveTab] = useState("tab2");
  return (
    <ProviderDashboardWrapper selectedSidebarLink={"claim"}>
      <section className="my-5 px-5 flex justify-between items-center">
        <p className="text-3xl font-bold text-left ">Claims History</p>

        <button
          onClick={() => navigate("/provider-claim/create", { replace: true })}
          className=" w-40 h-14 border-none outline-none font-medium  text-white  text-center rounded-xl mx-auto text-lg my-3 block  md:mx-auto lg:mx-0 transition duration-200 bg-secondary hover:bg-[#354D19] active:bg-[#354D19] active:border-2 active:border-[#8BC34A]"
        >
          New Claim
        </button>
      </section>

      <Outlet />
    </ProviderDashboardWrapper>
  );
};

export default Claims;
