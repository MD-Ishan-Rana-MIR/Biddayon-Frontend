"use client";
import AdminHeader from "@/component/admin-header/AdminHeader";
import Sidebar from "@/component/sidebar/Sidebar";
import React, { useState } from "react";


const Layout = ({ children }: { children: React.ReactNode }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />

      {/* Right side */}
      <div
        className="flex flex-col flex-1 min-h-screen transition-all duration-300"
        style={{ marginLeft: collapsed ? 60 : 220 }}
      >
        {/* Header */}
        <AdminHeader collapsed={collapsed} />


        {/* Main content */}
        <main className="flex-1 mt-16 p-4 overflow-auto">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
