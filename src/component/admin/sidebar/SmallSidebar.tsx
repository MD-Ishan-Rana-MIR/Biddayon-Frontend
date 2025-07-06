"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart3,
  Users,
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

interface SmallSidebarProps {
  onItemClick: () => void;
}

const SmallSidebar: React.FC<SmallSidebarProps> = ({ onItemClick }) => {
  const pathname = usePathname();

  const getLinkClassName = (path: string) => {
    const isActive = pathname === path;
    return `flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${
      isActive
        ? "bg-primary text-white dark:bg-primary dark:text-white"
        : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
    }`;
  };

  const navItems = [
    { href: "/admin", label: "Dashboard", icon: <BarChart3 className="w-5 h-5" /> },
    { href: "/admin/users", label: "User", icon: <Users className="w-5 h-5" /> },
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
  ];

  return (
    <div className="w-[220px] h-screen bg-white py-4 px-2 flex flex-col">
      <nav className="space-y-1 overflow-y-auto flex-1">
        {navItems.map(({ href, label, icon }) => (
          <Link
            key={href}
            href={href}
            onClick={onItemClick}
            className={getLinkClassName(href)}
          >
            <div className="flex items-center gap-3">
              {icon}
              <span className="text-lg">{label}</span>
            </div>
          </Link>
        ))}
      </nav>

      <div className="mt-auto border-t border-gray-200 pt-4 dark:border-gray-700">
        <Link
          href="/login"
          onClick={onItemClick}
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
        >
          <LogOut className="h-5 w-5" />
          <span>Logout</span>
        </Link>
      </div>
    </div>
  );
};

export default SmallSidebar;
