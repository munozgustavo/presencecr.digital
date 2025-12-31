"use client";

import { useTransition } from "react";
import { setLanguage } from "@/app/actions/i18n";
import { Lang } from "@/app/lib/getDictionary";
import { useRouter } from "next/navigation";

interface LanguageSwitcherProps {
    currentLang: Lang;
}

export function LanguageSwitcher({ currentLang }: LanguageSwitcherProps) {
    const [isPending, startTransition] = useTransition();
    const router = useRouter();

    const handleLanguageChange = (lang: Lang) => {
        if (lang === currentLang) return;

        startTransition(async () => {
            await setLanguage(lang);
            router.refresh();
        });
    };

    return (
        <div className="flex items-center gap-1 bg-muted/50 p-1 rounded-full border border-border">
            <button
                onClick={() => handleLanguageChange("es")}
                disabled={isPending}
                className={`px-2 py-1 text-xs font-bold rounded-full transition-all ${currentLang === "es"
                        ? "bg-primary text-primary-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground hover:bg-background/50"
                    } disabled:opacity-50`}
            >
                ES
            </button>
            <button
                onClick={() => handleLanguageChange("en")}
                disabled={isPending}
                className={`px-2 py-1 text-xs font-bold rounded-full transition-all ${currentLang === "en"
                        ? "bg-primary text-primary-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground hover:bg-background/50"
                    } disabled:opacity-50`}
            >
                EN
            </button>
        </div>
    );
}
