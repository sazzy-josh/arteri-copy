import React, { useState, useEffect } from "react";
import LargeCard from "../../components/cards/LargeCard";
import InputBox from "../../components/chats/InputBox";
import ReceiverBar from "../../components/chats/ReceiverBar";
import SenderBar from "../../components/chats/SenderBar";
import Container from "../../components/container/Container";
import Header from "../../components/head/Header";
import MobileHeader from "../../components/head/MobileHeader";
import SideMenu from "../../components/nav/SideBar";
import ConsumerDashboardWrapper from "../../layouts/ConsumerDashboardWrapper";

const Help = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ConsumerDashboardWrapper selectedSidebarLink="help">
      <div className="w-full flex lg:flex-row flex-col justify-start items-start">
        <div className="lg:w-2/3 w-full lg:px-0 px-5 h-full flex flex-col justify-between items-start">
          <h1 className="font-bold text-2xl text-left">Customer Care</h1>
          <div className="w-full h-80 lg:mb-32 mb-auto">
            <div className="sender text-left flex flex-row justify-start items-start lg:w-1/3 w-1/2 my-3">
              <SenderBar />
            </div>

            <div className="receiver text-left flex flex-row justify-end items-end w-full my-3">
              <ReceiverBar />
            </div>
          </div>
          <div className="mt-auto w-full lg:hidden block">
            <h2 className="text-left text-gray-400 font-bold text-xl">
              Quick Questions
            </h2>
            <div className="p-3 my-3 rounded-md bg-sky-50 text-primary font-semibold">
              <p>How can I apply for a loan?</p>
            </div>
            <div className="p-3 my-3 rounded-md bg-sky-50 text-primary font-semibold">
              <p>How can I apply for a loan?</p>
            </div>
            <div className="p-3 my-3 rounded-md bg-sky-50 text-primary font-semibold">
              <p>How can I apply for a loan?</p>
            </div>
          </div>
          <div className="h-1/4 w-full">
            <InputBox />
          </div>
        </div>
        <div className="lg:w-1/3 w-full px-5 lg:block hidden">
          <LargeCard>
            <div className="my-10">
              <h2 className="text-left font-bold text-2xl">Quick Questions</h2>
              <div className="p-3 my-3 rounded-md bg-sky-50 text-primary font-semibold">
                <p>How can I apply for a loan?</p>
              </div>
              <div className="p-3 my-3 rounded-md bg-sky-50 text-primary font-semibold">
                <p>How can I apply for a loan?</p>
              </div>
              <div className="p-3 my-3 rounded-md bg-sky-50 text-primary font-semibold">
                <p>How can I apply for a loan?</p>
              </div>
              <div className="p-3 my-3 rounded-md bg-sky-50 text-primary font-semibold">
                <p>How can I apply for a loan?</p>
              </div>
              <div className="p-3 my-3 rounded-md bg-sky-50 text-primary font-semibold">
                <p>How can I apply for a loan?</p>
              </div>
              <div className="p-3 my-3 rounded-md bg-sky-50 text-primary font-semibold">
                <p>How can I apply for a loan?</p>
              </div>
            </div>
          </LargeCard>
        </div>
      </div>
    </ConsumerDashboardWrapper>
  );
};

export default Help;
