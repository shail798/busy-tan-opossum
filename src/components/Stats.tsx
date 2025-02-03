"use client";

import { MoreHorizontal } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string;
  change: {
    value: string;
    trend: "up" | "down";
  };
}

function StatsCard({ title, value, change }: StatsCardProps) {
  return (
    <div className="bg-white rounded-3xl p-6 flex-1 border border-[#002E1D]/10">
      <div className="flex justify-between items-start">
        <div className="space-y-4">
          <h3 className="text-xl font-medium">{title}</h3>
          <div className="space-y-1">
            <span className="text-3xl font-semibold tracking-tight block pl-4 relative">
              <span className="absolute left-0 top-1 text-sm text-gray-400">$</span>
              {value.replace('$', '')}
            </span>
            <div className="flex items-center gap-1">
              <span className={`text-base ${
                change.trend === "up" ? "text-[#22C55E]" : "text-red-500"
              }`}>
                {change.trend === "up" ? "+" : "-"}{change.value}
              </span>
              <span className="text-gray-500 text-sm">from last month</span>
            </div>
          </div>
        </div>
        <button className="p-2 hover:bg-gray-50 rounded-lg transition-colors">
          <MoreHorizontal className="w-5 h-5 text-gray-400" />
        </button>
      </div>
    </div>
  );
}

export function Stats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="bg-[#002E1D] text-white rounded-3xl p-6 flex-1">
        <div className="flex items-center gap-2 mb-4">
          <div className="bg-red-500 w-2 h-2 rounded-full" />
          <span className="text-sm">Update</span>
        </div>
        <p className="text-sm mb-1">Feb 12th 2024</p>
        <h3 className="text-lg font-semibold mb-2 leading-normal">
          Sales revenue <br />
          increased <span className="text-[#A3E635]">40%</span> in 1 week
        </h3>
        <button className="text-sm text-white/80 hover:text-white flex items-center gap-1">
          See Statistics
          <span className="text-lg">→</span>
        </button>
      </div>
      <StatsCard
        title="Net Income"
        value="$193,000"
        change={{ value: "35%", trend: "up" }}
      />
      <StatsCard
        title="Total Return"
        value="$32,000"
        change={{ value: "24%", trend: "down" }}
      />
    </div>
  );
}
