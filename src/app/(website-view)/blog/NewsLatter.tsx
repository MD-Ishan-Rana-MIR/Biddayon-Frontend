import React from 'react';

const NewsLatter = () => {
    const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const email = formData.get("email") as string;
        console.log(email);
    }
    return (
        <div className='bg-gradient-to-r from-[#9533E8] to-[#DA2779] text-white rounded-xl p-7'>
            <h1 className='text-xl font-semibold'>নিউজলেটার</h1>
            <p className='text-[16px] md:mt-3 sm:mt-2 mt-1'>আমাদের নিয়মিত আপডেট পেতে নিউজলেটারে সাবস্ক্রাইব করুন</p>
            <form onSubmit={handleSubscribe} className='md:mt-3 sm:mt-2 mt-1'>
                <input type="email" name='email' placeholder='আপনার ইমেইল' className='appearance-none w-full bg-white/40 outline-[#7C3AED] rounded-lg px-2 py-3 border border-slate-100 text-sm' />
                <button type='submit' className='w-full bg-white rounded-lg py-[12px] opacity-100 hover:opacity-90 cursor-pointer mt-2 text-[#9333EA] text-sm font-semibold'>সাবস্ক্রাইব</button>
            </form>
        </div>
    );
};

export default NewsLatter;