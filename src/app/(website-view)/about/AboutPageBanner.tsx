"use client"
import Image from 'next/image';
import { motion } from 'framer-motion';

const AboutPageBanner = () => {
    return (
        <div className="bgGradientColor md:min-h-screen flex items-center py-12 md:py-0 sm:py-7">
            <div className="max-w-7xl mx-auto px-4 w-full  ">
                <div className="flex flex-col-reverse md:flex-row items-start justify-between gap-10">
                    {/* Left Side */}
                    <div className="w-full md:w-1/2">
                        <button className="bg-white/20 px-4 py-2 rounded-lg text-sm sm:text-base md:text-sm font-semibold text-white">
                            আমাদের সম্পর্কে
                        </button>
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-white font-bold mt-4 leading-tight">
                            শিক্ষালয় - বাংলাদেশের সেরা ই-লার্নিং প্লাটফর্ম
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl text-white my-4 leading-relaxed">
                            শিক্ষালয় হল একটি অনলাইন শিক্ষা প্লাটফর্ম যা ২০১৮ সালে প্রতিষ্ঠিত হয়েছিল। আমাদের লক্ষ্য হল বাংলাদেশের সকল মানুষের জন্য উচ্চমানের শিক্ষা সহজলভ্য করা।
                        </p>
                    </div>

                    {/* Right Side */}
                    <div className="w-full md:w-[40%] flex justify-center">
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
                                                    className="w-full h-auto object-contain h-[300px] md:h-[350px]"
                                                />
                                            </motion.div>
                                        </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPageBanner;