
# Plantilla Next.js Base v2.0 (EN DESARROLLO)

⚠️ IMPORTANTE  
Esta versión **extiende** la plantilla v1.0 certificada.  
NO rompe compatibilidad con v1.0.

## 🧭 Principios de desarrollo v2.0

- La arquitectura base de v1.0 es **INMUTABLE**
- Todo feature nuevo debe ser:
  - Opcional
  - Desacoplado
  - Implementado como extensión
- NO se deben modificar:
  - `app/layout.tsx`
  - `app/globals.css`
  - `app/theme.css` (estructura, solo valores)
  - Componentes base existentes
- NO se permiten dependencias pesadas por defecto

## 🧩 Sistema de extensiones (v2.0)

Las nuevas funcionalidades se implementan bajo:

```bash
/extensions/




# Plantilla Base Next.js para Negocios Locales

Esta plantilla está diseñada para máximo rendimiento, SEO técnico y escalabilidad.

## 🚀 Características

- **Next.js 14+ (App Router)**
- **Tailwind CSS v4** (Configurado con variables CSS nativas)
- **TypeScript**
- **Server Components** por defecto
- **Optimización de Fuentes e Imágenes**

## 📂 Estructura del Proyecto

```bash
├── app/
│   ├── globals.css      # Configuración de Tailwind y @theme
│   ├── theme.css        # Variables de diseño (Colores, Radios)
│   ├── layout.tsx       # Layout principal + SEO Meta tags
│   └── page.tsx         # Página de inicio ensamblada
├── components/
│   ├── ui/              # Componentes base (Botones, Contenedores)
│   └── sections/        # Secciones de negocio (Hero, Contacto, etc.)
└── public/              # Assets estáticos
```

## 🎨 Personalización

Para cambiar el "look & feel" de la marca, edita únicamente `app/theme.css`.

Ejemplo:
```css
:root {
  --primary: #tu-color-hex;
  --radius: 1rem; /* Botones más redondos */
}
```

## 🛠 Comandos

- `npm run dev`: Iniciar servidor de desarrollo.
- `npm run build`: Construir para producción.
- `npm start`: Iniciar servidor de producción.

## 📦 Deploy

Lista para desplegar en [Vercel](https://vercel.com/new).
