"use client";

import { Header } from "@/components/Header";
import { MobileNav } from "@/components/MobileNav";
import { LevelUp } from "@/components/LevelUp";
import { Performance } from "@/components/Performance";
import { RevenueChart } from "@/components/RevenueChart";
import { SalesReport } from "@/components/SalesReport";
import { Sidebar } from "@/components/Sidebar";
import { Stats } from "@/components/Stats";
import { TransactionList } from "@/components/TransactionList";
import { format } from "date-fns";
import { CalendarIcon, MoreHorizontal } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <div className="hidden lg:block">
        <Sidebar />
      </div>
      <MobileNav />
      <div className="lg:pl-64">
        <Header />
        <main className="p-8">
          <div className="grid lg:grid-cols-[2.5fr,1fr] gap-6 divide-x divide-[#002E1D]/10">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h1 className="text-2xl font-semibold mb-1">Dashboard</h1>
                  <p className="text-gray-500">
                    An any way to manage sales with care and precision.
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
              <div className="space-y-4">
                <Stats />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <TransactionList />
                  <div className="space-y-6 order-first lg:order-none">
                    <RevenueChart />
                    <SalesReport />
                  </div>
                </div>
              </div>
            </div>
            <div className="pl-6 space-y-6 -mt-6 pt-0">
              <Performance />
              <LevelUp />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
