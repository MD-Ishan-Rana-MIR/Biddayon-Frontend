// 'use client';

// import { Globe, Menu, Search, SunMoon, X } from 'lucide-react';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import React, { useEffect, useRef, useState } from 'react';

// const navItems = [
//     { label: 'হোম', href: '/' },
//     { label: 'কোর্সসমূহ', href: '/courses' },
//     { label: 'আমাদের সম্পর্কে', href: '/about' },
//     { label: 'যোগাযোগ', href: '/contact' },
//     { label: 'ব্লগ', href: '/blog' }
// ];

// const Navbar: React.FC = () => {
//     const [hasShadow, setHasShadow] = useState<boolean>(false);
//     const [showSearch, setShowSearch] = useState<boolean>(false);
//     const pathname = usePathname();

//     const [language, setLanguage] = useState<'en' | 'bn'>('bn');
//     const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
//     const [drawerOpen, setDrawerOpen] = useState(false);
//     const dropdownRef = useRef<HTMLDivElement | null>(null);
//     const searchRef = useRef<HTMLDivElement | null>(null);

//     // Toggle modal visibility
//     const toggleModal = () => {
//         console.log(`modal open`)
//         setIsModalOpen(!isModalOpen);
//     };



//     // Change the language
//     const handleLanguageChange = (newLanguage: 'en' | 'bn') => {
//         setLanguage(newLanguage);
//         toggleModal();
//     };

//     useEffect(() => {
//         const handleScroll = () => {
//             setHasShadow(window.scrollY > 0);
//         };

//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     // Outside click to close language dropdown
//     useEffect(() => {
//         const handleClickOutside = (event: MouseEvent) => {
//             if (
//                 dropdownRef.current &&
//                 !dropdownRef.current.contains(event.target as Node)
//             ) {
//                 setIsModalOpen(false);
//             }
//         };
//         document.addEventListener("mousedown", handleClickOutside);
//         return () => document.removeEventListener("mousedown", handleClickOutside);
//     }, []);

//     // searchbar modal close when click outside

//     useEffect(() => {
//         const handleClickOutside = (event: MouseEvent) => {
//             if (
//                 searchRef.current &&
//                 !searchRef.current.contains(event.target as Node)
//             ) {
//                 setShowSearch(false);
//             }
//         };
//         document.addEventListener("mousedown", handleClickOutside);
//         return () => document.removeEventListener("mousedown", handleClickOutside);
//     }, []);


//     return (
//         <div className={`fixed top-0 left-0 w-full bg-white z-50 transition-shadow duration-300 ${hasShadow ? 'shadow-md' : ''}`}>
//             <div className="max-w-7xl hidden mx-auto lg:flex items-center justify-between py-4 ">
//                 {/* logo */}
//                 <div>
//                     <Link href="/">
//                         <h1 className="text-xl font-bold text-[#9834E7]">LoGo</h1>
//                     </Link>
//                 </div>

//                 {/* navbar */}
//                 <nav>
//                     <ul className="flex items-center space-x-6">
//                         {navItems.map((item, index) => {
//                             const isActive = pathname === item.href;
//                             return (
//                                 <li key={index} className="relative group">
//                                     <Link
//                                         href={item.href}
//                                         className={`text-base font-medium transition-colors duration-300 hover:text-[#9834E7] ${isActive ? 'text-[#9834E7]' : 'text-gray-800'
//                                             }`}
//                                     >
//                                         {item.label}
//                                         <span
//                                             className={`block h-0.5 mt-1 bg-gradient-to-r from-[#9834E7] via-[#ED4E92] to-[#FA8E42]
//                                                 transition-transform duration-300 origin-left
//                                                 ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}
//                                         ></span>
//                                     </Link>
//                                 </li>
//                             );
//                         })}
//                     </ul>
//                 </nav>

//                 {/* button (optional) */}
//                 <div>
//                     <div className="flex items-center space-x-4">
//                         {/* Search Icon */}
//                         <button
//                             onClick={() => setShowSearch(!showSearch)}
//                             className="text-gray-600 rounded-full hover:bg-gray-300 p-2 hover:text-[#9834E7] transition-colors duration-200 cursor-pointer "
//                         >
//                             <Search className="w-5 h-5" />
//                         </button>

