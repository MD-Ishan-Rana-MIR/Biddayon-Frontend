import { ArrowRight, Calendar, ChevronLeft, ChevronRight, Clock, User } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';

const RecentPosts = () => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const postPerPage = 4;
    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPosts = recentPosts.slice(indexOfFirstPost, indexOfLastPost);
    const totalPages = Math.ceil(recentPosts.length / postPerPage);
    const handlePreviousPage = () =>{
        if(currentPage > 1){
            setCurrentPage(currentPage -1);
        }
    }
    const handleNextPage = () =>{
        if(currentPage < totalPages){
            setCurrentPage(currentPage + 1);
        }
    }
    // console.log(currentPage)
    return (
        <div className='md:col-span-2'>
            {/* title */}
            <h1 className="text-xl md:mb-4 mb-2 sm:text-2xl md:text-4xl bg-gradient-to-r from-[#9633E6] to-[#B22EB9] bg-clip-text text-transparent font-semibold leading-relaxed">সাম্প্রতিক পোস্ট</h1>

            {/* recent posts */}
            <div className='md:space-y-8 sm:space-y-6 space-y-4'>
                {
                    currentPosts.map(post=>
                        <div className='grid grid-cols-2 gap-5 shadow-xl rounded-lg overflow-hidden h-[340px]' key={post?.id}>
                            <div className='relative'>
                                <Image className='w-full h-[300px]' width={100} height={400} alt={post?.tag} src={post?.img}></Image>
                                <p className='absolute top-2 right-2 text-sm text-white bg-gradient-to-r from-[#8022CC] to-[#BD1960] rounded-4xl px-3 py-[2px]'>{post?.tag}</p>
                            </div>
                            <div className='flex flex-col justify-center gap-3 px-2'>
                                <h2 className='font-semibold text-2xl'>{post?.title}</h2>
                                <div className='flex items-center gap-4'>
                                    <p className='flex items-center gap-1'>
                                        <User size={15} className='text-slate-600'/>
                                        <span className='text-sm text-slate-600'>{post?.teacher}</span>
                                    </p>
                                    <p className='flex items-center gap-1'>
                                        <Calendar size={15} className='text-slate-600'/>
                                        <span className='text-sm text-slate-600'>{post?.date}</span>
                                    </p>
                                    <p className='flex items-center gap-1'>
                                        <Clock size={15} className='text-slate-600' />
                                        <span className='text-sm text-slate-600'>{post?.time}</span>
                                    </p>
                                </div>
                                <p className='text-slate-700'>{post?.description}</p>
                                <div className='inline-block'>
                                    <button className='flex justify-center items-center gap-3 bg-gradient-to-r from-[#8121C8] to-[#BB1862] text-white text-sm px-5 py-3 cursor-pointer rounded-xl opacity-90 hover:opacity-100 group'>
                                        <span>আরও পড়ুন</span>
                                        <ArrowRight className='group-hover:translate-x-2 duration-300 transition-all' size={15} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>

            {/* pagination */}
            <div className='flex justify-center mt-12 gap-2'>
                <button onClick={handlePreviousPage} className='border border-slate-400 rounded-md px-2 py-1 cursor-pointer'>
                    <ChevronLeft />
                </button>
                {
                    Array.from({length: totalPages}, (_, i)=> i + 1).map(page=>
                        <button onClick={() =>setCurrentPage(page)} className={`px-3 py-1 cursor-pointer border rounded-md ${page=== currentPage ? "bg-[#7E22CE] border-[#7E22CE]" : ""} hover:bg-transparent border-slate-400`} key={page}>
                            {page}
                        </button>
                    )
                }
                <button onClick={handleNextPage} className='border border-slate-400 rounded-md px-2 py-1 cursor-pointer'>
                    <ChevronRight />
                </button>
            </div>
        </div>
    );
};

type Post = {
    id: number;
    img: string;
    tag: string;
    teacher: string;
    title: string;
    date: string;
    time: string;
    description: string;
}
const recentPosts: Post[] = [
    {
        id: 1,
        img: "/images/home-page/banner/banner-img-1.svg",
        tag: "ওয়েব ডেভেলপমেন্ট",
        title: "ওয়েব ডেভেলপমেন্ট শিখতে চান? এখানে শুরু করুন",
        teacher: "রাকিব হাসান",
        date: "১০ মে, ২০২৩",
        time: "৮ মিনিট",
        description: "ওয়েব ডেভেলপমেন্ট শেখার জন্য কোন কোন বিষয় জানা প্রয়োজন এবং কিভাবে শুরু করবেন তা জানুন এই আর্টিকেলে।",
    },
    {
        id: 2,
        img: "/images/home-page/banner/banner-img-1.svg",
        tag: "ফ্রিল্যান্সিং",
        title: "ফ্রিল্যান্সিং এ সফল হওয়ার ১০টি টিপস",
        teacher: "সাবরিনা হক",
        date: "৫ মে, ২০২৩",
        time: "১০ মিনিট",
        description: "ফ্রিল্যান্সিং করে সফলভাবে আয় করতে চান? এই আর্টিকেলে জানুন ফ্রিল্যান্সিং এ সফল হওয়ার ১০টি গুরুত্বপূর্ণ টিপস।",
    },
    {
        id: 3,
        img: "/images/home-page/banner/banner-img-1.svg",
        tag: "প্রোগ্রামিং",
        title: "প্রোগ্রামিং শেখার সেরা ৫টি ভাষা",
        teacher: "আসিফ মাহমুদ",
        date: "২ মে, ২০২৩",
        time: "৭ মিনিট",
        description: "প্রোগ্রামিং শিখতে চান কিন্তু কোন ভাষা দিয়ে শুরু করবেন বুঝতে পারছেন না? এই আর্টিকেলে জানুন প্রোগ্রামিং শেখার সেরা ৫টি ভাষা।",
    },
    {
        id: 4,
        img: "/images/home-page/banner/banner-img-1.svg",
        tag: "ডিজিটাল মার্কেটিং",
        title: "ডিজিটাল মার্কেটিং এর মৌলিক বিষয়সমূহ",
        teacher: "ফারহানা খান",
        date: "২৮ এপ্রিল, ২০২৩",
        time: "৯ মিনিট",
        description: "ডিজিটাল মার্কেটিং কি এবং কেন এটি শিখা প্রয়োজন? এই আর্টিকেলে জানুন ডিজিটাল মার্কেটিং এর মৌলিক বিষয়সমূহ।",
    },
    {
        id: 5,
        img: "/images/home-page/banner/banner-img-1.svg",
        tag: "গ্রাফিক ডিজাইন",
        title: "গ্রাফিক ডিজাইন শেখার সহজ উপায়",
        teacher: "তানভীর আহমেদ",
        date: "২৫ এপ্রিল, ২০২৩",
        time: "৬ মিনিট",
        description: "গ্রাফিক ডিজাইন শিখতে চান? এই আর্টিকেলে জানুন গ্রাফিক ডিজাইন শেখার সহজ উপায় এবং কোন টুলস ব্যবহার করবেন।",
    },
    {
        id: 6,
        img: "/images/home-page/banner/banner-img-1.svg",
        tag: "শিক্ষা",
        title: "অনলাইন শিক্ষার সুবিধা এবং অসুবিধা",
        teacher: "নাজমুল হাসান",
        date: "২০ এপ্রিল, ২০২৩",
        time: "৫ মিনিট",
        description: "অনলাইন শিক্ষা কি এবং এর সুবিধা ও অসুবিধাগুলো কি? এই আর্টিকেলে জানুন অনলাইন শিক্ষার সুবিধা এবং অসুবিধা।",
    }
]

export default RecentPosts;