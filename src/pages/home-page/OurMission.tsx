
'use client'
import { motion } from 'framer-motion';
import Link from 'next/link'
import React from 'react'
import { MoveRight } from 'lucide-react';

const OurMission: React.FC = () => {
    return (
        <div className='ourMissionnBgColor' >
            <section className=" max-w-7xl mx-auto px-4 md:py-20 py-8 lg:py-32 ">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
                    {/* Left Text */}
                    <div>
                        <span className="inline-block bg-[#477AF5] text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
                            আমাদের সম্পর্কে
                        </span>
                        <h2 className="text-3xl sm:text-2xl  md:text-2xl lg:text-6xl font-semibold text-[#4E47E6] md:mb-4 leading-snug">
                            আমাদের লক্ষ্য
                        </h2>
                        <p className="text-[#6B7280] md:text-xl mb-3 leading-relaxed">
                            আমরা বিশ্বাস করি যে শিক্ষা সবার জন্য সহজলভ্য হওয়া উচিত।
                            আমাদের লক্ষ্য হল বাংলাদেশের সকল মানুষের জন্য উচ্চমানের শিক্ষা সহজলভ্য করা।
                        </p>
                        <p className="text-[#6B7280] md:text-xl mb-3 md:mb-6 leading-relaxed">
                            আমরা ২০১৮ সাল থেকে ৫০,০০০+ শিক্ষার্থীকে তাদের লক্ষ্য অর্জনে সাহায্য করেছি।
                        </p>
                        <Link href="/learn-more">
                            <button className="bg-[#3F7FF5] text-white flex gap-3 items-center cursor-pointer px-6 py-2 rounded-md text-sm font-semibold hover:opacity-90 transition-all">
                                আরও জানুন 
                                <span><MoveRight /></span>
                            </button>
                        </Link>
                    </div>

                    {/* Right Image Placeholder */}
                    <motion.div
                        animate={{
                            y: [0, -20, 0], // Move up then back to original position
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                        className="h-[300px] md:h-[350px] w-full bg-gray-200 px-3  rounded-r-[12px] border-[5px]  border-[#2B57F1] flex items-center justify-center"
                    >
                        <span className="text-gray-400 ">Image Placeholder</span>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

export default OurMission