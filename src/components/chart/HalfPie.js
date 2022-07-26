import React from "react";
import { PieChart, Pie, Sector, Cell } from "recharts";

const data = [
  { name: "Group A", value: 300 },
  { name: "Group B", value: 700 },
];
const COLORS = ["#9C2BD4", "#F8F0FC", "#FFBB28", "#FF8042"];

const Chart = () => {
  return (
    <div>
      <PieChart width={250} height={200}>
        <Pie
          data={data}
          cx={120}
          cy={150}
          startAngle={180}
          endAngle={0}
          innerRadius={60}
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
    </div>
  );
};

export default Chart;
