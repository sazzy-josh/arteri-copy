import React, { useState, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Axios from "axios";
import PrimaryButton from "../../components/buttons/PrimaryButton";

import HistoryPageNavigation from "../../components/history/HistoryPageNavigation";

import SearchSort from "../../components/history/SearchSort";
import Pagination from "../../components/Pagination";

// skeleton for table data loading
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Loans = () => {
  const loggedInToken =
    sessionStorage.getItem("authToken") || localStorage.getItem("authToken");

  let navigate = useNavigate();
  // implement useCallback for asynchronous function
  const [historyData, setHistoryData] = useState({});

  const [currentURL, setCurrentURL] = useState(
    "https://api.arteri.tk/api/loan/history/get?page=1"
  );
  const [isTableLoading, setIsTableLoading] = useState(true);
  useEffect(() => {
    fetchHistory(currentURL);
  }, [currentURL]);
  const Data = [
    {
      id: 1,
      application_id: "#74563890",
      collection_date: "22 Jun, 2022 - 10:39PM",
      due_date: "22 Jun, 2022 - 10:39PM",
      amount: "35000",
      status: "pending",
    },
    {
      id: 2,
      application_id: "#74563890",
      collection_date: "22 Jun, 2022 - 10:39PM",
      due_date: "22 Jun, 2022 - 10:39PM",
      amount: "35000",
      status: "accepted",
    },
    {
      id: 3,
      application_id: "#74563890",
      collection_date: "22 Jun, 2022 - 10:39PM",
      due_date: "22 Jun, 2022 - 10:39PM",
      amount: "35000",
      status: "declined",
    },
  ];
  const fetchHistory = async (url) => {
    try {
      const response = await Axios.get(url, {
        headers: { Authorization: `Bearer ${loggedInToken}` },
      });
      console.log(response);
      setIsTableLoading(false);
    } catch (err) {
      // catch errors
    }
  };
  return (
    <>
      <HistoryPageNavigation />

      <section className=" mb-8 px-3 py-5 sm:shadow-2xl sm:shadow-[#EAF2FB] md:overflow-auto md:w-[95%] md:mx-auto md:px-0 md:mb-12">
        <SearchSort />
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
            {isTableLoading &&
              [1, 2, 3, 4, 5].map((item, index) => (
                <tr
                  onClick={() =>
                    navigate(
                      `/history/details/${item.application_id.slice(
                        1,
                        item.application_id.length
                      )}`
                    )
                  }
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
              ))}

            {/* {historyData.map((item, index) => (
              <tr
                onClick={() =>
                  navigate(
                    `/history/details/${item.application_id.slice(
                      1,
                      item.application_id.length
                    )}`
                  )
                }
                key={index}
                className="odd:bg-[#F6FAFD] cursor-pointer"
              >
                <td className="p-[18px] whitespace-nowrap font-medium ">
                  {item.application_id}
                </td>
                <td className="p-[18px] whitespace-nowrap font-medium hidden lg:table-cell">
                  {item.collection_date}
                </td>
                <td className="p-[18px] whitespace-nowrap font-medium hidden lg:table-cell">
                  {item.due_date}
                </td>
                <td className="p-[18px] whitespace-nowrap font-medium hidden lg:table-cell">
                  {item.amount}
                </td>
                <td className="p-[18px] whitespace-nowrap font-medium  ">
                  <p
                    className={`p-1 w-24 capitalize whitespace-nowrap mx-auto font-medium ${
                      item.status.toLowerCase() === "accepted" &&
                      "text-[#00A03E] bg-[#E5FFEF]"
                    } ${
                      item.status.toLowerCase() === "pending" &&
                      "text-[#F29C2B] bg-[#FDEDD9]"
                    } ${
                      item.status.toLowerCase() === "declined" &&
                      "text-[#DE4307] bg-[#FEEDE6]"
                    }`}
                  >
                    {item.status}
                  </p>
                </td>
              </tr>
            ))} */}
          </tbody>
        </table>
      </section>
      {!isTableLoading && (
        <div className=" flex flex-col justify-center items-center my-7">
          <Pagination data={Data} />
        </div>
      )}
    </>
  );
};

export default Loans;
