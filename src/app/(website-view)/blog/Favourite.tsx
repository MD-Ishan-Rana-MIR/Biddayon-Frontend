import { Calendar } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Favourite = () => {
    return (
        <div className="rounded-xl shadow-xl md:p-7 sm:p-5 p-3">
            <h2 className="text-lg md:mb-4 mb-2 sm:text-lg md:text-xl bg-gradient-to-r from-[#9633E6] to-[#B22EB9] bg-clip-text text-transparent font-semibold leading-relaxed">জনপ্রিয় পোস্ট</h2>
            <div>
                {
                    favouritePosts.slice(0,3).map(post =>
                        <Link className='p-3 rounded-xl flex justify-between gap-5 hover:bg-gray-100' href={"/"} key={post?.id}>
                            <Image className='h-[100px] rounded-xl' width={100} height={50} alt={post?.tag} src={post?.img}></Image>
                            <div>
                                <h2 className='text-[16px] font-medium'>{post?.title}</h2>
                                <p className='flex items-center gap-2 text-sm text-slate-600'>
                                    <Calendar size={13} />
                                    <span>{post?.date}</span>
                                </p>
                            </div>
                        </Link>
                    )
                }
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
const favouritePosts: Post[] = [
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
export default Favourite;