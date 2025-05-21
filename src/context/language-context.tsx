"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "bn" | "en"

type LanguageContextType = {
    language: Language
    setLanguage: (language: Language) => void
    t: (key: string) => string
}

const translations = {
    bn: {
        // Navigation
        home: "হোম",
        courses: "কোর্সসমূহ",
        about: "আমাদের সম্পর্কে",
        contact: "যোগাযোগ",
        blog: "ব্লগ",
        login: "লগইন",
        register: "রেজিস্টার",
        search: "খুঁজুন",
        search_courses: "কোর্স খুঁজুন...",

        // Common
        language: "ভাষা",
        theme: "থিম",

        // Course categories
        web_development: "ওয়েব ডেভেলপমেন্ট",
        graphic_design: "গ্রাফিক ডিজাইন",
        digital_marketing: "ডিজিটাল মার্কেটিং",
        courses_count: "টি কোর্স",

        // Homepage
        featured: "জনপ্রিয় কোর্স",
        our_best_courses: "আমাদের সেরা কোর্সসমূহ",
        best_courses_subtitle: "শিক্ষার্থীদের দ্বারা সবচেয়ে বেশি পছন্দ করা কোর্সসমূহ দেখুন",
    },
    en: {
        // Navigation
        home: "Home",
        courses: "Courses",
        about: "About Us",
        contact: "Contact",
        blog: "Blog",
        login: "Login",
        register: "Register",
        search: "Search",
        search_courses: "Search courses...",

        // Common
        language: "Language",
        theme: "Theme",

        // Course categories
        web_development: "Web Development",
        graphic_design: "Graphic Design",
        digital_marketing: "Digital Marketing",
        courses_count: "courses",

        // Homepage
        featured: "Featured Course",
        our_best_courses: "Our Best Courses",
        best_courses_subtitle: "Explore the most popular courses chosen by students",
    },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguageState] = useState<Language>("bn")

    useEffect(() => {
        // Get language from localStorage on initial load
        const savedLanguage = localStorage.getItem("language") as Language
        if (savedLanguage && (savedLanguage === "bn" || savedLanguage === "en")) {
            setLanguageState(savedLanguage)
        }

        // Update html lang attribute
        document.documentElement.lang = language
    }, [])

    const setLanguage = (newLanguage: Language) => {
        setLanguageState(newLanguage)
        localStorage.setItem("language", newLanguage)
        document.documentElement.lang = newLanguage
    }

    const t = (key: string): string => {
        return translations[language][key as keyof (typeof translations)[typeof language]] || key
    }

    return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
    const context = useContext(LanguageContext)
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider")
    }
    return context
}
