import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/config/site";

export const metadata = {
    title: `Aviso Legal | ${siteConfig.name}`,
    description: `Aviso legal y términos de uso de ${siteConfig.name}.`,
};

export default function AvisoLegalPage() {
    return (
        <main className="pt-24 pb-16">
            <Section>
                <Container className="max-w-4xl">
                    <h1 className="text-4xl font-bold mb-8 font-heading">Aviso Legal</h1>

                    <div className="prose prose-slate dark:prose-invert max-w-none space-y-8 text-muted-foreground leading-relaxed text-lg">
                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">1. Datos Identificativos</h2>
                            <p>
                                En cumplimiento con el deber de información, se facilitan los siguientes datos del titular del sitio web:
                            </p>
                            <ul className="list-none space-y-2 mt-4">
                                <li><strong>Nombre Comercial:</strong> {siteConfig.name}</li>
                                <li><strong>Ubicación:</strong> {siteConfig.contact.address}</li>
                                <li><strong>Correo Electrónico:</strong> {siteConfig.contact.email}</li>
                                <li><strong>Teléfono:</strong> {siteConfig.contact.phone}</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">2. Condiciones Generales de Uso</h2>
                            <p>
                                El acceso y/o uso de este portal de {siteConfig.name} atribuye la condición de USUARIO, que acepta, desde dicho acceso y/o uso, las Condiciones Generales de Uso aquí reflejadas. Las citadas Condiciones serán de aplicación independientemente de las Condiciones Generales de Contratación que en su caso resulten de obligado cumplimiento.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">3. Propiedad Intelectual e Industrial</h2>
                            <p>
                                {siteConfig.name} por sí o como cesionaria, es titular de todos los derechos de propiedad intelectual e industrial de su página web, así como de los elementos contenidos en la misma (a título enunciativo, imágenes, sonido, audio, vídeo, software o textos; marcas o logotipos, combinaciones de colores, estructura y diseño, selección de materiales usados, programas de ordenador necesarios para su funcionamiento, acceso y uso, etc.).
                            </p>
                            <p>
                                Quedan expresamente prohibidas la reproducción, la distribución y la comunicación pública, incluida su modalidad de puesta a disposición, de la totalidad o parte de los contenidos de esta página web, con fines comerciales, en cualquier soporte y por cualquier medio técnico, sin la autorización de {siteConfig.name}.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">4. Exclusión de Garantías y Responsabilidad</h2>
                            <p>
                                {siteConfig.name} no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que pudieran ocasionar, a título enunciativo: errores u omisiones en los contenidos, falta de disponibilidad del portal o la transmisión de virus o programas maliciosos o lesivos en los contenidos, a pesar de haber adoptado todas las medidas tecnológicas necesarias para evitarlo.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">5. Modificaciones</h2>
                            <p>
                                {siteConfig.name} se reserva el derecho de efectuar sin previo aviso las modificaciones que considere oportunas en su portal, pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios que se presten a través de la misma como la forma en la que éstos aparezcan presentados o localizados en su portal.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">6. Legislación Aplicable y Jurisdicción</h2>
                            <p>
                                La relación entre {siteConfig.name} y el USUARIO se regirá por la normativa costarricense vigente y cualquier controversia se someterá a los Juzgados y tribunales de la ciudad de San José, Costa Rica.
                            </p>
                        </section>
                    </div>
                </Container>
            </Section>
        </main>
    );
}
