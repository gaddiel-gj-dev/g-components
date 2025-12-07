# @g-components/lit-image

🖼️ Componente web para manejo de imágenes con tamaños predefinidos y configuración flexible usando Lit. Construido con Shadow DOM para encapsulación completa de estilos.

## ✨ Características

- 🎯 **Tamaños predefinidos**: 9 tamaños listos para usar (3xs a 3xl)
- 🎨 **Object-fit**: Control completo sobre cómo se ajusta la imagen
- ♿ **Accesible**: Soporte completo para texto alternativo
- 🔒 **Shadow DOM**: Estilos encapsulados sin conflictos
- 📦 **Ligero**: Solo 2.31 kB (gzip: 0.84 kB)
- ⚡ **Performance**: Lit como peer dependency, sin duplicación de código
- 🌐 **Web Standards**: Basado en Custom Elements v1

## 📦 Instalación

```bash
npm install @g-components/lit-image
```

```bash
pnpm add @g-components/lit-image
```

```bash
yarn add @g-components/lit-image
```

## 🚀 Uso básico

### Importar el componente

```javascript
import '@g-components/lit-image';
```

### Ejemplo simple

```html
<lit-image 
  src="https://example.com/image.jpg" 
  alt="Descripción de la imagen">
</lit-image>
```

Esto renderiza una imagen con tamaño `m` (192x192px) por defecto y `object-fit: cover`.

## 📖 Ejemplos

### Diferentes tamaños

```html
<!-- Avatar pequeño -->
<lit-image 
  src="/avatar.jpg" 
  alt="Usuario"
  size="xs">
</lit-image>

<!-- Imagen de producto -->
<lit-image 
  src="/product.jpg" 
  alt="Producto"
  size="l">
</lit-image>

<!-- Hero image -->
<lit-image 
  src="/hero.jpg" 
  alt="Banner principal"
  size="3xl">
</lit-image>
```

### Control de object-fit

```html
<!-- Cover: ideal para thumbnails -->
<lit-image 
  src="/thumbnail.jpg"
  size="m"
  fit="cover">
</lit-image>

<!-- Contain: muestra la imagen completa -->
<lit-image 
  src="/diagram.png"
  size="l"
  fit="contain">
</lit-image>

<!-- Fill: estira la imagen -->
<lit-image 
  src="/banner.jpg"
  size="xl"
  fit="fill">
</lit-image>
```

### Galería de imágenes

```html
<div style="display: flex; gap: 1rem;">
  <lit-image src="/photo1.jpg" size="m" alt="Foto 1"></lit-image>
  <lit-image src="/photo2.jpg" size="m" alt="Foto 2"></lit-image>
  <lit-image src="/photo3.jpg" size="m" alt="Foto 3"></lit-image>
</div>
```

### Lista de usuarios con avatares

```html
<ul>
  <li style="display: flex; align-items: center; gap: 0.5rem;">
    <lit-image src="/user1.jpg" size="2xs" fit="cover" alt="User 1"></lit-image>
    <span>Juan Pérez</span>
  </li>
  <li style="display: flex; align-items: center; gap: 0.5rem;">
    <lit-image src="/user2.jpg" size="2xs" fit="cover" alt="User 2"></lit-image>
    <span>María García</span>
  </li>
</ul>
```

## 📋 API

### Propiedades

| Propiedad | Tipo   | Default   | Descripción                                           |
|-----------|--------|-----------|-------------------------------------------------------|
| `src`     | string | `''`      | URL de la imagen a mostrar                            |
| `alt`     | string | `''`      | Texto alternativo para accesibilidad y SEO            |
| `size`    | string | `'m'`     | Tamaño predefinido (ver tabla de tamaños)             |
| `fit`     | string | `'cover'` | Comportamiento de object-fit CSS                      |

### Tamaños disponibles

| Tamaño | Dimensiones | Uso común                    |
|--------|-------------|------------------------------|
| `3xs`  | 48×48px     | Favicon, iconos pequeños     |
| `2xs`  | 64×64px     | Mini avatares, badges        |
| `xs`   | 96×96px     | Avatares pequeños            |
| `s`    | 128×128px   | Avatares medianos, thumbs    |
| `m`    | 192×192px   | Imágenes de tarjetas         |
| `l`    | 256×256px   | Imágenes destacadas          |
| `xl`   | 320×320px   | Galerías, portfolios         |
| `2xl`  | 384×384px   | Imágenes grandes             |
| `3xl`  | 512×512px   | Heroes, banners              |

### Valores de fit (object-fit)

| Valor        | Comportamiento                                                      |
|--------------|---------------------------------------------------------------------|
| `cover`      | *(default)* Cubre el contenedor, puede recortar la imagen          |
| `contain`    | Ajusta la imagen completa dentro del contenedor                     |
| `fill`       | Estira la imagen para llenar el contenedor (puede distorsionar)     |
| `none`       | Mantiene el tamaño original de la imagen                            |
| `scale-down` | Usa el menor tamaño entre `none` y `contain`                        |

## 🎨 Personalización con CSS

Puedes aplicar estilos adicionales al componente usando CSS custom properties o estilos directos:

```css
lit-image {
  border-radius: 50%; /* Imagen circular */
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  border: 2px solid #e0e0e0;
}

lit-image:hover {
  transform: scale(1.05);
  transition: transform 0.2s;
}
```

## 🔧 Uso con frameworks

> ⚠️ **Nota**: Los siguientes ejemplos son referencias teóricas y aún no han sido probados en proyectos reales. Si encuentras algún problema, por favor [reporta un issue](https://github.com/gaddiel-gj-dev/g-components/issues).

### React

```jsx
import '@g-components/lit-image';

function UserProfile({ user }) {
  return (
    <div>
      <lit-image 
        src={user.avatar} 
        alt={user.name}
        size="l"
        fit="cover"
      />
      <h2>{user.name}</h2>
    </div>
  );
}
```

### Vue

```vue
<template>
  <div>
    <lit-image 
      :src="user.avatar" 
      :alt="user.name"
      size="l"
      fit="cover"
    />
    <h2>{{ user.name }}</h2>
  </div>
</template>

<script>
import '@g-components/lit-image';

export default {
  data() {
    return {
      user: {
        avatar: '/avatar.jpg',
        name: 'Usuario'
      }
    }
  }
}
</script>
```

### Angular

```typescript
// app.module.ts
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import '@g-components/lit-image';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
```

```html
<!-- component.html -->
<lit-image 
  [attr.src]="user.avatar" 
  [attr.alt]="user.name"
  size="l"
  fit="cover">
</lit-image>
```

## ♿ Accesibilidad

El componente está diseñado con accesibilidad en mente:

- ✅ Siempre incluye el atributo `alt` para lectores de pantalla
- ✅ Usa HTML semántico (`<img>`)
- ✅ Soporta navegación por teclado estándar

```html
<!-- Buena práctica -->
<lit-image 
  src="/product.jpg" 
  alt="Zapatillas deportivas Nike Air Max, color azul">
</lit-image>

<!-- Evitar -->
<lit-image src="/product.jpg"></lit-image>
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
- [npm package](https://www.npmjs.com/package/@g-components/lit-image)

