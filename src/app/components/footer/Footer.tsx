import Link from "next/link"
import { BookOpen, Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-950/30 dark:to-pink-950/30">
      <div className="container px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 font-bold text-2xl">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white">
                <BookOpen className="h-5 w-5" />
              </div>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">বিদ্যায়ন</span>
            </Link>
            <p className="text-gray-600 dark:text-gray-300">
              বিদ্যায়ন হল একটি অনলাইন শিক্ষা প্লাটফর্ম যা বাংলাদেশের সকল মানুষের জন্য উচ্চমানের শিক্ষা সহজলভ্য করার লক্ষ্যে কাজ করে যাচ্ছে।
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
              >
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">দ্রুত লিঙ্ক</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
                >
                  হোম
                </Link>
              </li>
              <li>
                <Link
                  href="/courses"
                  className="text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
                >
                  কোর্সসমূহ
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
                >
                  আমাদের সম্পর্কে
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
                >
                  যোগাযোগ
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
                >
                  ব্লগ
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
                >
                  সাধারণ প্রশ্ন
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">যোগাযোগ</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-gray-600 dark:text-gray-300 mt-0.5" />
                <span className="text-gray-600 dark:text-gray-300">১২৩, গুলশান এভিনিউ, ঢাকা-১২১২, বাংলাদেশ</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                <Link
                  href="tel:+8801712345678"
                  className="text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
                >
                  +৮৮০১৭১২৩৪৫৬৭৮
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                <Link
                  href="mailto:info@biddhayon.com"
                  className="text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
                >
                  info@biddhayon.com
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">নিউজলেটার</h3>
            <p className="text-gray-600 dark:text-gray-300">আমাদের নতুন কোর্স এবং অফার সম্পর্কে জানতে সাবস্ক্রাইব করুন</p>
            <div className="flex flex-col sm:flex-row gap-2">
              <Input type="email" placeholder="আপনার ইমেইল" className="bg-white dark:bg-gray-900" />
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                সাবস্ক্রাইব
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-center text-sm text-gray-600 dark:text-gray-300 md:text-left">
            &copy; {new Date().getFullYear()} বিদ্যায়ন। সর্বস্বত্ব সংরক্ষিত।
          </p>
          <div className="flex gap-4">
            <Link
              href="/terms"
              className="text-sm text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
            >
              ব্যবহারের শর্তাবলী
            </Link>
            <Link
              href="/privacy"
              className="text-sm text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
            >
              গোপনীয়তা নীতি
            </Link>
            <Link
              href="/refund"
              className="text-sm text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
            >
              রিফান্ড পলিসি
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