//                         {/* Language Icon */}
//                         <button
//                             onClick={toggleModal}
//                             className="flex items-center gap-1 text-gray-600 hover:text-[#9834E7] cursor-pointer transition-colors duration-200"
//                         >
//                             <span>{language.toLocaleUpperCase()}</span>
//                             <Globe className="w-5 h-5" />
//                         </button>

//                         {/* Theme Icon (Dark/Light Toggle) */}
//                         <button className="text-gray-600 hover:text-[#9834E7] cursor-pointer transition-colors duration-200">
//                             <SunMoon className="w-5 h-5" />
//                         </button>

//                         {/* Auth Buttons */}
//                         <div className="flex items-center space-x-2">
//                             <Link
//                                 href="/login"
//                                 className="px-4 py-2 border border-[#9834E7] text-[#9834E7] rounded-md text-sm hover:bg-[#9834E7] hover:text-white transition-colors duration-300"
//                             >
//                                 লগইন
//                             </Link>
//                             <Link
//                                 href="/registration"
//                                 className="px-4 underlineColor py-2  bg-[#9834E7] text-white rounded-md text-sm hover:bg-[#7a2ec0] transition-colors duration-300"
//                             >
//                                 রেজিস্টার
//                             </Link>
//                         </div>
//                     </div>
//                 </div>





//                 {/* Search Box */}
//                 <div ref={searchRef} className={`fixed inset-0  shadow-2xl shadow-white h-40 top-[60px] bg-white z-40 flex flex-col items-center p-4 transition-all duration-500 transform ${showSearch ? 'scale-100' : 'scale-0 opacity-0'}`}>
//                     <div className="relative w-full max-w-7xl mx-auto">
//                         <input
//                             type="text"
//                             placeholder="কোর্স খুঁজুন..."
//                             className="w-full border border-gray-300 rounded-md py-2 pl-10 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-[#9834E7]"
//                         />
//                         <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
//                         <button
//                             onClick={() => setShowSearch(false)}
//                             className="absolute right-3 top-2.5 text-gray-500 hover:text-red-500"
//                         >
//                             ✕
//                         </button>
//                     </div>

//                     <div className="  w-full  grid p-4 grid-cols-1 sm:grid-cols-3 mt-2 space-x-8  ">
//                         <div className=' hover:bg-gray-100 px-4 py-3 hover:shadow transition rounded-lg ' >
//                             <h3 className="text-lg font-semibold">ওয়েব ডেভেলপমেন্ট</h3>
//                             <p className="text-sm text-gray-500">১৫ টি কোর্স</p>
//                         </div>
//                         <div className=' hover:bg-gray-100 px-4 py-3 hover:shadow transition rounded-lg' >
//                             <h3 className="text-lg font-semibold">গ্রাফিক ডিজাইন</h3>
//                             <p className="text-sm text-gray-500">১০ টি কোর্স</p>
//                         </div>
//                         <div className=' hover:bg-gray-100 px-4 py-3 hover:shadow transition rounded-lg' >
//                             <h3 className="text-lg font-semibold">ডিজিটাল মার্কেটিং</h3>
//                             <p className="text-sm text-gray-500">৮ টি কোর্স</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Mobile Hamburger */}
//             <div className="lg:hidden py-6 ">
//                 <button className=' flex justify-end  px-4  ' onClick={() => setDrawerOpen(true)}>
//                     <Menu className="w-6 h-6 text-[#9834E7]   " />
//                 </button>
//             </div>


//             {/* small device navbar  */}

//             {/* Mobile Drawer */}
//             <div className={`fixed top-0 left-0 w-64 h-full bg-white z-50 shadow-xl p-6 transform transition-transform duration-300 ${drawerOpen ? 'translate-x-0' : '-translate-x-full'}`}>
//                 <div className="flex justify-between items-center mb-6">
//                     <h2 className="text-xl font-bold text-[#9834E7]">মেনু</h2>
//                     <button onClick={() => setDrawerOpen(false)}>
//                         <X className="w-6 h-6 text-gray-700" />
//                     </button>
//                 </div>
//                 <nav className="flex flex-col space-y-4">

