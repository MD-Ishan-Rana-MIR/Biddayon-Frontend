import React from 'react';
import { CiLocationOn, CiMail } from 'react-icons/ci';
import { FaFacebook, FaInstagram, FaLocationArrow, FaTwitter, FaYoutube } from 'react-icons/fa';
import { FiFacebook, FiInstagram, FiTwitter, FiYoutube } from 'react-icons/fi';
import { IoCallOutline } from 'react-icons/io5';

const Footer = () => {
  return (
    <div>
      <div className='bg-gradient-to-r from-[#13082E] to-[#19081C]  text-white py-4'>
        <div className="grid mx-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 gap-4 text-center">
          <div className='text-left mx-auto'>
            <h1 className='text-2xl font-bold my-4 text-[#ba0cc0]'>Logo</h1>
            <p>
              বিদ্যায়ন হল একটি অনলাইন শিক্ষা প্লাটফর্ম যা বাংলাদেশের সকল মানুষের জন্য উচ্চমানের শিক্ষা সহজলভ্য করার লক্ষ্যে কাজ করে যাচ্ছে।
            </p>
            <div className='flex  gap-4 mt-4'>
              <FiFacebook className='text-2xl hover:text-[#c67cc9] cursor-pointer' />
              <FiTwitter className='text-2xl hover:text-[#c67cc9] cursor-pointer' />
              <FiInstagram className='text-2xl hover:text-[#c67cc9] cursor-pointer' />
              <FiYoutube className='text-2xl hover:text-[#c67cc9] cursor-pointer' />
            </div>
          </div>
          <div className='text-left '>
            <h1 className='text-2xl font-bold '>দ্রুত লিঙ্ক</h1>
            <div className='flex flex-col gap-2 mt-4 '>
              <a href="/"><h1 className='hover:text-[#c67cc9] cursor-pointer'>হোম</h1></a>
              <a href="#"><h1 className='hover:text-[#c67cc9] cursor-pointer'>কোর্সসমূহ</h1></a>
              <a href="#"><h1 className='hover:text-[#c67cc9] cursor-pointer'>আমাদের সম্পর্কে</h1></a>
              <a href="#"><h1 className='hover:text-[#c67cc9] cursor-pointer'>যোগাযোগ</h1></a>
              <a href="#"><h1 className='hover:text-[#c67cc9] cursor-pointer'>ব্লগ</h1></a>
              <a href="#"><h1 className='hover:text-[#c67cc9] cursor-pointer'>সাধারণ প্রশ্ন</h1></a>
            </div>
          </div>
          <div className='text-left'>
            <h1 className='text-2xl font-bold '>যোগাযোগ</h1>
           <div>
            <div className='flex items-center mt-4'>
              <CiLocationOn className='inline-block  mr-2' />
              <p>১২৩, গুলশান এভিনিউ, ঢাকা-১২১২, বাংলাদেশ</p>
            </div>
            <div className='flex items-center mt-4'>
              <IoCallOutline className='inline-block  mr-2' />
              <p>ফোন: +880 123456789</p>
            </div>
            <div className='flex items-center mt-4'>
              <CiMail className='inline-block  mr-2' />
              <p>ইমেইল: info@biddayon.com</p>
            </div>
           </div>
          </div>
          <div className='text-left '>

            <h1 className='text-2xl font-bold '>নিউজলেটার</h1>
            <p className='my-4'>
              আমাদের নতুন কোর্স এবং অফার সম্পর্কে জানতে সাবস্ক্রাইব করুন
            </p>

            <div className='flex items-center'>
              <input type="email" placeholder="আপনার ইমেইল ঠিকানা" className='border border-gray-300 p-2 rounded-md' />

              <button className='bg-[#ba0cc0] text-white px-2 py-2.5 rounded-md ml-2'>সাবস্ক্রাইব</button>
            </div>

          </div>
        </div>
        <div className='border-t border-[#787479] my-4 mx-5'></div>
        <div className=' flex mx-10 justify-between mb-15'>
          <p>© 2025 বিদ্যায়ন। সর্বস্বত্ব সংরক্ষিত।</p>
          <div className='flex gap-4 '>
            <a href="">গোপনীয়তা নীতি</a>
            <a href="">শর্তাবলী</a>
            <a href="">যোগাযোগ</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;