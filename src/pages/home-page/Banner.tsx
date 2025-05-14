"use client"


import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Banner = () => {
    return (
        <div className="bgGradientColor min-h-screen flex items-start py-10">
            <div className="max-w-7xl mx-auto px-4 w-full  ">
                <div className="flex flex-col-reverse md:flex-row items-start justify-between gap-10">

                    {/* Left Side */}
                    <div className="w-full md:w-1/2">
                        <button className="bg-white/20 px-4 py-2 rounded-lg text-sm sm:text-base md:text-lg font-semibold text-white">
                            #১ শিক্ষা প্লাটফর্ম
                        </button>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-white font-bold mt-4 leading-tight">
                            আপনার জ্ঞানের যাত্রা শুরু করুন আজই
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl text-white my-4 leading-relaxed">
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

                    {/* Right Side */}
                    <div className="w-full md:w-1/2 flex justify-center">
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
                                src="/images/home-page/banner/banner-img-1.svg"
                                width={800}
                                height={600}
                                alt="Banner Image"
                                className="w-full h-auto object-contain"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
