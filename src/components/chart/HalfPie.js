import React from "react";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  Tooltip,
  RadialBarChart,
  Legend,
  RadialBar,
} from "recharts";

const data = [
  { name: "Group A", value: 0 },
  { name: "Group B", value: 700 },
];
const COLORS = ["#9C2BD4", "#F8F0FC", "#FFBB28", "#FF8042"];
// const data = [
//   {
//     name: "18-24",
//     uv: 1.47,
//     pv: 2400,
//     fill: "#ff0000",
//   },
// ];

const Chart = () => {
  return (
    <div className="relative -z-10 md:z-0">
      <PieChart width={250} height={200}>
        <Pie
          data={data}
          cx={"50%"}
          cy={"100%"}
          startAngle={180}
          endAngle={0}
          innerRadius={50}
          outerRadius={120}
          fill="#8884d8"
          paddingAngle={0}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
      {/* <RadialBarChart
        width={450}
        height={300}
        innerRadius="40%"
        outerRadius="90%"
        data={data}
        startAngle={180}
        endAngle={0}
      >
        <RadialBar minAngle={15} background clockWise={true} dataKey="uv" />
      
      </RadialBarChart> */}
    </div>
  );
};

export default Chart;
