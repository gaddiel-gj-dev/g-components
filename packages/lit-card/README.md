# @g-components/lit-card

🃏 Componente de tarjeta flexible construido con Lit. Soporta diferentes layouts, posiciones de imagen y slots personalizables.

## ✨ Características

- 📐 **Layouts flexibles**: vertical y horizontal
- 🖼️ **Posiciones de imagen**: top, bottom, left, right, none
- 🎨 **Slots personalizables**: image, content, footer
- 📏 **3 tamaños de padding**: s, m, l
- 💫 **4 niveles de elevación**: none, low, medium, high
- 🔒 **Shadow DOM**: Estilos encapsulados
- 🌐 **Web Standards**: Basado en Custom Elements v1

## 📦 Instalación

```bash
npm install @g-components/lit-card
```

```bash
pnpm add @g-components/lit-card
```

## 🚀 Uso básico

### Importar el componente

```javascript
import '@g-components/lit-card';
```

### Ejemplo simple

```html
<lit-card>
  <h3>Título de la Tarjeta</h3>
  <p>Contenido de la tarjeta</p>
</lit-card>
```

## 📖 Ejemplos

### Con imagen arriba

```html
<lit-card layout="vertical" image-position="top">
  <img slot="image" src="/photo.jpg" alt="Imagen">
  <h3>Título</h3>
  <p>Descripción de la tarjeta</p>
  <div slot="footer">
    <button>Ver más</button>
  </div>
</lit-card>
```

### Con imagen abajo

```html
<lit-card layout="vertical" image-position="bottom">
  <h3>Título</h3>
  <p>Descripción de la tarjeta</p>
  <img slot="image" src="/photo.jpg" alt="Imagen">
</lit-card>
```

### Layout horizontal - Imagen izquierda

```html
<lit-card layout="horizontal" image-position="left">
  <img slot="image" src="/photo.jpg" alt="Imagen">
  <h3>Artículo de Blog</h3>
  <p>Contenido del artículo con imagen lateral.</p>
  <div slot="footer">
    <button>Leer más</button>
  </div>
</lit-card>
```

### Layout horizontal - Imagen derecha

```html
<lit-card layout="horizontal" image-position="right">
  <h3>Artículo</h3>
  <p>La imagen aparece a la derecha.</p>
  <img slot="image" src="/photo.jpg" alt="Imagen">
</lit-card>
```

### Sin imagen

```html
<lit-card image-position="none">
  <h3>Tarjeta de Texto</h3>
  <p>Esta tarjeta no tiene imagen.</p>
</lit-card>
```

### Sin footer

```html
<lit-card show-footer="false">
  <img slot="image" src="/photo.jpg" alt="Imagen">
  <h3>Sin Acciones</h3>
  <p>Esta tarjeta no muestra el área de footer.</p>
</lit-card>
```

### Con componentes de @g-components

```html
<lit-card elevation="high">
  <lit-image slot="image" src="/photo.jpg" size="l" fit="cover"></lit-image>
  <lit-text tag-html="h3" content="Título" size="xl"></lit-text>
  <lit-text tag-html="p" content="Descripción" size="m"></lit-text>
  <div slot="footer">
    <lit-button text="Aceptar" variant="primary"></lit-button>
    <lit-button text="Cancelar" variant="secondary"></lit-button>
  </div>
</lit-card>
```

## 📋 API

### Propiedades

| Propiedad        | Tipo    | Default    | Descripción                                           |
|------------------|---------|------------|-------------------------------------------------------|
| `layout`         | string  | `'vertical'` | Layout de la tarjeta: `vertical`, `horizontal`      |
| `image-position` | string  | `'top'`    | Posición de la imagen: `top`, `bottom`, `left`, `right`, `none` |
| `show-footer`    | boolean | `true`     | Mostrar u ocultar el área de footer                   |
| `padding`        | string  | `'m'`      | Tamaño del padding: `s`, `m`, `l`                     |
| `elevation`      | string  | `'medium'` | Nivel de sombra: `none`, `low`, `medium`, `high`      |

### Slots

| Slot     | Descripción                                              |
|----------|----------------------------------------------------------|
| `image`  | Contenedor para la imagen (usa `slot="image"`)           |
| (default)| Contenido principal de la tarjeta                        |
| `footer` | Área de acciones/botones (usa `slot="footer"`)           |

