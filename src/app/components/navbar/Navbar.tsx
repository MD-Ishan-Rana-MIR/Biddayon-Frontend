'use client';

import { Globe, Menu, Search, SunMoon, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';

const navItems = [
    { label: 'হোম', href: '/' },
    { label: 'কোর্সসমূহ', href: '/courses' },
    { label: 'আমাদের সম্পর্কে', href: '/about' },
    { label: 'যোগাযোগ', href: '/contact' },
    { label: 'ব্লগ', href: '/blog' }
];

const Navbar: React.FC = () => {
    const [hasShadow, setHasShadow] = useState<boolean>(false);
    const [showSearch, setShowSearch] = useState<boolean>(false);
    const pathname = usePathname();

    const [language, setLanguage] = useState<'en' | 'bn'>('bn');
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null);
    const searchRef = useRef<HTMLDivElement | null>(null);

    // Toggle modal visibility
    const toggleModal = () => {
        console.log(`modal open`)
        setIsModalOpen(!isModalOpen);
    };



    // Change the language
    const handleLanguageChange = (newLanguage: 'en' | 'bn') => {
        setLanguage(newLanguage);
        toggleModal();
    };

    useEffect(() => {
        const handleScroll = () => {
            setHasShadow(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Outside click to close language dropdown
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsModalOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // searchbar modal close when click outside

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                searchRef.current &&
                !searchRef.current.contains(event.target as Node)
            ) {
                setShowSearch(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);


    return (
        <div className={`fixed top-0 left-0 w-full bg-white z-50 transition-shadow duration-300 ${hasShadow ? 'shadow-md' : ''}`}>
            <div className="max-w-7xl hidden mx-auto lg:flex items-center justify-between py-4 ">
                {/* logo */}
                <div>
                    <Link href="/">
                        <h1 className="text-xl font-bold text-[#9834E7]">LoGo</h1>
                    </Link>
                </div>

                {/* navbar */}
                <nav>
                    <ul className="flex items-center space-x-6">
                        {navItems.map((item, index) => {
                            const isActive = pathname === item.href;
                            return (
                                <li key={index} className="relative group">
                                    <Link
                                        href={item.href}
                                        className={`text-base font-medium transition-colors duration-300 hover:text-[#9834E7] ${isActive ? 'text-[#9834E7]' : 'text-gray-800'
                                            }`}
                                    >
                                        {item.label}
                                        <span
                                            className={`block h-0.5 mt-1 bg-gradient-to-r from-[#9834E7] via-[#ED4E92] to-[#FA8E42]
                                                transition-transform duration-300 origin-left
                                                ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}
                                        ></span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                {/* button (optional) */}
                <div>
                    <div className="flex items-center space-x-4">
                        {/* Search Icon */}
                        <button
                            onClick={() => setShowSearch(!showSearch)}
                            className="text-gray-600 rounded-full hover:bg-gray-300 p-2 hover:text-[#9834E7] transition-colors duration-200 cursor-pointer "
                        >
                            <Search className="w-5 h-5" />
                        </button>

                        {/* Language Icon */}
                        <button
                            onClick={toggleModal}
                            className="flex items-center gap-1 text-gray-600 hover:text-[#9834E7] cursor-pointer transition-colors duration-200"
                        >
                            <span>{language.toLocaleUpperCase()}</span>
                            <Globe className="w-5 h-5" />
                        </button>

                        {/* Theme Icon (Dark/Light Toggle) */}
                        <button className="text-gray-600 hover:text-[#9834E7] cursor-pointer transition-colors duration-200">
                            <SunMoon className="w-5 h-5" />
                        </button>

                        {/* Auth Buttons */}
                        <div className="flex items-center space-x-2">
                            <Link
                                href="/login"
                                className="px-4 py-2 border border-[#9834E7] text-[#9834E7] rounded-md text-sm hover:bg-[#9834E7] hover:text-white transition-colors duration-300"
                            >
                                লগইন
                            </Link>
                            <Link
                                href="/registration"
                                className="px-4 underlineColor py-2  bg-[#9834E7] text-white rounded-md text-sm hover:bg-[#7a2ec0] transition-colors duration-300"
                            >
                                রেজিস্টার
                            </Link>
                        </div>
                    </div>
                </div>





                {/* Search Box */}
                <div ref={searchRef} className={`fixed inset-0  shadow-2xl shadow-white h-40 top-[60px] bg-white z-40 flex flex-col items-center p-4 transition-all duration-500 transform ${showSearch ? 'scale-100' : 'scale-0 opacity-0'}`}>
                    <div className="relative w-full max-w-7xl mx-auto">
                        <input
                            type="text"
                            placeholder="কোর্স খুঁজুন..."
                            className="w-full border border-gray-300 rounded-md py-2 pl-10 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-[#9834E7]"
                        />
                        <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
                        <button
                            onClick={() => setShowSearch(false)}
                            className="absolute right-3 top-2.5 text-gray-500 hover:text-red-500"
                        >
                            ✕
                        </button>
                    </div>

                    <div className="  w-full  grid p-4 grid-cols-1 sm:grid-cols-3 mt-2 space-x-8  ">
                        <div className=' hover:bg-gray-100 px-4 py-3 hover:shadow transition rounded-lg ' >
                            <h3 className="text-lg font-semibold">ওয়েব ডেভেলপমেন্ট</h3>
                            <p className="text-sm text-gray-500">১৫ টি কোর্স</p>
                        </div>
                        <div className=' hover:bg-gray-100 px-4 py-3 hover:shadow transition rounded-lg' >
                            <h3 className="text-lg font-semibold">গ্রাফিক ডিজাইন</h3>
                            <p className="text-sm text-gray-500">১০ টি কোর্স</p>
                        </div>
                        <div className=' hover:bg-gray-100 px-4 py-3 hover:shadow transition rounded-lg' >
                            <h3 className="text-lg font-semibold">ডিজিটাল মার্কেটিং</h3>
                            <p className="text-sm text-gray-500">৮ টি কোর্স</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Hamburger */}
            <div className="lg:hidden py-6 ">
                <button className=' flex justify-end  px-4  ' onClick={() => setDrawerOpen(true)}>
                    <Menu className="w-6 h-6 text-[#9834E7]   " />
                </button>
            </div>


            {/* small device navbar  */}

            {/* Mobile Drawer */}
            <div className={`fixed top-0 left-0 w-64 h-full bg-white z-50 shadow-xl p-6 transform transition-transform duration-300 ${drawerOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold text-[#9834E7]">মেনু</h2>
                    <button onClick={() => setDrawerOpen(false)}>
                        <X className="w-6 h-6 text-gray-700" />
                    </button>
                </div>
                <nav className="flex flex-col space-y-4">
                    
                    {navItems.map((item, index) => (
                        <Link
                            key={index}
                            href={item.href}
                            onClick={() => setDrawerOpen(false)}
                            className="text-base font-medium text-gray-800 hover:text-[#9834E7] transition"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>
                <div className="mt-6 flex flex-col space-y-2">
                    <Link  onClick={() => setDrawerOpen(false)} href="/login" className="w-full text-center py-2 border border-[#9834E7] text-[#9834E7] rounded-md text-sm hover:bg-[#9834E7] hover:text-white transition">
                        লগইন
                    </Link>
                    <Link onClick={() => setDrawerOpen(false)} href="/registration" className="w-full text-center py-2 bg-[#9834E7] text-white rounded-md text-sm hover:bg-[#7a2ec0] transition">
                        রেজিস্টার
                    </Link>
                </div>
            </div>

            {/* Overlay */}
            {drawerOpen && (
                <div onClick={() => setDrawerOpen(false)} className="fixed inset-0 bg-black bg-opacity-30 z-40" />
            )}


            {/* language modal  */}


            {isModalOpen && (
                <div className="fixed inset-0 top-16 bg-opacity-50 z-40 flex justify-start transition-all duration-700 ease-in-out">
                    {/* Background click area */}
                    <div
                        className={`bg-white p-2 rounded-lg w-[10%] ml-[75%] h-[80px] flex justify-center items-center 
                ${isModalOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'} 
                transition-all duration-700 ease-in-out`}
                        ref={dropdownRef} // ✅ Moved here
                    >
                        <div className="flex flex-col">
                            <button
                                onClick={() => handleLanguageChange(language === 'bn' ? 'en' : 'bn')}
                                className="text-sm py-1 px-2 flex items-center gap-2.5 hover:bg-gray-200 hover:text-black font-semibold rounded-lg transition-colors"
                            >
                                বাংলা <span>(Bangla)</span>
                            </button>
                            <button
                                onClick={() => handleLanguageChange(language === 'bn' ? 'en' : 'bn')}
                                className="text-sm py-1 px-2 hover:bg-gray-200 hover:text-black rounded-2xl transition-colors"
                            >
                                English
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
