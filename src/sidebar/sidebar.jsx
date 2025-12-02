"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  FileText,
  BarChart2,
  Settings,
  LogOut,
  Square,
} from "lucide-react";

const navLinks = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
    activeClass: "bg-blue-500 text-white",
    inactiveClass: "hover:bg-gray-100 text-gray-600",
  },
  {
    label: "Users",
    href: "users",
    icon: Users,
    activeClass: "bg-blue-500 text-white",
    inactiveClass: "hover:bg-gray-100 text-gray-600",
  },
  {
    label: "Content",
    href: "content",
    icon: FileText,
    activeClass: "bg-blue-500 text-white",
    inactiveClass: "hover:bg-gray-100 text-gray-600",
  },
  {
    label: "Analytics",
    href: "analytics",
    icon: BarChart2,
    activeClass: "bg-blue-500 text-white",
    inactiveClass: "hover:bg-gray-100 text-gray-600",
  },
  {
    label: "Settings",
    href: "settings",
    icon: Settings,
    activeClass: "bg-blue-500 text-white",
    inactiveClass: "hover:bg-gray-100 text-gray-600",
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 shrink-0 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-4 border-b border-gray-200 flex items-center gap-3">
        <div className="size-8 text-primary flex items-center justify-center">
          <Square className="h-8 w-8" />
        </div>
        <h1 className="text-lg font-bold text-gray-900">
          <Link href={"/"}>Admin Panel</Link>
        </h1>
      </div>
      <nav className="grow p-4">
        <div className="flex flex-col gap-2">
          {navLinks.map(
            ({ label, href, icon: Icon, activeClass, inactiveClass }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg ${
                    isActive ? activeClass : inactiveClass
                  } ${
                    label === "Dashboard"
                      ? isActive
                        ? "font-semibold"
                        : "font-medium"
                      : "font-medium"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  <Icon
                    className={`h-5 w-5 ${isActive ? "text-primary" : ""}`}
                  />
                  <p
                    className={`text-sm ${
                      label === "Dashboard" && isActive
                        ? "font-semibold"
                        : "font-medium"
                    }`}
                  >
                    {label}
                  </p>
                </Link>
              );
            }
          )}
        </div>
      </nav>
      <div className="p-4 border-t border-gray-200">
        <a
          className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 text-gray-600"
          href="#"
        >
          <LogOut className="h-5 w-5" />
          <p className="text-sm font-medium">Logout</p>
        </a>
      </div>
    </aside>
  );
}
