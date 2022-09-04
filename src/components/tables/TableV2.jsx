import React from "react";
import { useMemo } from "react";
import { useTable } from "react-table";

const TableV2 = () => {
  const data = useMemo(
    () => [
      {
        id: 1,
        application_id: "0185641",
        collection_date: "16-Apr-2022",
        due_date: "22-Apr-2022",
        amount: "89261",
        status: "declined",
      },
      {
        id: 2,
        application_id: "6257170",
        collection_date: "09-Jun-2022",
        due_date: "02-Jul-2022",
        amount: "06589",
        status: "payed",
      },
      {
        id: 3,
        application_id: "9859830",
        collection_date: "11-May-2022",
        due_date: "27-Mar-2022",
        amount: "07142",
        status: "declined",
      },
      {
        id: 4,
        application_id: "3489180",
        collection_date: "01-Mar-2022",
        due_date: "01-Feb-2022",
        amount: "00904",
        status: "payed",
      },
      {
        id: 5,
        application_id: "5960039",
        collection_date: "24-Jul-2022",
        due_date: "29-Dec-2021",
        amount: "71013",
        status: "payed",
      },
      {
        id: 6,
        application_id: "7987346",
        collection_date: "27-Apr-2022",
        due_date: "31-Jan-2022",
        amount: "28488",
        status: "declined",
      },
      {
        id: 7,
        application_id: "7881467",
        collection_date: "24-Sep-2021",
        due_date: "27-Dec-2021",
        amount: "51438",
        status: "declined",
      },
      {
        id: 8,
        application_id: "4591326",
        collection_date: "29-May-2022",
        due_date: "12-Oct-2021",
        amount: "53369",
        status: "payed",
      },
      {
        id: 9,
        application_id: "1041561",
        collection_date: "15-Feb-2022",
        due_date: "15-Aug-2022",
        amount: "73374",
        status: "declined",
      },
      {
        id: 10,
        application_id: "6171021",
        collection_date: "01-Dec-2021",
        due_date: "08-Jun-2022",
        amount: "30558",
        status: "declined",
      },
      {
        id: 11,
        application_id: "8876028",
        collection_date: "15-Oct-2021",
        due_date: "20-Nov-2021",
        amount: "65207",
        status: "payed",
      },
      {
        id: 12,
        application_id: "9986990",
        collection_date: "29-Dec-2021",
        due_date: "11-Nov-2021",
        amount: "11336",
        status: "declined",
      },
      {
        id: 13,
        application_id: "1717582",
        collection_date: "21-Feb-2022",
        due_date: "10-Jul-2022",
        amount: "14400",
        status: "payed",
      },
      {
        id: 14,
        application_id: "6860240",
        collection_date: "08-Apr-2022",
        due_date: "09-Jan-2022",
        amount: "68831",
        status: "declined",
      },
      {
        id: 15,
        application_id: "1052202",
        collection_date: "09-Sep-2021",
        due_date: "03-Dec-2021",
        amount: "72043",
        status: "payed",
      },
      {
        id: 16,
        application_id: "3837237",
        collection_date: "30-Dec-2021",
        due_date: "03-May-2022",
        amount: "36483",
        status: "declined",
      },
      {
        id: 17,
        application_id: "0896488",
        collection_date: "06-Jul-2022",
        due_date: "19-Mar-2022",
        amount: "34282",
        status: "declined",
      },
      {
        id: 18,
        application_id: "9985501",
        collection_date: "29-Oct-2021",
        due_date: "11-Aug-2022",
        amount: "23650",
        status: "payed",
      },
      {
        id: 19,
        application_id: "4894164",
        collection_date: "07-Aug-2022",
        due_date: "05-Oct-2021",
        amount: "68012",
        status: "declined",
      },
      {
        id: 20,
        application_id: "2924874",
        collection_date: "12-Aug-2022",
        due_date: "19-Feb-2022",
        amount: "91185",
        status: "declined",
      },
      {
        id: 21,
        application_id: "1074684",
        collection_date: "04-Dec-2021",
        due_date: "25-May-2022",
        amount: "69770",
        status: "declined",
      },
      {
        id: 22,
        application_id: "7366558",
        collection_date: "11-Jan-2022",
        due_date: "21-Jul-2022",
        amount: "46118",
        status: "declined",
      },
      {
        id: 23,
        application_id: "2264929",
        collection_date: "09-Feb-2022",
        due_date: "20-Apr-2022",
        amount: "37546",
        status: "declined",
      },
      {
        id: 24,
        application_id: "3897742",
        collection_date: "29-Oct-2021",
        due_date: "06-May-2022",
        amount: "77620",
        status: "declined",
      },
      {
        id: 25,
        application_id: "4027219",
        collection_date: "11-Nov-2021",
        due_date: "25-Oct-2021",
        amount: "26187",
        status: "payed",
      },
      {
        id: 26,
        application_id: "2623792",
        collection_date: "03-Jun-2022",
        due_date: "20-Oct-2021",
        amount: "20593",
        status: "payed",
      },
      {
        id: 27,
        application_id: "6606708",
        collection_date: "18-May-2022",
        due_date: "05-Sep-2021",
        amount: "46401",
        status: "declined",
      },
      {
        id: 28,
        application_id: "6835023",
        collection_date: "18-Mar-2022",
        due_date: "28-Apr-2022",
        amount: "81352",
        status: "declined",
      },
      {
        id: 29,
        application_id: "2370059",
        collection_date: "07-Feb-2022",
        due_date: "26-Jul-2022",
        amount: "66535",
        status: "payed",
      },
      {
        id: 30,
        application_id: "5691732",
        collection_date: "03-Nov-2021",
        due_date: "22-Aug-2022",
        amount: "14771",
        status: "declined",
      },
      {
        id: 31,
        application_id: "2093140",
        collection_date: "28-Apr-2022",
        due_date: "17-Sep-2021",
        amount: "96290",
        status: "declined",
      },
      {
        id: 32,
        application_id: "9976622",
        collection_date: "26-Jul-2022",
        due_date: "31-May-2022",
        amount: "00023",
        status: "payed",
      },
      {
        id: 33,
        application_id: "0933720",
        collection_date: "08-Aug-2022",
        due_date: "27-Mar-2022",
        amount: "48436",
        status: "declined",
      },
      {
        id: 34,
        application_id: "0436406",
        collection_date: "04-May-2022",
        due_date: "14-Aug-2022",
        amount: "79301",
        status: "payed",
      },
      {
        id: 35,
        application_id: "1831704",
        collection_date: "10-Apr-2022",
        due_date: "03-Aug-2022",
        amount: "84154",
        status: "declined",
      },
      {
        id: 36,
        application_id: "8400442",
        collection_date: "27-Oct-2021",
        due_date: "03-Mar-2022",
        amount: "47686",
        status: "declined",
      },
      {
        id: 37,
        application_id: "3538755",
        collection_date: "03-Dec-2021",
        due_date: "17-Jun-2022",
        amount: "12408",
        status: "payed",
      },
      {
        id: 38,
        application_id: "7819463",
        collection_date: "14-Apr-2022",
        due_date: "04-Aug-2022",
        amount: "39574",
        status: "payed",
      },
      {
        id: 39,
        application_id: "1938129",
        collection_date: "27-Nov-2021",
        due_date: "08-Aug-2022",
        amount: "17606",
        status: "declined",
      },
      {
        id: 40,
        application_id: "4092572",
        collection_date: "28-Sep-2021",
        due_date: "24-Jul-2022",
        amount: "18711",
        status: "payed",
      },
      {
        id: 41,
        application_id: "2207366",
        collection_date: "17-Sep-2021",
        due_date: "22-May-2022",
        amount: "16589",
        status: "declined",
      },
      {
        id: 42,
        application_id: "2563669",
        collection_date: "16-Nov-2021",
        due_date: "01-Feb-2022",
        amount: "91329",
        status: "declined",
      },
      {
        id: 43,
        application_id: "5890918",
        collection_date: "31-Jul-2022",
        due_date: "02-Jul-2022",
        amount: "20948",
        status: "declined",
      },
      {
        id: 44,
        application_id: "1671469",
        collection_date: "31-Jan-2022",
        due_date: "22-Apr-2022",
        amount: "82932",
        status: "payed",
      },
      {
        id: 45,
        application_id: "0365045",
        collection_date: "16-Nov-2021",
        due_date: "22-Oct-2021",
        amount: "86991",
        status: "payed",
      },
      {
        id: 46,
        application_id: "8785574",
        collection_date: "28-Sep-2021",
        due_date: "05-Jan-2022",
        amount: "70431",
        status: "declined",
      },
      {
        id: 47,
        application_id: "9018305",
        collection_date: "02-Aug-2022",
        due_date: "22-Apr-2022",
        amount: "54548",
        status: "declined",
      },
      {
        id: 48,
        application_id: "6653422",
        collection_date: "19-Nov-2021",
        due_date: "11-Oct-2021",
        amount: "69288",
        status: "declined",
      },
      {
        id: 49,
        application_id: "8248540",
        collection_date: "22-Sep-2021",
        due_date: "25-Nov-2021",
        amount: "20146",
        status: "declined",
      },
      {
        id: 50,
        application_id: "6053574",
        collection_date: "12-Mar-2022",
        due_date: "04-Feb-2022",
        amount: "01342",
        status: "declined",
      },
    ],
    []
  );
  const columns = useMemo(
    () => [
      {
        Header: "Application Id",
        accessor: "application_id",
      },
      {
        Header: "Collection Date",
        accessor: "collection_date",
      },
      {
        Header: "Due Date",
        accessor: "due_date",
      },
      {
        Header: "Amount",
        accessor: "amount",
      },
      {
        Header: "Status",
        accessor: "status",
      },
    ],
    []
  );
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <section className=" px-3 py-5 sm:shadow-2xl sm:shadow-[#EAF2FB] md:overflow-auto md:w-[95%] md:mx-auto md:px-0">
      <table className="w-full" {...getTableProps()}>
        <thead>
          {
            // Loop over the header rows
            headerGroups.map((headerGroup) => (
              // Apply the header row props
              <tr {...headerGroup.getHeaderGroupProps()}>
                {
                  // Loop over the headers in each row
                  headerGroup.headers.map((column) => (
                    // Apply the header cell props
                    <th
                      className="py-3 px-3 whitespace-nowrap font-semibold"
                      {...column.getHeaderProps()}
                    >
                      {
                        // Render the header
                        column.render("Header")
                      }
                    </th>
                  ))
                }
              </tr>
            ))
          }
        </thead>
        <tbody {...getTableBodyProps()}>
          {/* previouse data */}

          {/* <tr
        
        className="odd:bg-[#F6FAFD] cursor-pointer"
      >
        <td className="py-[18px] px-[0px]   whitespace-nowrap font-medium ">
          
         
        </td>
       
        <td className="  py-[18px] px-[0px] whitespace-nowrap font-medium  ">
          <p
            className={`p-1 w-24 capitalize whitespace-nowrap mx-auto font-medium ${
              item.status === "payed" && "text-[#00A03E] bg-[#E5FFEF]"
            } ${
              item.status === "declined" &&
              "text-[#DE4307] bg-[#FEEDE6]"
            }`}
          >
            {item.status}
          </p>
        </td>
      
      </tr> */}

          {
            // Loop over the table rows
            rows.map((row) => {
              // Prepare the row for display
              prepareRow(row);
              return (
                // Apply the row props
                <tr
                  // onClick={() =>
                  //   navigate(
                  //     `/history/details/${item.application_id.slice(
                  //       1,
                  //       item.application_id.length
                  //     )}`
                  //   )
                  // }
                  className="odd:bg-[#F6FAFD] cursor-pointer"
                  {...row.getRowProps()}
                >
                  {
                    // Loop over the rows cells
                    row.cells.map((cell) => {
                      // Apply the cell props
                      return (
                        <td
                          className="py-[18px]  px-[0px]   whitespace-nowrap font-medium "
                          {...cell.getCellProps()}
                        >
                          {
                            // Render the cell contents
                            cell.render("Cell")
                          }
                        </td>
                      );
                    })
                  }
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </section>
  );
};

export default TableV2;
