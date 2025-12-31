import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";
import { getDictionary } from "@/app/lib/getDictionary";

export function Pricing() {
    const t = getDictionary(siteConfig.lang as any);

    // Mark the first item as highlighted as in original
    const pricingItems = t.pricing.items.map((item, index) => ({
        ...item,
        highlighted: index === 0
    }));

    return (
        <Section id="precios" className="bg-muted/30">
            <Container>
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold tracking-tight mb-4 font-heading">
                        {t.pricing.title}
                    </h2>
                    <p className="text-muted-foreground text-lg mb-4">
                        {t.pricing.subtitle}
                    </p>
                    <p className="text-primary font-medium">
                        {t.pricing.highlightText}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    {pricingItems.map((item, index) => (
                        <div
                            key={index}
                            className={`relative bg-background p-6 rounded-xl border ${item.highlighted
                                ? "border-primary shadow-lg ring-2 ring-primary/20"
                                : "border-border shadow-sm"
                                } flex flex-col`}
                        >
                            {item.highlighted && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                                    {t.pricing.popular}
                                </div>
                            )}

                            <div className="mb-4">
                                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                                    {item.type}
                                </span>
                                <h3 className="text-lg font-bold mt-1 font-heading">{item.name}</h3>
                            </div>

                            <div className="text-2xl font-bold text-primary mb-3">
                                {item.price}
                            </div>

                            <p className="text-sm text-muted-foreground mb-6">
                                {item.description}
                            </p>

                            <ul className="space-y-2 mb-6 flex-grow">
                                {item.features.map((feature, featureIndex) => (
                                    <li key={featureIndex} className="flex items-start gap-2 text-sm">
                                        <svg className="h-5 w-5 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Button
                                variant={item.highlighted ? "primary" : "outline"}
                                size="sm"
                                href="/#contacto"
                                className="w-full"
                            >
                                {t.pricing.cta}
                            </Button>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <p className="text-muted-foreground mb-6">
                        {t.pricing.disclaimer}
                    </p>
                    <div className="flex flex-col items-center gap-2">
                        <Button size="lg" href="/#contacto">
                            {t.pricing.mainCta}
                        </Button>
                        <span className="text-xs text-muted-foreground">{t.pricing.trustText}</span>
                    </div>
                </div>
            </Container>
        </Section>
    );
}
