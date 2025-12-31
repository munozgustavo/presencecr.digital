import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/config/site";
import { getDictionary } from "@/app/lib/getDictionary";
import { getServerLanguage } from "@/app/lib/getDictionary.server";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
    const lang = await getServerLanguage();
    const t = getDictionary(lang);
    return {
        title: `${t.legal.aviso.title} | ${siteConfig.name}`,
        description: `${t.legal.aviso.title} y términos de uso de ${siteConfig.name}.`,
    };
}

export default async function AvisoLegal() {
    const lang = await getServerLanguage();
    const t = getDictionary(lang);

    return (
        <Section className="pt-24 lg:pt-32">
            <Container>
                <h1 className="text-4xl font-bold mb-8 font-heading">{t.legal.aviso.title}</h1>

                <div className="prose prose-slate max-w-none prose-headings:font-heading prose-headings:text-foreground prose-p:text-muted-foreground">
                    {t.legal.aviso.sections.map((section, index) => (
                        <div key={index} className="mb-8">
                            <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                            <p>{section.body}</p>
                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
