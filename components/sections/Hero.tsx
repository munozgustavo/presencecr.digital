import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";
import { getDictionary } from "@/app/lib/getDictionary";

export function Hero() {
    const t = getDictionary(siteConfig.lang as any);

    return (
        <Section className="relative overflow-hidden pt-16 md:pt-24 lg:pt-32 pb-16">
            <Container className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="flex flex-col gap-6 text-center lg:text-left">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground font-heading">
                        {t.hero.title} <br />
                        <span className="text-primary text-3xl sm:text-4xl lg:text-5xl block mt-2">{t.hero.subtitle}</span>
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
                        {t.hero.description}
                    </p>
                    <div className="flex flex-col gap-3 items-center lg:items-start">
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start w-full">
                            <Button size="lg" href="/#contacto">
                                {t.hero.ctaPrimary}
                            </Button>
                            <Button variant="outline" size="lg" href="/#precios">
                                {t.hero.ctaSecondary}
                            </Button>
                        </div>
                        <span className="text-xs text-muted-foreground lg:ml-2">{t.hero.trustText}</span>
                    </div>

                    <div className="pt-8 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-muted-foreground text-sm">
                        {t.hero.benefits.map((benefit, index) => (
                            <div key={index} className="flex items-center gap-2">
                                <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                <span>{benefit}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Hero Image */}
                <div className="relative aspect-square lg:aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/5 to-primary/10 shadow-xl">
                    <Image
                        src="/hero-image.jpg"
                        alt={t.hero.imageAlt}
                        fill
                        priority
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>

                {/* Background decorative elements */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10" />
            </Container>
        </Section>
    );
}

