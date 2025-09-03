import type { Meta, StoryObj } from "@storybook/vue3"
import TopbarActions from "@/presentation/components/molecules/TopbarActions.vue"
import UserProfile from "@/presentation/components/molecules/UserProfile.vue"

/**===================================
 * TOPBAR ACTIONS COMPONENT STORIES
======================================*/
const meta: Meta<typeof TopbarActions> = {
    title: "Molecules/TopbarActions",
    component: TopbarActions,
    argTypes: {
        showThemeToggle: { control: "boolean" },
        showNotifications: { control: "boolean" },
        notificationCount: { control: "number" },
    },
}

/**============================================
 * TOPBAR ACTIONS COMPONENT META INFORMATION
===============================================*/
export default meta

/**======================================
 * TOPBAR ACTIONS COMPONENT STORY TYPE
=========================================*/
type Story = StoryObj<typeof TopbarActions>

/**===============================
 * DEFAULT TOPBAR ACTIONS STORY
==================================*/
export const Default: Story = {
    args: {
        showThemeToggle: true,
        showNotifications: true,
        notificationCount: 12,
    },
    render: args => ({
        components: { TopbarActions, UserProfile },
        setup() {
            return { args }
        },
        template: `
      <div class="bg-background min-h-[200px]">
        <!-- Simulación de Topbar completa -->
        <header class="bg-card border-b border-border px-6 py-4">
          <div class="flex justify-between items-center">
            <div class="flex items-center space-x-4">
              <div class="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
                <span class="text-white font-bold text-sm">A</span>
              </div>
              <h1 class="text-lg font-semibold text-text-primary">Mi Aplicación</h1>
            </div>
            <div class="flex items-center space-x-4">
              <TopbarActions v-bind="args" />
              <UserProfile
                name="Juan Pérez"
                email="juan@example.com"
                avatarSrc="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                :showDropdown="false"
              />
            </div>
          </div>
        </header>
        
        <!-- Contenido -->
        <main class="p-6">
          <h2 class="text-xl font-bold text-text-primary mb-2">Panel Principal</h2>
          <p class="text-text-secondary">
            Las acciones de la topbar incluyen toggle de tema y notificaciones.
          </p>
        </main>
      </div>
    `,
    }),
}
