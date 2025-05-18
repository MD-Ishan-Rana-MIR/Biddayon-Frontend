"use client"


import { Lock, Mail, MoveRight, Phone } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaUser } from "react-icons/fa";

import { FcGoogle } from "react-icons/fc";
import { TiSocialFacebook } from "react-icons/ti";
const RegistrationFrom: React.FC = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [confirmPassword, setConfirmPassword] = useState<boolean>(false);

    return (
        <div className="min-h-screen flex items-center justify-center bgLoginPageColor py-24 px-4">
            <div className="w-full max-w-md bg-white rounded-xl border-t-4  shadow-md p-8">
                <h3 className="text-sm bg-[linear-gradient(90deg,_rgba(176,84,236,1)_0%,_rgba(231,73,161,1)_50%,_rgba(206,78,195,1)_100%)] text-white rounded-full px-3 py-1 w-fit mx-auto mb-4">রেজিস্টার
                </h3>
                <h1 className="text-2xl text-center font-bold bg-[linear-gradient(90deg,_rgba(158,49,217,1)_0%,_rgba(196,43,155,1)_50%,_rgba(212,40,130,1)_100%)] bg-clip-text text-transparent mb-2">
                    নতুন অ্যাকাউন্ট তৈরি করুন

                </h1>
                <p className="text-center text-gray-700 mb-6 text-sm">
                    আপনার তথ্য দিয়ে রেজিস্টার করুন


                </p>

                <form className="space-y-4">
                    {/* name  */}
                    <div className="">
                        <label className="block mb-1 text-sm font-medium text-gray-700">নাম</label>

                        <div className="relative">
                            {/* Icon */}
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                                <FaUser />
                            </span>

                            {/* Input */}
                            <input
                                type="text"
                                placeholder="আপনার নাম লিখুন"
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                            />
                        </div>
                    </div>


                    {/* email  */}
                    <div className="">
                        <label className="block mb-1 text-sm font-medium text-gray-700">ইমেইল</label>

                        <div className="relative">
                            {/* Icon */}
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                                <Mail />
                            </span>

                            {/* Input */}
                            <input
                                type="email"
                                placeholder="আপনার ইমেইল লিখুন"
                                className="w-full pl-12 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                            />
                        </div>
                    </div>


                    {/* phone number  */}
                    <div className="">
                        <label className="block mb-1 text-sm font-medium text-gray-700">ফোন নম্বর</label>
                        <div className="relative">
                            {/* Icon */}
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                                <Phone size={19} />
                            </span>

                            {/* Input */}
                            <input
                                type="text"
                                placeholder="আপনার ফোন নম্বর লিখুন"
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                            />
                        </div>
                    </div>

                    {/* password */}

                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">পাসওয়ার্ড</label>

                        <div className="relative">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                                <Lock size={19} />
                            </span>
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="পাসওয়ার্ড লিখুন"
                                className="w-full px-10 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                            />

                            {/* Toggle button */}
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>
                    </div>


                    {/* confirm password  password */}

                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">পাসওয়ার্ড নিশ্চিত করুন</label>

                        <div className="relative">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                                <Lock size={19} />
                            </span>
                            <input
                                type={confirmPassword ? "text" : "password"}
                                placeholder="পাসওয়ার্ড আবার লিখুন"
                                className="w-full px-10 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                            />

                            {/* Toggle button */}
                            <button
                                type="button"
                                onClick={() => setConfirmPassword(!confirmPassword)}
                                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
                            >
                                {confirmPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <input
                            id="remember"
                            type="checkbox"
                            className="w-4 h-4 text-pink-600 border-gray-300 rounded focus:ring-pink-500"
                        />
                        <label htmlFor="remember" className="ml-2 text-sm text-gray-700">
                            আমি <span className=" text-[#AF33EB]  " >ব্যবহারের শর্তাবলী</span> এবং <span className="text-[#AF33EB] " >গোপনীয়তা নীতি</span> মেনে নিচ্ছি</label>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[linear-gradient(90deg,_rgba(158,49,217,1)_0%,_rgba(196,43,155,1)_50%,_rgba(212,40,130,1)_100%)] text-white font-bold py-2 rounded-lg hover:opacity-90 transition"
                    >
                        রেজিস্টার করুন
                    </button>

                    <div className="text-center mt-4 text-gray-500 text-sm">অথবা</div>
                    <div className="flex flex-row justify-between gap-6 " >
                        {/* google  */}
                        <div className=" shadow w-[50%] text-center py-2  rounded-lg border border-gray-50  " >
                            <h1 className=" flex items-center justify-center gap-3 text-[14px] " > <span> <FcGoogle size={25} /> </span> গুগল  </h1>
                        </div>
                        {/* facebook */}
                        <div className=" shadow w-[50%] text-center py-2  rounded-lg border border-gray-50  " >
                            <h1 className=" flex items-center justify-center gap-3 text-[14px] " > <span> <TiSocialFacebook className=" text-[#1877F2] " size={25} /> </span> ফেসবুক  </h1>
                        </div>
                    </div>
                    <div>
                        <p className=" text-[#6B7280] text-center mt-8 text-[14px] font-medium flex flex-row justify-center items-center gap-0.5  " >
                            ইতিমধ্যে অ্যাকাউন্ট আছে?
                            <Link className=" flex flex-row items-center " href={"/login"}>
                                <span className=" text-[#AF33EB] " > লগিন করুন </span>
                                <span><MoveRight size={10} className="ml-1" /></span>
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}


export default RegistrationFrom