//                     {navItems.map((item, index) => (
//                         <Link
//                             key={index}
//                             href={item.href}
//                             onClick={() => setDrawerOpen(false)}
//                             className="text-base font-medium text-gray-800 hover:text-[#9834E7] transition"
//                         >
//                             {item.label}
//                         </Link>
//                     ))}
//                 </nav>
//                 <div className="mt-6 flex flex-col space-y-2">
//                     <Link  onClick={() => setDrawerOpen(false)} href="/login" className="w-full text-center py-2 border border-[#9834E7] text-[#9834E7] rounded-md text-sm hover:bg-[#9834E7] hover:text-white transition">
//                         লগইন
//                     </Link>
//                     <Link onClick={() => setDrawerOpen(false)} href="/registration" className="w-full text-center py-2 bg-[#9834E7] text-white rounded-md text-sm hover:bg-[#7a2ec0] transition">
//                         রেজিস্টার
//                     </Link>
//                 </div>
//             </div>

//             {/* Overlay */}
//             {drawerOpen && (
//                 <div onClick={() => setDrawerOpen(false)} className="fixed inset-0 bg-black bg-opacity-30 z-40" />
//             )}


//             {/* language modal  */}


//             {isModalOpen && (
//                 <div className="fixed inset-0 top-16 bg-opacity-50 z-40 flex justify-start transition-all duration-700 ease-in-out">
//                     {/* Background click area */}
//                     <div
//                         className={`bg-white p-2 rounded-lg w-[10%] ml-[75%] h-[80px] flex justify-center items-center 
//                 ${isModalOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'} 
//                 transition-all duration-700 ease-in-out`}
//                         ref={dropdownRef} // ✅ Moved here
//                     >
//                         <div className="flex flex-col">
//                             <button
//                                 onClick={() => handleLanguageChange(language === 'bn' ? 'en' : 'bn')}
//                                 className="text-sm py-1 px-2 flex items-center gap-2.5 hover:bg-gray-200 hover:text-black font-semibold rounded-lg transition-colors"
//                             >
//                                 বাংলা <span>(Bangla)</span>
//                             </button>
//                             <button
//                                 onClick={() => handleLanguageChange(language === 'bn' ? 'en' : 'bn')}
//                                 className="text-sm py-1 px-2 hover:bg-gray-200 hover:text-black rounded-2xl transition-colors"
//                             >
//                                 English
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Navbar;










