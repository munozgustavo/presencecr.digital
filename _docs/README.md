Next.js + Tailwind – Plantilla Base Ultra Optimizada
🎯 Objetivo
Crear una plantilla base profesional para sitios web de negocios locales,desarrollada con Next.js (App Router) y Tailwind CSS, enfocada en:
	•	Máximo performance
	•	Carga ultrarrápida
	•	SEO técnico correcto
	•	Escalabilidad futura
	•	Cero dependencias innecesarias
	•	Lista para producción en Vercel
Esta plantilla será reutilizada para múltiples clientes y rubros(veterinarias, talleres, restaurantes, servicios profesionales, etc.).

🧱 Stack obligatorio
	•	Next.js (última versión estable)
	•	App Router
	•	React Server Components por defecto
	•	Tailwind CSS
	•	TypeScript
	•	Hosting target: Vercel

🚨 Reglas estrictas (NO romper)
	1	❌ NO usar iframes de YouTube directamente en el HTML inicial
	2	❌ NO cargar widgets externos automáticamente
	3	❌ NO usar librerías pesadas (Swiper, jQuery, sliders externos, etc.)
	4	❌ NO usar imágenes sin optimización
	5	❌ NO usar WordPress como frontend
	6	❌ NO usar CSS global innecesario
	7	❌ NO usar Client Components si no es estrictamente necesario

📁 Estructura del proyecto requerida
/app
 ├── layout.tsx
 ├── page.tsx
 ├── /components
 │   ├── Header.tsx
 │   ├── Footer.tsx
 │   ├── LazyYoutube.tsx
 │   ├── OptimizedImage.tsx
 │   └── CTA.tsx
 ├── /sections
 │   ├── Hero.tsx
 │   ├── Services.tsx
 │   ├── About.tsx
 │   ├── Testimonials.tsx
 │   └── Contact.tsx
 ├── /lib
 │   ├── seo.ts
 │   └── constants.ts
 ├── theme.css
 └── globals.css
⚡ Performance (CRÍTICO)
✅ Imágenes
	•	Usar SIEMPRE next/image
	•	Formatos: AVIF / WebP
	•	Lazy loading por defecto
	•	Blur placeholder cuando aplique
	•	Evitar CLS (definir tamaños o fill correctamente)
✅ Video (YouTube)
	•	Implementar un componente LazyYoutube
	•	Mostrar thumbnail optimizado primero
	•	Cargar iframe SOLO al hacer click del usuario
	•	Usar youtube-nocookie.com
	•	NO cargar scripts de YouTube en carga inicial
✅ JavaScript
	•	Usar Server Components por defecto
	•	Client Components solo si hay estado o interacción
	•	Usar dynamic import para:
	◦	Mapas
	◦	Videos
	◦	Elementos no críticos

🎥 Componente LazyYoutube (requerido)
Debe:
	•	Mostrar thumbnail optimizado
	•	Mostrar botón de play
	•	Cargar iframe solo tras interacción
	•	Mantener aspect-ratio 16:9
	•	No afectar LCP ni TBT

🌍 Externos (Mapas, WhatsApp)
	•	Google Maps: usar imagen placeholder → click → iframe
	•	WhatsApp: usar enlace wa.me con mensaje prellenado
	•	NO usar widgets flotantes pesados

🎨 Tailwind CSS
	•	Usar Tailwind como sistema principal
	•	Variables de color configurables
	•	Tipografía base definida
	•	Responsive mobile-first
	•	Eliminar CSS no usado en producción

🎨 Sistema de colores y personalización visual (MUY IMPORTANTE)
Esta plantilla utiliza un sistema de design tokens basado en variables CSSpara permitir personalización por cliente SIN modificar la arquitectura base.
📁 Archivo permitido para personalización
El ÚNICO archivo que puede modificarse para cambiar colores o identidad visual es:
	•	app/theme.css
Ejemplo:
:root {
  --color-primary: #16a34a;
  --color-secondary: #0ea5e9;
  --color-accent: #facc15;
}
🚫 Archivos PROHIBIDOS de modificar
Bajo ninguna circunstancia se deben modificar para personalización visual:
	•	tailwind.config.js
	•	app/globals.css (estructura y reglas base)
	•	Componentes base dentro de /components
	•	Configuración de Tailwind, plugins o breakpoints
Estos archivos forman parte del core de la plantilla.
🎯 Regla de oro
La arquitectura y reglas son fijas.Solo los valores de app/theme.css cambian por cliente.
Cualquier cambio visual debe resolverse mediante variables,NO agregando clases nuevas ni modificando la configuración global.

🔍 SEO (OBLIGATORIO)
	•	Usar Metadata API (generateMetadata)
	•	HTML semántico correcto
	•	Titles y descriptions configurables
	•	Open Graph básico
	•	Preparado para SEO local

🚀 Preparación para escalar
La plantilla debe quedar lista para:
	•	Consumir APIs externas
	•	WordPress Headless (solo como CMS futuro)
	•	Blog dinámico sin rehacer frontend
	•	Serverless functions si se requieren más adelante

📊 Resultados esperados
	•	Lighthouse Performance: 90–100
	•	LCP < 2s
	•	CLS = 0
	•	JS mínimo enviado al cliente
	•	Excelente experiencia móvil

📦 Entregable final
	•	Proyecto funcional
	•	Corre con npm run dev
	•	Listo para deploy en Vercel
	•	Código limpio, comentado y mantenible

✅ Estado final
Este README define las reglas del sistema.Debe seguirse estrictamente en cualquier generación, modificación opersonalización de sitios basados en esta plantilla.
