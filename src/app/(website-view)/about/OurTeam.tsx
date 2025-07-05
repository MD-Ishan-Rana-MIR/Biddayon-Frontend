import Image from "next/image";
import React from "react";

// Team data
const teamMembers = [
  {
    id: 1,
    name: "টিম সদস্য 1",
    role: "সিনিয়র ইন্সট্রাক্টর",
    description: "৮+ বছরের অভিজ্ঞতা সম্পন্ন একজন শিক্ষক এবং কন্টেন্ট ক্রিয়েটর।",
    image: "/images/team/member.avif",
  },
  {
    id: 2,
    name: "টিম সদস্য 2",
    role: "প্রোডাক্ট ম্যানেজার",
    description: "৫+ বছরের অভিজ্ঞতা সম্পন্ন একজন প্রোডাক্ট ম্যানেজার।",
    image: "/images/team/member.avif",
  },
  {
    id: 3,
    name: "টিম সদস্য 3",
    role: "সিইও এবং প্রতিষ্ঠাতা",
    description: "১০+ বছরের অভিজ্ঞতা সম্পন্ন একজন উদ্যোক্তা এবং শিক্ষাবিদ।",
    image: "/images/team/member.avif",
  },
  {
    id: 4,
    name: "টিম সদস্য 4",
    role: "সিনিয়র ইন্সট্রাক্টর",
    description: "৮+ বছরের অভিজ্ঞতা সম্পন্ন একজন শিক্ষক এবং কন্টেন্ট ক্রিয়েটর।",
    image: "/images/team/member.avif",
  },
  {
    id: 5,
    name: "টিম সদস্য 5",
    role: "সিনিয়র ইন্সট্রাক্টর",
    description: "৮+ বছরের অভিজ্ঞতা সম্পন্ন একজন শিক্ষক এবং কন্টেন্ট ক্রিয়েটর।",
    image: "/images/team/member.avif",
  },
  {
    id: 6,
    name: "টিম সদস্য 6",
    role: "সিইও এবং প্রতিষ্ঠাতা",
    description: "১০+ বছরের অভিজ্ঞতা সম্পন্ন একজন উদ্যোক্তা এবং শিক্ষাবিদ।",
    image: "/images/team/member.avif",
  },
];

const OurTeam = () => {
  return (
    <div className="md:mt-20 sm:mt-16 mt-14">
      {/* Title and Description */}
      <div className="text-center">
        <p className="bg-gradient-to-r from-[#9632E4] to-[#D7277D] text-sm px-4 inline-block rounded-xl text-white">
          আমাদের টিম
        </p>
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mt-3 bg-gradient-to-r from-[#8723d3] to-[#D7277D] bg-clip-text text-transparent leading-relaxed">
          আমাদের দক্ষ টিম সদস্যরা
        </h1>
        <p className="md:text-xl text-[16px] sm:text-lg text-slate-700 mt-2">
          আমাদের দক্ষ টিম সদস্যরা সবসময় আপনাকে সাহায্য করতে প্রস্তুত
        </p>
      </div>

      {/* Team Members Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 sm:gap-12 gap-5 items-center justify-center md:mt-14 sm:mt-12 mt-7 md:px-32 px-5">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="relative w-full hover:scale-[101%] hover:translate-y-1 duration-300 transition-all"
          >
            {/* 👇 Always-visible gradient glow */}
            <div className="absolute -inset-1 -z-10 opacity-90 blur-[15px] bg-gradient-to-r from-[#9651ca] to-[#c4588a] p-1 rounded-xl"></div>

            {/* Card */}
            <div className="p-7 flex flex-col justify-center bg-white items-center gap-1 rounded-xl">
              <div className="relative w-fit bg-gradient-to-r from-[#9651ca] to-[#c4588a] p-[4px] rounded-full">
                <div className="w-full p-[1px]">
                  <Image
                    className="rounded-full"
                    width={150}
                    height={150}
                    alt="team member"
                    src={member.image}
                  />
                </div>
              </div>
              <h2 className="text-2xl font-semibold">{member.name}</h2>
              <p className="text-slate-600">{member.role}</p>
              <p className="text-slate-700 text-center text-[15px]">
                {member.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
