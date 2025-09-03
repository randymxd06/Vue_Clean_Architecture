import type { Meta, StoryObj } from "@storybook/vue3"
import UserProfile from "@/presentation/components/molecules/UserProfile.vue"

/**=================================
 * USER PROFILE COMPONENT STORIES
====================================*/
const meta: Meta<typeof UserProfile> = {
    title: "Molecules/UserProfile",
    component: UserProfile,
    argTypes: {
        name: { control: "text" },
        email: { control: "text" },
        avatarSrc: { control: "text" },
        showDropdown: { control: "boolean" },
        menuItems: { control: "object" },
    },
}

/**==========================================
 * USER PROFILE COMPONENT META INFORMATION
=============================================*/
export default meta

/**====================================
 * USER PROFILE COMPONENT STORY TYPE
=======================================*/
type Story = StoryObj<typeof UserProfile>

/**=============================
 * DEFAULT USER PROFILE STORY
================================*/
export const Default: Story = {
    args: {
        name: "Juan Pérez",
        email: "juan.perez@example.com",
        avatarSrc:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        showDropdown: true,
        menuItems: [
            { label: "Mi Perfil", icon: "user", action: "profile" },
            { label: "Configuración", icon: "settings", action: "settings" },
            { label: "Cerrar Sesión", icon: "log-out", action: "logout" },
        ],
    },
}

/**======================================
 * USER PROFILE WITHOUT DROPDOWN STORY
=========================================*/
export const WithoutDropdown: Story = {
    args: {
        name: "María García",
        email: "maria.garcia@example.com",
        avatarSrc:
            "https://images.unsplash.com/photo-1494790108755-2616b612c3c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        showDropdown: false,
    },
}

/**===========================
 * ADMIN USER PROFILE STORY
==============================*/
export const AdminUser: Story = {
    args: {
        name: "Admin Sistema",
        email: "admin@company.com",
        avatarSrc:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        showDropdown: true,
        menuItems: [
            { label: "Mi Perfil", icon: "user", action: "profile" },
            { label: "Panel Admin", icon: "shield", action: "admin" },
            { label: "Configuración", icon: "settings", action: "settings" },
            { label: "Usuarios", icon: "users", action: "users" },
            { label: "Reportes", icon: "bar-chart", action: "reports" },
            { label: "Cerrar Sesión", icon: "log-out", action: "logout" },
        ],
    },
}

/**===========================
 * GUEST USER PROFILE STORY
==============================*/
export const GuestUser: Story = {
    args: {
        name: "Usuario Invitado",
        email: "guest@example.com",
        avatarSrc:
            "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        showDropdown: true,
        menuItems: [
            { label: "Mi Perfil", icon: "user", action: "profile" },
            { label: "Ayuda", icon: "help-circle", action: "help" },
            { label: "Cerrar Sesión", icon: "log-out", action: "logout" },
        ],
    },
}

/**===============================
 * LONG NAME USER PROFILE STORY
==================================*/
export const LongName: Story = {
    args: {
        name: "María Fernanda González Rodríguez",
        email: "maria.fernanda.gonzalez.rodriguez@empresa.com",
        avatarSrc:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        showDropdown: true,
    },
}

/**===============================
 * NO AVATAR USER PROFILE STORY
==================================*/
export const NoAvatar: Story = {
    args: {
        name: "Usuario Sin Avatar",
        email: "usuario@example.com",
        avatarSrc: "",
        showDropdown: true,
    },
}

/**==================================
 * MINIMAL MENU USER PROFILE STORY
=====================================*/
export const MinimalMenu: Story = {
    args: {
        name: "Usuario Básico",
        email: "basico@example.com",
        avatarSrc:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        showDropdown: true,
        menuItems: [{ label: "Cerrar Sesión", icon: "log-out", action: "logout" }],
    },
}

/**========================================
 * IN SIDEBAR CONTEXT USER PROFILE STORY
===========================================*/
export const InSidebar: Story = {
    args: {
        name: "Ana Torres",
        email: "ana.torres@company.com",
        avatarSrc:
            "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        showDropdown: true,
    },
    render: args => ({
        components: { UserProfile },
        setup() {
            return { args }
        },
        template: `
      <div class="w-64 h-96 bg-card border border-border rounded-lg p-4 flex flex-col">
        <!-- Simulación de sidebar -->
        <div class="flex-1">
          <h3 class="text-sm font-medium text-text-secondary mb-2">NAVEGACIÓN</h3>
          <div class="space-y-1">
            <div class="p-2 text-sm text-text-primary hover:bg-surface-100 rounded">Dashboard</div>
            <div class="p-2 text-sm text-text-primary hover:bg-surface-100 rounded">Productos</div>
            <div class="p-2 text-sm text-text-primary hover:bg-surface-100 rounded">Configuración</div>
          </div>
        </div>
        
        <!-- User Profile en la parte inferior -->
        <div class="mt-auto pt-4 border-t border-border">
          <UserProfile v-bind="args" />
        </div>
      </div>
    `,
    }),
}
