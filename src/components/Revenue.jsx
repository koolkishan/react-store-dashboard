import React from "react";
import { AreaChart, Area, Tooltip, ResponsiveContainer } from "recharts";
import Title from "./Title";
const data = [
  {
    data: 2000,
  },
  {
    data: 4000,
  },
  {
    data: 5000,
  },
  {
    data: 8780,
  },
  {
    data: 9890,
  },
  {
    data: 11390,
  },
  {
    data: 3490,
  },
];
export default function Revenue() {
  return (
    <div className="revenue">
      <Title title="$8,793" subTitle="Revenue this week" />
      <div className="graph">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart width={500} height={400} data={data}>
            <defs>
              <linearGradient id="colorview" x1="0" y1="0" x2="0" y2="1">
                <stop offset="30%" stopColor="#ff4d6d" stopOpacity={0.4} />
                <stop offset="85%" stopColor="#ff4d6d11" stopOpacity={0.2} />
              </linearGradient>
            </defs>
            <Tooltip cursor={false} />
            <Area
              type="monotone"
              dataKey="data"
              stroke="#ee3b3b"
              fill="url(#colorview)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
