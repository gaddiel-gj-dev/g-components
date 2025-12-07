# @g-components/lit-text

📝 Componente web flexible para renderizar texto con etiquetas HTML dinámicas y tamaños predefinidos. Perfecto para sistemas de diseño y contenido dinámico.

## ✨ Características

- 🏷️ **Etiquetas dinámicas**: Soporta h1, h2, h3, h4, h5, h6, p, span, strong, em, small
- 📏 **Tamaños predefinidos**: 9 tamaños de fuente listos para usar (3xs a 3xl)
- 🎨 **HTML enriquecido**: Renderiza contenido HTML usando `unsafeHTML` de Lit
- 🔒 **Shadow DOM**: Estilos encapsulados sin conflictos
- 📦 **Ligero**: Peer dependency de Lit, sin duplicación de código
- ⚡ **Performance**: Renderizado eficiente con Lit
- 🌐 **Web Standards**: Basado en Custom Elements v1

## 📦 Instalación

```bash
npm install @g-components/lit-text
```

```bash
pnpm add @g-components/lit-text
```

```bash
yarn add @g-components/lit-text
```

## 🚀 Uso básico

### Importar el componente

```javascript
import '@g-components/lit-text';
```

### Ejemplo simple

```html
<lit-text content="Hello World"></lit-text>
```

Por defecto renderiza un `<p>` con tamaño `m` (18px).

## 📖 Ejemplos

### Diferentes etiquetas HTML

```html
<!-- Título principal -->
<lit-text tag-html="h1" content="Mi Título Principal"></lit-text>

<!-- Subtítulo -->
<lit-text tag-html="h2" content="Subtítulo"></lit-text>

<!-- Párrafo (default) -->
<lit-text content="Este es un párrafo de texto."></lit-text>

<!-- Texto pequeño -->
<lit-text tag-html="small" content="Nota al pie"></lit-text>

<!-- Texto en negritas -->
<lit-text tag-html="strong" content="Texto importante"></lit-text>
```

### Diferentes tamaños

```html
<!-- Texto muy pequeño -->
<lit-text content="Pie de página" size="3xs"></lit-text>

<!-- Texto pequeño -->
<lit-text content="Metadata" size="xs"></lit-text>

<!-- Texto normal -->
<lit-text content="Párrafo regular" size="s"></lit-text>

<!-- Texto mediano (default) -->
<lit-text content="Contenido principal" size="m"></lit-text>

<!-- Texto grande -->
<lit-text content="Subtítulo destacado" size="l"></lit-text>

<!-- Títulos grandes -->
<lit-text tag-html="h1" content="Hero Title" size="3xl"></lit-text>
```

### Combinando etiquetas y tamaños

```html
<!-- Título grande con h1 -->
<lit-text tag-html="h1" content="Bienvenido" size="3xl"></lit-text>

<!-- Subtítulo con h2 -->
<lit-text tag-html="h2" content="Sistema de diseño moderno" size="xl"></lit-text>

<!-- Párrafo con tamaño personalizado -->
<lit-text tag-html="p" content="Descripción del producto" size="l"></lit-text>

<!-- Texto pequeño -->
<lit-text tag-html="small" content="© 2025 Todos los derechos reservados" size="xs"></lit-text>
```

### Contenido HTML enriquecido

```html
<lit-text 
  content="Este texto tiene <strong>negritas</strong> y <em>cursivas</em>">
</lit-text>

<lit-text 
  content="Visita <a href='https://example.com'>nuestro sitio</a>">
</lit-text>
```

⚠️ **Nota de seguridad**: El componente usa `unsafeHTML` de Lit. Solo usa contenido HTML de fuentes confiables para evitar ataques XSS.

### Jerarquía de títulos

```html
<article>
  <lit-text tagHtml="h1" content="Artículo Principal"></lit-text>
  
  <lit-text tagHtml="h2" content="Sección 1"></lit-text>
  <lit-text content="Contenido de la sección 1..."></lit-text>
  
  <lit-text tagHtml="h3" content="Subsección 1.1"></lit-text>
  <lit-text content="Contenido de la subsección..."></lit-text>
  
  <lit-text tagHtml="h2" content="Sección 2"></lit-text>
  <lit-text content="Contenido de la sección 2..."></lit-text>
</article>
```

### Sistema de tipografía

```html
<!-- Hero title -->
<lit-text 
  tagHtml="h1" 
  content="Bienvenido a mi sitio"
  style="font-size: 3rem; font-weight: bold;">
</lit-text>

<!-- Subtitle -->
<lit-text 
  tagHtml="h2" 
  content="Creamos experiencias increíbles"
  style="color: #666; font-weight: 300;">
</lit-text>

<!-- Body text -->
<lit-text 
  content="Nuestro equipo trabaja para ofrecerte lo mejor."
  style="line-height: 1.6;">
</lit-text>
```

## 📋 API

### Propiedades

| Propiedad  | Tipo   | Default  | Descripción                                           |
|------------|--------|----------|-------------------------------------------------------|
| `tag-html` | string | `'p'`    | Etiqueta HTML a renderizar                            |
| `content`  | string | `''`     | Contenido de texto o HTML a mostrar                   |
| `size`     | string | `'m'`    | Tamaño predefinido: `3xs`, `2xs`, `xs`, `s`, `m`, `l`, `xl`, `2xl`, `3xl` |

