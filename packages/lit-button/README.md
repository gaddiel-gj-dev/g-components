# @g-components/lit-button

🔘 Componente web de botón altamente personalizable construido con Lit. Incluye variantes de estilo, estados y eventos personalizados.

## ✨ Características

- 🎨 **3 variantes**: primary, secondary, danger
- ♿ **Accesible**: Soporte completo para estados disabled y eventos de teclado
- 🎯 **Eventos personalizados**: Emite `button-click` con detalles del evento
- 🔒 **Shadow DOM**: Estilos encapsulados sin conflictos
- 📦 **Ligero**: Peer dependency de Lit, sin duplicación de código
- 🌐 **Web Standards**: Basado en Custom Elements v1

## 📦 Instalación

```bash
npm install @g-components/lit-button
```

```bash
pnpm add @g-components/lit-button
```

```bash
yarn add @g-components/lit-button
```

## 🚀 Uso básico

### Importar el componente

```javascript
import '@g-components/lit-button';
```

### Ejemplo simple

```html
<lit-button text="Click me"></lit-button>
```

## 📖 Ejemplos

### Diferentes variantes

```html
<!-- Botón primario (default) -->
<lit-button text="Guardar" variant="primary"></lit-button>

<!-- Botón secundario -->
<lit-button text="Cancelar" variant="secondary"></lit-button>

<!-- Botón de peligro -->
<lit-button text="Eliminar" variant="danger"></lit-button>
```

### Botón deshabilitado

```html
<lit-button text="No disponible" disabled></lit-button>
```

### Escuchar eventos

```html
<lit-button text="Enviar" id="submit-btn"></lit-button>

<script>
  const btn = document.querySelector('#submit-btn');
  
  btn.addEventListener('button-click', (e) => {
    console.log('Botón clickeado!', e.detail);
    // e.detail contiene información del evento original
  });
</script>
```

### Formularios

```html
<form id="myForm">
  <input type="text" name="username" placeholder="Usuario">
  <lit-button text="Iniciar sesión" variant="primary"></lit-button>
</form>

<script>
  document.querySelector('lit-button').addEventListener('button-click', () => {
    document.querySelector('#myForm').submit();
  });
</script>
```

### Grupo de botones

```html
<div style="display: flex; gap: 0.5rem;">
  <lit-button text="Aceptar" variant="primary"></lit-button>
  <lit-button text="Cancelar" variant="secondary"></lit-button>
  <lit-button text="Eliminar" variant="danger"></lit-button>
</div>
```

## 📋 API

### Propiedades

| Propiedad  | Tipo    | Default     | Descripción                                    |
|------------|---------|-------------|------------------------------------------------|
| `text`     | string  | `'Button'`  | Texto que se muestra en el botón               |
| `variant`  | string  | `'primary'` | Estilo del botón: `primary`, `secondary`, `danger` |
| `disabled` | boolean | `false`     | Deshabilita el botón y previene interacciones  |

### Eventos

| Evento         | Detalle                           | Descripción                     |
|----------------|-----------------------------------|---------------------------------|
| `button-click` | `{ originalEvent: MouseEvent }`   | Se dispara cuando se hace clic  |

### Ejemplo de uso de eventos

```javascript
const button = document.querySelector('lit-button');

button.addEventListener('button-click', (event) => {
  console.log('Timestamp:', event.detail.timestamp);
  console.log('Evento original:', event.detail.originalEvent);
  
  // Prevenir comportamiento por defecto
  event.detail.originalEvent.preventDefault();
});
```

## 🎨 Variantes de estilo

### Primary
Botón principal de acción. Usa color de marca para llamar la atención.
```html
<lit-button text="Guardar cambios" variant="primary"></lit-button>
```

### Secondary
Botón secundario para acciones alternativas.
```html
<lit-button text="Cancelar" variant="secondary"></lit-button>
```

### Danger
Botón para acciones destructivas o peligrosas.
```html
<lit-button text="Eliminar cuenta" variant="danger"></lit-button>
```

## 🔧 Personalización con CSS

Puedes aplicar estilos adicionales:

```css
lit-button {
  width: 100%; /* Botón de ancho completo */
  --button-font-size: 18px; /* Si usas custom properties */
}

/* Ajustar espaciado */
lit-button + lit-button {
  margin-left: 1rem;
}

/* Responsive */
@media (max-width: 768px) {
  lit-button {
    width: 100%;
    display: block;
    margin-bottom: 0.5rem;
  }
}
```

## 🔧 Uso con frameworks

> ⚠️ **Nota**: Los siguientes ejemplos son referencias teóricas y aún no han sido probados en proyectos reales. Si encuentras algún problema, por favor [reporta un issue](https://github.com/gaddiel-gj-dev/g-components/issues).

### React

```jsx
import '@g-components/lit-button';
import { useRef } from 'react';

function MyComponent() {
  const buttonRef = useRef(null);
  
  useEffect(() => {
    const button = buttonRef.current;
    
    const handleClick = (e) => {
      console.log('Clicked!', e.detail);
    };
    
    button.addEventListener('button-click', handleClick);
    
    return () => {
      button.removeEventListener('button-click', handleClick);
    };
  }, []);
  
  return (
    <lit-button 
      ref={buttonRef}
      text="Click me" 
      variant="primary"
    />
  );
}
```

### Vue

```vue
<template>
  <lit-button 
    text="Enviar" 
    variant="primary"
    @button-click="handleClick"
  />
</template>

<script>
import '@g-components/lit-button';

export default {
  methods: {
    handleClick(event) {
      console.log('Clicked!', event.detail);
    }
  }
}
</script>
```

### Angular

```typescript
// app.module.ts
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import '@g-components/lit-button';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
```

```typescript
// component.ts
export class MyComponent {
  handleClick(event: CustomEvent) {
    console.log('Clicked!', event.detail);
  }
}
```

```html
<!-- component.html -->
<lit-button 
  text="Enviar" 
  variant="primary"
  (button-click)="handleClick($event)">
</lit-button>
```

## ♿ Accesibilidad

El componente está diseñado con accesibilidad en mente:

- ✅ Usa elemento semántico `<button>`
- ✅ Soporte para atributo `disabled`
- ✅ Navegación por teclado (Enter, Space)
- ✅ Estados visuales claros (hover, focus, active, disabled)
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
- [npm package](https://www.npmjs.com/package/@g-components/lit-button)
