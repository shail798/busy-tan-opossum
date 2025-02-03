"use client";

import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";

const monthlyData = [
  { name: "Jan", value: 2400 },
  { name: "Feb", value: 1398 },
  { name: "Mar", value: 9800 },
  { name: "Apr", value: 3908 },
  { name: "May", value: 4800 },
  { name: "Jun", value: 3800 },
  { name: "Jul", value: 4300 },
];

const dailyData = [
  { name: "Mon", value: 400 },
  { name: "Tue", value: 300 },
  { name: "Wed", value: 500 },
  { name: "Thu", value: 280 },
  { name: "Fri", value: 590 },
  { name: "Sat", value: 320 },
  { name: "Sun", value: 480 },
];

export default function StatisticsPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Sidebar />
      <div className="pl-64">
        <Header />
        <main className="p-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-semibold mb-1">Statistics</h1>
              <p className="text-gray-500">
                Detailed analysis of your business performance
              </p>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 border rounded-2xl bg-white hover:bg-gray-50 transition-colors">
              <CalendarIcon className="w-4 h-4" />
              <span>
                {format(new Date(), "MMMM yyyy")} -{" "}
                {format(new Date(), "MMMM yyyy")}
              </span>
            </button>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-4 gap-6">
              <div className="bg-[#002E1D] text-white rounded-3xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="bg-[#A3E635] w-2 h-2 rounded-full" />
                  <span className="text-sm">Growth</span>
                </div>
                <h3 className="text-sm text-white/60 mb-2">Total Sales</h3>
                <div className="text-3xl font-semibold">$89,400</div>
                <div className="text-sm text-[#A3E635] mt-1">+2.5% from last month</div>
              </div>
              <div className="bg-white rounded-3xl p-6 border border-[#002E1D]/10">
                <div className="flex items-center gap-2 mb-4">
                  <div className="bg-[#2A9187] w-2 h-2 rounded-full" />
                  <span className="text-sm text-gray-500">Average</span>
                </div>
                <h3 className="text-sm text-gray-500 mb-2">Average Order</h3>
                <div className="text-3xl font-semibold">$178</div>
                <div className="text-sm text-red-500 mt-1">-0.8% from last month</div>
              </div>
              <div className="bg-white rounded-3xl p-6 border border-[#002E1D]/10">
                <div className="flex items-center gap-2 mb-4">
                  <div className="bg-[#FB923C] w-2 h-2 rounded-full" />
                  <span className="text-sm text-gray-500">Orders</span>
                </div>
                <h3 className="text-sm text-gray-500 mb-2">Total Orders</h3>
                <div className="text-3xl font-semibold">502</div>
                <div className="text-sm text-green-500 mt-1">+1.2% from last month</div>
              </div>
              <div className="bg-white rounded-3xl p-6 border border-[#002E1D]/10">
                <div className="flex items-center gap-2 mb-4">
                  <div className="bg-[#2A9187] w-2 h-2 rounded-full" />
                  <span className="text-sm text-gray-500">Customers</span>
                </div>
                <h3 className="text-sm text-gray-500 mb-2">Total Customers</h3>
                <div className="text-3xl font-semibold">312</div>
                <div className="text-sm text-green-500 mt-1">+3.1% from last month</div>
              </div>
              <div className="bg-white rounded-3xl p-6 border border-[#002E1D]/10">
                <h3 className="text-lg font-semibold mb-6">Customer Growth</h3>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={[
                      { name: "New", value: 145 },
                      { name: "Returning", value: 167 },
                      { name: "Inactive", value: 78 },
                      { name: "Lost", value: 23 },
                    ]}>
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
                      />
                      <Tooltip />
                      <Bar
                        dataKey="value"
                        fill="#FB923C"
                        radius={[4, 4, 0, 0]}
                        maxBarSize={40}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="bg-white rounded-3xl p-6 border border-[#002E1D]/10">
                <h3 className="text-lg font-semibold mb-6">Monthly Revenue</h3>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={monthlyData}>
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
                        dataKey="value"
                        fill="#2A9187"
                        radius={[4, 4, 0, 0]}
                        maxBarSize={40}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-6 border border-[#002E1D]/10">
                <h3 className="text-lg font-semibold mb-6">Daily Orders</h3>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={dailyData}>
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
                      />
                      <Tooltip />
                      <Bar
                        dataKey="value"
                        fill="#A3E635"
                        radius={[4, 4, 0, 0]}
                        maxBarSize={40}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
