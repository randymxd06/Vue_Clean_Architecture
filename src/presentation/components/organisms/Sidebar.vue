<script lang="ts" setup>
import { defineEmits, defineProps } from "vue"
import { useRouter } from "vue-router"
import NavigationSection from "@/presentation/components/organisms/NavigationSection.vue"
import SidebarFooter from "@/presentation/components/organisms/SidebarFooter.vue"
import SidebarHeader from "@/presentation/components/organisms/SidebarHeader.vue"

/**================
 * SIDEBAR PROPS
===================*/
interface Props {
    isMobile: boolean
    sidebarVisible: boolean
}

/**===============
 * DEFINE PROPS
==================*/
defineProps<Props>()

/**========
 * EMITS
===========*/
const emit = defineEmits(["close-sidebar"])

/**==============
 * COMPOSABLES
=================*/
const router = useRouter()

/**==================
 * NAVIGATION DATA
=====================*/
const navigationSections = [
    {
        title: "Navegación Principal",
        items: [
            {
                label: "Dashboard",
                icon: "layout-dashboard",
                href: "#",
                isActive: true,
            },
            {
                label: "Proyectos",
                icon: "folder-open",
                href: "#",
                badge: { count: 12, variant: "blue" as const },
            },
            {
                label: "Mensajes",
                icon: "message-circle",
                href: "#",
                badge: { count: 3, variant: "red" as const },
            },
            {
                label: "Calendario",
                icon: "calendar",
                href: "#",
            },
            {
                label: "Documentos",
                icon: "file-text",
                href: "#",
            },
            {
                label: "Analíticas",
                icon: "bar-chart-3",
                href: "#",
            },
            {
                label: "Equipo",
                icon: "users",
                href: "#",
            },
        ],
    },
]

/**============
 * USER DATA
===============*/
const user = {
    name: "Sofia Davis",
    email: "sofia@example.com",
    avatarSrc:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
}

/**================================
 * HANDLE NAVIGATION CLICK EVENT
 * @param {any} item 
 * @param {Event} event
 * @returns {void}
===================================*/
const handleNavigationClick = (item: any, event: Event): void => {
    console.log("Navigation clicked:", item.label)
}

/**==============================
 * HANDLE SETTINGS CLICK EVENT
 * @param {Event} event
 * @returns {void}
===================================*/
const handleSettingsClick = (event: Event): void => {
    console.log("Settings clicked")
}

/**===========================
 * HANDLE INBOX CLICK EVENT
 * @param {Event} event
 * @returns {void}
==============================*/
const handleInboxClick = (event: Event): void => {
    console.log("Inbox clicked")
}

/**====================================
 * HANDLE USER DROPDOWN TOGGLE EVENT
 * @returns {void}
=======================================*/
const handleUserDropdownToggle = (): void => {
    console.log("User dropdown toggled")
}

/**===============================
 * HANDLE USER MENU CLICK EVENT
 * @param {string} action 
 * @returns {void}
==================================*/
const handleUserMenuClick = (action: string): void => {
    console.log("User menu action:", action)
    switch (action) {
        case "profile":
            console.log("Navegando a perfil...")
            break
        case "settings":
            console.log("Navegando a configuración...")
            break
        case "logout":
            console.log("Cerrando sesión...")
            // Navigate to login page
            router.push({ name: "login" })
            break
    }
}
</script>

<template>

  <!--==================
    SIDEBAR COMPONENT
  ======================-->
  <aside :class="[
    'w-64 flex flex-col bg-gray-100 dark:bg-gray-800 transform transition-all duration-700 ease-in-out z-50',
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

    <!--=======
      HEADER
    ===========-->
    <SidebarHeader app-name="Mi Aplicación" version="Versión 2.0" logo-letter="M" />

    <!--====================
      NAVIGATION SECTIONS
    ========================-->
    <div class="flex-1 overflow-y-auto">
      <NavigationSection v-for="section in navigationSections" :key="section.title" :title="section.title"
        :items="section.items" @item-click="handleNavigationClick" />
    </div>

    <!--=======
      FOOTER
    ===========-->
    <SidebarFooter :user="user" :show-user-dropdown="true" @settings-click="handleSettingsClick"
      @inbox-click="handleInboxClick" @user-dropdown-toggle="handleUserDropdownToggle"
      @user-menu-click="handleUserMenuClick" />

  </aside>

</template>