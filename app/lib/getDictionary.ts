import { es } from "@/app/locales/es";
import { en } from "@/app/locales/en";

export type Lang = "es" | "en";

export function getDictionary(lang: Lang) {
    return lang === "en" ? en : es;
}
