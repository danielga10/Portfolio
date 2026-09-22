# Portfolio — Daniel Garduño Amador

Portfolio personal hecho con **Angular 17** (componente standalone, sin dependencias extra). Incluye:

- **Hero** con tu nombre, rol y estado de disponibilidad
- **Sobre mí**
- **Estudios** (timeline)
- **Experiencia laboral** (timeline)
- **Stack técnico** (por capas: Frontend / Backend / Datos / Herramientas)
- **Proyectos** (Legend Motors)
- **Contacto** con LinkedIn, GitHub y email

## Cómo ejecutarlo en local

Necesitas [Node.js](https://nodejs.org/) (v18 o superior) instalado.

```bash
# 1. Instalar dependencias
npm install

# 2. Levantar servidor de desarrollo
npm start
```

Abre `http://localhost:4200` en el navegador. Los cambios se recargan automáticamente.

## Cómo generar la versión de producción

```bash
npm run build
```

Esto genera los archivos estáticos en `dist/portfolio-daniel-garduno/`, listos para subir a cualquier hosting.

## Cómo publicarlo online (gratis)

La forma más simple es **Vercel** o **Netlify**:

1. Sube este proyecto a un repositorio de GitHub (puedes usar tu cuenta `danielga10`).
2. Entra en [vercel.com](https://vercel.com) o [netlify.com](https://netlify.com), conecta tu cuenta de GitHub e importa el repositorio.
3. Framework preset: **Angular**. Build command: `ng build`. Output directory: `dist/portfolio-daniel-garduno`.
4. Al desplegar te dan una URL pública (ej. `daniel-garduno.vercel.app`) que puedes añadir directamente en tu perfil de LinkedIn, en la sección "Información" o como enlace destacado.

Alternativa: **GitHub Pages**, usando el paquete `angular-cli-ghpages`:

```bash
npm install -g angular-cli-ghpages
ng build --output-path docs --base-href /NOMBRE-DEL-REPO/
npx angular-cli-ghpages --dir=docs
```

## Personalizar contenido

Todo el contenido (estudios, experiencia, stack, proyectos, enlaces) está centralizado en:

```
src/app/app.component.ts
```

Edita los arrays `estudios`, `experiencia`, `stack` y `proyectos` para actualizar la información sin tocar el HTML.

## Foto de perfil

Ahora mismo hay un placeholder en el hero. Para poner tu foto:

1. Guarda tu imagen en `src/assets/` (por ejemplo `src/assets/foto.jpg`).
2. En `src/app/app.component.html`, dentro de `.photo-frame`, sustituye el `<span>` placeholder por:
   ```html
   <img src="assets/foto.jpg" alt="Foto de Daniel Garduño Amador">
   ```

## Añadir tu CV en PDF (opcional)

1. Coloca el PDF en `src/assets/cv-daniel-garduno.pdf`.
2. Añade un enlace de descarga en el hero, por ejemplo:
   ```html
   <a class="btn btn--ghost" href="assets/cv-daniel-garduno.pdf" download>Descargar CV</a>
   ```

## Diseño

Paleta y tipografía definidas como variables CSS en `src/styles.scss`:
- Fondo oscuro (`--ink`) con acento verde-azulado "señal de fibra" (`--signal`) y secciones claras alternas (`--paper`).
- Tipografía: **Space Grotesk** (títulos), **Inter** (texto), **JetBrains Mono** (etiquetas técnicas, fechas).
