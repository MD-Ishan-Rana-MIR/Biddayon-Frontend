"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Clock, Star, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

interface Course {
    id: string
    title: string
    instructor: string
    level: string
    duration: string
    students: number
    rating: number
    image: string
    price: string
}

interface CourseCardProps {
    course: Course
}

const CourseCard = ({ course }: CourseCardProps) =>{
    const [isHovered, setIsHovered] = useState(false)

    // Generate a random gradient for each course card
    const gradients = [
        "from-purple-500 to-indigo-500",
        "from-pink-500 to-rose-500",
        "from-orange-500 to-amber-500",
        "from-green-500 to-emerald-500",
        "from-blue-500 to-cyan-500",
        "from-indigo-500 to-violet-500",
    ]

    const randomGradient = gradients[Math.floor(Math.random() * gradients.length)]

    return (
        <motion.div
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
        >
            <Card className="overflow-hidden border-0 shadow-lg">
                <div className={`p-1 bg-gradient-to-br ${randomGradient}`}>
                    <div className="relative aspect-video overflow-hidden rounded-t-lg">
                        <Image
                            src={course?.image || "/placeholder.svg?height=200&width=300&text=Course"}
                            alt={course?.title || "Course"}
                            width={400}
                            height={200}
                            className="object-cover w-full h-full transition-transform duration-300"
                            style={{
                                transform: isHovered ? "scale(1.05)" : "scale(1)",
                            }}
                        />
                        <Badge className="absolute top-2 right-2 bg-white/80 text-gray-800 backdrop-blur-sm">
                            {course?.level || "Beginner"}
                        </Badge>
                    </div>
                </div>
                <CardHeader className="p-4">
                    <div className="space-y-1">
                        <h3 className="font-bold text-lg line-clamp-2">{course?.title || "Course Title"}</h3>
                        <p className="text-sm text-gray-500">{course?.instructor || "Instructor"}</p>
                    </div>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                    <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4 text-gray-500" />
                            <span>{course?.duration || "N/A"}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Users className="h-4 w-4 text-gray-500" />
                            <span>{course?.students || 0}+ শিক্ষার্থী</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                            <span>{course?.rating || 0}</span>
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="p-4 pt-0 flex items-center justify-between">
                    <p className={`font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r ${randomGradient}`}>
                        {course?.price || "Free"}
                    </p>
                    <Button size="sm" className={`bg-gradient-to-r ${randomGradient} text-white hover:opacity-90`} asChild>
                        <Link href={`/courses/${course?.id || "unknown"}`}>বিস্তারিত দেখুন</Link>
                    </Button>
                </CardFooter>
            </Card>
        </motion.div>
    )
}


export default CourseCard;