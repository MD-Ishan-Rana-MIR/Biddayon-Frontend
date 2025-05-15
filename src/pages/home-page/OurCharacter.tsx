"use client"

import { BookOpen, GraduationCapIcon } from 'lucide-react'
import React from 'react'
import { motion } from "framer-motion";

const OurCharacter: React.FC = () => {
    return (
        <div className=' h-screen ' >
            <div className='mt-32 ' >
                <div>
                    <button className=' bgGradientColor block mx-auto px-4 py-1 rounded-3xl text-white font-semibold ' >আমাদের বৈশিষ্ট্য</button>
                    <h1 className='textGradient font-bold text-6xl text-center  leading-24 ' >কেন আমাদের প্লাটফর্ম বেছে নিবেন?</h1>
                    <h1 className='text-center text-[#6b7280] text-2xl ' >আমাদের প্লাটফর্ম আপনাকে সর্বোচ্চ মানের শিক্ষা প্রদান করে, যা আপনার ক্যারিয়ার উন্নয়নে সাহায্য করবে।</h1>
                </div>
                <div className=' max-w-4xl mx-auto flex flex-row justify-between gap-x-14 mt-20  ' >
                    {/* 1st  card  */}
                    <motion.div
                        whileHover={{ y: -10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className=" text-center bg-[linear-gradient(90deg,rgba(165,86,247,1)_0%,rgba(137,92,244,1)_50%)] p-8 rounded-2xl text-white"
                    >
                        <div className="flex justify-center mb-2">
                            <BookOpen className="w-8 h-8" />
                        </div>
                        <h1 className=' font-semibold text-xl my-3 ' >বিস্তৃত কোর্স লাইব্রেরি</h1>
                        <p>১০০+ কোর্স যা আপনার দক্ষতা বাড়াতে সাহায্য করবে</p>
                    </motion.div>
                    {/* 2nd card  */}
                    <motion.div
                        whileHover={{ y: -10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className=" text-center bg-[linear-gradient(90deg,rgba(238,70,141,1)_0%,rgba(243,64,98,1)_50%)] p-8 rounded-2xl text-white"
                    >
                        <div className="flex justify-center mb-2">
                            <GraduationCapIcon className="w-8 h-8" />
                        </div>
                        <h1 className="font-semibold text-xl my-3">অভিজ্ঞ শিক্ষক</h1>
                        <p>দেশের সেরা শিক্ষকদের দ্বারা তৈরি করা কোর্স</p>
                    </motion.div>
                    {/* 3rd card  */}
                    <div>
                        <motion.div
                            whileHover={{ y: -10 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className=" text-center bg-[linear-gradient(90deg,rgba(249,118,22,1)_0%,rgba(246,156,12,1)_50%)] p-8 rounded-2xl text-white"
                        >
                            <div className="flex justify-center mb-2">
                                <GraduationCapIcon className="w-8 h-8" />
                            </div>
                            <h1 className="font-semibold text-xl my-3">সক্রিয় কমিউনিটি</h1>
                            <p>সহপাঠীদের সাথে যোগাযোগ করুন এবং একসাথে শিখুন</p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurCharacter

