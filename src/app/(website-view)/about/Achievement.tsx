"use client";

import { Award, BookOpen, GraduationCap, Users } from "lucide-react";
import Image from "next/image";

const Achievement = () => {
    return (
        <div className="md:mt-20 sm:mt-16 mt-12 px-10 flex items-center justify-between gap-16 flex-col md:flex-row  ">
            <div className="md:w-1/2">
                <p className="text-sm text-white inline-block px-3 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 rounded-xl">আমাদের অর্জন</p>
                <h2 className="md:text-5xl text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-600 mt-2">আমাদের সাফল্য</h2>
                <p className="text-gray-500 text-base sm:text-lg md:text-xl ">২০১৮ সাল থেকে আমরা অনেক পথ পাড়ি দিয়েছি। আমাদের কিছু উল্লেখযোগ্য অর্জন:</p>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mt-3">
                    <div className="flex items-center gap-4 shadow-md p-5 rounded-xl">
                        <p className="bg-gradient-to-r from-green-500 to-emerald-500 p-3 inline-block rounded-full">
                            <Users size={30} className="text-white"/>
                        </p>
                        <div>
                            <p className="text-2xl text-green-500 font-semibold">৫০,০০০+</p>
                            <p className="text-sm text-slate-600">শিক্ষার্থী</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 shadow-md p-5 rounded-xl">
                        <p className="bg-gradient-to-r from-green-500 to-emerald-500 p-3 inline-block rounded-full">
                            <BookOpen size={30} className="text-white"/>
                        </p>
                        <div>
                            <p className="text-2xl text-green-500 font-semibold">১০০+</p>
                            <p className="text-sm text-slate-600">কোর্স</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 shadow-md p-5 rounded-xl">
                        <p className="bg-gradient-to-r from-green-500 to-emerald-500 p-3 inline-block rounded-full">
                            <GraduationCap size={30} className="text-white"/>
                        </p>
                        <div>
                            <p className="text-2xl text-green-500 font-semibold">৫০+</p>
                            <p className="text-sm text-slate-600">শিক্ষক</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 shadow-md p-5 rounded-xl">
                        <p className="bg-gradient-to-r from-green-500 to-emerald-500 p-3 inline-block rounded-full">
                            <Award size={30} className="text-white" />
                        </p>
                        <div>
                            <p className="text-2xl text-green-500 font-semibold">৫টি</p>
                            <p className="text-sm text-slate-600">জাতীয় পুরস্কার</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:w-1/2 border-4 rounded-xl overflow-hidden border-green-500">
                <Image className=" object-cover mx-auto  " width={300} height={300} alt="success" src={'/images/team/member.avif'}></Image>
            </div>
        </div>
    );
};

export default Achievement;