### Layouts

#### Vertical (default)
```html
<!-- Imagen arriba del contenido -->
<lit-card layout="vertical" image-position="top">
  <img slot="image" src="...">
  <h3>Contenido</h3>
</lit-card>

<!-- Imagen abajo del contenido -->
<lit-card layout="vertical" image-position="bottom">
  <h3>Contenido</h3>
  <img slot="image" src="...">
</lit-card>
```

#### Horizontal
```html
<!-- Imagen a la izquierda -->
<lit-card layout="horizontal" image-position="left">
  <img slot="image" src="...">
  <h3>Contenido</h3>
</lit-card>

<!-- Imagen a la derecha -->
<lit-card layout="horizontal" image-position="right">
  <h3>Contenido</h3>
  <img slot="image" src="...">
</lit-card>
```

### Elevaciones

| Valor    | Efecto                                    |
|----------|-------------------------------------------|
| `none`   | Sin sombra, solo borde                    |
| `low`    | Sombra suave (`0 2px 4px`)                |
| `medium` | Sombra media (`0 4px 8px`) - Default      |
| `high`   | Sombra pronunciada (`0 8px 16px`)         |

```html
<lit-card elevation="none">Sin sombra</lit-card>
<lit-card elevation="low">Sombra suave</lit-card>
<lit-card elevation="medium">Sombra media</lit-card>
<lit-card elevation="high">Sombra alta</lit-card>
```

### Paddings

| Valor | Tamaño     |
|-------|------------|
| `s`   | 0.75rem    |
| `m`   | 1.25rem (default) |
| `l`   | 1.75rem    |

## 🎨 Casos de uso

### Tarjeta de Producto

```html
<lit-card elevation="medium">
  <lit-image slot="image" src="/product.jpg" size="l" fit="cover"></lit-image>
  <lit-text tag-html="h3" content="Producto Premium" size="xl"></lit-text>
  <lit-text content="$99.99" size="l" style="color: #667eea; font-weight: bold;"></lit-text>
  <lit-text tag-html="p" content="Descripción del producto" size="s"></lit-text>
  <div slot="footer">
    <lit-button text="Agregar al carrito" variant="primary"></lit-button>
  </div>
</lit-card>
```

### Tarjeta de Usuario

```html
<lit-card padding="l">
  <div style="display: flex; gap: 1rem; align-items: center;">
    <lit-image src="/avatar.jpg" size="s" fit="cover" style="border-radius: 50%;"></lit-image>
    <div>
      <lit-text tag-html="h3" content="Usuario" size="l"></lit-text>
      <lit-text content="@username" size="s"></lit-text>
    </div>
  </div>
  <lit-text content="Biografía del usuario..." size="m"></lit-text>
  <div slot="footer">
    <lit-button text="Seguir" variant="primary"></lit-button>
    <lit-button text="Mensaje" variant="secondary"></lit-button>
  </div>
</lit-card>
```

### Artículo de Blog (Horizontal)

```html
<lit-card layout="horizontal" image-position="left" elevation="low">
  <lit-image slot="image" src="/article.jpg" size="l" fit="cover"></lit-image>
  <lit-text tag-html="h3" content="Título del Artículo" size="xl"></lit-text>
  <lit-text tag-html="small" content="12 de diciembre, 2025" size="xs"></lit-text>
  <lit-text content="Resumen del artículo..." size="m"></lit-text>
  <div slot="footer">
    <lit-button text="Leer más" variant="secondary"></lit-button>
  </div>
</lit-card>
```

## 🔧 Personalización con CSS

Puedes aplicar estilos personalizados:

```css
lit-card {
  width: 100%;
  max-width: 400px;
}

/* Hover effect */
lit-card:hover {
  transform: translateY(-4px);
  transition: transform 0.2s;
}

/* Custom border radius */
lit-card {
  border-radius: 16px;
}
```

## ♿ Accesibilidad

- ✅ Usa HTML semántico
- ✅ Compatible con lectores de pantalla
- ✅ Soporta navegación por teclado
- ✅ Imágenes deben incluir `alt` text

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
- [npm package](https://www.npmjs.com/package/@g-components/lit-card)
