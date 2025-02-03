"use client";

import { MoreHorizontal } from "lucide-react";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  { name: "Jan", income: 165000, expenses: 145000 },
  { name: "Feb", income: 180000, expenses: 155000 },
  { name: "Mar", income: 175000, expenses: 150000 },
  { name: "Apr", income: 193000, expenses: 165000 },
  { name: "May", income: 185000, expenses: 160000 },
  { name: "Jun", income: 188000, expenses: 162000 },
];

export function RevenueChart() {
  return (
    <div className="bg-white rounded-3xl p-6 border border-[#002E1D]/10">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Revenue</h3>
        <button className="p-2 hover:bg-gray-50 rounded-lg">
          <MoreHorizontal className="w-5 h-5 text-gray-400" />
        </button>
      </div>
      <div className="flex items-center gap-2 mb-6">
        <span className="text-2xl font-semibold">$193,000</span>
        <span className="text-sm text-green-500">+35% from last month</span>
      </div>
      <div className="flex items-center gap-4 mb-6">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-sm bg-[#2A9187]" />
          <span className="text-sm text-gray-600">Income</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-sm bg-[#E5E7EB]" />
          <span className="text-sm text-gray-600">Expenses</span>
        </div>
      </div>
      <div className="h-[240px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis
              dataKey="name"
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `$${value}`}
            />
            <Tooltip />
            <Bar
              dataKey="income"
              fill="#2A9187"
              radius={[4, 4, 0, 0]}
              maxBarSize={40}
            />
            <Bar
              dataKey="expenses"
              fill="#E5E7EB"
              radius={[4, 4, 0, 0]}
              maxBarSize={40}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
