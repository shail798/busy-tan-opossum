"use client";

import { motion } from "framer-motion";

const data = [
  { label: "View Count", value: "68%", color: "bg-[#A3E635]" },
  { label: "Percentage", value: "23%", color: "bg-[#2A9187]" },
  { label: "Sales", value: "16%", color: "bg-[#FB923C]" },
];

export function Performance() {
  return (
    <div className="bg-white rounded-3xl p-6 border border-[#002E1D]/10">
      <h3 className="text-lg font-semibold mb-4">Total View Performance</h3>
      <div className="relative aspect-square">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-3xl font-semibold">565K</div>
            <div className="text-sm text-gray-500">Total Count</div>
          </div>
        </div>
        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
          {data.map((item, index) => {
            const offset = data
              .slice(0, index)
              .reduce((acc, curr) => acc + parseFloat(curr.value), 0);
            const value = parseFloat(item.value);
            return (
              <motion.circle
                key={item.label}
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke={item.color.replace("bg-", "")}
                strokeWidth="20"
                strokeDasharray={`${value} ${100 - value}`}
                strokeDashoffset={-offset}
                className="origin-center"
              />
            );
          })}
        </svg>
      </div>
      <div className="mt-6">
        <div className="text-sm text-gray-600 mb-2">
          Here are some tips on how to improve your score.
        </div>
        <button className="w-full py-2 bg-gray-50 rounded-lg text-sm font-medium">
          Guide Views
        </button>
      </div>
      <div className="flex gap-4 mt-4">
        {data.map((item) => (
          <div key={item.label} className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded-sm ${item.color}`} />
            <span className="text-sm">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
