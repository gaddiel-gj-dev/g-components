#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askLanguage(callback) {
  rl.question('¿Usar TypeScript o JavaScript? (ts/js) [js]: ', (answer) => {
    const lang = answer.toLowerCase().trim() || 'js';
    if (lang !== 'ts' && lang !== 'js') {
      console.log('⚠️  Opción inválida. Usando JavaScript por defecto.');
      callback('js');
    } else {
      callback(lang);
    }
  });
}

rl.question('Nombre del componente (ej: button, card, input): ', (componentName) => {
  // Validar que el nombre no esté vacío
  if (!componentName || componentName.trim() === '') {
    console.error(`❌ El nombre del componente no puede estar vacío!`);
    rl.close();
    process.exit(1);
  }

  componentName = componentName.trim();

  askLanguage((lang) => {
    const packageName = `lit-${componentName}`;
    const packagePath = path.join(__dirname, '..', 'packages', packageName);
    
    if (fs.existsSync(packagePath)) {
      console.error(`❌ El paquete ${packageName} ya existe!`);
      rl.close();
      process.exit(1);
    }

    // Crear estructura de directorios
    fs.mkdirSync(path.join(packagePath, 'src'), { recursive: true });

    const fileExt = lang === 'ts' ? 'ts' : 'js';
    const useTypeScript = lang === 'ts';

    // package.json
    const packageJson = {
      name: `@g-components/${packageName}`,
      version: "0.0.1",
      type: "module",
      main: "./dist/index.js",
      module: "./dist/index.js",
      ...(useTypeScript && { types: "./dist/index.d.ts" }),
      exports: {
        ".": {
          import: "./dist/index.js",
          ...(useTypeScript && { types: "./dist/index.d.ts" })
        }
      },
      files: ["dist"],
      scripts: {
        dev: "vite",
        build: "vite build",
        preview: "vite preview",
        prepublishOnly: "pnpm run build"
      },
      dependencies: {
        lit: "^3.0.0"
      },
      devDependencies: {
        vite: "^5.0.0",
        ...(useTypeScript && { typescript: "^5.0.0" })
      },
      publishConfig: {
        access: "public"
      }
    };

    // vite.config (js o ts según elección)
    const viteConfig = `import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.${fileExt}'),
      name: 'Lit${componentName.charAt(0).toUpperCase() + componentName.slice(1)}',
      fileName: 'index',
      formats: ['es']
    },
    rollupOptions: {
      external: [
        'lit',
        'lit/decorators.js',
        'lit/directives/class-map.js',
        'lit/directives/unsafe-html.js'
      ]
    }
  }
})
`;

    // tsconfig.json (solo si usa TypeScript)
    const tsConfig = useTypeScript ? {
      compilerOptions: {
        target: "ES2020",
        module: "ESNext",
        lib: ["ES2020", "DOM"],
        moduleResolution: "node",
        experimentalDecorators: true,
        useDefineForClassFields: false,
        declaration: true,
        declarationDir: "./dist",
        emitDeclarationOnly: true,
        skipLibCheck: true,
        strict: true
      },
      include: ["src/**/*"]
    } : null;

    // Nombre de la clase en PascalCase con prefijo Lit
    const className = 'Lit' + componentName.split('-').map(part => 
      part.charAt(0).toUpperCase() + part.slice(1)
    ).join('');

    // src/index (js o ts)
    const indexCode = `export { ${className} } from './${className}.${fileExt}';
`;

    // src/component (TypeScript)
    const componentTS = `import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('lit-${componentName}')
export class ${className} extends LitElement {
  static styles = css\`
    :host {
      display: block;
      padding: 1rem;
    }

    .container {
      font-family: system-ui, -apple-system, sans-serif;
    }
  \`;

  @property({ type: String })
  text = 'Hello from ${componentName}';

  render() {
    return html\`
      <div class="container">
        <p>\${this.text}</p>
      </div>
    \`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lit-${componentName}': ${className};
  }
}
`;

    // src/component (JavaScript)
    const componentJS = `import { LitElement, html, css } from 'lit';

export class ${className} extends LitElement {
  static properties = {
    text: { type: String }
  };

  static styles = css\`
    :host {
      display: block;
      padding: 1rem;
    }

    .container {
      font-family: system-ui, -apple-system, sans-serif;
    }
  \`;

  constructor() {
    super();
    this.text = 'Hello from ${componentName}';
  }

  render() {
    return html\`
      <div class="container">
        <p>\${this.text}</p>
      </div>
    \`;
  }
}

customElements.define('lit-${componentName}', ${className});
`;

    const componentCode = useTypeScript ? componentTS : componentJS;

    // index.html - Página de demostración del componente
    const indexHTML = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Demo - lit-${componentName}</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      padding: 2rem;
      background: #f5f5f5;
      line-height: 1.6;
    }

    .demo-container {
      max-width: 1200px;
      margin: 0 auto;
      background: white;
      border-radius: 8px;
      padding: 2rem;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }

    h1 {
      color: #333;
      margin-bottom: 0.5rem;
      font-size: 2rem;
    }

    .subtitle {
      color: #666;
      margin-bottom: 2rem;
      font-size: 1.1rem;
    }

    .section {
      margin-bottom: 3rem;
    }

    .section h2 {
      color: #444;
      margin-bottom: 1rem;
      padding-bottom: 0.5rem;
      border-bottom: 2px solid #e0e0e0;
    }

    .demo-item {
      margin-bottom: 2rem;
      padding: 1.5rem;
      background: #fafafa;
      border-radius: 4px;
      border-left: 4px solid #4CAF50;
    }

    .demo-item h3 {
      color: #555;
      margin-bottom: 1rem;
      font-size: 1.1rem;
    }

    .demo-example {
      margin: 1rem 0;
      padding: 1rem;
      background: white;
      border: 1px solid #e0e0e0;
      border-radius: 4px;
    }

    .code-block {
      background: #2d2d2d;
      color: #f8f8f2;
      padding: 1rem;
      border-radius: 4px;
      overflow-x: auto;
      font-family: 'Courier New', monospace;
      font-size: 0.9rem;
      margin-top: 0.5rem;
    }

    .code-block code {
      color: #f8f8f2;
    }

    .property-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 1rem;
    }

    .property-table th,
    .property-table td {
      padding: 0.75rem;
      text-align: left;
      border-bottom: 1px solid #e0e0e0;
    }

    .property-table th {
      background: #f5f5f5;
      font-weight: 600;
      color: #333;
    }

    .property-table code {
      background: #f0f0f0;
      padding: 0.2rem 0.4rem;
      border-radius: 3px;
      font-size: 0.9em;
    }
  </style>
</head>
<body>
  <div class="demo-container">
    <h1>🎨 lit-${componentName}</h1>
    <p class="subtitle">Demostración y ejemplos de uso del componente</p>

    <!-- Ejemplo básico -->
    <section class="section">
      <h2>Ejemplo Básico</h2>
      <div class="demo-item">
        <h3>Uso por defecto</h3>
        <div class="demo-example">
          <lit-${componentName}></lit-${componentName}>
        </div>
        <div class="code-block">
          <code>&lt;lit-${componentName}&gt;&lt;/lit-${componentName}&gt;</code>
        </div>
      </div>

      <div class="demo-item">
        <h3>Con texto personalizado</h3>
        <div class="demo-example">
          <lit-${componentName} text="Texto personalizado"></lit-${componentName}>
        </div>
        <div class="code-block">
          <code>&lt;lit-${componentName} text="Texto personalizado"&gt;&lt;/lit-${componentName}&gt;</code>
        </div>
      </div>
    </section>

    <!-- Variaciones -->
    <section class="section">
      <h2>Variaciones</h2>
      <div class="demo-item">
        <h3>Ejemplo 1</h3>
        <div class="demo-example">
          <lit-${componentName} text="Ejemplo variación 1"></lit-${componentName}>
        </div>
      </div>

      <div class="demo-item">
        <h3>Ejemplo 2</h3>
        <div class="demo-example">
          <lit-${componentName} text="Ejemplo variación 2"></lit-${componentName}>
        </div>
      </div>
    </section>

    <!-- Propiedades -->
    <section class="section">
      <h2>Propiedades / Atributos</h2>
      <table class="property-table">
        <thead>
          <tr>
            <th>Propiedad</th>
            <th>Tipo</th>
            <th>Por defecto</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>text</code></td>
            <td><code>String</code></td>
            <td><code>"Hello from ${componentName}"</code></td>
            <td>Texto a mostrar en el componente</td>
          </tr>
          <!-- Agrega más propiedades aquí -->
        </tbody>
      </table>
    </section>

    <!-- Instalación -->
    <section class="section">
      <h2>Instalación</h2>
      <div class="code-block">
        <code>npm install @g-components/lit-${componentName}</code>
      </div>
      
      <h3 style="margin-top: 1.5rem;">Uso en tu proyecto</h3>
      <div class="code-block">
        <code>import '@g-components/lit-${componentName}';</code>
      </div>
    </section>
  </div>

  <!-- Importar el componente en modo desarrollo -->
  <script type="module">
    // En desarrollo, importa desde src
    import './src/${className}.${fileExt}';

    // En producción, usarías:
    // import '@g-components/lit-${componentName}';
  </script>
</body>
</html>
`;

    // README.md
    const readme = `# @g-components/${packageName}

Componente Lit: ${componentName}

## Instalación

\`\`\`bash
npm install @g-components/${packageName}
\`\`\`

## Uso

\`\`\`${useTypeScript ? 'typescript' : 'javascript'}
import '@g-components/${packageName}';
\`\`\`

\`\`\`html
<lit-${componentName} text="Hello World"></lit-${componentName}>
\`\`\`
`;

    // Escribir archivos
    fs.writeFileSync(path.join(packagePath, 'package.json'), JSON.stringify(packageJson, null, 2));
    fs.writeFileSync(path.join(packagePath, `vite.config.${fileExt}`), viteConfig);
    if (useTypeScript) {
      fs.writeFileSync(path.join(packagePath, 'tsconfig.json'), JSON.stringify(tsConfig, null, 2));
    }
    fs.writeFileSync(path.join(packagePath, 'src', `index.${fileExt}`), indexCode);
    fs.writeFileSync(path.join(packagePath, 'src', `${className}.${fileExt}`), componentCode);
    fs.writeFileSync(path.join(packagePath, 'index.html'), indexHTML);
    fs.writeFileSync(path.join(packagePath, 'README.md'), readme);

    console.log(`✅ Componente ${packageName} creado exitosamente con ${useTypeScript ? 'TypeScript' : 'JavaScript'}!`);
    console.log(`📁 Ubicación: packages/${packageName}`);
    console.log(`\n📝 Próximos pasos:`);
    console.log(`   1. pnpm install (desde la raíz para instalar dependencias)`);
    console.log(`   2. cd packages/${packageName}`);
    console.log(`   3. pnpm run dev`);
    console.log(`   4. Abre index.html en tu navegador para ver el componente`);
    
    rl.close();
  });
});
