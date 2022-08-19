import React from "react";
// data for table
// import Data from "../utils/FinancialHistoryData";
const HistoryTable = ({
  application_id,
  collection_date,
  due_date,
  amount,
  status,
}) => {
  return (
    <tr className="odd:bg-[#F6FAFD]">
      <td className="p-[18px] whitespace-nowrap font-medium ">
        {application_id}
      </td>
      <td className="p-[18px] whitespace-nowrap font-medium hidden lg:table-cell">
        {collection_date}
      </td>
      <td className="p-[18px] whitespace-nowrap font-medium hidden lg:table-cell">
        {due_date}
      </td>
      <td className="p-[18px] whitespace-nowrap font-medium hidden lg:table-cell">
        {amount}
      </td>
      <td className="p-[18px] whitespace-nowrap font-medium  ">
        <p
          className={`p-1 w-24 capitalize whitespace-nowrap mx-auto font-medium ${
            status === "payed" && "text-[#00A03E] bg-[#E5FFEF]"
          } ${status === "declined" && "text-[#DE4307] bg-[#FEEDE6]"}`}
        >
          {status}
        </p>
      </td>
      {/* <td className="p-[18px] whitespace-nowrap hidden lg:table-cell">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 19C10 20.1 10.9 21 12 21C13.1 21 14 20.1 14 19C14 17.9 13.1 17 12 17C10.9 17 10 17.9 10 19Z"
            fill="#808080"
          />
          <path
            d="M10 5C10 6.1 10.9 7 12 7C13.1 7 14 6.1 14 5C14 3.9 13.1 3 12 3C10.9 3 10 3.9 10 5Z"
            fill="#808080"
          />
          <path
            d="M10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10C10.9 10 10 10.9 10 12Z"
            fill="#808080"
          />
        </svg>
      </td> */}
    </tr>
  );
};

export default HistoryTable;