"use client";
import Image from "next/image";

const OurTeam = () => {
    return (
        <div className="mt-32">
            {/* title and description */}
            <div className="text-center">
                <p className="bg-gradient-to-r from-[#9632E4] to-[#D7277D] text-sm px-4 inline-block rounded-xl text-white">আমাদের টিম</p>
                <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mt-3 bg-gradient-to-r from-[#8723d3] to-[#D7277D] bg-clip-text text-transparent leading-relaxed">আমাদের দক্ষ টিম সদস্যরা</h1>
                <p className='md:text-xl text-[16px] sm:text-lg text-slate-700 mt-2'>আমাদের দক্ষ টিম সদস্যরা সবসময় আপনাকে সাহায্য করতে প্রস্তুত</p>
            </div>

            {/* team member */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 sm:gap-12 gap-7 items-center justify-center mt-14 md:px-32 px-5">
                <div className="relative w-full group hover:scale-[101%] hover:translate-y-1 duration-300 transition-all">
                    <div className="absolute -inset-1 -z-10 opacity-80 blur-[10px] bg-gradient-to-r from-[#9651ca] to-[#c4588a] p-1 s rounded-xl group-hover:blur-[15px] group-hover:opacity-90"></div>
                    <div className="p-7 flex flex-col justify-center bg-white items-center gap-1 rounded-xl">
                        <div className="relative w-fit bg-gradient-to-r from-[#9651ca] to-[#c4588a] p-[4px] rounded-full">
                            <div className=" w-full p-[1px]">
                                <Image className="rounded-full" width={150} height={150} alt="team member" src={'/images/team/member.avif'}></Image>
                            </div>
                        </div>
                        <h2 className="text-2xl font-semibold">টিম সদস্য 1</h2>
                        <p className="text-slate-600">সিনিয়র ইন্সট্রাক্টর</p>
                        <p className="text-slate-700 text-center text-[15px]">৮+ বছরের অভিজ্ঞতা সম্পন্ন একজন শিক্ষক এবং কন্টেন্ট ক্রিয়েটর।</p>
                    </div>
                </div>
                <div className="relative w-full group hover:scale-[101%] hover:translate-y-1 duration-300 transition-all">
                    <div className="absolute -inset-1 -z-10 opacity-80 blur-[10px] bg-gradient-to-r from-[#9651ca] to-[#c4588a] p-1 s rounded-xl group-hover:blur-[15px] group-hover:opacity-90"></div>
                    <div className="p-7 flex flex-col justify-center bg-white items-center gap-1 rounded-xl">
                        <div className="relative w-fit bg-gradient-to-r from-[#9651ca] to-[#c4588a] p-[4px] rounded-full">
                            <div className=" w-full p-[1px]">
                                <Image className="rounded-full" width={150} height={150} alt="team member" src={'/images/team/member.avif'}></Image>
                            </div>
                        </div>
                        <h2 className="text-2xl font-semibold">টিম সদস্য 2</h2>
                        <p className="text-slate-600">প্রোডাক্ট ম্যানেজার</p>
                        <p className="text-slate-700 text-center text-[15px]">৫+ বছরের অভিজ্ঞতা সম্পন্ন একজন প্রোডাক্ট ম্যানেজার।</p>
                    </div>
                </div>
                <div className="relative w-full group hover:scale-[101%] hover:translate-y-1 duration-300 transition-all">
                    <div className="absolute -inset-1 -z-10 opacity-80 blur-[10px] bg-gradient-to-r from-[#9651ca] to-[#c4588a] p-1 s rounded-xl group-hover:blur-[15px] group-hover:opacity-90"></div>
                    <div className="p-7 flex flex-col justify-center bg-white items-center gap-1 rounded-xl">
                        <div className="relative w-fit bg-gradient-to-r from-[#9651ca] to-[#c4588a] p-[4px] rounded-full">
                            <div className=" w-full p-[1px]">
                                <Image className="rounded-full" width={150} height={150} alt="team member" src={'/images/team/member.avif'}></Image>
                            </div>
                        </div>
                        <h2 className="text-2xl font-semibold">টিম সদস্য 3</h2>
                        <p className="text-slate-600">সিইও এবং প্রতিষ্ঠাতা</p>
                        <p className="text-slate-700 text-center text-[15px]">১০+ বছরের অভিজ্ঞতা সম্পন্ন একজন উদ্যোক্তা এবং শিক্ষাবিদ।</p>
                    </div>
                </div>
                <div className="relative w-full group hover:scale-[101%] hover:translate-y-1 duration-300 transition-all">
                    <div className="absolute -inset-1 -z-10 opacity-80 blur-[10px] bg-gradient-to-r from-[#9651ca] to-[#c4588a] p-1 s rounded-xl group-hover:blur-[15px] group-hover:opacity-90"></div>
                    <div className="p-7 flex flex-col justify-center bg-white items-center gap-1 rounded-xl">
                        <div className="relative w-fit bg-gradient-to-r from-[#9651ca] to-[#c4588a] p-[4px] rounded-full">
                            <div className=" w-full p-[1px]">
                                <Image className="rounded-full" width={150} height={150} alt="team member" src={'/images/team/member.avif'}></Image>
                            </div>
                        </div>
                        <h2 className="text-2xl font-semibold">টিম সদস্য 4</h2>
                        <p className="text-slate-600">সিনিয়র ইন্সট্রাক্টর</p>
                        <p className="text-slate-700 text-center text-[15px]">৮+ বছরের অভিজ্ঞতা সম্পন্ন একজন শিক্ষক এবং কন্টেন্ট ক্রিয়েটর।</p>
                    </div>
                </div>
                <div className="relative w-full group hover:scale-[101%] hover:translate-y-1 duration-300 transition-all">
                    <div className="absolute -inset-1 -z-10 opacity-80 blur-[10px] bg-gradient-to-r from-[#9651ca] to-[#c4588a] p-1 s rounded-xl group-hover:blur-[15px] group-hover:opacity-90"></div>
                    <div className="p-7 flex flex-col justify-center bg-white items-center gap-1 rounded-xl">
                        <div className="relative w-fit bg-gradient-to-r from-[#9651ca] to-[#c4588a] p-[4px] rounded-full">
                            <div className=" w-full p-[1px]">
                                <Image className="rounded-full" width={150} height={150} alt="team member" src={'/images/team/member.avif'}></Image>
                            </div>
                        </div>
                        <h2 className="text-2xl font-semibold">টিম সদস্য 4</h2>
                        <p className="text-slate-600">সিনিয়র ইন্সট্রাক্টর</p>
                        <p className="text-slate-700 text-center text-[15px]">৮+ বছরের অভিজ্ঞতা সম্পন্ন একজন শিক্ষক এবং কন্টেন্ট ক্রিয়েটর।</p>
                    </div>
                </div>
                <div className="relative w-full group hover:scale-[101%] hover:translate-y-1 duration-300 transition-all">
                    <div className="absolute -inset-1 -z-10 opacity-80 blur-[10px] bg-gradient-to-r from-[#9651ca] to-[#c4588a] p-1 s rounded-xl group-hover:blur-[15px] group-hover:opacity-90"></div>
                    <div className="p-7 flex flex-col justify-center bg-white items-center gap-1 rounded-xl">
                        <div className="relative w-fit bg-gradient-to-r from-[#9651ca] to-[#c4588a] p-[4px] rounded-full">
                            <div className=" w-full p-[1px]">
                                <Image className="rounded-full" width={150} height={150} alt="team member" src={'/images/team/member.avif'}></Image>
                            </div>
                        </div>
                        <h2 className="text-2xl font-semibold">টিম সদস্য 6</h2>
                        <p className="text-slate-600">সিইও এবং প্রতিষ্ঠাতা</p>
                        <p className="text-slate-700 text-center text-[15px]">১০+ বছরের অভিজ্ঞতা সম্পন্ন একজন উদ্যোক্তা এবং শিক্ষাবিদ।</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurTeam;