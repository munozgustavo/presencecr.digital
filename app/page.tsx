import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { Pricing } from "@/components/sections/Pricing";
import { ContactSection } from "@/extensions/contact-form/ContactSection";
import { Footer } from "@/components/sections/Footer";

// Data for sections - Copy optimizado para conversión y SEO local
const services = [
  {
    title: "Página Web Profesional",
    description: "Tu negocio visible en internet con una página moderna, rápida y diseñada para generar confianza. Incluye hasta 5 secciones, diseño responsive, botón de WhatsApp directo y entrega en 24-48 horas. Ideal para negocios que quieren verse profesionales y recibir consultas todos los días. Desde $230.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
    ),
  },
  {
    title: "Tienda Online (E-commerce)",
    description: "Vendé tus productos o servicios por internet de forma fácil y segura. Incluye catálogo de productos, carrito de compras, integración con WhatsApp y/o métodos de pago. No necesitas conocimientos técnicos, nosotros nos encargamos de todo. Desde $400.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
    ),
  },
  {
    title: "Branding Visual",
    description: "Creamos la identidad visual de tu marca para que se vea profesional y coherente. Incluye paleta de colores, tipografías y guía de estilo para web y redes sociales. Desde $200.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>
    ),
  },
  {
    title: "Administración de Redes",
    description: "Nos encargamos de tus redes sociales para que tu negocio se mantenga activo y profesional. Incluye planificación mensual, diseño de publicaciones y presencia constante. Ideal si quieres mantener tu negocio activo y visible sin perder tiempo creando contenido. Desde $100/mes.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" /></svg>
    ),
  },
  {
    title: "Mantenimiento + Blog SEO",
    description: "Mantenemos tu página actualizada y funcionando. Incluye cambios de texto/imágenes, soporte técnico y blog opcional para mejorar tu posicionamiento en Google. Este servicio es opcional y recomendado para mantener tu web siempre actualizada y mejorar su posicionamiento en Google. Desde $30/mes.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
    ),
  },
];

const values = [
  {
    title: "Entrega en 24-48 Horas",
    description: "Tu página web lista rapidísimo. No perdés tiempo esperando semanas para tener tu negocio en internet.",
    icon: <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
  },
  {
    title: "Sin Tecnicismos",
    description: "Te explicamos todo de forma clara y sencilla. No necesitás saber nada de tecnología para trabajar con nosotros.",
    icon: <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
  },
  {
    title: "Precios Transparentes",
    description: "Sabés exactamente cuánto cuesta antes de empezar. Sin costos ocultos ni sorpresas después.",
    icon: <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  },
  {
    title: "Enfocados en Resultados",
    description: "Tu página está diseñada para atraer clientes, no solo para verse bonita. Cada detalle pensado para vender.",
    icon: <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  },
];

const testimonials = [
  {
    title: "María — Emprendedora",
    description: "\"Gracias a presencecr.digital, ahora mis clientes confían más en mi negocio. El sitio quedó listo rapidísimo y la atención fue excelente.\"",
    icon: <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714.211 1.412.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" /></svg>
  },
  {
    title: "Carlos — Dueño de Pyme",
    description: "\"No sé nada de tecnología, pero ellos se encargaron de todo. Me explicaron cada paso de forma clara. ¡Muy recomendados!\"",
    icon: <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  },
  {
    title: "Laura — Negocio Local",
    description: "\"Un sitio profesional y a buen precio. La integración con WhatsApp me ayuda a cerrar más ventas todos los días.\"",
    icon: <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />

        {/* Servicios - Copy optimizado */}
        <Features
          id="servicios"
          title="Servicios de Diseño Web y Marketing Digital"
          description="Todo lo que tu negocio necesita para verse profesional, atraer clientes y crecer en internet."
          items={services}
          columns={3}
        />

        {/* Precios - Nueva sección */}
        <Pricing />

        {/* Por qué elegirnos - Valores diferenciadores */}
        <Features
          id="nosotros"
          title="¿Por Qué Elegir presencecr.digital?"
          description="Somos el aliado digital que tu negocio necesita para crecer en Costa Rica."
          items={values}
          columns={4}
          className="bg-background"
        />

        {/* Testimonios - Con nombres para credibilidad */}
        <Features
          id="testimonios"
          title="Lo Que Dicen Nuestros Clientes"
          description="Emprendedores y pymes en Costa Rica confían en nosotros."
          items={testimonials}
          className="bg-muted/30"
        />

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

