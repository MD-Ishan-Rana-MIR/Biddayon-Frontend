import { ArrowRight, MessageSquare } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from 'framer-motion';


const Support = () => {
    return (
        <div className="md:h-[500px] py-16 md:py-0 px-3 bg-gradient-to-r from-[#9333EA] via-[#E5469F] to-[#FA8E40] flex justify-between items-center gap-16 flex-col md:flex-row">
            <div className="md:w-1/2 space-y-1 md:space-y-3 text-center md:text-start">
                <p className='text-sm bg-slate-200/40 text-white px-3 rounded-xl inline-block'>সাপোর্ট</p>
                <h1 className='md:text-5xl text-2xl sm:text-3xl font-bold text-white'>আমাদের সাপোর্ট টিম সবসময় আপনার পাশে আছে</h1>
                <p className='text-slate-200 md:text-xl sm:text-lg text-[16px] font-semibold'>আমাদের দক্ষ সাপোর্ট টিম সবসময় আপনাকে সাহায্য করতে প্রস্তুত। আপনার যেকোনো প্রশ্ন বা সমস্যা সমাধানে আমরা আছি।</p>
                <div className="flex flex-col md:flex-row md:items-start items-center md:gap-5 gap-2">
                    <Link href={'/'} className="w-1/2 md:w-1/4 rounded-md flex justify-center items-center py-3 bg-white gap-3 hover:bg-slate-200">
                        <MessageSquare size={15} />
                        <span className="text-sm">লাইভ চ্যাট</span>
                    </Link>
                    <Link href={'/'} className="w-1/2 md:w-1/4 rounded-md flex justify-center items-center py-3 bg-white gap-3 hover:bg-slate-200">
                        <ArrowRight size={15} />
                        <span className="text-sm">সাধারণ প্রশ্ন দেখুন</span>
                    </Link>
                </div>
            </div>
            <div className="md:w-1/2">
                <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="w-full max-w-md md:max-w-lg lg:max-w-xl bg-[#e785bf] border-4 border-[#fa8e42] rounded-xl px-4"
                        >
                                <Image
                                src="/images/team/member.avif"
                                width={500}
                                height={50}
                                alt="Banner Image"
                                className="w-full object-contain h-[300px] md:h-[350px]"
                                />
                        </motion.div>
            </div>
        </div>
    );
};

export default Support;