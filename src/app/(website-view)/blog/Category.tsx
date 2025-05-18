import { Tag } from "lucide-react";
import Link from "next/link";


const Category = () => {
    return (
        <div className="rounded-xl shadow-md md:p-7 sm:p-5 p-3">
            <h2 className="text-lg md:mb-4 mb-2 sm:text-lg md:text-xl bg-gradient-to-r from-[#9633E6] to-[#B22EB9] bg-clip-text text-transparent font-semibold leading-relaxed">ক্যাটাগরি</h2>
            <div>
                <Link href={"/"} className="flex items-center justify-between hover:bg-slate-200 rounded-lg py-4 px-2">
                    <div className="flex items-center gap-2">
                        <Tag size={17} className="text-[#983EEB]" />
                        <h3 className="text-[16px] font-medium">ওয়েব ডেভেলপমেন্ট</h3>
                    </div>
                    <p className="text-[13px] font-semibold border border-slate-400 rounded-xl px-2">15</p>
                </Link>
                <Link href={"/"} className="flex items-center justify-between hover:bg-slate-200 rounded-lg py-4 px-2">
                    <div className="flex items-center gap-2">
                        <Tag size={17} className="text-[#983EEB]" />
                        <h3 className="text-[16px] font-medium">প্রোগ্রামিং</h3>
                    </div>
                    <p className="text-[13px] font-semibold border border-slate-400 rounded-xl px-2">5</p>
                </Link>
                <Link href={"/"} className="flex items-center justify-between hover:bg-slate-200 rounded-lg py-4 px-2">
                    <div className="flex items-center gap-2">
                        <Tag size={17} className="text-[#983EEB]" />
                        <h3 className="text-[16px] font-medium">ফ্রিল্যান্সিং</h3>
                    </div>
                    <p className="text-[13px] font-semibold border border-slate-400 rounded-xl px-2">10</p>
                </Link>
                <Link href={"/"} className="flex items-center justify-between hover:bg-slate-200 rounded-lg py-4 px-2">
                    <div className="flex items-center gap-2">
                        <Tag size={17} className="text-[#983EEB]" />
                        <h3 className="text-[16px] font-medium">শিক্ষা</h3>
                    </div>
                    <p className="text-[13px] font-semibold border border-slate-400 rounded-xl px-2">12</p>
                </Link>
                <Link href={"/"} className="flex items-center justify-between hover:bg-slate-200 rounded-lg py-4 px-2">
                    <div className="flex items-center gap-2">
                        <Tag size={17} className="text-[#983EEB]" />
                        <h3 className="text-[16px] font-medium">গ্রাফিক ডিজাইন</h3>
                    </div>
                    <p className="text-[13px] font-semibold border border-slate-400 rounded-xl px-2">15</p>
                </Link>
                <Link href={"/"} className="flex items-center justify-between hover:bg-slate-200 rounded-lg py-4 px-2">
                    <div className="flex items-center gap-2">
                        <Tag size={17} className="text-[#983EEB]" />
                        <h3 className="text-[16px] font-medium">ডিজিটাল মার্কেটিং</h3>
                    </div>
                    <p className="text-[13px] font-semibold border border-slate-400 rounded-xl px-2">15</p>
                </Link>
            </div>
        </div>
    );
};

export default Category;