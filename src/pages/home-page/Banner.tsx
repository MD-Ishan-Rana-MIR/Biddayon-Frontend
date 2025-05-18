'use client'

import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Banner: React.FC = () => {
    return (
        <div className="bgGradientColor">
            <section className="max-w-7xl mx-auto px-4 md:py-20 py-8 lg:py-32">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">

                    {/* Left Side */}
                    <div className="w-full">
                        <button className="bg-white/20 px-4 py-2 rounded-lg text-sm sm:text-base md:text-lg font-semibold text-white">
                            #১ শিক্ষা প্লাটফর্ম
                        </button>
                        <h1 className="text-3xl sm:text-2xl  md:text-2xl lg:text-6xl text-white font-bold mt-4 leading-tight">
                            আপনার জ্ঞানের যাত্রা শুরু করুন আজই
                        </h1>
                        <p className="text-base sm:text-lg md:text-lg text-white my-4 leading-relaxed">
                            শিক্ষালয় আপনাকে সেরা শিক্ষকদের সাথে সংযুক্ত করে, যারা আপনাকে আপনার পছন্দের বিষয়ে দক্ষতা অর্জনে সাহায্য করবে।
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 mt-4">
                            <button className="flex items-center justify-center gap-2 bg-white text-[#9333ea] font-semibold py-3 px-6 rounded-xl transition duration-300 hover:scale-105">
                                শুরু করুন <ArrowRight />
                            </button>
                            <Link href="/" passHref>
                                <span className="flex items-center justify-center gap-2 bg-white text-black hover:text-white hover:bg-[#9333ea] font-semibold py-3 px-6 rounded-xl transition duration-300 hover:scale-105 cursor-pointer">
                                    আরও জানুন
                                </span>
                            </Link>
                        </div>
                    </div>

                    {/* Right Side - Image Placeholder */}
                    <motion.div
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                        className="h-[300px] md:h-[350px] w-full bg-gray-200 px-3 rounded-[12px] border-[5px] border-[#2B57F1] flex items-center justify-center"
                    >
                        <span className="text-gray-400">Image Placeholder</span>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Banner;
