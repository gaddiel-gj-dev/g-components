# @g-comnponents/lit-components

Monorepo de componentes web construidos con Lit.

## 📦 Paquetes

Este monorepo contiene los siguientes componentes:

- [`@g-comnponents/lit-text`](./packages/lit-text) - Componente de texto

## 🚀 Inicio rápido

### Requisitos previos

- Node.js 18+
- pnpm 8+

### Instalación

```bash
# Instalar pnpm globalmente si no lo tienes
npm install -g pnpm

# Instalar dependencias
pnpm install
```

## 🛠️ Desarrollo

### Crear un nuevo componente

```bash
pnpm run create:component
```

El script te preguntará:
1. Nombre del componente (ej: `button`, `card`, `input`)
2. Lenguaje a usar: TypeScript o JavaScript

Esto generará automáticamente la estructura completa del paquete.

### Comandos disponibles

```bash
# Desarrollo - modo watch en todos los paquetes
pnpm dev

# Build - compilar todos los paquetes
pnpm build

# Publicar todos los paquetes
pnpm publish:all

# Trabajar en un paquete específico
pnpm --filter @g-comnponents/lit-button dev
pnpm --filter @g-comnponents/lit-button build
```

## 📝 Estructura del proyecto

```
g-components/
├── packages/
│   ├── lit-text/          # Componente de texto
│   ├── lit-button/        # Componente de botón
│   └── ...                # Más componentes
├── scripts/
│   └── create-component.js # Script para generar componentes
├── package.json
├── pnpm-workspace.yaml
└── README.md
```

## 📤 Publicación

### Primera vez

```bash
# Login en npm
npm login
```

### Publicar un paquete específico

```bash
pnpm --filter @g-comnponents/lit-[component] publish
```

### Publicar todos los paquetes

```bash
pnpm publish:all
```

## 🔧 Configuración de paquetes

Cada paquete incluye:

- ✅ Vite para bundling
- ✅ TypeScript o JavaScript (a elección)
- ✅ Lit 3.x
- ✅ Configuración de publicación a npm
- ✅ Hot reload en desarrollo

## 📚 Uso de los componentes

### Instalación

```bash
npm install @g-comnponents/lit-button
```

### Uso en HTML/JS (Ejemplo con lit-text)

```javascript
import '@g-comnponents/lit-text';
```

```html
<lit-text tag-html="h1" content="Hello World"></lit-text>
```

### Uso en frameworks

**React:**
```
Aún no se ha probado en react
```

**Vue:**
```
Aún no se ha probado en vue
```

## 🤝 Contribuir

1. Crea un nuevo componente: `pnpm run create:component`
2. Desarrolla el componente: `cd packages/lit-[nombre] && pnpm dev`
3. Build y prueba: `pnpm build`
4. Publica: `pnpm publish`

## 📄 Licencia

MIT