"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { BookOpen, Menu, X, Sun, Moon, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useLanguage } from "@/context/language-context"
import { LanguageSwitcher } from "../language-switch/language-switcher"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Header() {
  const { t } = useLanguage()
  const pathname: string | null = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [theme, setTheme] = useState<"light" | "dark">("light")

  useEffect(() => {
    // Check if user prefers dark mode
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark")
      document.documentElement.classList.add("dark")
    }

    // Listen for changes in color scheme preference
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    const handleChange = (e: MediaQueryListEvent) => {
      setTheme(e.matches ? "dark" : "light")
      if (e.matches) {
        document.documentElement.classList.add("dark")
      } else {
        document.documentElement.classList.remove("dark")
      }
    }

    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  // Function to toggle theme
  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light")
      document.documentElement.classList.remove("dark")
    } else {
      setTheme("dark")
      document.documentElement.classList.add("dark")
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Function to determine if a link is active
  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true
    if (path !== "/" && pathname!.startsWith(path)) return true
    return false
  }

  // Function to get the class name for a link based on its active state
  const getLinkClassName = (path: string) => {
    const baseClasses = "font-medium transition-colors relative group"
    const activeClasses = "text-purple-600 dark:text-purple-400"
    const inactiveClasses = "hover:text-purple-600 dark:hover:text-purple-400"

    return `${baseClasses} ${isActive(path) ? activeClasses : inactiveClasses}`
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? "bg-white/80 dark:bg-gray-950/80 backdrop-blur-md shadow-md" : "bg-transparent"
        }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-2xl">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white">
            <BookOpen className="h-5 w-5" />
          </div>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">বিদ্যায়ন</span>
        </Link>

        <nav className="hidden md:flex gap-6">
          <Link href="/" className={getLinkClassName("/")}>
            {t("home")}
            <span
              className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 transition-all ${isActive("/") ? "w-full" : "w-0 group-hover:w-full"}`}
            ></span>
          </Link>
          <Link href="/courses" className={getLinkClassName("/courses")}>
            {t("courses")}
            <span
              className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 transition-all ${isActive("/courses") ? "w-full" : "w-0 group-hover:w-full"}`}
            ></span>
          </Link>
          <Link href="/about" className={getLinkClassName("/about")}>
            {t("about")}
            <span
              className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 transition-all ${isActive("/about") ? "w-full" : "w-0 group-hover:w-full"}`}
            ></span>
          </Link>
          <Link href="/contact" className={getLinkClassName("/contact")}>
            {t("contact")}
            <span
              className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 transition-all ${isActive("/contact") ? "w-full" : "w-0 group-hover:w-full"}`}
            ></span>
          </Link>
          <Link href="/blog" className={getLinkClassName("/blog")}>
            {t("blog")}
            <span
              className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 transition-all ${isActive("/blog") ? "w-full" : "w-0 group-hover:w-full"}`}
            ></span>
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(!isSearchOpen)} className="rounded-full">
            <Search className="h-5 w-5" />
            <span className="sr-only">{t("search")}</span>
          </Button>

          <LanguageSwitcher />

          <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            <span className="sr-only">{t("theme")}</span>
          </Button>

          <div className="hidden md:flex items-center gap-2">
            <Button variant="outline" className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm" asChild>
              <Link href="/login">{t("login")}</Link>
            </Button>
            <Button
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
              asChild
            >
              <Link href="/registration">{t("registration")}</Link>
            </Button>
          </div>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden rounded-full">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between py-4">
                  <Link href="/" className="flex items-center gap-2 font-bold text-2xl">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white">
                      <BookOpen className="h-5 w-5" />
                    </div>
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                      বিদ্যায়ন
                    </span>
                  </Link>
                </div>
                <nav className="flex flex-col gap-4 py-8">
                  <Link
                    href="/"
                    className={`font-medium transition-colors text-lg ${isActive("/") ? "text-purple-600 dark:text-purple-400" : "hover:text-purple-600 dark:hover:text-purple-400"}`}
                  >
                    {t("home")}
                  </Link>
                  <Link
                    href="/courses"
                    className={`font-medium transition-colors text-lg ${isActive("/courses") ? "text-purple-600 dark:text-purple-400" : "hover:text-purple-600 dark:hover:text-purple-400"}`}
                  >
                    {t("courses")}
                  </Link>
                  <Link
                    href="/about"
                    className={`font-medium transition-colors text-lg ${isActive("/about") ? "text-purple-600 dark:text-purple-400" : "hover:text-purple-600 dark:hover:text-purple-400"}`}
                  >
                    {t("about")}
                  </Link>
                  <Link
                    href="/contact"
                    className={`font-medium transition-colors text-lg ${isActive("/contact") ? "text-purple-600 dark:text-purple-400" : "hover:text-purple-600 dark:hover:text-purple-400"}`}
                  >
                    {t("contact")}
                  </Link>
                  <Link
                    href="/blog"
                    className={`font-medium transition-colors text-lg ${isActive("/blog") ? "text-purple-600 dark:text-purple-400" : "hover:text-purple-600 dark:hover:text-purple-400"}`}
                  >
                    {t("blog")}
                  </Link>
                </nav>
                <div className="mt-auto flex flex-col gap-2 py-4">
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/login">{t("login")}</Link>
                  </Button>
                  <Button
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                    asChild
                  >
                    <Link href="/registration">{t("registration")}</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {isSearchOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white dark:bg-gray-950 shadow-lg p-4 border-t dark:border-gray-800 animate-in fade-in slide-in-from-top-4">
          <div className="container">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
              <Input type="search" placeholder={t("search_courses")} className="pl-10 pr-10 py-2 w-full" autoFocus />
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full"
                onClick={() => setIsSearchOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-2 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-lg">
                <p className="font-medium">{t("web_development")}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">১৫ {t("courses_count")}</p>
              </div>
              <div className="p-2 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-lg">
                <p className="font-medium">{t("graphic_design")}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">১০ {t("courses_count")}</p>
              </div>
              <div className="p-2 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-lg">
                <p className="font-medium">{t("digital_marketing")}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">৮ {t("courses_count")}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

