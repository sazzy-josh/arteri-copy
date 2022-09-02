import React from 'react'

const TableWithHead = ({Data, navigate}) => {
  return (
    <div>
        <table className="w-full ">
          <thead className="">
            <tr className="mb-5 border-b-2 border-gray-100">
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
            {Data.map((item, index) => (
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
            ))}
          </tbody>
        </table>
    </div>
  )
}

export default TableWithHead