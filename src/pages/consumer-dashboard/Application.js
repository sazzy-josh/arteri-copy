import React, { useState, useEffect, useContext } from "react";
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
import { toast } from "react-hot-toast";
import Connect from "@mono.co/connect.js";

import { ModalContext } from "../../contexts/ModalContext";

import { useNavigate } from "react-router-dom";

// contexts
import { LoanContext } from "../../contexts/dashboardContext/loanContext";
import Upload from "../../components/terms/Upload";
import ReviewPage from "../../components/terms/ReviewPage";
import Preloader from "../../components/Preloader";
import { Navigate } from "react-router-dom";
import ConsumerDashboardWrapper from "../../layouts/ConsumerDashboardWrapper";

const Application = () => {
  const { setIsContentLoading, setIsAlertOpen, alertProps, setAlertProps } =
    useContext(ModalContext);

  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [showTerms, setShowTerms] = useState(true);
  const [showDetails, setShowDetails] = useState(false);
  const [showCosts, setShowCosts] = useState(false);
  const [showWork, setShowWork] = useState(false);
  const [showNok, setShowNok] = useState(false);
  const [showUpload, setShowUpload] = useState(false);
  const [showReview, setShowReview] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(false);

  const [acceptTerm, setAcceptTerm] = useState(false);

  //stage two
  const [employerName, setEmployerName] = useState("");
  const [idCard, setIdCard] = useState("");
  const [employmentDoc, setEmploymentDoc] = useState("");
  const [bvn, setBvn] = useState("");
  const [employmentType, setEmploymentType] = useState("");

  // test context
  const [testContext1, setTestContext1] = useState("test1");
  const [testContext2, setTestContext2] = useState("test2");
  const [testContext3, setTestContext3] = useState("test3");

  //stage three

  const [loanTenure, setLoanTenure] = useState("");
  const [loanReason, setLoanReason] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [medicalProvider, setMedicalProvider] = useState("");

  //stage four
  const [industry, setIndustry] = useState("");
  const [position, setPosition] = useState("");
  const [yearlength, setYearlength] = useState("");
  const [address, setAddress] = useState("");

  //stage five
  const [nokName, setNokName] = useState("");
  const [nokPhone, setNokPhone] = useState("");
  const [nokEmail, setNokEmail] = useState("");
  const [nokRelationship, setnokRelationship] = useState("");

  //stage six

  const [medicalDoc, setMedicalDoc] = useState("");

  const createLoan = async () => {
    const userToken =
      localStorage.getItem("authToken") != null
        ? localStorage.getItem("authToken")
        : sessionStorage.getItem("authToken");
    console.log("User token", userToken);
    if (localStorage.getItem("loanId")) {
      setShowTerms(false);
      setShowDetails(true);
      setShowCosts(false);
      setShowWork(false);
      setShowNok(false);
      setShowUpload(false);
      setShowReview(false);
      setPageNumber(2);
    }
    try {
      if (acceptTerm === false) {
        return toast.error("You must click accept box to proceed");
      }
      var myHeaders = new Headers();
      myHeaders.append("Accept", "application/json");
      myHeaders.append("Authorization", "Bearer " + userToken);

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        redirect: "follow",
      };

      const response = await fetch(
        `${process.env.REACT_APP_BASE_URI}/personal/loan/create`,
        requestOptions
      );

      const data = await response.json();

      console.log(data);
      if (data.status === "success") {
        localStorage.setItem("loanId", data.data.application_id);
        acceptTerms();
        toast.success("Application Initiated Successfully");
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const stageTwo = async () => {
    console.log(employerName);
    try {
      var myHeaders = new Headers();
      myHeaders.append("Accept", "application/json");
      myHeaders.append(
        "Authorization",
        "Bearer " + localStorage.getItem("authToken") != null
          ? localStorage.getItem("authToken")
          : sessionStorage.getItem("authToken")
      );

      var formdata = new FormData();
      formdata.append("application_id", localStorage.getItem("loanId"));
      formdata.append("applicant_id_file", idCard);
      formdata.append("applicant_employment_type_name", employmentType);
      formdata.append("applicant_employment_name", employerName);
      formdata.append("applicant_employment_documents", employmentDoc);

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: formdata,
        redirect: "follow",
      };

      const response = await fetch(
        `${process.env.REACT_APP_BASE_URI}/personal/loan/update`,
        requestOptions
      );
      const data = await response.json();
      if (data.status === "success") {
        toast.success("Application Saved Successfully");
        toStageThree();
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const stageThree = async () => {
    try {
      var myHeaders = new Headers();
      myHeaders.append("Accept", "application/json");
      myHeaders.append(
        "Authorization",
        "Bearer " + localStorage.getItem("authToken") != null
          ? localStorage.getItem("authToken")
          : sessionStorage.getItem("authToken")
      );

      var formdata = new FormData();
      formdata.append("application_id", localStorage.getItem("loanId"));
      formdata.append("loan_tenure", loanTenure);
      formdata.append("loan_use_case", loanReason);
      formdata.append("loan_amount_requested", loanAmount);
      formdata.append("medical_providers", medicalProvider);

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: formdata,
        redirect: "follow",
      };

      const response = await fetch(
        `${process.env.REACT_APP_BASE_URI}/personal/loan/update`,
        requestOptions
      );
      const data = await response.json();
      if (data.status === "success") {
        toast.success("Application saved successfully");
        toStageFour();
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const stageFour = async () => {
    try {
      var myHeaders = new Headers();
      myHeaders.append("Accept", "application/json");
      myHeaders.append(
        "Authorization",
        "Bearer " + localStorage.getItem("authToken") != null
          ? localStorage.getItem("authToken")
          : sessionStorage.getItem("authToken")
      );

      var formdata = new FormData();
      formdata.append("application_id", localStorage.getItem("loanId"));
      formdata.append("applicant_employment_industry", industry);
      formdata.append("applicant_employment_position", position);
      formdata.append("applicant_employment_length", yearlength);
      formdata.append("applicant_employment_line_one", address);

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: formdata,
        redirect: "follow",
      };

      const response = await fetch(
        `${process.env.REACT_APP_BASE_URI}/personal/loan/update`,
        requestOptions
      );
      const data = await response.json();
      if (data.status === "success") {
        toast.success("Application Saved Successfully");
        toStageFive();
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const stageFive = async () => {
    try {
      var myHeaders = new Headers();
      myHeaders.append("Accept", "application/json");
      myHeaders.append(
        "Authorization",
        "Bearer " + localStorage.getItem("authToken") != null
          ? localStorage.getItem("authToken")
          : sessionStorage.getItem("authToken")
      );

      var formdata = new FormData();
      formdata.append("application_id", localStorage.getItem("loanId"));
      formdata.append("next_of_kin_last_name", nokName);
      formdata.append("next_of_kin_phone_number", nokPhone);
      formdata.append("next_of_kin_email_address", nokEmail);
      formdata.append("next_of_kin_relationship", nokRelationship);

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: formdata,
        redirect: "follow",
      };

      const response = await fetch(
        `${process.env.REACT_APP_BASE_URI}/personal/loan/update`,
        requestOptions
      );
      const data = await response.json();
      if (data.status === "success") {
        toast.success("Application Saved Successfully");
        toStageSix();
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const stageSix = async () => {
    try {
      var myHeaders = new Headers();
      myHeaders.append("Accept", "application/json");
      myHeaders.append(
        "Authorization",
        "Bearer " + localStorage.getItem("authToken") != null
          ? localStorage.getItem("authToken")
          : sessionStorage.getItem("authToken")
      );

      var formdata = new FormData();
      formdata.append("application_id", localStorage.getItem("loanId"));
      formdata.append("medical_documents", medicalDoc);

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: formdata,
        redirect: "follow",
      };

      const response = await fetch(
        `${process.env.REACT_APP_BASE_URI}/personal/loan/update`,
        requestOptions
      );
      const data = await response.json();
      if (data.status === "success") {
        toast.success("Application Saved Successfully");
        toStageSeven();
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const stageSeven = async () => {
    setLoading(true);
    try {
      var myHeaders = new Headers();
      myHeaders.append("Accept", "application/json");
      myHeaders.append(
        "Authorization",
        "Bearer " + localStorage.getItem("authToken") != null
          ? localStorage.getItem("authToken")
          : sessionStorage.getItem("authToken")
      );

      var formdata = new FormData();
      formdata.append("application_id", localStorage.getItem("loanId"));
      formdata.append("applicant_id_file", idCard);
      formdata.append("applicant_employment_type_name", employmentType);
      formdata.append("applicant_employment_name", employerName);
      formdata.append("applicant_employment_documents", employmentDoc);

      formdata.append("loan_tenure", loanTenure);
      formdata.append("loan_use_case", loanReason);
      formdata.append("loan_amount_requested", loanAmount);
      formdata.append("medical_providers", medicalProvider);

      formdata.append("applicant_employment_industry", industry);
      formdata.append("applicant_employment_position", position);
      formdata.append("applicant_employment_length", yearlength);
      formdata.append("applicant_employment_line_one", address);

      formdata.append("next_of_kin_last_name", nokName);
      formdata.append("next_of_kin_phone_number", nokPhone);
      formdata.append("next_of_kin_email_address", nokEmail);
      formdata.append("next_of_kin_relationship", nokRelationship);
      formdata.append("medical_documents", medicalDoc);

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: formdata,
        redirect: "follow",
      };

      const response = await fetch(
        `${process.env.REACT_APP_BASE_URI}/personal/loan/update`,
        requestOptions
      );
      const data = await response.json();
      if (data.status === "success") {
        toast.success("Application Saved Successfully");
        toStageSeven();
        connect.open();
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const toStageSeven = () => {
    setShowTerms(false);
    setShowDetails(false);
    setShowCosts(false);
    setShowWork(false);
    setShowNok(false);
    setShowUpload(false);
    setShowReview(true);
    setPageNumber(6);
  };

  const toStageSix = () => {
    setShowTerms(false);
    setShowDetails(false);
    setShowCosts(false);
    setShowWork(false);
    setShowNok(false);
    setShowUpload(true);
    setShowReview(false);
    setPageNumber(6);
  };

  const toStageFive = () => {
    setShowTerms(false);
    setShowDetails(false);
    setShowCosts(false);
    setShowWork(false);
    setShowNok(true);
    setShowUpload(false);
    setShowReview(false);
    setPageNumber(5);
  };

  const toStageFour = () => {
    setShowTerms(false);
    setShowDetails(false);
    setShowCosts(false);
    setShowWork(true);
    setShowNok(false);
    setShowUpload(false);
    setShowReview(false);
    setPageNumber(4);
  };

  const toStageThree = () => {
    setShowTerms(false);
    setShowDetails(false);
    setShowCosts(true);
    setShowWork(false);
    setShowNok(false);
    setShowUpload(false);
    setShowReview(false);
    setPageNumber(3);
  };

  const acceptTerms = () => {
    setShowTerms(false);
    setShowDetails(true);
    setShowCosts(false);
    setShowWork(false);
    setShowNok(false);
    setShowUpload(false);
    setShowReview(false);
    setPageNumber(2);
  };

  const connect = new Connect({
    key: process.env.REACT_APP_MONO_TEST,
    onSuccess: ({ code }) => {
      console.log("code", code);
      // now to backend
      var myHeaders = new Headers();
      myHeaders.append("Accept", "application/json");
      myHeaders.append(
        "Authorization",
        "Bearer " + localStorage.getItem("authToken") != null
          ? localStorage.getItem("authToken")
          : sessionStorage.getItem("authToken")
      );
      const linkToDb = async () => {
        var formdata = new FormData();
        formdata.append("application_id", localStorage.getItem("loanId"));
        formdata.append("temporary_mono_account_id", code);

        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: formdata,
          redirect: "follow",
        };

        const response = await fetch(
          `${process.env.REACT_APP_BASE_URI}/loan/link-mono`,
          requestOptions
        );
        const data = await response.json();
        console.log("Linking", data);
        if (data.status === "success") {
          setLoading(false);
          setIsAlertOpen(true);
          setAlertProps((prev) => ({
            ...prev,
            type: "success",
            title: "Hurray!",
            subtitle: data?.message,
          }));
        } else {
          setLoading(false);
          setIsAlertOpen(true);
          setAlertProps((prev) => ({
            ...prev,
            type: "fail",
            title: "Ooops! Sorry",
            subtitle: data?.flash_message,
          }));
        }
      };
      linkToDb();
    },
    onLoad: () => {},
    onClose: () => {},
  });

  connect.setup();

  return (
    <LoanContext.Provider
      value={{
        testContext1,
        testContext2,
        testContext3,
      }}
    >
      <ConsumerDashboardWrapper selectedSidebarLink={"application"}>
        <div className="w-full flex flex-col justify-start items-start">
          <div className="w-full lg:px-0 md:px-0 px-5">
            <div className="w-full flex flex-row justify-between items-center my-5">
              <p className="dashboard-title">
                Financing Application
              </p>
              <p className="ml-auto text-2xl font-bold text-gray-600">
                <span>{pageNumber}</span>/
                <span className="text-sky-600">7</span>
              </p>
            </div>

            <div className="">
              {showDetails && (
                <Details
                  button={true}
                  changeEmployerName={(e) => setEmployerName(e.target.value)}
                  changeIdCard={(e) => setIdCard(e.target.value)}
                  changeEmploymentLetter={(e) =>
                    setEmploymentDoc(e.target.value)
                  }
                  changeBusinessDoc={(e) => setEmploymentDoc(e.target.value)}
                  changeBvn={(e) => setBvn(e.target.value)}
                  changeEmploymentType={(e) =>
                    setEmploymentType(e.target.value)
                  }
                  handleDecline={() => {
                    setShowTerms(true);
                    setShowDetails(false);
                    setShowCosts(false);
                    setShowWork(false);
                    setShowNok(false);
                  }}
                  handleAccept={stageTwo}
                />
              )}
              {showTerms && (
                <Terms
                  accept={acceptTerm}
                  acceptTerms={() => setAcceptTerm(!acceptTerm)}
                  handleDecline={() => navigate("/dashboard")}
                  handleAccept={createLoan}
                />
              )}
              {showCosts && (
                <Cost
                  button={true}
                  changeLoanReason={(e) => setLoanReason(e.target.value)}
                  changeLoanAmount={(e) => setLoanAmount(e.target.value)}
                  changeMedicalProvider={(e) =>
                    setMedicalProvider(e.target.value)
                  }
                  handleDecline={() => {
                    setShowTerms(false);
                    setShowDetails(true);
                    setShowCosts(false);
                    setShowWork(false);
                    setShowNok(false);
                  }}
                  handleAccept={stageThree}
                />
              )}
              {showWork && (
                <Work
                  button={true}
                  changeWorkIndustry={(e) => setIndustry(e.target.value)}
                  changeWorkPosition={(e) => setPosition(e.target.value)}
                  changeWorkLength={(e) => setYearlength(e.target.value)}
                  changeWorkAddress={(e) => setAddress(e.target.value)}
                  handleDecline={() => {
                    setShowTerms(false);
                    setShowDetails(false);
                    setShowCosts(true);
                    setShowWork(false);
                    setShowNok(false);
                  }}
                  handleAccept={stageFour}
                />
              )}
              {showNok && (
                <NextOfKin
                  button={true}
                  changeNokName={(e) => setNokName(e.target.value)}
                  changeNokRelationship={(e) =>
                    setnokRelationship(e.target.value)
                  }
                  changeNokPhone={(e) => setNokPhone(e.target.value)}
                  changeNokEmail={(e) => setNokEmail(e.target.value)}
                  handleDecline={() => {
                    setShowTerms(false);
                    setShowDetails(false);
                    setShowCosts(false);
                    setShowWork(true);
                    setShowNok(false);
                  }}
                  handleAccept={stageFive}
                />
              )}
              {showUpload && (
                <Upload
                  changeMedicalDoc={(e) => setMedicalDoc(e.target.value)}
                  handleAccept={stageSix}
                />
              )}
              {showReview && (
                <ReviewPage
                  employerNameValue={employerName}
                  idCardValue={idCard}
                  employmentLetterValue={employmentDoc}
                  businessDocValue={employmentDoc}
                  bvnValue={bvn}
                  employementTypeValue={employmentType}
                  reasonValue={loanReason}
                  amountValue={loanAmount}
                  providerValue={medicalProvider}
                  industryValue={industry}
                  positionValue={position}
                  yearlengthValue={yearlength}
                  addressValue={address}
                  nokNameValue={nokName}
                  nokRelationshipValue={nokRelationship}
                  nokPhoneValue={nokPhone}
                  nokEmailValue={nokEmail}
                  handleAccept={stageSeven}
                />
              )}
            </div>
          </div>
        </div>
      </ConsumerDashboardWrapper>
    </LoanContext.Provider>
  );
};

export default Application;
