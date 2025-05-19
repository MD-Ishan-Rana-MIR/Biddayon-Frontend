import Image from 'next/image';
import { motion } from 'framer-motion';

const ContactPageBanner = () => {
    return (
        <div className="bgGradientColor md:min-h-screen flex items-center py-14 md:py-0 sm:py-10">
            <div className="max-w-7xl mx-auto px-4 w-full  ">
                <div className="flex flex-col-reverse md:flex-row items-start justify-between gap-10">
                    {/* Left Side */}
                    <div className="w-full md:w-1/2">
                        <button className="bg-white/20 px-4 py-2 rounded-lg text-sm sm:text-base md:text-sm font-semibold text-white">
                            যোগাযোগ
                        </button>
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-white font-bold mt-4 leading-tight">
                            আমাদের সাথে যোগাযোগ করুন
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl text-white my-4 leading-relaxed">
                            আপনার যেকোনো প্রশ্ন বা মতামত জানাতে আমাদের সাথে যোগাযোগ করুন। আমরা সবসময় আপনাকে সাহায্য করতে প্রস্তুত।
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

export default ContactPageBanner;