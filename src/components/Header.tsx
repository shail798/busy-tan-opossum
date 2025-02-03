"use client";

import { Bell, ChevronDown, Mail, Plus, Search } from "lucide-react";

export function Header() {
  return (
    <div className="h-auto lg:h-16 border-b flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 p-6">
      <div className="flex items-center gap-2">
        <h1 className="text-xl font-semibold">Sales Admin</h1>
        <ChevronDown className="w-5 h-5" />
      </div>

      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-6 w-full lg:w-auto">
        <div className="relative w-full lg:w-auto">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search anything in Siohioma..."
            className="w-full lg:w-[300px] h-10 rounded-lg bg-gray-50 pl-10 pr-4 text-sm border border-[#002E1D]/10"
          />
        </div>

        <div className="flex items-center gap-3">
          <button className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-50">
            <Mail className="w-5 h-5" />
          </button>
          <button className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-50">
            <Bell className="w-5 h-5" />
          </button>
          <button className="h-10 px-4 rounded-2xl bg-black text-white flex items-center gap-2 hover:bg-black/90">
            <Plus className="w-4 h-4" />
            Add new product
          </button>
        </div>
      </div>
    </div>
  );
}
