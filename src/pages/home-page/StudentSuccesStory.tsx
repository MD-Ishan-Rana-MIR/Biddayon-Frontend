// app/page.tsx or pages/index.tsx
'use client';

import { Star } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  feedback: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'শিক্ষার্থী 1',
    role: 'ওয়েব ডেভেলপার',
    feedback:
      'শিক্ষালয়ের কোর্স করার পর আমি একটি বড় কোম্পানিতে চাকরি পেয়েছি। এখানে শেখানো স্কিলগুলো আমার ক্যারিয়ারে অনেক সাহায্য করেছে।',
  },
  {
    name: 'শিক্ষার্থী 2',
    role: 'গ্রাফিক ডিজাইনার',
    feedback:
      'আমি ফ্রিল্যান্সিং করি এবং শিক্ষালয়ের কোর্স আমাকে আমার দক্ষতা উন্নত করতে সাহায্য করেছে। এবং আমি আন্তর্জাতিক ক্লায়েন্টদের সাথে কাজ করি।',
  },
  {
    name: 'শিক্ষার্থী 3',
    role: 'ডিজিটাল মার্কেটিয়ার',
    feedback:
      'শিক্ষালয়ের কোর্স আমাকে নিজের ব্যবসা শুরু করতে সাহায্য করেছে। এখন আমি একটি সফল স্টার্টআপ চালাচ্ছি।',
  },
];

export default function StudentSuccesStory() {
  return (
    <main className=" bg-gray-50 md:py-10 py-6 lg:py-24 px-4">
      <div>
        <button className=' block  mx-auto font-semibold text-sm bg-[#21C560] px-4 py-0.5 text-white rounded-3xl ' >সাফল্যের গল্প</button>
        <h1 className=' lg:leading-20  text-[#21C560] text-center my-2 text-lg md:text-2xl lg:text-4xl font-bold  ' >আমাদের শিক্ষার্থীদের সাফল্য</h1>
        <p className=' text-center text-[#6b7280]  text-[16px] lg:text-2xl lg:leading-0  ' >আমাদের প্লাটফর্মে শিক্ষা গ্রহণ করে সফল হওয়া শিক্ষার্থীদের গল্প</p>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center lg:mt-12 md:mt-6 mt-4 ">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="relative bg-white rounded-xl shadow-md p-6 w-full max-w-xs text-center"
          >
            {/* Star Badge */}
            <div className="absolute -top-3 -right-3.5 starBgColor w-10 h-10 rounded-full flex items-center justify-center">
              <span className="text-white text-lg font-bold">★</span>
            </div>

            {/* Profile Placeholder */}
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gray-200 border-4 border-white shadow-md" />

            {/* Name & Role */}
            <h2 className="text-lg font-bold text-gray-800">{item.name}</h2>
            <p className="text-sm text-gray-500 mb-4">{item.role}</p>

            {/* Feedback */}
            <p className="text-sm text-gray-700 mb-4 leading-relaxed">{item.feedback}</p>

            {/* Star Rating */}
            <div className="flex justify-center  gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} fill="#facc15" stroke="#facc15" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
