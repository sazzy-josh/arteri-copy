import React, { useState, useEffect } from "react";
import LargeCard from "../../components/cards/LargeCard";
import Container from "../../components/container/Container";
import Header from "../../components/head/Header";
import MobileHeader from "../../components/head/MobileHeader";
import SideMenu from "../../components/nav/SideBar";
import Cost from "../../components/terms/Cost";
import Details from "../../components/terms/Details";
import NextOfKin from "../../components/terms/NextOfKin";
import Terms from "../../components/terms/Terms";
import Work from "../../components/terms/Work";

const Application = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTerms, setShowTerms] = useState(true);
  const [showDetails, setShowDetails] = useState(false);
  const [showCosts, setShowCosts] = useState(false);
  const [showWork, setShowWork] = useState(false);
  const [showNok, setShowNok] = useState(false);
  return (
    <div className="w-screen">
      <div className="w-full flex flex-row justify-start items-start">
        <div className="w-1/5 hidden lg:flex md:flex">
          <SideMenu selectApplication={true} />
        </div>
        <div className="lg:w-4/5 w-full">
          <Container>
            <div className="w-full my-5 lg:flex md:flex hidden">
              <Header />
            </div>
            <div className="w-screen lg:hidden md:hidden flex">
              <MobileHeader
                selectApplication={true}
                open={isOpen}
                setOpen={() => setIsOpen(!isOpen)}
              />
            </div>
            {!isOpen && (
              <div className="w-full flex flex-col justify-start items-start">
                <div className="w-full lg:px-0 md:px-0 px-5">
                  <div className="w-full flex flex-row justify-between items-center my-5">
                    <p className="mr-auto text-2xl font-bold">
                      Financing Application
                    </p>
                    <p className="ml-auto text-2xl font-bold text-gray-600">
                      <span>1</span>/<span className="text-sky-600">7</span>
                    </p>
                  </div>
                  <div className="">
                    {showDetails && (
                      <Details
                        handleDecline={() => {
                          setShowTerms(false);
                          setShowDetails(true);
                          setShowCosts(false);
                          setShowWork(false);
                          setShowNok(false);
                        }}
                        handleAccept={() => {
                          setShowTerms(true);
                          setShowDetails(false);
                          setShowCosts(false);
                          setShowWork(false);
                          setShowNok(false);
                        }}
                      />
                    )}
                    {showTerms && (
                      <Terms
                        handleDecline={() => {
                          setShowTerms(false);
                          setShowDetails(true);
                          setShowCosts(false);
                          setShowWork(false);
                          setShowNok(false);
                        }}
                        handleAccept={() => {
                          setShowTerms(false);
                          setShowDetails(false);
                          setShowCosts(true);
                          setShowWork(false);
                          setShowNok(false);
                        }}
                      />
                    )}
                    {showCosts && (
                      <Cost
                        handleDecline={() => {
                          setShowTerms(false);
                          setShowDetails(true);
                          setShowCosts(false);
                          setShowWork(false);
                          setShowNok(false);
                        }}
                        handleAccept={() => {
                          setShowTerms(false);
                          setShowDetails(false);
                          setShowCosts(false);
                          setShowWork(true);
                          setShowNok(false);
                        }}
                      />
                    )}
                    {showWork && (
                      <Work
                        handleDecline={() => {
                          setShowTerms(false);
                          setShowDetails(false);
                          setShowCosts(true);
                          setShowWork(false);
                          setShowNok(false);
                        }}
                        handleAccept={() => {
                          setShowTerms(false);
                          setShowDetails(false);
                          setShowCosts(false);
                          setShowWork(false);
                          setShowNok(true);
                        }}
                      />
                    )}
                    {showNok && (
                      <NextOfKin
                        handleDecline={() => {
                          setShowTerms(false);
                          setShowDetails(false);
                          setShowCosts(false);
                          setShowWork(true);
                          setShowNok(false);
                        }}
                        handleAccept={() => {
                          setShowTerms(false);
                          setShowDetails(false);
                          setShowCosts(false);
                          setShowWork(false);
                          setShowNok(true);
                        }}
                      />
                    )}
                  </div>
                </div>
              </div>
            )}
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Application;
