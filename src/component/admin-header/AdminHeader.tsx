"use client";
import React from "react";

interface HeaderProps {
    collapsed: boolean;
}

const AdminHeader: React.FC<HeaderProps> = ({ collapsed }) => {
    return (
        <header
            style={{
                left: collapsed ? 60 : 220,
                right: 0,
                width: `calc(100% - ${collapsed ? 60 : 220}px)`,
            }}
            className="h-16 bg-gray-200 border-b border-black flex items-center px-4 fixed top-0 transition-all duration-300 z-10"
        >
            <h1 className="text-xl font-semibold">Header</h1>
        </header>
    );
};

export default AdminHeader;
