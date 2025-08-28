# Atomic Design - Sistema de Componentes

Este proyecto implementa el patrón Atomic Design para organizar los componentes de Vue.js de manera escalable y mantenible.

## Estructura

```
src/presentation/components/
├── atoms/           # Elementos básicos no divisibles
├── molecules/       # Combinaciones simples de átomos
├── organisms/       # Componentes complejos de UI
├── templates/       # Estructuras de página sin contenido
└── layouts/         # Páginas completas con contenido
```

## Niveles de Atomic Design

### 🔬 Átomos (Atoms)
Los elementos más básicos de la interfaz que no se pueden descomponer más.

- **Logo.vue** - Componente de logo con tamaños variables
- **Badge.vue** - Insignias con diferentes variantes de color
- **Icon.vue** - Sistema de iconos usando **Lucide Icons** (1000+ iconos disponibles)
- **Avatar.vue** - Imágenes de perfil con tamaños configurables
- **Button.vue** - Botones reutilizables con múltiples variantes

#### Ejemplo de uso:
```vue
<Logo letter="M" size="md" />
<Badge count="5" variant="red" />
<Icon name="dashboard" :size="24" color="#3b82f6" />
<Avatar src="path/to/image.jpg" alt="User Name" size="sm" />
<Button variant="primary" @click="handleClick">Guardar</Button>
```

#### 🎨 Sistema de Iconos con Lucide
El componente Icon ahora utiliza **Lucide Icons**, una librería de iconos SVG de alta calidad:

```vue
<!-- Iconos disponibles -->
<Icon name="dashboard" />     <!-- LayoutDashboard -->
<Icon name="projects" />      <!-- FolderOpen -->
<Icon name="messages" />      <!-- MessageCircle -->
<Icon name="calendar" />      <!-- Calendar -->
<Icon name="documents" />     <!-- FileText -->
<Icon name="analytics" />     <!-- BarChart3 -->
<Icon name="team" />          <!-- Users -->
<Icon name="settings" />      <!-- Settings -->
<Icon name="inbox" />         <!-- Mail -->
<Icon name="user" />          <!-- User -->
<Icon name="logout" />        <!-- LogOut -->
<Icon name="menu" />          <!-- Menu -->
<Icon name="close" />         <!-- X -->
<Icon name="home" />          <!-- Home -->
<Icon name="search" />        <!-- Search -->
<Icon name="bell" />          <!-- Bell -->
<Icon name="plus" />          <!-- Plus -->

<!-- Con propiedades personalizadas -->
<Icon name="settings" :size="32" color="#ef4444" :stroke-width="1.5" />
```

**Ventajas de Lucide Icons:**
- ✅ **1000+ iconos** disponibles
- ✅ **Optimizado para performance** (SVG ligero)
- ✅ **TypeScript nativo** con autocompletado
- ✅ **Fácil de extender** - solo agregar nuevas importaciones
- ✅ **Consistencia visual** garantizada

