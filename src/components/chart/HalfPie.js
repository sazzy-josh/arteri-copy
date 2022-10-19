import React from "react";
import { PieChart, Pie, Sector, Cell, Tooltip } from "recharts";

const data = [
  { name: "Group A", value: 10 },
  { name: "Group B", value: 20 },
  // { name: "Group C", value: 60 },
];
const COLORS = ["#9C2BD4", "#F8F0FC", "#FFBB28", "#FF8042"];

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
        {/* <Tooltip /> */}
      </PieChart>
    </div>
  );
};

export default Chart;
