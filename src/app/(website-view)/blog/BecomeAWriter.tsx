import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const BecomeAWriter = () => {
    return (
        <div className='my-16 h-[400px] bg-gradient-to-r from-[#9534E9] via-[#EA479A] to-[#FB8F40] flex justify-center items-center flex-col gap-2 text-center'>
            <p className='text-sm bg-slate-200/40 text-white px-3 rounded-xl hover:bg-[#923DDC]'>লেখক হোন</p>
            <h1 className='md:text-5xl text-2xl sm:text-3xl font-bold text-white'>আমাদের ব্লগে লেখক হোন</h1>
            <p className='text-slate-200 md:text-xl sm:text-lg text-[16px] font-semibold'>আপনার জ্ঞান ও অভিজ্ঞতা শেয়ার করতে চান? আমাদের ব্লগে লেখক হিসেবে যোগ দিন।</p>
            <Link href={"/"} className='text-blue-900 bg-slate-200/40 px-7 py-3 rounded-lg flex items-center gap-3 hover:scale-[104%] duration-300 group'>
                লেখক হিসেবে যোগ দিন
                <ArrowRight className='group-hover:translate-x-3 duration-300 transition-all'/>
            </Link>
        </div>
    );
};

export default BecomeAWriter;