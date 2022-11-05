import React, { useState, useEffect, useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import HistoryPageNavigation from "../../components/history/HistoryPageNavigation";

import SearchSort from "../../components/history/SearchSort";
import Pagination from "../../components/Pagination";

// skeleton for table data loading
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Tabs from "../../components/nav/Tabs";

const Loans = () => {
  const loggedInToken =
    sessionStorage.getItem("authToken") || localStorage.getItem("authToken");

  let navigate = useNavigate();

 const [ page , setPage ] = useState(17)

 const fetchHistory = (page) => {
  return axios.get(`${process.env.REACT_APP_BASE_URI}/loan/history/get?page=${page}` ,  
  { headers: 
     { Authorization: `Bearer ${loggedInToken}` }
   }
   )
 }

  const { data: historyData , isLoading , isSuccess } = useQuery(['fetch-historyData' , page] ,() => fetchHistory(page) , {
    onSuccess: (data) => {
      console.log(data)
    }
  })




  // implement useCallback for asynchronous function
  // const [historyData, setHistoryData] = useState({});
  // const [isTableLoading, setIsTableLoading] = useState(true);

  // const [currentURL, setCurrentURL] = useState(
  //   `${process.env.REACT_APP_BASE_URI}/loan/history/get?page=1`
  // );
  // show preloader
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsTableLoading(false);
  //   }, 2000);
  //   return () => clearTimeout(timer);
  // }, []);

  // useEffect(() => {
  //   console.log("useEffect");
  //   fetchHistory(currentURL);
  //   console.log("Data is:", historyData, historyData.length);
  // }, [currentURL]);

  // const Data = [
  //   {
  //     id: 1,
  //     application_id: "#74563890",
  //     collection_date: "22 Jun, 2022 - 10:39PM",
  //     due_date: "22 Jun, 2022 - 10:39PM",
  //     amount: "35000",
  //     status: "pending",
  //   },
  //   {
  //     id: 2,
  //     application_id: "#74563890",
  //     collection_date: "22 Jun, 2022 - 10:39PM",
  //     due_date: "22 Jun, 2022 - 10:39PM",
  //     amount: "35000",
  //     status: "accepted",
  //   },
  //   {
  //     id: 3,
  //     application_id: "#74563890",
  //     collection_date: "22 Jun, 2022 - 10:39PM",
  //     due_date: "22 Jun, 2022 - 10:39PM",
  //     amount: "35000",
  //     status: "declined",
  //   },
  // ];

  
  // const fetchHistory = useCallback(async (url) => {
  //   setHistoryData({});
  //   setIsTableLoading(true);
  //   try {
  //     const response = await Axios.get(url, {
  //       headers: { Authorization: `Bearer ${loggedInToken}` },
  //     });
  //     setHistoryData(response.data?.data);
  //     // setHistoryData({});
  //     setIsTableLoading(false);
  //   } catch (err) {
  //     // catch errors
  //     setIsTableLoading(false);
  //     setHistoryData([]);
  //   }
  // }, [])
  
  return (
    <>
      <Tabs
        tabsArray={[
          { name: "Loan", path: "/history/loans" },
          { name: "BNPL", path: "/history/bnpl" },
        ]}
      />
      <section className=" mb-8 px-3 py-5 sm:shadow-2xl sm:shadow-[#EAF2FB] md:overflow-auto md:w-[95%] md:mx-auto md:px-0 md:mb-12">
        <SearchSort />

        {/* <p className="font-medium">
          current page is: {historyData?.loan_applications?.current_page}
        </p> */}

        <table className="w-full ">
          <thead className="">
            <tr className="mb-5 border-b border-gray-300">
              <th className="py-3 px-3 whitespace-nowrap font-semibold">
                Application
              </th>
              <th className="py-3 px-3  whitespace-nowrap font-semibold hidden lg:table-cell">
                Collection Date and Time
              </th>
              <th className="py-3 px-3 whitespace-nowrap font-semibold hidden lg:table-cell">
                Due Date and Time
              </th>
              <th className="py-3 px-3 w-48 whitespace-nowrap font-semibold hidden lg:table-cell">
                Amount
              </th>
              <th className="py-3 px-3  whitespace-nowrap font-semibold ">
                Status
              </th>
              {/* <th className="py-3 px-3 w-16 whitespace-nowrap hidden lg:table-cell "></th> */}
            </tr>
            <tr className="bg-red-300 h-5"></tr>
          </thead>
          <tbody>
            { isLoading ?
              [1, 2, 3, 4, 5].map((_, index) => (
                <tr
                  // onClick={() =>
                  //   navigate(
                  //     `/history/details/${item.application_id.slice(
                  //       1,
                  //       item.application_id.length
                  //     )}`
                  //   )
                  // }
                  key={index}
                  className="odd:bg-[#F6FAFD] cursor-pointer"
                >
                  <td className="p-[18px] whitespace-nowrap font-medium ">
                    <Skeleton />
                  </td>
                  <td className="p-[18px] whitespace-nowrap font-medium hidden lg:table-cell">
                    <Skeleton />
                  </td>
                  <td className="p-[18px] whitespace-nowrap font-medium hidden lg:table-cell">
                    <Skeleton />
                  </td>
                  <td className="p-[18px] whitespace-nowrap font-medium hidden lg:table-cell">
                    <Skeleton />
                  </td>
                  <td className="p-[18px] whitespace-nowrap font-medium  ">
                    <p
                      className={`p-1 w-24 capitalize whitespace-nowrap mx-auto font-medium `}
                    >
                      <Skeleton />
                    </p>
                  </td>
                </tr>
              )) :  isSuccess &&  historyData?.data?.data?.loan_applications?.data.length > 1 && historyData?.data?.data?.loan_applications?.data.map((item, index) => (
                <tr
                  // onClick={() =>
                  //   navigate(`/history/details/${item.application_id}`)
                  // }
                  key={index}
                  className="odd:bg-[#F6FAFD] cursor-pointer "
                >
                  <td className="p-[18px] whitespace-nowrap font-medium ">
                    {item.application_id}
                  </td>
                  <td className="p-[18px] whitespace-nowrap font-medium hidden lg:table-cell">
                    {item?.extended_details?.loan_information
                      ?.request_date === ""
                      ? "- - -"
                      : item?.extended_details?.loan_information
                          ?.request_date}
                  </td>
                  <td className="p-[18px] whitespace-nowrap font-medium hidden lg:table-cell">
                    {item?.extended_details?.loan_information
                      ?.approval_date === ""
                      ? "- - -"
                      : item?.extended_details?.loan_information
                          ?.approval_date}
                  </td>
                  <td className="p-[18px] whitespace-nowrap font-medium hidden lg:table-cell">
                    {item?.extended_details?.loan_information
                      ?.amount_requested ?? "- - -"}
                  </td>
                  <td className="p-[18px] whitespace-nowrap font-medium  ">
                    <p
                      className={`p-1 w-24 capitalize whitespace-nowrap mx-auto font-medium ${
                        item.application_status === "approved" &&
                        "text-[#00A03E] bg-[#E5FFEF]"
                      } ${
                        item.application_status === "pending" &&
                        "text-[#F29C2B] bg-[#FDEDD9]"
                      } ${
                        item.application_status === "declined" &&
                        "text-[#DE4307] bg-[#FEEDE6]"
                      }`}
                    >
                      {item.application_status === "approved"
                        ? "accepted"
                        : item.application_status}
                    </p>
                  </td>
                </tr>
              ))         
            }

          </tbody>
        </table>

        { !isLoading && isSuccess && historyData?.data?.data?.loan_applications?.data.length === 0 && (
          <div className="w-full">
            <div className="bg-[#F6FAFD] w-32 h-32 mt-5 mb-2 mx-auto rounded-full flex justify-center items-center">
              <svg
                width="65"
                height="65"
                viewBox="0 0 65 65"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M55.5221 30.6041V19.0666C55.5221 8.15207 52.9763 5.41663 42.7388 5.41663H22.2638C12.0263 5.41663 9.48047 8.15207 9.48047 19.0666V49.5624C9.48047 56.7666 13.4347 58.4729 18.2284 53.327L18.2554 53.2999C20.4763 50.9437 23.8617 51.1333 25.7846 53.7062L28.52 57.3624"
                  stroke="#3385D7"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21.668 18.9584H43.3346"
                  stroke="#3385D7"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M24.375 29.7916H40.625"
                  stroke="#3385D7"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M49.3221 40.0028L39.7347 49.5904C39.3555 49.9695 39.0034 50.6737 38.9221 51.1883L38.4075 54.8445C38.218 56.1716 39.1388 57.0925 40.4659 56.9029L44.1222 56.3883C44.6368 56.307 45.368 55.9549 45.7201 55.5757L55.3076 45.9883C56.9597 44.3362 57.7451 42.4133 55.3076 39.9758C52.8972 37.5654 50.9742 38.3507 49.3221 40.0028Z"
                  stroke="#3385D7"
                  strokeWidth="2.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M47.9375 41.384C48.75 44.309 51.025 46.584 53.95 47.3965"
                  stroke="#3385D7"
                  strokeWidth="2.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="text-2xl text-black font-semibold my-4">
              No History Yet
            </h3>
            <p className="text-[#B3B3B3]">
              Tap the button below to apply for a new loan
            </p>
            <div className=" ">
              <button
                onClick={() => navigate("/application", { replace: true })}
                className=" w-44 h-12 border-none outline-none font-medium  text-white text-center rounded-xl mx-auto text-lg my-4 block  bg-secondary"
              >
                Appy for Loan
              </button>
            </div>
          </div>
        ) }
      </section>
      {historyData?.loan_applications?.data.length && (
        <div className=" flex flex-col justify-center items-center my-7">
          <Pagination
            // data={Data}
            // setCurrentURL={setCurrentURL}
            links={historyData?.loan_applications?.links}
            prevPageUrl={historyData?.loan_applications?.prev_page_url}
            nextPageUrl={historyData?.loan_applications?.next_page_url}
          />
        </div>
      )}
    </>
  );
};

export default Loans;
