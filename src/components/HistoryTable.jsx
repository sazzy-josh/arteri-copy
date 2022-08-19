import React from "react";
// data for table
import Data from "../utils/FinancialHistoryData";
const HistoryTable = () => {
  return (
    <table className="w-full ">
      <thead className="">
        <tr className="mb-5 ">
          <th className="py-3 px-3 bg-blue-100 whitespace-nowrap font-semibold">
            Application
          </th>
          <th className="py-3 px-3 bg-blue-300 whitespace-nowrap font-semibold hidden md:table-cell">
            Collection Date and Time
          </th>
          <th className="py-3 px-3 bg-blue-100 whitespace-nowrap font-semibold hidden md:table-cell">
            Due Date and Time
          </th>
          <th className="py-3 px-3 bg-blue-300 w-48 whitespace-nowrap font-semibold hidden md:table-cell">
            Amount
          </th>
          <th className="py-3 px-3 w-44 whitespace-nowrap font-semibold bg-red-200">
            Status
          </th>
          <th className="py-3 px-3 w-16 whitespace-nowrap hidden md:table-cell bg-red-700"></th>
        </tr>
      </thead>
      <tbody>
        {Data.map((item) => (
          <tr className="even:bg-[#F6FAFD]" key={item.id}>
            <td className="p-4 whitespace-nowrap font-medium ">
              {item.application_id}
            </td>
            <td className="p-4 whitespace-nowrap font-medium hidden md:table-cell">
              {item.collection_date}
            </td>
            <td className="p-4 whitespace-nowrap font-medium hidden md:table-cell">
              {item.due_date}
            </td>
            <td className="p-4 whitespace-nowrap font-medium hidden md:table-cell">
              {item.amount}
            </td>
            <td className="p-4 whitespace-nowrap font-medium ">
              <p
                className={`p-1 w-auto whitespace-nowrap font-medium ${
                  item.status.toLowerCase() === "payed" &&
                  "text-[#00A03E] bg-[#E5FFEF]"
                } ${
                  item.status.toLowerCase() === "declined" &&
                  "text-[#DE4307] bg-[#FEEDE6]"
                }`}
              >
                {item.status}
              </p>
            </td>
            <td className="p-4 whitespace-nowrap hidden md:table-cell">
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
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default HistoryTable;
