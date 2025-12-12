# @g-components/ui

🎨 Librería completa de componentes UI construida con Lit. Instala todos los componentes de @g-components en un solo paquete.

## ✨ Componentes incluidos

- **lit-text** - Componente de texto con etiquetas HTML dinámicas y tamaños predefinidos
- **lit-button** - Botón personalizable con variantes (primary, secondary, danger)
- **lit-image** - Componente de imagen con tamaños predefinidos y object-fit
- **lit-card** - Tarjeta para contenido estructurado

## 📦 Instalación

```bash
npm install @g-components/ui
```

```bash
pnpm add @g-components/ui
```

```bash
yarn add @g-components/ui
```

## 🚀 Uso

### Importar todos los componentes

```javascript
import '@g-components/ui';
```

Esto registra automáticamente todos los componentes y los hace disponibles en tu HTML.

### Uso en HTML

```html
<!-- Texto con tamaños -->
<lit-text content="Título principal" size="3xl" tag-html="h1"></lit-text>

<!-- Botones -->
<lit-button text="Guardar" variant="primary"></lit-button>
<lit-button text="Cancelar" variant="secondary"></lit-button>

<!-- Imágenes -->
<lit-image src="/photo.jpg" alt="Foto" size="l" fit="cover"></lit-image>

<!-- Tarjetas -->
<lit-card>
  <h2>Card Title</h2>
  <p>Card content goes here</p>
</lit-card>
```

### Importar componentes individuales (tree-shaking)

Si solo necesitas algunos componentes específicos:

```javascript
import '@g-components/lit-text';
import '@g-components/lit-button';
// Solo importa los que necesites
```

### Uso programático

```javascript
import { LitText, LitButton, LitImage, LitCard } from '@g-components/ui';

// Crear componentes programáticamente
const button = document.createElement('lit-button');
button.text = 'Click me';
button.variant = 'primary';
document.body.appendChild(button);
```

## 📖 Componentes

### lit-text

Renderiza texto con etiquetas HTML dinámicas y tamaños predefinidos.

```html
<lit-text tag-html="h1" content="Título" size="3xl"></lit-text>
<lit-text tag-html="p" content="Párrafo" size="m"></lit-text>
```

**Propiedades:**
- `tag-html`: h1, h2, h3, h4, h5, h6, p, span, strong, em, small
- `content`: Contenido de texto
- `size`: 3xs, 2xs, xs, s, m, l, xl, 2xl, 3xl

[Ver documentación completa →](https://github.com/gaddiel-gj-dev/g-components/tree/master/packages/lit-text)

### lit-button

Botón personalizable con variantes y eventos.

```html
<lit-button text="Guardar" variant="primary"></lit-button>
<lit-button text="Eliminar" variant="danger" disabled></lit-button>
```

**Propiedades:**
- `text`: Texto del botón
- `variant`: primary, secondary, danger
- `disabled`: boolean

**Eventos:**
- `button-click`: Se dispara al hacer clic

[Ver documentación completa →](https://github.com/gaddiel-gj-dev/g-components/tree/master/packages/lit-button)

### lit-image

Componente de imagen con tamaños predefinidos y control de object-fit.

```html
<lit-image src="/photo.jpg" alt="Foto" size="l" fit="cover"></lit-image>
```

**Propiedades:**
- `src`: URL de la imagen
- `alt`: Texto alternativo
- `size`: 3xs, 2xs, xs, s, m, l, xl, 2xl, 3xl
- `fit`: cover, contain, fill, none, scale-down

[Ver documentación completa →](https://github.com/gaddiel-gj-dev/g-components/tree/master/packages/lit-image)

### lit-card

Tarjeta para contenido estructurado.

```html
<lit-card>
  <h2>Card Title</h2>
  <p>Card content</p>
</lit-card>
```

[Ver documentación completa →](https://github.com/gaddiel-gj-dev/g-components/tree/master/packages/lit-card)

## 🔧 Uso con frameworks

### React

```jsx
import '@g-components/ui';

function App() {
  return (
    <div>
      <lit-text tag-html="h1" content="Hello" size="3xl" />
      <lit-button text="Click me" variant="primary" />
      <lit-image src="/photo.jpg" size="l" fit="cover" />
    </div>
  );
}
```

### Vue

```vue
<template>
  <div>
    <lit-text tag-html="h1" content="Hello" size="3xl" />
    <lit-button text="Click me" variant="primary" />
    <lit-image src="/photo.jpg" size="l" fit="cover" />
  </div>
</template>

<script>
import '@g-components/ui';

export default {
  name: 'App'
}
</script>
```

### Angular

```typescript
// app.module.ts
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import '@g-components/ui';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
```

```html
<!-- component.html -->
<lit-text tag-html="h1" content="Hello" size="3xl"></lit-text>
<lit-button text="Click me" variant="primary"></lit-button>
```

> ⚠️ **Nota**: Los ejemplos de frameworks son referencias teóricas y aún no han sido probados en proyectos reales. Si encuentras algún problema, por favor [reporta un issue](https://github.com/gaddiel-gj-dev/g-components/issues).

## 📦 Tamaño del paquete

Este es un meta-paquete que agrupa todos los componentes. El tamaño total depende de qué componentes uses:

- **lit-text**: ~1.94 kB
- **lit-button**: ~2.5 kB
- **lit-image**: ~2.31 kB
- **lit-card**: ~1.5 kB

Total: **~8 kB** (gzip) si usas todos los componentes.

Lit es una peer dependency, por lo que no se duplicará si ya lo tienes en tu proyecto.

## ♿ Accesibilidad

Todos los componentes están diseñados con accesibilidad en mente:

- ✅ HTML semántico
- ✅ Soporte para lectores de pantalla
- ✅ Navegación por teclado
- ✅ Contraste de colores WCAG AA

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
- [npm package](https://www.npmjs.com/package/@g-components/ui)
- [Documentación de componentes individuales](https://github.com/gaddiel-gj-dev/g-components/tree/master/packages)

## 💡 Contribuir

¿Encontraste un bug o tienes una idea? [Abre un issue](https://github.com/gaddiel-gj-dev/g-components/issues) o envía un pull request.
