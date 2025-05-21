"use client"

import Link from "next/link"
import { ArrowLeft, Lock } from "lucide-react"


import React, { FormEvent } from "react"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const EmailFrom:React.FC = ()=> {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Add logic to handle password reset
  }

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 flex items-center justify-center py-12 md:py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-50 to-white dark:from-purple-950/10 dark:to-background opacity-50"></div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-gradient-to-br from-pink-500/20 to-orange-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-md mx-auto">
            <div className="bg-white dark:bg-gray-950 rounded-xl shadow-xl overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-purple-600 to-pink-600"></div>
              <div className="p-8">
                <div className="text-center mb-8">
                  <Badge className="mb-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
                    পাসওয়ার্ড রিসেট
                  </Badge>
                  <h1 className="text-2xl font-bold tracking-tight mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                    নতুন পাসওয়ার্ড সেট করুন
                  </h1>
                  <p className="text-gray-500 dark:text-gray-400">আপনার নতুন পাসওয়ার্ড দিন এবং নিশ্চিত করুন</p>
                </div>

                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="space-y-2">
                    <label htmlFor="password" className="text-sm font-medium leading-none">
                      নতুন পাসওয়ার্ড
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                      <Input
                        id="password"
                        type="password"
                        placeholder="নতুন পাসওয়ার্ড লিখুন"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="confirmPassword" className="text-sm font-medium leading-none">
                      পাসওয়ার্ড নিশ্চিত করুন
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                      <Input
                        id="confirmPassword"
                        type="password"
                        placeholder="পাসওয়ার্ড আবার লিখুন"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                  >
                    পাসওয়ার্ড পরিবর্তন করুন
                  </Button>
                </form>

                <div className="mt-6 text-center">
                  <Link
                    href="/login"
                    className="inline-flex items-center text-sm font-medium text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300"
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    লগইন পেইজে ফিরে যান
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}


export default EmailFrom