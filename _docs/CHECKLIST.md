📄 CHECKLIST.md — Revisión Final de Sitios Web

(Archivo independiente, no se mezcla con el README)

✅ 1. Arquitectura base (OBLIGATORIO)

 Se respetó la estructura definida en el README

 NO se modificó tailwind.config.js

 NO se modificó la estructura de globals.css

 NO se modificaron componentes base

 Solo se personalizó app/theme.css para colores

🎨 2. Personalización visual

 Los colores se definen únicamente en app/theme.css

 No existen colores hardcodeados en componentes

 Las clases usan bg-primary, text-secondary, etc.

 La identidad visual es consistente en todo el sitio

⚡ 3. Performance

 Todas las imágenes usan next/image

 Formatos modernos (WebP / AVIF)

 No hay imágenes sin lazy loading

 No hay librerías JS innecesarias

 Client Components solo cuando son necesarios

🎥 4. Videos (YouTube)

 NO hay iframes cargados en el render inicial

 Se usa el componente LazyYoutube

 El iframe se carga solo al hacer click

 Se usa youtube-nocookie.com

 El video no afecta LCP ni CLS

🌍 5. Externos (Mapas / WhatsApp)

 Google Maps NO se carga automáticamente

 Mapa usa placeholder + interacción

 WhatsApp usa enlace wa.me

 No hay widgets externos pesados

🔍 6. SEO técnico

 Metadata configurada (title + description)

 HTML semántico correcto

 Headings bien jerarquizados (H1 único)

 Preparado para SEO local Costa Rica 🇨🇷

 Open Graph básico configurado

📱 7. Responsive

 Mobile-first

 Correcto en móvil, tablet y desktop

 No hay desbordes horizontales

 CTAs visibles en móvil

🚀 8. Preparación futura

 Código escalable y limpio

 Componentes reutilizables

 Preparado para APIs / CMS headless

 No hay dependencias innecesarias

✅ Resultado final

 Lighthouse Performance ≥ 90

 Sitio listo para deploy en Vercel

 Cumple TODAS las reglas del README

❌ Si algún punto falla, el sitio NO está listo para entrega