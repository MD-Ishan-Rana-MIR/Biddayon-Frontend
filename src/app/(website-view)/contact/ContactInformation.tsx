"use client";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
// import PositionMap from "./PositionMap";
import dynamic from "next/dynamic";

const PositionMap = dynamic(() =>import("./PositionMap"), {ssr: false});

const ContactInformation = () => {
    return (
        <div>
            <h1 className="text-2xl md:mb-4 mb-1 sm:text-53l md:text-4xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-semibold">যোগাযোগের তথ্য</h1>
            <p className="text-slate-600 text-sm sm:text-[15px] md:text-lg">আমাদের সাথে যোগাযোগ করতে নিচের যেকোনো মাধ্যম ব্যবহার করতে পারেন</p>
            <div className="md:mt-5 mt-3 space-y-2 sm:space-y-4 md:space-y-6">
                <div className="md:px-4 px-2 py-7 shadow-md rounded-xl w-full flex items-center gap-5">
                    <p className="md:p-3 p-2 bg-gradient-to-r from-[#9F31D8] to-[#D42882] inline-block rounded-full">
                        <MapPin size={25} className="text-white" />
                    </p>
                    <div>
                        <h3 className="text-xl font-bold">ঠিকানা</h3>
                        <p className="text-slate-600 text-[16px]">১২৩, গুলশান এভিনিউ, ঢাকা-১২১২, বাংলাদেশ</p>
                    </div>
                </div>
                <div className="md:px-4 px-2 py-7 shadow-md rounded-xl w-full flex items-center gap-5">
                    <p className="md:p-3 p-2 bg-gradient-to-r from-[#DB2971] to-[#EA5612] inline-block rounded-full">
                        <Phone size={25} className="text-white"/>
                    </p>
                    <div>
                        <h3 className="text-xl font-bold">ফোন</h3>
                        <p className="text-slate-600 text-[16px]">+৮৮০১৭১২৩৪৫৬৭৮</p>
                        <p className="text-slate-600 text-[16px]">+৮৮০১৮১২৩৪৫৬৭৮</p>
                    </div>
                </div>
                <div className="md:px-4 px-2 py-7 shadow-md rounded-xl w-full flex items-center gap-5">
                    <p className="md:p-3 p-2 bg-gradient-to-r from-[#E95A0B] to-[#DB7407] inline-block rounded-full">
                        <Mail size={25} className="text-white" />
                    </p>
                    <div>
                        <h3 className="text-xl font-bold">ইমেইল</h3>
                        <p className="text-slate-600 text-[16px]">info@shikkhaloyo.com</p>
                        <p className="text-slate-600 text-[16px]">support@shikkhaloyo.com</p>
                    </div>
                </div>
                <div className="md:px-4 px-2 py-7 shadow-md rounded-xl w-full flex items-center gap-5">
                    <p className="md:p-3 p-2 bg-gradient-to-r from-[#13A04F] to-[#069666] inline-block rounded-full">
                        <Clock size={25} className="text-white" />
                    </p>
                    <div>
                        <h3 className="text-xl font-bold">অফিস সময়</h3>
                        <p className="text-slate-600 text-[16px]">সোম - শুক্র: সকাল ৯টা - বিকাল ৫টা</p>
                        <p className="text-slate-600 text-[16px]">শনি: সকাল ১০টা - দুপুর ২টা</p>
                        <p className="text-slate-600 text-[16px]">রবি: বন্ধ</p>
                    </div>
                </div>
            </div>
            <div className="md:px-4 px-2 py-7 shadow-md rounded-xl w-full mt-2 sm:mt-4 md:mt-6">
                <h3 className="text-xl font-bold">আমাদের অবস্থান</h3>
                <PositionMap></PositionMap>
            </div>
        </div>
    );
};

export default ContactInformation;