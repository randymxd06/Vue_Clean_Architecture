<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue';
import SidebarHeader from '@/presentation/components/organisms/SidebarHeader.vue';
import NavigationSection from '@/presentation/components/organisms/NavigationSection.vue';
import SidebarFooter from '@/presentation/components/organisms/SidebarFooter.vue';

interface Props {
    isMobile: boolean;
    sidebarVisible: boolean;
}

defineProps<Props>();

const emit = defineEmits(['close-sidebar']);

// Navigation data
const navigationSections = [
  {
    title: 'Navegación Principal',
    items: [
      {
        label: 'Dashboard',
        icon: 'layout-dashboard', // Nombre de Lucide
        href: '#',
        isActive: true
      },
      {
        label: 'Proyectos',
        icon: 'folder-open', // Nombre de Lucide
        href: '#',
        badge: { count: 12, variant: 'blue' as const }
      },
      {
        label: 'Mensajes',
        icon: 'message-circle', // Nombre de Lucide
        href: '#',
        badge: { count: 3, variant: 'red' as const }
      },
      {
        label: 'Calendario',
        icon: 'calendar', // Nombre de Lucide
        href: '#'
      },
      {
        label: 'Documentos',
        icon: 'file-text', // Nombre de Lucide
        href: '#'
      },
      {
        label: 'Iconos',
        icon: 'palette', // Nombre de Lucide
        href: '/icons'
      },
      {
        label: 'Analíticas',
        icon: 'bar-chart-3', // Nombre de Lucide
        href: '#'
      },
      {
        label: 'Equipo',
        icon: 'users', // Nombre de Lucide
        href: '#'
      }
    ]
  }
];

// User data
const user = {
  name: 'Sofia Davis',
  email: 'sofia@example.com',
  avatarSrc: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face'
};

// Event handlers
const handleNavigationClick = (item: any, event: Event) => {
  console.log('Navigation clicked:', item.label);
};

const handleSettingsClick = (event: Event) => {
  console.log('Settings clicked');
};

const handleInboxClick = (event: Event) => {
  console.log('Inbox clicked');
};

const handleUserDropdownToggle = () => {
  console.log('User dropdown toggled');
};

const handleUserMenuClick = (action: string) => {
  console.log('User menu action:', action);
  // Aquí puedes manejar las diferentes acciones
  switch (action) {
    case 'profile':
      console.log('Navegando a perfil...');
      break;
    case 'settings':
      console.log('Navegando a configuración...');
      break;
    case 'logout':
      console.log('Cerrando sesión...');
      break;
  }
};
</script>

<template>
  <aside :class="[
    'w-64 flex flex-col bg-gray-100 transform transition-all duration-700 ease-in-out z-50',
    isMobile
      ? [
          'fixed top-0 left-0 h-full shadow-xl',
          sidebarVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0 pointer-events-none'
        ]
      : [
          'relative h-full',
          sidebarVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0 pointer-events-none'
        ]
  ]">
    <!-- Header -->
    <SidebarHeader 
      app-name="Mi Aplicación"
      version="Versión 2.0"
      logo-letter="M"
    />

    <!-- Navigation Sections -->
    <div class="flex-1 overflow-y-auto">
      <NavigationSection
        v-for="section in navigationSections"
        :key="section.title"
        :title="section.title"
        :items="section.items"
        @item-click="handleNavigationClick"
      />
    </div>

    <!-- Footer -->
    <SidebarFooter
      :user="user"
      :show-user-dropdown="true"
      @settings-click="handleSettingsClick"
      @inbox-click="handleInboxClick"
      @user-dropdown-toggle="handleUserDropdownToggle"
      @user-menu-click="handleUserMenuClick"
    />
  </aside>
</template>