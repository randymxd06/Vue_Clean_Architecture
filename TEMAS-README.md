# Sistema de Temas Personalizados para Vue 3 + Tailwind CSS 4

Este sistema permite crear múltiples temas con paletas de colores personalizadas, compatible con Tailwind CSS 4.

## 🎨 Características

- ✅ **Múltiples temas**: Soporte para 12 temas predefinidos
- ✅ **Modo claro/oscuro**: Cada tema tiene variaciones clara y oscura
- ✅ **Tailwind CSS 4**: Compatible con la última versión
- ✅ **Variables CSS**: Sistema basado en custom properties
- ✅ **TypeScript**: Completamente tipado
- ✅ **Vue 3 + Pinia**: Store reactivo para el estado de temas
- ✅ **Persistencia**: Los temas se guardan en localStorage

## 🚀 Temas Disponibles

| Tema | Modo Claro | Modo Oscuro |
|------|------------|-------------|
| **Azul** | `light` | `dark` |
| **Esmeralda** | `emerald-light` | `emerald-dark` |
| **Púrpura** | `purple-light` | `purple-dark` |
| **Rosa** | `rose-light` | `rose-dark` |
| **Océano** | `ocean-light` | `ocean-dark` |
| **Atardecer** | `sunset-light` | `sunset-dark` |

## 📁 Estructura de Archivos

```
src/
├── presentation/
│   ├── assets/css/
│   │   ├── main.css          # Imports principales
│   │   └── themes.css        # Variables y utilidades de temas
│   ├── components/molecules/
│   │   └── ThemeSelector.vue # Selector de temas
│   ├── stores/
│   │   └── themeStore.ts     # Store de Pinia para temas
│   ├── types/
│   │   └── theme.ts          # Tipos TypeScript
│   └── modules/themes/pages/
│       └── ThemeDemoView.vue # Página de demostración
```

## 🛠️ Instalación y Configuración

### 1. Archivos CSS

Los archivos CSS ya están configurados con:
- Variables CSS para todos los temas
- Utilidades personalizadas de Tailwind
- Soporte completo para Tailwind CSS 4

### 2. Store de Pinia

```typescript
import { useThemeStore } from '@/presentation/stores/themeStore'

const themeStore = useThemeStore()

// Cambiar tema
themeStore.setTheme('emerald-light')

// Toggle entre claro/oscuro
themeStore.toggleMode()

// Obtener tema actual
const currentTheme = themeStore.currentTheme
```

### 3. Componente ThemeSelector

El componente `ThemeSelector` proporciona una interfaz completa para:
- Cambio rápido entre modo claro/oscuro
- Selección visual de temas
- Preview de paletas de colores
- Navegación por categorías

```vue
<template>
  <ThemeSelector />
</template>

<script setup>
import { ThemeSelector } from '@/presentation/components'
</script>
```

## 🎯 Uso de Clases CSS

### Colores Primarios
```html
<!-- Fondos -->
<div class="bg-primary-500">Fondo primario</div>
<div class="bg-primary-100">Fondo primario claro</div>

<!-- Texto -->
<p class="text-primary-600">Texto primario</p>

<!-- Bordes -->
<div class="border border-primary-300">Con borde primario</div>
```

### Colores de Aplicación
```html
<!-- Fondos especializados -->
<div class="bg-app">Fondo de aplicación</div>
<div class="bg-card">Fondo de tarjeta</div>
<div class="bg-sidebar">Fondo de sidebar</div>

<!-- Texto semántico -->
<p class="text-text-primary">Texto principal</p>
<p class="text-text-secondary">Texto secundario</p>
<p class="text-text-muted">Texto silenciado</p>
```

### Colores de Acento y Superficie
```html
<!-- Acentos -->
<button class="bg-accent-500 text-white">Botón de acento</button>

<!-- Superficies -->
<div class="bg-surface-100">Superficie clara</div>
<div class="hover:bg-surface-200">Con hover</div>
```

## 🔧 Personalización

### Crear un Nuevo Tema

