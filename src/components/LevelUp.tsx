"use client";

import { ArrowRight } from "lucide-react";

export function LevelUp() {
  return (
    <div className="bg-gradient-to-br from-[#002E1D] to-[#004D31] text-white rounded-3xl p-6 border border-[#002E1D]/10">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">Level Up</h3>
        <div className="bg-white/10 rounded-full px-3 py-1 text-sm">
          Level 5
        </div>
      </div>
      <div className="space-y-6">
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span className="text-white/80">Current Progress</span>
            <span>234/400</span>
          </div>
          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#A3E635]"
              style={{ width: "58.5%" }}
            />
          </div>
        </div>
        <button className="w-full py-2.5 bg-white/10 hover:bg-white/20 rounded-lg text-sm font-medium flex items-center justify-center gap-2 transition-colors">
          View Rewards
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
