'use client';

import { Clock, GrabIcon, Star } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

interface Course {
  title: string;
  instructor: string;
  duration: string;
  students: string;
  rating: number;
  price: string;
  badge: string;
  borderColor: string;
  buttonColor: string;
}

const courses: Course[] = [
  {
    title: "ওয়েব ডেভেলপমেন্ট বেসিক টু অ্যাডভান্স",
    instructor: "রাকিব হাসান",
    duration: "৩০ ঘন্টা",
    students: "5240",
    rating: 4.8,
    price: "৳৬,৯৯৯",
    badge: "বিগিনার",
    borderColor: "border-indigo-500",
    buttonColor: "bg-purple-500"
  },
  {
    title: "মোবাইল অ্যাপ ডেভেলপমেন্ট ইউজিং ফ্লাটার",
    instructor: "সাদিয়া আফরিন",
    duration: "২৫ ঘন্টা",
    students: "3120",
    rating: 4.7,
    price: "৳৮,৯৯৯",
    badge: "ইন্টারমিডিয়েট",
    borderColor: "border-pink-500",
    buttonColor: "bg-pink-500"
  },
  {
    title: "গ্রাফিক ডিজাইন মাস্টারক্লাস",
    instructor: "তানভীর আহমেদ",
    duration: "২০ ঘন্টা",
    students: "4560",
    rating: 4.6,
    price: "৳৬,৯৯৯",
    badge: "বিগিনার",
    borderColor: "border-orange-500",
    buttonColor: "bg-orange-500"
  }
];

export default function PopularCourse() {

  const [search, setSearch] = useState('');
  const [subject, setSubject] = useState('');
  const [level, setLevel] = useState('');
  const [rating, setRating] = useState('');

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(search.toLowerCase())
  );

  console.log(filteredCourses)

  return (
    <div className=" py-32 max-w-6xl mx-auto">

      <button
        className="block mx-auto text-sm font-semibold text-white px-4 py-2 rounded-2xl  "
        style={{
          background: 'linear-gradient(90deg,rgba(237, 75, 145, 1) 0%, rgba(248, 113, 26, 1) 50%)'
        }}
      >
        জনপ্রিয় কোর্স
      </button>
      <h1 className=' bg-gradient-to-r from-[#DC2A73] to-[#E8521A] bg-clip-text text-transparent text-center my-2 text-4xl font-bold ' >আমাদের সেরা কোর্সসমূহ</h1>
      <p className=' text-center text-[#6b7280]  text-2xl ' >শিক্ষার্থীদের দ্বারা সবচেয়ে বেশি পছন্দ করা কোর্সসমূহ দেখুন</p>
      {/* Filter Bar */}

      <div className="flex flex-wrap gap-4 mb-10 shadow-md border border-white p-6 rounded-2xl   justify-between ">
        <input
          type="text"
          placeholder="কোর্স খুঁজুন..."
          className="px-4 py-2 border focus:ring-2 focus:ring-[#6D63F2]  rounded w-full md:w-1/3"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="px-4 py-2 border rounded w-full md:w-[180px] focus:ring-2 focus:ring-[#6D63F2]  "
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        >
          <option value="">বিষয়</option>
          <option value="web">ওয়েব</option>
          <option value="app">অ্যাপ</option>
          <option value="design">ডিজাইন</option>
        </select>
        <select
          className="px-4 py-2 border rounded w-full focus:ring-2 focus:ring-[#6D63F2] md:w-[180px]"
          value={level}
          onChange={(e) => setLevel(e.target.value)}
        >
          <option value="">লেভেল</option>
          <option value="beginner">বিগিনার</option>
          <option value="intermediate">ইন্টারমিডিয়েট</option>
        </select>
        <select
          className="px-4 py-2 border rounded w-full focus:ring-2 focus:ring-[#6D63F2] md:w-[180px]"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        >
          <option value="">রেটিং</option>
          <option value="4.5">4.5+</option>
          <option value="4.0">4.0+</option>
        </select>
      </div>

      {/* Course Cards */}
      <div className="grid grid-cols-1 items-center justify-between sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredCourses.map((course, index) => (
          <div
            key={index}
            className={`w-full max-w-[300px] bg-white  overflow-hidden shadow-xl relative transition-transform duration-300 hover:-translate-y-4 hover:shadow-2xl`}
          >
            <div className="pb-3">
              <span
                className={`absolute top-2 right-2 text-xs px-3 py-1 rounded-2xl  text-black font-semibold bg-white `}
              >
                {course.badge}
              </span>
              <div
                className={`bg-gray-100 h-44 rounded-md mb-4 flex items-center justify-center border-4 ${course.borderColor}`}
              >
                <span className="text-gray-400 text-sm">Image</span>
              </div>
              <div className="px-4">
                <div className=' h-16 ' >
                  <h2 className="font-bold text-lg mb-1">{course.title}</h2>
                </div>
                <p className="text-sm text-gray-700 mb-2">{course.instructor}</p>
                <div className="flex items-center text-sm gap-3 mb-2 text-gray-600">
                  <span className="flex items-center gap-1">
                    <Clock /> {course.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <GrabIcon /> {course.students}+
                  </span>
                  <span className="flex items-center gap-1 text-yellow-500">
                    <Star /> {course.rating}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-indigo-600">{course.price}</span>
                  <button
                    className={`px-3 py-1 rounded text-white text-sm transition-all duration-200 hover:opacity-90 ${course.buttonColor}`}
                  >
                    বিস্তারিত দেখুন
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className=' pt-14 ' >
        <Link className=' cursor-pointer ' href={""}>
          <button className=' block mx-auto bgGradientColor px-4  py-2 rounded-xl text-white text-[14px]  ' > সব কোর্স দেখুন</button>
        </Link>
      </div>



    </div>
  );
}