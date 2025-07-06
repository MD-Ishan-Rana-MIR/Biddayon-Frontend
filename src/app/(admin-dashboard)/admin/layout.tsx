"use client";
import React, { useState } from "react";
import Sidebar from "@/component/admin/sidebar/Sidebar";
import AdminHeader from "@/component/admin/admin-header/AdminHeader";
import SmallSidebar from "@/component/admin/sidebar/SmallSidebar";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  Bell,
  Menu,
  Moon,
  Search,
  User,
  X,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <>
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 w-full h-16 bg-white shadow-md z-50 flex items-center justify-between px-4">
        <Sheet open={mobileSidebarOpen} onOpenChange={setMobileSidebarOpen}>
          <SheetTrigger asChild>
            <button>
              <Menu className="h-6 w-6 cursor-pointer" />
            </button>
          </SheetTrigger>

          <SheetContent side="left" className="p-0 w-[220px]">
            {/* Logo & Close */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
              <Link href={"/admin"}>
                <h1 className="text-lg font-bold text-[#7C3AED]">
                  বিদ্যায়ন <span className="text-black">Admin</span>
                </h1>
              </Link>
              <SheetClose asChild>
                {/* <button>
                  <X className="h-5 w-5 text-gray-600" />
                </button> */}
              </SheetClose>
            </div>

            <SmallSidebar onItemClick={() => setMobileSidebarOpen(false)} />
          </SheetContent>
        </Sheet>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="relative">
            <span className="absolute left-3 top-2.5 text-gray-400">
              <Search className="h-4 w-4" />
            </span>
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-1 border-gray-300 rounded-md focus:outline-none bg-[#F3F4F6] focus:ring-0 border border-none"
            />
          </div>

          {/* Dark Mode Toggle (Optional) */}
          <button className="cursor-pointer rounded-full bg-white p-1 text-gray-500 hover:text-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:text-white">
            <Moon className="h-5 w-5" />
          </button>

          {/* Notifications */}
          <button className=" cursor-pointer rounded-full bg-white p-1 text-gray-500 hover:text-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:text-white">
            <Bell className="h-5 w-5" />
          </button>

          {/* Profile Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="cursor-pointer flex rounded-full bg-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
                  <User className="h-5 w-5" />
                </div>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href="/admin/profile" className="w-full">
                  Your Profile
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/admin/settings" className="w-full">
                  Settings
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href="/login" className="w-full">
                  Sign Out
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex min-h-screen">
        <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
        <div
          className="flex flex-col flex-1 min-h-screen transition-all duration-300"
          style={{ marginLeft: collapsed ? 70 : 220 }}
        >
          <AdminHeader collapsed={collapsed} />
          <main className="flex-1 mt-16 p-4 overflow-auto bg-[#F3F4F6]">
            {children}
          </main>
        </div>
      </div>

      {/* Mobile Main */}
      <div className="lg:hidden pt-16 px-4 bg-[#F3F4F6] min-h-screen">
        {children}
      </div>
    </>
  );
};

export default Layout;
