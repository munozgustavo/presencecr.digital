import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";

export function Footer() {
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
                                    className="rounded-sm invert brightness-0"
                                />
                                <span className="text-2xl font-bold">{siteConfig.name}</span>
                            </div>
                        </Link>
                        <p className="text-secondary-foreground/80 max-w-sm leading-relaxed">
                            Dedicados a ofrecer el mejor servicio con años de experiencia en el mercado.
                            Tu satisfacción es nuestra prioridad número uno.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">Enlaces Rápidos</h4>
                        <ul className="space-y-2 text-sm text-secondary-foreground/80">
                            <li><Link href="#" className="hover:text-primary transition-colors">Inicio</Link></li>
                            <li><Link href="#servicios" className="hover:text-primary transition-colors">Servicios</Link></li>
                            <li><Link href="#nosotros" className="hover:text-primary transition-colors">Nosotros</Link></li>
                            <li><Link href="#testimonios" className="hover:text-primary transition-colors">Testimonios</Link></li>
                            <li><Link href="#contacto" className="hover:text-primary transition-colors">Contacto</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">Legal</h4>
                        <ul className="space-y-2 text-sm text-secondary-foreground/80">
                            <li><Link href="/aviso-legal" className="hover:text-primary transition-colors">Aviso Legal</Link></li>
                            <li><Link href="/privacidad" className="hover:text-primary transition-colors">Privacidad</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-secondary-foreground/20 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-sm text-secondary-foreground/60">
                    <p>&copy; {new Date().getFullYear()} {siteConfig.name}. Hecho en Costa Rica 🇨🇷.</p>
                    <p>Diseño profesional y accesible.</p>
                </div>
            </Container>
        </footer>
    );
}
