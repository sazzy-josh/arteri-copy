import React, { useState, useEffect } from "react";
import LargeCard from "../../components/cards/LargeCard";
import { QuestionCard } from "../../components/cards/LargeQuestionCard";
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
   
  const questions =[
    { 
      question: "How can I help?",
    },
    {
      question: "How much interest do i pay?",
    },
    { 
      question: "How long to repay a loan?",
    },
    {
      question: "Do i requrie a Bvn to secure a loan?",
    },
    { 
      question: "How long does it take to approve my loan?",
    }, {
      question: "What if i can't pay back within the specified period"
    }
  ] 

  return (
    <ConsumerDashboardWrapper selectedSidebarLink="help">
      <div className="w-full flex lg:flex-row flex-col justify-start items-start"> 
        <div className="lg:w-2/3 w-full lg:px-0 px-5 h-full flex flex-col justify-between items-start">
          <h1 className="dashboard-title">Customer Care</h1>
          <div className="w-full h-80 lg:mb-32 mb-auto">
            <div className="sender text-left flex flex-row justify-start items-start lg:w-1/3 w-1/2 my-3">
              <SenderBar />
            </div>

            <div className="receiver text-left flex flex-row justify-end items-end w-full my-3">
              <ReceiverBar />
            </div>
          </div>

          {/*Question section for Small screens and medium screens  */}
          <div className="mt-auto w-full lg:hidden block">
            <h2 className="text-left text-gray-400 font-semibold text-2xl">
              Quick Questions
            </h2>
              {questions.map((question, index) => {
                return (
                  <QuestionCard key={index} {...question} />
                )
              })}
          </div>
          <div className="h-1/4 w-full mb-4">
            <InputBox />
          </div>
        </div>

        {/* Question section for large screens */}
        <div className="lg:w-1/3 w-full px-5 lg:block hidden ">
          <div className="w-[365px] h-auto drop-shadow-sm rounded-[32px] dashboard-custom-shadow bg-white mr-5 p-7">
            <div className="my-10">
              <h2 className="text-left font-semibold text-2xl my-4">Quick Questions</h2>
              {questions.map((question, index) => {
                return (
                  <QuestionCard key={index} {...question} />
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </ConsumerDashboardWrapper>
  );
};

export default Help;