**🔧 Cómo agregar nuevos iconos:**
1. Busca el icono en [lucide.dev](https://lucide.dev/)
2. Agrega la importación en `Icon.vue`:
```typescript
import { NewIcon } from 'lucide-vue-next';
```
3. Actualiza el tipo `IconName` en `types.ts`:
```typescript
export type IconName = '...' | 'newIcon';
```
4. Agrega al objeto `iconComponents`:
```typescript
const iconComponents = {
  // ... otros iconos
  newIcon: NewIcon
};
```

### 🧪 Moléculas (Molecules)
Combinaciones simples de átomos que forman una unidad funcional.

- **AppBrand.vue** - Combinación de logo y texto de marca
- **NavigationItem.vue** - Elemento de navegación con icono, texto y badge opcional
- **UserProfile.vue** - Perfil de usuario con avatar, nombre y email
- **SectionHeader.vue** - Cabecera de sección con título

#### Ejemplo de uso:
```vue
<AppBrand app-name="Mi App" version="v2.0" logo-letter="M" />
<NavigationItem 
  label="Dashboard" 
  icon="dashboard" 
  :is-active="true"
  :badge="{ count: 5, variant: 'blue' }"
/>
<UserProfile 
  name="John Doe" 
  email="john@example.com" 
  avatar-src="/avatar.jpg"
/>
```

### 🦠 Organismos (Organisms)
Componentes más complejos que combinan moléculas y átomos.

- **NavigationSection.vue** - Sección completa de navegación con título y elementos
- **SidebarHeader.vue** - Cabecera del sidebar con marca de la app
- **SidebarFooter.vue** - Pie del sidebar con configuración y perfil de usuario
- **Sidebar.vue** - Sidebar completo refactorizado

#### Ejemplo de uso:
```vue
<NavigationSection 
  title="Navegación Principal"
  :items="navigationItems"
  @item-click="handleNavClick"
/>
```

### 📄 Templates
Estructuras de página que definen el layout sin contenido específico.

- **SidebarTemplate.vue** - Template completo del sidebar que combina todos los organismos

#### Ejemplo de uso:
```vue
<SidebarTemplate
  :is-mobile="isMobile"
  :sidebar-visible="sidebarVisible"
  :navigation-sections="navSections"
  :user="userData"
  @navigation-click="handleNavigation"
/>
```

## Ventajas de esta estructura

### 🔄 Reutilización
Cada componente puede reutilizarse en diferentes contextos:
```vue
<!-- Usar el mismo Badge en diferentes lugares -->
<Badge count="3" variant="red" />    <!-- Para notificaciones -->
<Badge count="12" variant="blue" />  <!-- Para proyectos -->
<Badge count="New" variant="green" /> <!-- Para etiquetas -->
```

### 🧪 Testing
Los componentes atómicos son fáciles de testear de forma aislada:
```vue
// Test para Badge.vue
expect(wrapper.find('.bg-red-100').exists()).toBe(true)
expect(wrapper.text()).toBe('5')
```

### 🎨 Consistencia
El sistema garantiza consistencia visual en toda la aplicación:
```vue
<!-- Todos los iconos tendrán el mismo estilo -->
<Icon name="dashboard" />
<Icon name="settings" />
<Icon name="messages" />
```

### 📈 Escalabilidad
Fácil agregar nuevas funcionalidades:
```vue
<!-- Agregar nuevo tipo de icono -->
// En Icon.vue
const icons: Record<IconName, string> = {
  // ... iconos existentes
  newIcon: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'
}
```

### 🔧 Mantenimiento
Cambios centralizados:
```vue
<!-- Cambiar el estilo de todos los badges desde un solo lugar -->
// En Badge.vue - el cambio se propaga automáticamente
const variantClasses = {
  blue: 'bg-blue-200 text-blue-900', // Cambio aplicado globalmente
  red: 'bg-red-200 text-red-900',
  // ...
}
```

## Uso del sistema

### Importación individual
```vue
<script setup>
import { Badge, Icon, NavigationItem } from '@/presentation/components'
</script>
```

### Importación desde index
```vue
<script setup>
import { 
  Badge, 
  Icon, 
  NavigationItem, 
  SidebarTemplate 
} from '@/presentation/components'
</script>
```

## Convenciones

1. **Átomos**: No deben depender de otros componentes
2. **Moléculas**: Pueden usar átomos y emitir eventos simples
3. **Organismos**: Pueden usar moléculas/átomos y manejar lógica compleja
4. **Templates**: Definen estructura pero no lógica de negocio
5. **Layouts**: Implementación completa con datos reales

## TypeScript

Todos los componentes están tipados con TypeScript para mejor DX:

```typescript
// Tipos para iconos
type IconName = 'dashboard' | 'projects' | 'messages' | 'calendar' | ...

// Props tipadas
interface Props {
  name: IconName;
  size?: 'sm' | 'md' | 'lg';
}
```

Esta estructura permite un desarrollo más organizado, mantenible y escalable de la interfaz de usuario.