1. **Agregar variables CSS** en `themes.css`:
```css
/* Tema Custom */
.theme-custom {
  --color-primary-500: 255 0 128; /* Rosa fucsia */
  --color-accent-500: 0 255 128;  /* Verde lima */
  /* ... más variables */
}
```

2. **Registrar el tema** en `theme.ts`:
```typescript
{
  id: 'custom-light',
  name: 'Custom Claro',
  description: 'Mi tema personalizado',
  mode: 'light',
  colors: {
    primary: '#FF0080',
    secondary: '#64748B',
    accent: '#00FF80',
  },
  preview: {
    background: '#FFFFFF',
    surface: '#F8FAFC',
    text: '#111827',
  },
}
```

### Modificar Componentes Existentes

Reemplaza las clases de Tailwind estándar:
```vue
<!-- Antes -->
<div class="bg-blue-500 text-white">

<!-- Después -->
<div class="bg-primary-500 text-white">
```

## 🌟 Ejemplos de Uso

### Botón Adaptativo
```vue
<template>
  <button class="px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors">
    Botón Primario
  </button>
</template>
```

### Tarjeta con Tema
```vue
<template>
  <div class="bg-card border border-border rounded-lg p-6 shadow-sm">
    <h3 class="text-text-primary font-semibold mb-2">Título</h3>
    <p class="text-text-secondary">Descripción del contenido</p>
    <button class="mt-4 bg-accent-500 hover:bg-accent-600 text-white px-4 py-2 rounded">
      Acción
    </button>
  </div>
</template>
```

### Formulario Temático
```vue
<template>
  <form class="space-y-4">
    <div>
      <label class="block text-text-primary font-medium mb-2">
        Nombre
      </label>
      <input 
        type="text"
        class="w-full px-3 py-2 border border-border rounded-lg bg-card text-text-primary focus:ring-2 focus:ring-primary-500 focus:border-transparent"
      />
    </div>
    <button class="bg-primary-500 hover:bg-primary-600 text-white px-6 py-2 rounded-lg">
      Enviar
    </button>
  </form>
</template>
```

## 🎮 Página de Demostración

Visita `/themes` para ver todos los temas en acción. La página incluye:
- Paletas de colores interactivas
- Componentes de ejemplo (botones, formularios, navegación)
- Información del tema actual
- Demos de estados hover/focus

## 🔄 Migración desde el Sistema Anterior

1. **Reemplaza las importaciones**:
```typescript
// Antes
const { theme, toggleTheme } = useThemeStore()

// Después  
const { currentTheme, setTheme, toggleMode } = useThemeStore()
```

2. **Actualiza las clases CSS**:
```vue
<!-- Antes -->
<div class="bg-gray-100 dark:bg-gray-800">

<!-- Después -->
<div class="bg-sidebar">
```

3. **Usa el nuevo selector**:
```vue
<!-- Antes -->
<button @click="toggleTheme">Toggle</button>

<!-- Después -->
<ThemeSelector />
```

## 📱 Acceso Programático

```typescript
import { useThemeStore } from '@/presentation/stores/themeStore'

const themeStore = useThemeStore()

// Obtener todos los temas disponibles
const allThemes = themeStore.availableThemes

// Filtrar por modo
const lightThemes = themeStore.lightThemes
const darkThemes = themeStore.darkThemes

// Información del tema actual
console.log(`Tema actual: ${themeStore.currentTheme.name}`)
console.log(`Modo: ${themeStore.currentTheme.mode}`)
console.log(`Colores: ${JSON.stringify(themeStore.currentTheme.colors)}`)
```

## 🔍 Debugging

Para verificar que los temas funcionan correctamente:

1. **Inspecciona las variables CSS** en DevTools:
```css
:root {
  --color-primary-500: 59 130 246; /* Debería cambiar con el tema */
}
```

2. **Verifica las clases aplicadas**:
```html
<html class="dark theme-emerald">
```

3. **Comprueba el localStorage**:
```javascript
localStorage.getItem('themeId') // Debería devolver el ID del tema actual
```

¡El sistema está listo para usar! 🎉
