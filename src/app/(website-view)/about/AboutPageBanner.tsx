"use client"
// import Image from 'next/image';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

const AboutPageBanner = () => {
    return (
        <div className="bgGradientColor">
            <section className="max-w-7xl mx-auto px-4 md:py-20 py-8 lg:py-32">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">

                    {/* Left Side */}
                    <div className="w-full">
                        <Badge className="bg-white/20 text-white backdrop-blur-sm">আমাদের সম্পর্কে</Badge>
                        <h1 className="text-3xl sm:text-2xl  md:text-2xl lg:text-5xl text-white font-bold mt-4 leading-tight">
                            শিক্ষালয় - বাংলাদেশের সেরা ই-লার্নিং প্লাটফর্ম
                        </h1>
                        <p className="text-base sm:text-lg md:text-lg text-white my-4 leading-relaxed">
                            শিক্ষালয় হল একটি অনলাইন শিক্ষা প্লাটফর্ম যা ২০১৮ সালে প্রতিষ্ঠিত হয়েছিল। আমাদের লক্ষ্য হল বাংলাদেশের সকল মানুষের জন্য উচ্চমানের শিক্ষা সহজলভ্য করা।
                        </p>
                        
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

export default AboutPageBanner;