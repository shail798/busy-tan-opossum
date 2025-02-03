"use client";

import { cn } from "@/lib/utils";
import {
  BarChart2,
  Box,
  Lock,
  Mail,
  MessageSquare,
  Settings,
  Users,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { icon: Box, label: "Overview", href: "/", iconClass: "grid grid-cols-2 gap-0.5" },
  { icon: BarChart2, label: "Statistics", href: "/statistics" },
  { icon: Users, label: "Customers", href: "/customers" },
  {
    icon: MessageSquare,
    label: "Messages",
    href: "/messages",
    badge: "13",
    iconClass: "rounded-lg",
  },
  { icon: Mail, label: "Transactions", href: "/transactions", iconClass: "rounded-lg" },
];

const generalItems = [
  { icon: Settings, label: "Settings", href: "/settings" },
  { icon: Lock, label: "Security", href: "/security" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 bg-[#002E1D] text-white h-screen fixed left-0 top-0 flex flex-col">
      <div className="px-6 py-8">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 bg-[#A3E635] rounded-sm" />
          <span className="text-xl font-semibold">Siohioma</span>
        </div>
      </div>

      <div className="px-6 py-2">
        <p className="text-xs font-medium text-white/60 mb-4 px-2">
          MENU
        </p>
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-3 px-2 py-2.5 text-white/80 hover:text-white relative group transition-colors",
              pathname === item.href && "text-white bg-[#004D31]/30"
            )}
          >
            <div className={cn(
              "w-5 h-5 flex items-center justify-center",
              item.iconClass,
              pathname === item.href && "text-[#A3E635]"
            )}>
              <item.icon className="w-5 h-5" />
            </div>
            <span>{item.label}</span>
            {item.badge && (
              <span className="ml-auto bg-[#A3E635] text-[#002E1D] text-xs font-medium rounded-full px-2 py-0.5">
                {item.badge}
              </span>
            )}
          </Link>
        ))}
      </div>

      <div className="px-6 py-2 mt-6">
        <p className="text-xs font-medium text-white/60 mb-4 px-2">
          GENERAL
        </p>
        {generalItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-3 px-2 py-2.5 text-white/80 hover:text-white relative group",
              pathname === item.href && "text-white"
            )}
          >
            <item.icon className="w-5 h-5" />
            <span>{item.label}</span>
          </Link>
        ))}
      </div>

      <div className="mt-auto px-6 py-5 border-t border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#004D31] flex items-center justify-center text-white">
            F
          </div>
          <div>
            <p className="font-medium text-sm text-white">Fandaww Punx</p>
            <p className="text-xs text-white/60">
              fandaww6@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
