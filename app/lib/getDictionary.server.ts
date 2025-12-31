import { cookies } from "next/headers";
import { siteConfig } from "@/config/site";
import { Lang } from "./getDictionary";

export async function getServerLanguage(): Promise<Lang> {
    const cookieStore = await cookies();
    const lang = cookieStore.get("NEXT_LOCALE")?.value as Lang;
    return (lang === "es" || lang === "en") ? lang : (siteConfig.lang as Lang);
}
