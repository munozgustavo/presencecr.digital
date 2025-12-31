"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Lang } from "@/app/lib/getDictionary";

export async function setLanguage(lang: Lang) {
    const cookieStore = await cookies();
    cookieStore.set("NEXT_LOCALE", lang, {
        path: "/",
        maxAge: 60 * 60 * 24 * 365, // 1 year
        sameSite: "lax",
    });
}
