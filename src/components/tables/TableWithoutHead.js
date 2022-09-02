import React from 'react'

const TableWithoutHead = ({Data, navigate}) => {
  return (
    <div>
        <table className="w-full ">
          <tbody>
            {Data.map((item, index) => (
              <tr
                onClick={() =>
                  navigate(
                    `/history/details/${item.id.slice(
                      1,
                      item.id.length
                    )}`
                  )
                }
                key={index}
                className="odd:bg-[#F6FAFD] cursor-pointer"
              >
                <td className="p-[18px] whitespace-nowrap font-medium ">
                  {item.content.substring(0, 100)}...
                </td>
                <td className="p-[18px] whitespace-nowrap font-medium hidden lg:table-cell">
                  {item.date}
                </td>
               
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  )
}

export default TableWithoutHead