"use client";
import React from "react";
import {
    BarChart3,
    Users,
    ChevronsLeft,
    ChevronsRight,
    BookOpen,
    CreditCard,
    FileText,
    FileCode2,
    TicketCheck,
    Database,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarProps {
    collapsed: boolean;
    setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<SidebarProps> = ({ collapsed, setCollapsed }) => {
    const pathname = usePathname();

    const getLinkClassName = (path: string) => {
        const isActive = pathname === path;
        return `flex items-center px-2 py-2 rounded-lg transition-all ${isActive
                ? "bg-primary text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`;
    };

    return (
        <div
            className={`${collapsed ? "w-[60px]" : "w-[220px]"
                } h-screen bg-white border-r border-black py-4 px-2 transition-all duration-300 flex flex-col fixed top-0 left-0 z-20`}
        >
            {/* Top Logo and Toggle Button */}
            <div className="mb-6">
                <div className="flex items-center justify-between px-1">
                    {/* Logo */}
                    {!collapsed && (
                        <h1 className="font-bold text-[#7C3AED] text-base">
                            বিদ্যায়ন <span className="text-black">Admin</span>
                        </h1>
                    )}

                    {/* Toggle Button */}
                    <button
                        onClick={() => setCollapsed(!collapsed)}
                        className="text-gray-600 hover:text-black cursor-pointer ml-auto"
                        title={collapsed ? "Expand Sidebar" : "Collapse Sidebar"}
                    >
                        {collapsed ? <ChevronsRight /> : <ChevronsLeft />}
                    </button>
                </div>
            </div>

            {/* Sidebar Menu */}
            <nav className="space-y-1 overflow-y-auto flex-1">
                {[
                    { href: "/admin", label: "Dashboard", icon: <BarChart3 className="w-5 h-5" /> },
                    { href: "/admin/user", label: "User", icon: <Users className="w-5 h-5" /> },
                    { href: "/admin/courses", label: "Courses", icon: <BookOpen className="w-5 h-5" /> },
                    { href: "/admin/content", label: "Content", icon: <FileText className="w-5 h-5" /> },
                    { href: "/admin/payments", label: "Payments", icon: <CreditCard className="w-5 h-5" /> },
                    { href: "/admin/reports", label: "Reports", icon: <FileCode2 className="w-5 h-5" /> },
                    { href: "/admin/tickets", label: "Support Tickets", icon: <TicketCheck className="w-5 h-5" /> },
                    { href: "/admin/system", label: "System", icon: <Database className="w-5 h-5" /> },
                ].map(({ href, label, icon }) => (
                    <Link key={href} href={href} className={getLinkClassName(href)}>
                        <div className="flex items-center gap-3">
                            {icon}
                            {!collapsed && <span className="text-sm">{label}</span>}
                        </div>
                    </Link>
                ))}
            </nav>
        </div>
    );
};

export default Sidebar;
