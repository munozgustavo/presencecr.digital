import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

interface PricingItem {
    name: string;
    type: string;
    price: string;
    description: string;
    features: string[];
    highlighted?: boolean;
}

const pricingItems: PricingItem[] = [
    {
        name: "Página Web Profesional",
        type: "Pago único",
        price: "$150 – $300",
        description: "Tu negocio visible en internet con una página moderna y lista para vender.",
        features: [
            "Hasta 5 secciones",
            "Diseño responsive (celular y PC)",
            "Botón de WhatsApp directo",
            "Formulario de contacto",
            "Optimización SEO básica",
            "Entrega en 24-48 horas"
        ],
        highlighted: true
    },
    {
        name: "Tienda Online",
        type: "Pago único",
        price: "$300 – $600",
        description: "Vendé tus productos por internet de forma fácil y segura.",
        features: [
            "Catálogo de productos",
            "Carrito de compras",
            "Diseño fácil de usar",
            "Integración WhatsApp/pagos",
            "Lista para vender"
        ]
    },
    {
        name: "Branding Visual",
        type: "Pago único",
        price: "$200 – $400",
        description: "La identidad visual que tu marca necesita para verse profesional.",
        features: [
            "Paleta de colores personalizada",
            "Tipografías recomendadas",
            "Guía de estilo visual",
            "Manual de uso básico",
            "Archivos listos para usar"
        ]
    },
    {
        name: "Redes Sociales",
        type: "Mensual",
        price: "$100 – $250/mes",
        description: "Mantené tu negocio activo y profesional en redes sin preocuparte.",
        features: [
            "Planificación mensual",
            "Diseño de publicaciones",
            "Textos enfocados en tu negocio",
            "Imagen coherente con tu marca",
            "Reporte de resultados"
        ]
    },
    {
        name: "Mantenimiento + Blog SEO",
        type: "Mensual",
        price: "$30 – $60/mes",
        description: "Tu página siempre actualizada y posicionándose en Google.",
        features: [
            "Cambios de texto/imágenes",
            "Actualizaciones técnicas",
            "Soporte ante errores",
            "Blog SEO (opcional)",
            "Acompañamiento continuo"
        ]
    }
];

export function Pricing() {
    return (
        <Section id="precios" className="bg-muted/30">
            <Container>
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold tracking-tight mb-4 font-heading">
                        Precios Claros y Transparentes
                    </h2>
                    <p className="text-muted-foreground text-lg mb-4">
                        Sin costos ocultos. Sabés exactamente cuánto cuesta antes de empezar.
                    </p>
                    <p className="text-primary font-medium">
                        Todos nuestros planes están pensados para negocios que buscan resultados reales sin pagar de más.
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
                                    Más popular
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
                                Cotizar
                            </Button>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <p className="text-muted-foreground mb-6">
                        *Los precios varían según la complejidad del proyecto. Escribinos por WhatsApp para una cotización personalizada sin compromiso.
                    </p>
                    <div className="flex flex-col items-center gap-2">
                        <Button size="lg" href="/#contacto">
                            Solicitar Cotización
                        </Button>
                        <span className="text-xs text-muted-foreground">Respuesta rápida · Sin compromiso</span>
                    </div>
                </div>
            </Container>
        </Section>
    );
}
