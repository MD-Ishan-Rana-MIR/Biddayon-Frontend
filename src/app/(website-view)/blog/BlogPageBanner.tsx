import Image from "next/image";
import { motion } from "framer-motion";

const BlogPageBanner = () => {
  return (
    <div className="bgGradientColor md:min-h-screen md:py-0 justify-between flex items-center py-20">
      <div className="max-w-7xl mx-auto px-4 w-full">
        <div className="flex flex-col-reverse md:flex-row items-start justify-between gap-6">
          {/* Left Side */}
          <div className="w-full md:w-1/2">
            <button className="bg-white/20 px-4 py-2 rounded-lg text-sm sm:text-base md:text-sm font-semibold text-white">
              ব্লগ
            </button>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-white font-bold mt-4 leading-tight">
              আমাদের ব্লগে স্বাগতম
            </h1>
            <p className="text-[14px] sm:text-lg md:text-xl text-white md:my-4 my-2 leading-relaxed">
              শিক্ষা, প্রযুক্তি, ক্যারিয়ার এবং আরও অনেক বিষয়ে আমাদের নিয়মিত আপডেট পেতে আমাদের ব্লগ ফলো করুন।
            </p>
            <form>
                <div className="relative w-3/4">
                    <input type="text" placeholder="ব্লগ পেজ খুঁজুন..." className="appearance-none w-full bg-white  rounded-4xl outline-[#A855F7] py-3 pl-5"/>
                    <button type="submit" className="absolute inset-y-0 right-2 bg-gradient-to-r from-[#8421C5] to-[#B91967] rounded-4xl px-4 my-1 text-sm cursor-pointer opacity-90 hover:opacity-100 text-white">খুঁজুন</button>
                </div>
            </form>
          </div>

          {/* Right Side */}
          <div className="w-full md:w-[40%] flex justify-center">
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-full max-w-md md:max-w-lg lg:max-w-xl bg-[#e785bf] border-4 border-[#fa8e42] rounded-xl px-4"
            >
              <Image
                src="/images/team/member.avif"
                width={50}
                height={50}
                alt="Banner Image"
                className="w-full object-contain h-[300px] md:h-[350px]"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPageBanner;
