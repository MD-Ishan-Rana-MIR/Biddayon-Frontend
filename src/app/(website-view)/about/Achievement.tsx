"use client";

import { Award, BookOpen, GraduationCap, Users } from "lucide-react";
import Image from "next/image";

const Achievement = () => {
    return (
        <div className="mt-32 md:px-16 px-4 flex items-center justify-between gap-16 flex-col md:flex-row">
            <div className="md:w-1/2">
                <p className="text-sm text-white inline-block px-3 bg-green-400 rounded-xl">আমাদের অর্জন</p>
                <h2 className="text-5xl font-bold text-green-500 mt-2">আমাদের সাফল্য</h2>
                <p className="text-slate-700 text-lg">২০১৮ সাল থেকে আমরা অনেক পথ পাড়ি দিয়েছি। আমাদের কিছু উল্লেখযোগ্য অর্জন:</p>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mt-3">
                    <div className="flex items-center gap-4 shadow-xl p-5 rounded-xl">
                        <p className="bg-green-500 p-3 inline-block rounded-full">
                            <Users size={30} className="text-white"/>
                        </p>
                        <div>
                            <p className="text-2xl text-green-500 font-semibold">৫০,০০০+</p>
                            <p className="text-sm text-slate-600">শিক্ষার্থী</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 shadow-xl p-5 rounded-xl">
                        <p className="bg-green-500 p-3 inline-block rounded-full">
                            <BookOpen size={30} className="text-white"/>
                        </p>
                        <div>
                            <p className="text-2xl text-green-500 font-semibold">১০০+</p>
                            <p className="text-sm text-slate-600">কোর্স</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 shadow-xl p-5 rounded-xl">
                        <p className="bg-green-500 p-3 inline-block rounded-full">
                            <GraduationCap size={30} className="text-white"/>
                        </p>
                        <div>
                            <p className="text-2xl text-green-500 font-semibold">৫০+</p>
                            <p className="text-sm text-slate-600">শিক্ষক</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 shadow-xl p-5 rounded-xl">
                        <p className="bg-green-500 p-3 inline-block rounded-full">
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
                <Image className="" width={300} height={300} alt="success" src={'/images/team/member.avif'}></Image>
            </div>
        </div>
    );
};

export default Achievement;