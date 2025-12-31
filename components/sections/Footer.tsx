import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";
import { getDictionary } from "@/app/lib/getDictionary";

import { Lang } from "@/app/lib/getDictionary";

export function Footer({ lang = siteConfig.lang as Lang }: { lang?: Lang }) {
    const t = getDictionary(lang);

    return (
        <footer className="bg-secondary text-secondary-foreground py-12 md:py-16">
            <Container>
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="inline-block mb-4">
                            <div className="flex items-center space-x-2">
                                <Image
                                    src="/logo.png"
                                    alt={`${siteConfig.name} logo`}
                                    width={32}
                                    height={32}
                                    className="rounded-sm"
                                />
                                <span className="text-2xl font-bold">{siteConfig.name}</span>
                            </div>
                        </Link>
                        <p className="text-secondary-foreground/80 max-w-sm leading-relaxed">
                            {t.footer.description}
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">{t.footer.links.quick}</h4>
                        <ul className="space-y-2 text-sm text-secondary-foreground/80">
                            <li><Link href="#" className="hover:text-primary transition-colors">{t.nav.home}</Link></li>
                            <li><Link href="#servicios" className="hover:text-primary transition-colors">{t.nav.services}</Link></li>
                            <li><Link href="#nosotros" className="hover:text-primary transition-colors">{t.nav.about}</Link></li>
                            <li><Link href="#testimonios" className="hover:text-primary transition-colors">{t.nav.testimonials}</Link></li>
                            <li><Link href="#contacto" className="hover:text-primary transition-colors">{t.nav.contact}</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">{t.footer.links.legal}</h4>
                        <ul className="space-y-2 text-sm text-secondary-foreground/80">
                            <li><Link href="/aviso-legal" className="hover:text-primary transition-colors">{t.legal.aviso.title}</Link></li>
                            <li><Link href="/privacidad" className="hover:text-primary transition-colors">{t.legal.privacidad.title}</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-secondary-foreground/20 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-sm text-secondary-foreground/60">
                    <p>&copy; {new Date().getFullYear()} {siteConfig.name}. {t.footer.bottom.madeIn}</p>
                    <p>{t.footer.bottom.slogan}</p>
                </div>
            </Container>
        </footer>
    );
}
