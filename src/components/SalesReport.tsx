"use client";

import { MoreHorizontal } from "lucide-react";

const salesData = [
  { label: "Product Launched", value: 233, color: "bg-[#E2F3E9]" },
  { label: "Ongoing Product", value: 23, color: "bg-[#E2F3E9]" },
  { label: "Product Sold", value: 482, color: "bg-[#E2F3E9]" },
];

export function SalesReport() {
  return (
    <div className="bg-white rounded-3xl p-6 border border-[#002E1D]/10">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">Sales Report</h3>
        <button className="p-2 hover:bg-gray-50 rounded-lg">
          <MoreHorizontal className="w-5 h-5 text-gray-400" />
        </button>
      </div>
      <div className="space-y-4">
        {salesData.map((item) => (
          <div key={item.label}>
            <div className="flex justify-between mb-2">
              <span className="text-sm text-gray-600">{item.label}</span>
              <span className="text-sm text-gray-900">({item.value})</span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div
                className={`h-full ${item.color}`}
                style={{
                  width: `${(item.value / 500) * 100}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
