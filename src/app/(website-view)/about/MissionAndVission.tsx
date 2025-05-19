import { Heart, Target } from 'lucide-react';
import React from 'react';

const MissionAndVission = () => {
    return (
        <div className='md:mt-20 sm:mt-16 mt-12'>
            {/* title and description */}
            <div className='text-center'>
                <p className='text-sm text-white bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 inline-block px-3 rounded-xl'>আমাদের মিশন এবং ভিশন</p>
                <h2 className='bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent text-2xl sm:text-3xl md:text-5xl font-bold mt-2 leading-relaxed'>আমরা কি করি এবং কেন করি</h2>
                <p className='md:text-xl text-[14px] sm:text-lg text-slate-700 mt-2'>আমরা বিশ্বাস করি যে শিক্ষা সবার জন্য সহজলভ্য হওয়া উচিত। আমাদের লক্ষ্য হল বাংলাদেশের সকল <br /> মানুষের জন্য উচ্চমানের শিক্ষা সহজলভ্য করা।</p>
            </div>

            {/* mission ans vission card */}
            <div className='grid grid-cols-1 md:grid-cols-2 md:px-32 px-5 md:mt-14 mt-8 sm:mt-10 gap-8 md:gap-14 sm:gap-12'>
                <div className='p-7 shadow-md rounded-xl relative overflow-hidden'>
                    <div className='bg-gradient-to-r from-[#9234EA] to-[#5744E5] inline-block p-4 rounded-lg md:mb-3 mb-2'>
                        <Target size={42} className="text-white"/>
                    </div>
                    <h2 className='text-2xl font-semibold md:mb-4 mb-2'>আমাদের মিশন</h2>
                    <p className='text-slate-600 md:mb-4 mb-3'>
                        আমাদের মিশন হল বাংলাদেশের সকল মানুষের জন্য উচ্চমানের শিক্ষা সহজলভ্য করা। আমরা বিশ্বাস করি যে শিক্ষা সবার জন্য সহজলভ্য হওয়া উচিত এবং আমরা সেই লক্ষ্যে কাজ করে যাচ্ছি।
                    </p>
                    <p className='text-slate-600'>
                        আমরা চাই প্রতিটি শিক্ষার্থী যেন তাদের পছন্দের বিষয়ে দক্ষতা অর্জন করতে পারে এবং তাদের ক্যারিয়ার গড়তে পারে।
                    </p>
                    <div className='w-32 h-32 absolute top-0 right-0 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-bl-full rounded-tr-xl'></div>
                </div>
                <div className='p-7 shadow-md rounded-xl relative overflow-hidden'>
                    <div className='bg-gradient-to-r from-[#DC2B6F] to-[#EA5513] inline-block p-4 rounded-lg md:mb-3 mb-2'>
                        <Heart size={42} className='text-white' />
                    </div>
                    <h2 className='text-2xl font-semibold md:mb-4 mb-3'>আমাদের ভিশন</h2>
                    <p className='text-slate-600 md:mb-4 mb-3'>আমাদের ভিশন হল ২০৩০ সালের মধ্যে বাংলাদেশের সবচেয়ে বড় অনলাইন শিক্ষা প্লাটফর্ম হওয়া এবং ১ কোটি শিক্ষার্থীকে সেবা প্রদান করা। আমরা চাই প্রতিটি বাংলাদেশী নাগরিক যেন সহজেই উচ্চমানের শিক্ষা পেতে পারে।
                    </p>
                    <p className='text-slate-600'>আমরা বিশ্বাস করি যে শিক্ষা একটি দেশের উন্নয়নের মূল চালিকাশক্তি এবং আমরা সেই লক্ষ্যে কাজ করে যাচ্ছি।</p>
                    <div className='w-32 h-32 absolute top-0 right-0 bg-gradient-to-br from-pink-500/20 to-orange-500/20 rounded-bl-full rounded-tr-xl'></div>
                </div>
            </div>
        </div>
    );
};

export default MissionAndVission;