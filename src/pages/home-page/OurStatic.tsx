
'use client'
import { motion } from 'framer-motion';
import React from 'react'

const OurStatic: React.FC = () => {
    return (
        <div className='ourStaticBgColor' >
            <section className=" max-w-7xl mx-auto px-4 md:py-20 py-8 lg:py-32 ">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
                    {/* left Image Placeholder */}
                    <motion.div
                        animate={{
                            y: [0, -20, 0], // Move up then back to original position
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                        className="h-[300px] md:h-[350px] w-full bg-gray-200 px-3  rounded-[12px] border-[5px]  border-[#2D8FED] flex items-center justify-center"
                    >
                        <span className="text-gray-400 ">Image Placeholder</span>
                    </motion.div>
                    {/* Right Text */}
                    <div>
                        <span className="inline-block bg-gradient-to-r from-[#09B3D6] via-[#3884F4] to-[#1E9FE4] text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
                            আমাদের পরিসংখ্যান
                        </span>
                        <h2 className="text-2xl md:text-5xl font-bold bg-gradient-to-r from-[#09B3D6] via-[#3884F4] to-[#1E9FE4] bg-clip-text text-transparent md:mb-4 leading-snug">
                            সংখ্যায় আমাদের সাফল্য
                        </h2>

                        <div className=' grid md:grid-cols-2 gap-5 mx-auto  ' >
                            {/* total student box  */}
                            <div className=' w-[300px] mx-auto shadow-md bg-white text-center py-6 rounded-xl ' >
                                <h1 className=' text-4xl font-semibold bg-gradient-to-r from-[#A430CE] via-[#B82DB0] to-[#D863AF] bg-clip-text text-transparent ' >৫০,০০০+</h1>
                                <p className=' text-xl text-[#6B7280] ' >শিক্ষার্থী</p>
                            </div>
                            {/* total course box  */}
                            <div className=' w-[300px] mx-auto shadow-md bg-white text-center py-6 rounded-xl ' >
                                <h1 className=' text-4xl font-semibold bg-gradient-to-r from-[#E13952] via-[#E23E44] to-[#E44633] bg-clip-text text-transparent ' >১০০+</h1>
                                <p className=' text-xl text-[#6B7280] ' >কোর্স</p>
                            </div>
                            {/* total teacher box  */}
                            <div className=' w-[300px] mx-auto shadow-md bg-white text-center py-6 rounded-xl ' >
                                <h1 className=' text-4xl font-semibold text-[#E36409] ' >৫০+</h1>
                                <p className=' text-xl text-[#6B7280] ' >শিক্ষক</p>
                            </div>
                            {/* percentance box  */}
                            <div className=' w-[300px] mx-auto shadow-md bg-white text-center py-6 rounded-xl ' >
                                <h1 className=' text-4xl font-semibold text-[#0F9D56] ' >৯৮%</h1>
                                <p className=' text-xl text-[#6B7280] ' >সন্তুষ্টি হার</p>
                            </div>
                        </div>


                    </div>


                </div>
            </section>
        </div>
    )
}

export default OurStatic;