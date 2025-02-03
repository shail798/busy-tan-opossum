"use client";

import { MoreHorizontal } from "lucide-react";

interface Transaction {
  icon: string;
  name: string;
  date: string;
  status: "Completed" | "Pending";
  code: string;
}

const transactions: Transaction[] = [
  {
    icon: "👕",
    name: "Premium T-Shirt",
    date: "Jul 12th 2024",
    status: "Completed",
    code: "0JWEJS7ISNC",
  },
  {
    icon: "🎮",
    name: "Playstation 5",
    date: "Jul 12th 2024",
    status: "Pending",
    code: "0JWEJS7ISNC",
  },
  {
    icon: "🧥",
    name: "Hoodie Gombrong",
    date: "Jul 12th 2024",
    status: "Pending",
    code: "0JWEJS7ISNC",
  },
  {
    icon: "📱",
    name: "iPhone 15 Pro Max",
    date: "Jul 12th 2024",
    status: "Completed",
    code: "0JWEJS7ISNC",
  },
  {
    icon: "☕",
    name: "Lotse",
    date: "Jul 12th 2024",
    status: "Completed",
    code: "0JWEJS7ISNC",
  },
  {
    icon: "☕",
    name: "Starbucks",
    date: "Jul 12th 2024",
    status: "Completed",
    code: "0JWEJS7ISNC",
  },
  {
    icon: "👕",
    name: "Tinek Detstar T-Shirt",
    date: "Jul 12th 2024",
    status: "Completed",
    code: "0JWEJS7ISNC",
  },
];

export function TransactionList() {
  return (
    <div className="bg-white rounded-3xl border border-[#002E1D]/10">
      <div className="p-6 flex items-center justify-between border-b">
        <h3 className="text-lg font-semibold">Transaction</h3>
        <button className="p-2 hover:bg-gray-50 rounded-lg">
          <MoreHorizontal className="w-5 h-5 text-gray-400" />
        </button>
      </div>
      <div className="divide-y">
        {transactions.map((transaction, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 hover:bg-gray-50"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-xl">
                {transaction.icon}
              </div>
              <div>
                <p className="font-medium">{transaction.name}</p>
                <p className="text-sm text-gray-500">{transaction.date}</p>
              </div>
            </div>
            <div className="flex flex-col items-end gap-1">
              <div
                className={`px-3 py-1 rounded-full text-sm ${
                  transaction.status === "Completed"
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {transaction.status}
              </div>
              <span className="text-sm text-gray-500">{transaction.code}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
