import React, { useState, useEffect } from "react";
import LargeCard from "../../components/cards/LargeCard";
import Container from "../../components/container/Container";
import Header from "../../components/head/Header";
import MobileHeader from "../../components/head/MobileHeader";
import ProviderMobileHeader from "../../components/head/ProviderMobileHeader";
import ProviderSideMenu from "../../components/nav/ProviderSideBar";
import SideMenu from "../../components/nav/SideBar";
import Cost from "../../components/pro-loan/Cost";
import Details from "../../components/pro-loan/Details";
import NextOfKin from "../../components/pro-loan/NextOfKin";
import Terms from "../../components/pro-loan/Terms";
import Work from "../../components/pro-loan/Work";
import ReviewPage from "../../components/pro-loan/ReviewPage";
import { useNavigate } from "react-router-dom";
import ProviderDashboardWrapper from "../../layouts/ProviderDashboardWrapper";

const ProviderApplication = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [showTerms, setShowTerms] = useState(true);
  const [showDetails, setShowDetails] = useState(false);
  const [showCosts, setShowCosts] = useState(false);
  const [showWork, setShowWork] = useState(false);
  const [showNok, setShowNok] = useState(false);
  const [showReview, setShowReview] = useState(false);

  return (
    <ProviderDashboardWrapper>
      <div className="w-full flex flex-col justify-start items-start">
        <div className="w-full lg:px-0 md:px-0 px-5">
          <div className="w-full flex flex-row justify-between items-center my-5">
            <p className="mr-auto text-2xl font-bold">Financing Application</p>
            <p className="ml-auto text-2xl font-bold text-gray-600">
              <span>1</span>/<span className="text-sky-600">7</span>
            </p>
          </div>
          <div className="">
            {showDetails && (
              <Details
                button={true}
                handleDecline={() => {
                  setShowTerms(true);
                  setShowDetails(false);
                  setShowCosts(false);
                  setShowWork(false);

                  setShowReview(false);
                }}
                handleAccept={() => {
                  setShowTerms(false);
                  setShowDetails(false);
                  setShowCosts(true);
                  setShowWork(false);

                  setShowReview(false);
                }}
              />
            )}
            {showTerms && (
              <Terms
                handleDecline={() => navigate("/provider-dashboard")}
                handleAccept={() => {
                  setShowTerms(false);
                  setShowDetails(true);
                  setShowCosts(false);
                  setShowWork(false);

                  setShowReview(false);
                }}
              />
            )}
            {showCosts && (
              <Cost
                button={true}
                handleDecline={() => {
                  setShowTerms(false);
                  setShowDetails(true);
                  setShowCosts(false);
                  setShowWork(false);

                  setShowReview(false);
                }}
                handleAccept={() => {
                  setShowTerms(false);
                  setShowDetails(false);
                  setShowCosts(false);
                  setShowWork(true);

                  setShowReview(false);
                }}
              />
            )}
            {showWork && (
              <Work
                button={true}
                handleDecline={() => {
                  setShowTerms(false);
                  setShowDetails(false);
                  setShowCosts(true);
                  setShowWork(false);

                  setShowReview(false);
                }}
                handleAccept={() => {
                  setShowTerms(false);
                  setShowDetails(false);
                  setShowCosts(false);
                  setShowWork(false);
                  setShowReview(true);
                }}
              />
            )}

            {showReview && (
              <ReviewPage
                handleDecline={() => {
                  setShowTerms(false);
                  setShowDetails(false);
                  setShowCosts(false);
                  setShowWork(false);
                  setShowNok(true);
                  setShowReview(false);
                }}
                handleAccept={() => {
                  setShowTerms(false);
                  setShowDetails(false);
                  setShowCosts(false);
                  setShowWork(false);

                  setShowReview(true);
                }}
              />
            )}
          </div>
        </div>
      </div>
    </ProviderDashboardWrapper>
  );
};

export default ProviderApplication;
