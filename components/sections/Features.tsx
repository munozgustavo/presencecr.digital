import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

interface FeatureItem {
    title: string;
    description: string;
    icon?: React.ReactNode;
}

interface FeaturesProps {
    id?: string;
    title: string;
    description?: string;
    items: FeatureItem[];
    className?: string;
    columns?: 2 | 3 | 4;
}

export function Features({ id, title, description, items, className = "", columns = 3 }: FeaturesProps) {
    return (
        <Section id={id} className={`bg-muted/50 ${className}`}>
            <Container>
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold tracking-tight mb-4 font-heading">{title}</h2>
                    {description && (
                        <p className="text-muted-foreground text-lg">
                            {description}
                        </p>
                    )}
                </div>

                <div className={`grid gap-8 ${columns === 2 ? "md:grid-cols-2" :
                        columns === 4 ? "md:grid-cols-4" :
                            "md:grid-cols-3"
                    }`}>
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="bg-background p-8 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow"
                        >
                            {item.icon && (
                                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6">
                                    {item.icon}
                                </div>
                            )}
                            <h3 className="text-xl font-bold mb-3 font-heading">{item.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
