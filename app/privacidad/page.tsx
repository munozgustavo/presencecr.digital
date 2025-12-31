import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/config/site";

export const metadata = {
    title: `Política de Privacidad | ${siteConfig.name}`,
    description: `Política de privacidad y protección de datos personales de ${siteConfig.name}.`,
};

export default function PrivacidadPage() {
    return (
        <main className="pt-24 pb-16">
            <Section>
                <Container className="max-w-4xl">
                    <h1 className="text-4xl font-bold mb-8 font-heading">Política de Privacidad</h1>

                    <div className="prose prose-slate dark:prose-invert max-w-none space-y-8 text-muted-foreground leading-relaxed text-lg">
                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">1. Derecho de Información</h2>
                            <p>
                                De conformidad con lo establecido por la Ley N° 8968, "Ley de Protección de la Persona frente al Tratamiento de sus Datos Personales" de Costa Rica, {siteConfig.name} informa al usuario que sus datos personales formarán parte de un fichero automatizado cuya finalidad es la gestión del contacto y la atención de solicitudes realizadas a través de este sitio web.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">2. Consentimiento Informado</h2>
                            <p>
                                Al marcar la casilla de aceptación en nuestros formularios o al enviarnos un mensaje vía WhatsApp, el usuario manifiesta que ha sido informado del tratamiento que recibirán sus datos y otorga su consentimiento expreso para ello.
                            </p>
                            <p>
                                Los datos marcados como obligatorios son estrictamente necesarios para cumplir con la finalidad de contacto mencionada anteriormente.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">3. Finalidad del Tratamiento</h2>
                            <p>
                                Los datos recabados son tratados con las siguientes finalidades:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li>Atender las solicitudes de información y cotización enviadas por los usuarios.</li>
                                <li>Mantener la relación comercial y el seguimiento de proyectos.</li>
                                <li>Envío de comunicaciones relacionadas con los servicios contratados o solicitados.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">4. Destinatarios de la Información</h2>
                            <p>
                                {siteConfig.name} se compromete a no ceder sus datos a terceros, salvo obligación legal. Sus datos son tratados con absoluta confidencialidad por el personal encargado de la gestión de clientes.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">5. Derechos del Titular (ARCO)</h2>
                            <p>
                                El usuario podrá ejercer en todo momento sus derechos de Acceso, Rectificación, Cancelación y Oposición (ARCO) sobre sus datos personales mediante comunicación escrita dirigida al correo electrónico: <strong>{siteConfig.contact.email}</strong>, indicando en el asunto "Protección de Datos".
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">6. Seguridad de los Datos</h2>
                            <p>
                                {siteConfig.name} ha adoptado los niveles de seguridad de protección de los datos personales legalmente requeridos, y procura instalar aquellos otros medios y medidas técnicas adicionales a su alcance para evitar la pérdida, mal uso, alteración, acceso no autorizado y robo de los datos personales facilitados.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">7. Actualización de la Política</h2>
                            <p>
                                Esta Política de Privacidad puede ser modificada en cualquier momento para adaptarla a novedades legislativas o variaciones en los servicios ofrecidos por {siteConfig.name}. Se recomienda su consulta periódica.
                            </p>
                        </section>
                    </div>
                </Container>
            </Section>
        </main>
    );
}
