# Checklist Técnico – Plantilla v2.0

## Core (NO romper)
- [ ] app/layout.tsx no modificado
- [ ] globals.css sin cambios estructurales
- [ ] theme.css solo valores, no estructura
- [ ] Componentes base intactos

## Extensiones
- [ ] Todo feature vive en /extensions
- [ ] Cada extensión es opcional
- [ ] No hay imports forzados al core
- [ ] Flags controlan activación

## Performance
- [ ] No se añadió JS global innecesario
- [ ] LCP base no empeoró
- [ ] next/image usado correctamente
- [ ] Lazy loading respetado

## Build
- [ ] npm run dev funciona
- [ ] npm run build pasa sin errores
