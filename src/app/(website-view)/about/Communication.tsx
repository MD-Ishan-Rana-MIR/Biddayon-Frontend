import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const Communication = () => {
    return (
        <div className='md:mt-20 mt-16 sm:mt-16 mb-16 h-[400px] bg-gradient-to-r from-[#9534E9] via-[#EA479A] to-[#FB8F40] flex justify-center items-center flex-col gap-2 text-center'>
            <p className='text-sm bg-slate-200/40 text-white px-3 rounded-xl'>যোগাযোগ</p>
            <h1 className='md:text-5xl text-2xl sm:text-3xl font-bold text-white'>আমাদের সাথে যোগাযোগ করুন</h1>
            <p className='text-slate-200 md:text-xl sm:text-lg text-[16px] font-semibold'>আপনার যেকোনো প্রশ্ন বা মতামত জানাতে আমাদের সাথে যোগাযোগ করুন</p>
            <Link href={"/"} className='text-blue-900 bg-slate-200/40 md:px-7 sm:px-5 px-3 py-3 rounded-lg flex items-center gap-3 hover:scale-[104%] duration-300 group'>
                যোগাযোগ করুন
                <ArrowRight className='group-hover:translate-x-3 duration-300 transition-all'/>
            </Link>
        </div>
    );
};

export default Communication;