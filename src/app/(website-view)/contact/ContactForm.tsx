import { Send } from 'lucide-react';
import React from 'react';

const ContactForm = () => {
    const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const phone = formData.get("phone") as string;
        const subject = formData.get("subject") as string;
        const message = formData.get("message") as string;
        const newMessage = {
            name, email, phone, subject, message
        }
        console.log(newMessage);
    }
    return (
        <div className='shadow-md rounded-xl p-5 md:p-7 line'>
             <h1 className="text-xl md:mb-4 mb-2 sm:text-2xl md:text-4xl bg-gradient-to-r from-[#862bd1] to-[#ec4bf5] bg-clip-text text-transparent font-semibold">আমাদের মেসেজ পাঠান</h1>
             <p className="text-slate-600 text-sm sm:text-[15px] md:text-lg">আপনার যেকোনো প্রশ্ন বা মতামত জানাতে নিচের ফর্মটি পূরণ করুন</p>
             <form onSubmit={handleSendMessage} className='md:mt-4 mt-2'>
                <div className='flex flex-col md:flex-row md:gap-5 gap-2'>
                    <div className='w-full'>
                        <label className='text-sm font-medium block md:mb-2 mb-1'>আপনার নাম</label>
                        <input type="text" name='name' placeholder='আপনার নাম লিখুন' className='appearance-none w-full py-2 px-3 border border-slate-300 rounded-lg outline-[#7C3AED] text-sm'/>
                    </div>
                    <div className='w-full'>
                        <label className='text-sm font-medium block md:mb-2 mb-1'>ইমেইল</label>
                        <input type="email" name='email' placeholder='আপনার ইমেইল লিখুন' className='appearance-none w-full py-2 px-3 border border-slate-300 rounded-lg outline-[#7C3AED] text-sm'/>
                    </div>
                </div>
                <div className='md:mt-5 mt-2'>
                        <label className='text-sm font-medium block md:mb-2 mb-1'>ফোন নম্বর</label>
                        <input type="number" name='phone' placeholder='আপনার ফোন নম্বর লিখুন' className='appearance-none w-full py-2 px-3 border border-slate-300 rounded-lg outline-[#7C3AED] text-sm'/>
                </div>
                <div className='md:mt-5 mt-2'>
                        <label className='text-sm font-medium block md:mb-2 mb-1'>বিষয়</label>
                        <input type="text" name='subject' placeholder='মেসেজের বিষয় লিখুন' className='appearance-none w-full py-2 px-3 border border-slate-300 rounded-lg outline-[#7C3AED] text-sm'/>
                </div>
                <div className='md:mt-5 mt-2'>
                    <label className='text-sm font-medium block md:mb-2 mb-1'>মেসেজ</label>
                    <textarea placeholder='আপনার মেসেজ লিখুন' name="message" id="message" className='appearance-none w-full py-2 px-3 border border-slate-300 rounded-lg outline-[#7C3AED] text-sm min-h-[150px]'></textarea>
                </div>
                <button type='submit' className='md:mt-5 mt-2 w-full py-3 flex justify-center items-center gap-3 bg-gradient-to-r from-[#7F22CC] to-[#BB1862] rounded-lg cursor-pointer opacity-90 hover:opacity-100'>
                    <Send size={18} className='text-white'/>
                    <span className='text-white text-sm'>মেসেজ পাঠান</span>
                </button>
             </form>
        </div>
    );
};

export default ContactForm;