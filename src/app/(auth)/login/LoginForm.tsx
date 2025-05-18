import { MoveRight } from "lucide-react";
import Link from "next/link";
import React from "react";

import { FcFactory, FcGoogle } from "react-icons/fc";
import { TiSocialFacebook } from "react-icons/ti";
const LoginForm: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bgLoginPageColor px-4">
      <div className="w-full max-w-md bg-white rounded-xl border-t-4  shadow-md p-8">
        <h3 className="text-sm bg-[linear-gradient(90deg,_rgba(176,84,236,1)_0%,_rgba(231,73,161,1)_50%,_rgba(206,78,195,1)_100%)] text-white rounded-full px-3 py-1 w-fit mx-auto mb-4">লগইন</h3>
        <h1 className="text-2xl text-center font-bold bg-[linear-gradient(90deg,_rgba(158,49,217,1)_0%,_rgba(196,43,155,1)_50%,_rgba(212,40,130,1)_100%)] bg-clip-text text-transparent mb-2">
          আপনার অ্যাকাউন্টে লগইন করুন
        </h1>
        <p className="text-center text-gray-700 mb-6 text-sm">
          আপনার ইমেইল এবং পাসওয়ার্ড দিয়ে লগইন করুন
        </p>

        <form className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">ইমেইল</label>
            <input
              type="email"
              placeholder="আপনার ইমেইল লিখুন"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="text-sm font-medium text-gray-700">পাসওয়ার্ড</label>
              <a href="#" className="text-sm text-pink-600 hover:underline">পাসওয়ার্ড ভুলে গেছেন?</a>
            </div>
            <input
              type="password"
              placeholder="আপনার পাসওয়ার্ড লিখুন"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          <div className="flex items-center">
            <input
              id="remember"
              type="checkbox"
              className="w-4 h-4 text-pink-600 border-gray-300 rounded focus:ring-pink-500"
            />
            <label htmlFor="remember" className="ml-2 text-sm text-gray-700">আমাকে মনে রাখুন</label>
          </div>

          <button
            type="submit"
            className="w-full bg-[linear-gradient(90deg,_rgba(158,49,217,1)_0%,_rgba(196,43,155,1)_50%,_rgba(212,40,130,1)_100%)] text-white font-bold py-2 rounded-lg hover:opacity-90 transition"
          >
            লগইন করুন
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
              অ্যাকাউন্ট নেই?
              <Link className=" flex flex-row items-center " href={"/registration"}>
                <span className=" text-[#AF33EB] " > রেজিস্টার করুন </span>
                <span><MoveRight size={10} className="ml-1" /></span>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}


export default LoginForm