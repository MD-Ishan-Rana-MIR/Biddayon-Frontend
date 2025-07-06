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
    Shield,
    Bell,
    Settings,
    HelpCircle,
    LogOut,
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
        const isActive = pathname === path
        return `flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${isActive
            ? "bg-primary text-white dark:bg-primary dark:text-white"
            : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            }`
    }

    return (
        <div
            className={`${collapsed ? "w-[80px]" : "w-[220px]"
                } h-screen bg-white py-4 px-2 transition-all duration-300 flex flex-col fixed top-0 left-0 z-20`}
        >
            {/* Top Logo and Toggle Button */}
            <div className="mb-10">
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
                    { href: "/admin/users", label: "Users", icon: <Users className="w-5 h-5" /> },
                    { href: "/admin/courses", label: "Courses", icon: <BookOpen className="w-5 h-5" /> },
                    { href: "/admin/content", label: "Content", icon: <FileText className="w-5 h-5" /> },
                    { href: "/admin/payments", label: "Payments", icon: <CreditCard className="w-5 h-5" /> },
                    { href: "/admin/reports", label: "Reports", icon: <FileCode2 className="w-5 h-5" /> },
                    { href: "/admin/tickets", label: "Support Tickets", icon: <TicketCheck className="w-5 h-5" /> },
                    { href: "/admin/system", label: "System", icon: <Database className="w-5 h-5" /> },
                    { href: "/admin/security", label: "Security", icon: <Shield className="w-5 h-5" /> },
                    { href: "/admin/notifications", label: "Notifications", icon: <Bell className="w-5 h-5" /> },
                    { href: "/admin/settings", label: "Settings", icon: <Settings className="w-5 h-5" /> },
                    { href: "/admin/help", label: "Help", icon: <HelpCircle className="w-5 h-5" /> },
                ].map(({ href, label, icon }) => (
                    <Link key={href} href={href} className={getLinkClassName(href)}>
                        <div className="flex items-center gap-3">
                            {icon}
                            {!collapsed && <span className="text-lg">{label}</span>}
                        </div>
                    </Link>
                ))}
            </nav>
            <div className="mt-auto border-t border-gray-200 pt-4 dark:border-gray-700">
                <Link
                    href="/login"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                >
                    <LogOut className="h-5 w-5" />
                    <span>Logout</span>
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;
