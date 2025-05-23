import { Suspense } from "react"
import { Filter, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"


import Loading from "./loading"
import CourseCard from "@/app/components/course-card/CourseCard"

const CoursesPage: React.FC = () => {
    return (
        <main className="container py-8">
            <div className="flex flex-col space-y-4">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                        <h1 className="text-3xl font-bold">কোর্সসমূহ</h1>
                        <p className="text-muted-foreground mt-1">আমাদের সকল কোর্স দেখুন এবং আপনার পছন্দের কোর্সটি বেছে নিন</p>
                    </div>
                    <div className="flex items-center gap-2 w-full md:w-auto">
                        <div className="relative flex-1 md:w-[300px]">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                            <Input type="search" placeholder="কোর্স খুঁজুন..." className="pl-10" />
                        </div>
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="outline" size="icon" className="md:hidden">
                                    <Filter className="h-4 w-4" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                                <div className="py-4">
                                    <h3 className="font-semibold text-lg mb-4">ফিল্টার</h3>
                                    <div className="space-y-6">
                                        <div>
                                            <h4 className="font-medium mb-2">ক্যাটাগরি</h4>
                                            <div className="space-y-2">
                                                <div className="flex items-center space-x-2">
                                                    <Checkbox id="mobile-web-dev" />
                                                    <label
                                                        htmlFor="mobile-web-dev"
                                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-gray-300"
                                                    >
                                                        ওয়েব ডেভেলপমেন্ট
                                                    </label>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <Checkbox id="mobile-app-dev" />
                                                    <label
                                                        htmlFor="mobile-app-dev"
                                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-gray-300"
                                                    >
                                                        অ্যাপ ডেভেলপমেন্ট
                                                    </label>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <Checkbox id="mobile-graphic-design" />
                                                    <label
                                                        htmlFor="mobile-graphic-design"
                                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-gray-300"
                                                    >
                                                        গ্রাফিক ডিজাইন
                                                    </label>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <Checkbox id="mobile-digital-marketing" />
                                                    <label
                                                        htmlFor="mobile-digital-marketing"
                                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-gray-300"
                                                    >
                                                        ডিজিটাল মার্কেটিং
                                                    </label>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <Checkbox id="mobile-data-science" />
                                                    <label
                                                        htmlFor="mobile-data-science"
                                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-gray-300"
                                                    >
                                                        ডাটা সায়েন্স
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="font-medium mb-2">মূল্য</h4>
                                            <div className="space-y-4">
                                                <Slider defaultValue={[5000]} max={20000} step={500} />
                                                <div className="flex justify-between">
                                                    <span className="text-sm text-muted-foreground dark:text-gray-400">৳০</span>
                                                    <span className="text-sm font-medium dark:text-gray-300">৳৫,০০০</span>
                                                    <span className="text-sm text-muted-foreground dark:text-gray-400">৳২০,০০০</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="font-medium mb-2">রেটিং</h4>
                                            <div className="space-y-2">
                                                <div className="flex items-center space-x-2">
                                                    <Checkbox id="mobile-rating-4plus" />
                                                    <label
                                                        htmlFor="mobile-rating-4plus"
                                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-gray-300"
                                                    >
                                                        ৪+ স্টার
                                                    </label>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <Checkbox id="mobile-rating-3plus" />
                                                    <label
                                                        htmlFor="mobile-rating-3plus"
                                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-gray-300"
                                                    >
                                                        ৩+ স্টার
                                                    </label>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <Checkbox id="mobile-rating-2plus" />
                                                    <label
                                                        htmlFor="mobile-rating-2plus"
                                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-gray-300"
                                                    >
                                                        ২+ স্টার
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="font-medium mb-2">লেভেল</h4>
                                            <div className="space-y-2">
                                                <div className="flex items-center space-x-2">
                                                    <Checkbox id="mobile-level-beginner" />
                                                    <label
                                                        htmlFor="mobile-level-beginner"
                                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-gray-300"
                                                    >
                                                        বিগিনার
                                                    </label>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <Checkbox id="mobile-level-intermediate" />
                                                    <label
                                                        htmlFor="mobile-level-intermediate"
                                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-gray-300"
                                                    >
                                                        ইন্টারমিডিয়েট
                                                    </label>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <Checkbox id="mobile-level-advanced" />
                                                    <label
                                                        htmlFor="mobile-level-advanced"
                                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-gray-300"
                                                    >
                                                        অ্যাডভান্সড
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-6">
                    {/* Filters - Desktop */}
                    <div className="hidden md:block w-[280px] shrink-0">
                        <Card>
                            <CardHeader>
                                <CardTitle>ফিল্টার</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div>
                                    <h4 className="font-medium mb-2">ক্যাটাগরি</h4>
                                    <div className="space-y-2">
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="web-dev" />
                                            <label
                                                htmlFor="web-dev"
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-gray-300"
                                            >
                                                ওয়েব ডেভেলপমেন্ট
                                            </label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="app-dev" />
                                            <label
                                                htmlFor="app-dev"
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-gray-300"
                                            >
                                                অ্যাপ ডেভেলপমেন্ট
                                            </label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="graphic-design" />
                                            <label
                                                htmlFor="graphic-design"
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-gray-300"
                                            >
                                                গ্রাফিক ডিজাইন
                                            </label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="digital-marketing" />
                                            <label
                                                htmlFor="digital-marketing"
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-gray-300"
                                            >
                                                ডিজিটাল মার্কেটিং
                                            </label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="data-science" />
                                            <label
                                                htmlFor="data-science"
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-gray-300"
                                            >
                                                ডাটা সায়েন্স
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <Separator />
                                <div>
                                    <h4 className="font-medium mb-2">মূল্য</h4>
                                    <div className="space-y-4">
                                        <Slider defaultValue={[5000]} max={20000} step={500} />
                                        <div className="flex justify-between">
                                            <span className="text-sm text-muted-foreground dark:text-gray-400">৳০</span>
                                            <span className="text-sm font-medium dark:text-gray-300">৳৫,০০০</span>
                                            <span className="text-sm text-muted-foreground dark:text-gray-400">৳২০,০০০</span>
                                        </div>
                                    </div>
                                </div>
                                <Separator />
                                <div>
                                    <h4 className="font-medium mb-2">রেটিং</h4>
                                    <div className="space-y-2">
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="rating-4plus" />
                                            <label
                                                htmlFor="rating-4plus"
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-gray-300"
                                            >
                                                ৪+ স্টার
                                            </label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="rating-3plus" />
                                            <label
                                                htmlFor="rating-3plus"
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-gray-300"
                                            >
                                                ৩+ স্টার
                                            </label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="rating-2plus" />
                                            <label
                                                htmlFor="rating-2plus"
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-gray-300"
                                            >
                                                ২+ স্টার
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <Separator />
                                <div>
                                    <h4 className="font-medium mb-2">লেভেল</h4>
                                    <div className="space-y-2">
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="level-beginner" />
                                            <label
                                                htmlFor="level-beginner"
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-gray-300"
                                            >
                                                বিগিনার
                                            </label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="level-intermediate" />
                                            <label
                                                htmlFor="level-intermediate"
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-gray-300"
                                            >
                                                ইন্টারমিডিয়েট
                                            </label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="level-advanced" />
                                            <label
                                                htmlFor="level-advanced"
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-gray-300"
                                            >
                                                অ্যাডভান্সড
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button className="w-full">ফিল্টার করুন</Button>
                            </CardFooter>
                        </Card>
                    </div>

                    {/* Course List */}
                    <div className="flex-1">
                        <Tabs defaultValue="all" className="w-full">
                            <div className="flex justify-between items-center mb-4">
                                <TabsList>
                                    <TabsTrigger value="all">সকল কোর্স</TabsTrigger>
                                    <TabsTrigger value="popular">জনপ্রিয়</TabsTrigger>
                                    <TabsTrigger value="new">নতুন</TabsTrigger>
                                    <TabsTrigger value="free">ফ্রি</TabsTrigger>
                                </TabsList>
                                <Select defaultValue="newest">
                                    <SelectTrigger className="w-[180px]">
                                        <SelectValue placeholder="সাজানোর ক্রম" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="newest">সর্বাধিক নতুন</SelectItem>
                                        <SelectItem value="oldest">সর্বাধিক পুরাতন</SelectItem>
                                        <SelectItem value="price-low">কম দাম থেকে বেশি</SelectItem>
                                        <SelectItem value="price-high">বেশি দাম থেকে কম</SelectItem>
                                        <SelectItem value="rating">সর্বোচ্চ রেটিং</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            {/* loem23 */}

                            <TabsContent value="all" className="mt-0">
                                <Suspense fallback={<Loading />}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {Array.from({ length: 9 }).map((_, i) => (
                                            <CourseCard
                                                key={i}
                                                course={{
                                                    id: `course-${i + 1}`,
                                                    title: [
                                                        "ওয়েব ডেভেলপমেন্ট মাস্টারক্লাস",
                                                        "জাভাস্ক্রিপ্ট ফান্ডামেন্টালস",
                                                        "রিয়েক্ট জেএস এডভান্সড",
                                                        "পাইথন প্রোগ্রামিং বেসিকস",
                                                        "ডিজিটাল মার্কেটিং ফান্ডামেন্টালস",
                                                        "গ্রাফিক ডিজাইন মাস্টারক্লাস",
                                                        "ইউআই/ইউএক্স ডিজাইন",
                                                        "ডাটা সায়েন্স বেসিকস",
                                                        "মোবাইল অ্যাপ ডেভেলপমেন্ট",
                                                    ][i],
                                                    image: `/images/course-page/placeholder.svg?height=200&width=400&text=Course+${i + 1}`,
                                                    rating: 4.5,
                                                    students: 120 + i * 10,
                                                    price: i % 3 === 0 ? "ফ্রি" : `৳${(2500 + i * 500).toLocaleString()}`,
                                                    instructor: [
                                                        "আব্দুল্লাহ আল মামুন",
                                                        "তানভীর আহমেদ",
                                                        "সাদিয়া আফরিন",
                                                        "রাফি হাসান",
                                                        "নাজমুল হাসান",
                                                        "তাসনিম জাহান",
                                                        "মেহেদী হাসান",
                                                        "ফারহানা আক্তার",
                                                        "আসিফ মাহমুদ",
                                                    ][i],
                                                    level: ["বিগিনার", "ইন্টারমিডিয়েট", "অ্যাডভান্সড"][i % 3],
                                                    duration: `${10 + i * 2} ঘন্টা`,
                                                }}
                                            />
                                        ))}
                                    </div>
                                </Suspense>
                            </TabsContent>

                            <TabsContent value="popular" className="mt-0">
                                <Suspense fallback={<Loading />}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {Array.from({ length: 6 }).map((_, i) => (
                                            <CourseCard
                                                key={i}
                                                course={{
                                                    id: `popular-${i + 1}`,
                                                    title: [
                                                        "ওয়েব ডেভেলপমেন্ট মাস্টারক্লাস",
                                                        "জাভাস্ক্রিপ্ট ফান্ডামেন্টালস",
                                                        "রিয়েক্ট জেএস এডভান্সড",
                                                        "পাইথন প্রোগ্রামিং বেসিকস",
                                                        "ডিজিটাল মার্কেটিং ফান্ডামেন্টালস",
                                                        "গ্রাফিক ডিজাইন মাস্টারক্লাস",
                                                    ][i],
                                                    image: `/placeholder.svg?height=200&width=400&text=Popular+${i + 1}`,
                                                    rating: 4.7,
                                                    students: 250 + i * 20,
                                                    price: `৳${(3500 + i * 500).toLocaleString()}`,
                                                    instructor: [
                                                        "আব্দুল্লাহ আল মামুন",
                                                        "তানভীর আহমেদ",
                                                        "সাদিয়া আফরিন",
                                                        "রাফি হাসান",
                                                        "নাজমুল হাসান",
                                                        "তাসনিম জাহান",
                                                    ][i],
                                                    level: ["বিগিনার", "ইন্টারমিডিয়েট", "অ্যাডভান্সড"][i % 3],
                                                    duration: `${15 + i * 3} ঘন্টা`,
                                                }}
                                            />
                                        ))}
                                    </div>
                                </Suspense>
                            </TabsContent>

                            <TabsContent value="new" className="mt-0">
                                <Suspense fallback={<Loading />}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {Array.from({ length: 6 }).map((_, i) => (
                                            <CourseCard
                                                key={i}
                                                course={{
                                                    id: `new-${i + 1}`,
                                                    title: [
                                                        "এআই ফান্ডামেন্টালস",
                                                        "ব্লকচেইন ডেভেলপমেন্ট",
                                                        "ক্লাউড কম্পিউটিং",
                                                        "সাইবার সিকিউরিটি বেসিকস",
                                                        "ফ্লাটার অ্যাপ ডেভেলপমেন্ট",
                                                        "ডেভঅপস ফান্ডামেন্টালস",
                                                    ][i],
                                                    image: `/placeholder.svg?height=200&width=400&text=New+${i + 1}`,
                                                    rating: 4.3,
                                                    students: 50 + i * 10,
                                                    price: `৳${(4000 + i * 500).toLocaleString()}`,
                                                    instructor: ["মেহেদী হাসান", "ফারহানা আক্তার", "আসিফ মাহমুদ", "সাবরিনা হক", "তারিক আজিজ", "নাফিসা আক্তার"][i],
                                                    level: ["বিগিনার", "ইন্টারমিডিয়েট", "অ্যাডভান্সড"][i % 3],
                                                    duration: `${12 + i * 2} ঘন্টা`,
                                                }}
                                            />
                                        ))}
                                    </div>
                                </Suspense>
                            </TabsContent>

                            <TabsContent value="free" className="mt-0">
                                <Suspense fallback={<Loading />}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {Array.from({ length: 6 }).map((_, i) => (
                                            <CourseCard
                                                key={i}
                                                course={{
                                                    id: `free-${i + 1}`,
                                                    title: [
                                                        "HTML ও CSS বেসিকস",
                                                        "জাভাস্ক্রিপ্ট ইন্ট্রোডাকশন",
                                                        "পাইথন প্রোগ্রামিং ইন্ট্রো",
                                                        "ডিজিটাল মার্কেটিং ইন্ট্রো",
                                                        "ফটোশপ বেসিকস",
                                                        "ওয়ার্ডপ্রেস বেসিকস",
                                                    ][i],
                                                    image: `/placeholder.svg?height=200&width=400&text=Free+${i + 1}`,
                                                    rating: 4.2,
                                                    students: 150 + i * 15,
                                                    price: "ফ্রি",
                                                    instructor: [
                                                        "আব্দুল্লাহ আল মামুন",
                                                        "তানভীর আহমেদ",
                                                        "সাদিয়া আফরিন",
                                                        "রাফি হাসান",
                                                        "নাজমুল হাসান",
                                                        "তাসনিম জাহান",
                                                    ][i],
                                                    level: ["বিগিনার", "ইন্টারমিডিয়েট"][i % 2],
                                                    duration: `${8 + i} ঘন্টা`,
                                                }}
                                            />
                                        ))}
                                    </div>
                                </Suspense>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default CoursesPage;