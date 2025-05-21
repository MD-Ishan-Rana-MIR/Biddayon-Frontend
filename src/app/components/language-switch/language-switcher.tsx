"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useLanguage } from "@/context/language-context"
import { Globe } from "lucide-react"

export function LanguageSwitcher() {
    const { language, setLanguage, t } = useLanguage()

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full relative">
                    <Globe className="h-5 w-5" />
                    <span className="absolute -top-1 -right-1 text-xs font-bold bg-purple-600 text-white rounded-full w-4 h-4 flex items-center justify-center">
                        {language.toUpperCase()}
                    </span>
                    <span className="sr-only">{t("language")}</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem
                    onClick={() => setLanguage("bn")}
                    className={language === "bn" ? "bg-purple-100 dark:bg-purple-900/20" : ""}
                >
                    <span className="font-semibold mr-2">বাংলা</span>
                    <span className="text-sm text-muted-foreground">(Bengali)</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                    onClick={() => setLanguage("en")}
                    className={language === "en" ? "bg-purple-100 dark:bg-purple-900/20" : ""}
                >
                    <span className="font-semibold">English</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
