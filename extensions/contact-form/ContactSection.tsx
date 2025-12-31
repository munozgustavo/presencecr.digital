"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ContactForm } from "./ContactForm";
import { siteConfig } from "@/config/site";
import { getDictionary } from "@/app/lib/getDictionary";

export function ContactSection() {
    const t = getDictionary(siteConfig.lang as any);
    const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent("Hola, vi su página web y me gustaría más información sobre sus servicios de diseño web. ¿Podrían ayudarme?")}`;

    return (
        <Section id="contacto">
            <Container>
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
                    {/* Contact Info */}
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight mb-6 font-heading">{t.contact.title}</h2>
                        <p className="text-muted-foreground text-lg mb-8">
                            {t.contact.description}
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="h-10 w-10 shrink-0 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-foreground">{t.contact.info.phone}</h3>
                                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
                                        {siteConfig.contact.phone}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="h-10 w-10 shrink-0 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-foreground">{t.contact.info.email}</h3>
                                    <a href={`mailto:${siteConfig.contact.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                                        {siteConfig.contact.email}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="h-10 w-10 shrink-0 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-foreground">{t.contact.info.location}</h3>
                                    <p className="text-muted-foreground">{t.contact.info.address}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Functional Contact Form */}
                    <div className="bg-muted p-8 rounded-2xl border border-border">
                        <ContactForm />
                    </div>
                </div>
            </Container>
        </Section>
    );
}
