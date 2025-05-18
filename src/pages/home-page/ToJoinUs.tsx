import {  MoveRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const ToJoinUs: React.FC = () => {
    return (
        <div>
            <div>
                <div className=' h-[400px] bg-gradient-to-r from-[#9534E9] via-[#EA479A] to-[#FB8F40] flex justify-center items-center flex-col gap-2 text-center'>
                    <h1 className='md:text-5xl text-2xl sm:text-3xl font-bold text-white'>আজই যোগ দিন</h1>
                    <p className='text-slate-200 md:text-xl sm:text-lg text-[16px] font-semibold'>আপনার জ্ঞানের যাত্রা শুরু করতে আমাদের সাথে যোগ দিন

                    </p>
                    <Link href="/registration">
                        <button className="bg-[#ffff] text-[#9634E8] flex gap-3 items-center cursor-pointer px-6 py-2 rounded-md text-sm  hover:opacity-90 transition-all">
                            নিবন্ধন করুন
                            <span><MoveRight /></span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ToJoinUs