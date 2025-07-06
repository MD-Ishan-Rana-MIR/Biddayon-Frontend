"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Bell, Moon, Search, User } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface HeaderProps {
    collapsed: boolean;
}

const navLinks = [
    { label: "Dashboard", href: "/admin" },
    { label: "Users", href: "/admin/users" },
    { label: "Courses", href: "/admin/courses" },
    { label: "Reports", href: "/admin/reports" },
];

const AdminHeader: React.FC<HeaderProps> = ({ collapsed }) => {
    const pathname = usePathname();

    const isActive = (path: string) => pathname === path;

    const getLinkClassName = (path: string) => {
        return `px-3 py-2 rounded-md text-sm ${isActive(path)
                ? "bg-primary text-white"
                : "text-gray-700 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-700"
            }`;
    };

    return (
        <header
            style={{
                left: collapsed ? 70 : 220,
                width: `calc(100% - ${collapsed ? 70 : 220}px)`,
            }}
            className="py-3.5 flex items-center px-4 fixed top-0 right-0 transition-all duration-300 bg-white shadow z-10 dark:bg-gray-900"
        >
            <div className="flex items-center justify-between w-full max-w-6xl mx-auto">
                {/* Navigation */}
                <nav className="flex space-x-4">
                    {navLinks.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={getLinkClassName(item.href)}
                        >
                            <span className="text-lg">{item.label}</span>
                        </Link>
                    ))}
                </nav>

                {/* Right-side items */}
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

                    {/* Theme Button (placeholder) */}
                    <button className="rounded-full bg-white cursor-pointer p-1 text-gray-500 hover:text-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:text-white">
                        <Moon className="h-5 w-5" />
                    </button>

                    {/* Notification */}
                    <button className="rounded-full cursor-pointer bg-white p-1 text-gray-500 hover:text-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:text-white">
                        <Bell className="h-5 w-5" />
                    </button>

                    {/* Profile Dropdown using ShadCN */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <button className="flex rounded-full cursor-pointer bg-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700">
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
                                <Link href="/login" className="w-full ">
                                    Sign Out
                                </Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </header>
    );
};

export default AdminHeader;