### Etiquetas HTML soportadas

| Etiqueta   | Uso común                          |
|------------|------------------------------------|
| `h1`       | Título principal                   |
| `h2`       | Título de sección                  |
| `h3`       | Subtítulo                          |
| `h4`       | Título de subsección               |
| `h5`       | Título menor                       |
| `h6`       | Título más pequeño                 |
| `p`        | Párrafo (default)                  |
| `span`     | Texto en línea                     |
| `strong`   | Texto en negritas (importancia)    |
| `em`       | Texto en cursiva (énfasis)         |
| `small`    | Texto pequeño, notas al pie        |

### Tamaños disponibles

| Tamaño | Font Size | Line Height | Uso común                    |
|--------|-----------|-------------|------------------------------|
| `3xs`  | 10px      | 1.2         | Texto minúsculo, etiquetas   |
| `2xs`  | 12px      | 1.3         | Metadata, captions           |
| `xs`   | 14px      | 1.4         | Texto secundario             |
| `s`    | 16px      | 1.5         | Texto base                   |
| `m`    | 18px      | 1.5         | Contenido principal (default)|
| `l`    | 20px      | 1.5         | Subtítulos destacados        |
| `xl`   | 24px      | 1.4         | Títulos de sección           |
| `2xl`  | 32px      | 1.3         | Títulos grandes              |
| `3xl`  | 40px      | 1.2         | Hero titles, encabezados     |

## 🎨 Personalización con CSS

```css
/* Estilos globales */
lit-text {
  font-family: 'Inter', sans-serif;
  color: #333;
}

/* Por tipo de etiqueta */
lit-text[tagHtml="h1"] {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

lit-text[tagHtml="p"] {
  line-height: 1.6;
  margin-bottom: 1rem;
}

lit-text[tagHtml="small"] {
  font-size: 0.875rem;
  color: #666;
}

/* Clases personalizadas */
lit-text.hero-title {
  font-size: 4rem;
  background: linear-gradient(45deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

## 🔧 Uso con frameworks

> ⚠️ **Nota**: Los siguientes ejemplos son referencias teóricas y aún no han sido probados en proyectos reales. Si encuentras algún problema, por favor [reporta un issue](https://github.com/gaddiel-gj-dev/g-components/issues).

### React

```jsx
import '@g-components/lit-text';

function Article({ title, content }) {
  return (
    <article>
      <lit-text tagHtml="h1" content={title} />
      <lit-text content={content} />
    </article>
  );
}

// Uso
<Article 
  title="Mi Artículo" 
  content="Este es el contenido del artículo..." 
/>
```

### Vue

```vue
<template>
  <article>
    <lit-text tagHtml="h1" :content="title" />
    <lit-text :content="body" />
  </article>
</template>

<script>
import '@g-components/lit-text';

export default {
  data() {
    return {
      title: 'Mi Artículo',
      body: 'Contenido del artículo...'
    }
  }
}
</script>
```

### Angular

```typescript
// app.module.ts
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import '@g-components/lit-text';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
```

```html
<!-- component.html -->
<article>
  <lit-text tagHtml="h1" [attr.content]="title"></lit-text>
  <lit-text [attr.content]="body"></lit-text>
</article>
```

### Contenido desde CMS o API

```javascript
// Fetch desde API
fetch('/api/articles/1')
  .then(res => res.json())
  .then(data => {
    const textElement = document.querySelector('lit-text');
    textElement.tagHtml = 'h1';
    textElement.content = data.title;
  });
```

## ⚠️ Seguridad

El componente usa `unsafeHTML` de Lit para renderizar contenido HTML. **Solo usa contenido de fuentes confiables**.

### ✅ Seguro (contenido controlado)
```javascript
// Contenido estático
<lit-text content="Bienvenido <strong>Usuario</strong>" />

// Contenido sanitizado
import DOMPurify from 'dompurify';
const clean = DOMPurify.sanitize(userInput);
<lit-text content={clean} />
```

### ❌ Peligroso (contenido no confiable)
```javascript
// NUNCA hagas esto con input del usuario sin sanitizar
const userInput = getUserInput(); // Podría contener <script>alert('XSS')</script>
<lit-text content={userInput} /> // ❌ Peligroso!
```

## ♿ Accesibilidad

- ✅ Usa elementos HTML semánticos
- ✅ Respeta la jerarquía de encabezados (h1-h6)
- ✅ Compatible con lectores de pantalla
- ✅ Soporta atributos ARIA cuando es necesario

```html
<!-- Buena jerarquía -->
<lit-text tagHtml="h1" content="Título principal" />
<lit-text tagHtml="h2" content="Subtítulo" />
<lit-text tagHtml="h3" content="Sección" />
```

## 🌐 Compatibilidad

- ✅ Chrome/Edge 67+
- ✅ Firefox 63+
- ✅ Safari 13.1+
- ✅ Opera 54+

## 📄 Licencia

MIT

## 🔗 Enlaces

- [Repositorio GitHub](https://github.com/gaddiel-gj-dev/g-components)
- [Reportar issues](https://github.com/gaddiel-gj-dev/g-components/issues)
- [npm package](https://www.npmjs.com/package/@g-components/lit-text)
