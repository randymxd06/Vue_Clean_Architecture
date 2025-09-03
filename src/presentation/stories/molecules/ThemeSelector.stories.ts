import type { Meta, StoryObj } from "@storybook/vue3"
import ThemeSelector from "@/presentation/components/molecules/ThemeSelector.vue"

/**===================================
 * THEME SELECTOR COMPONENT STORIES
======================================*/
const meta: Meta<typeof ThemeSelector> = {
    title: "Molecules/ThemeSelector",
    component: ThemeSelector,
    parameters: {
        layout: "centered",
        docs: {
            description: {
                component:
                    "Selector de temas que permite cambiar entre diferentes esquemas de colores y modos (claro/oscuro).",
            },
        },
    },
}

/**============================================
 * THEME SELECTOR COMPONENT META INFORMATION
===============================================*/
export default meta

/**======================================
 * THEME SELECTOR COMPONENT STORY TYPE
=========================================*/
type Story = StoryObj<typeof ThemeSelector>

/**===============================
 * DEFAULT THEME SELECTOR STORY
==================================*/
export const Default: Story = {
    render: () => ({
        components: { ThemeSelector },
        template: `
      <div class="p-8 bg-background min-h-[400px]">
        <div class="flex justify-end">
          <ThemeSelector />
        </div>
        <div class="mt-8 p-6 bg-card border border-border rounded-lg">
          <h3 class="text-lg font-semibold text-text-primary mb-2">Preview</h3>
          <p class="text-text-secondary mb-4">
            This is an example of how the content looks with the selected theme.
          </p>
          <div class="flex space-x-4">
            <div class="w-8 h-8 bg-primary-500 rounded"></div>
            <div class="w-8 h-8 bg-secondary-500 rounded"></div>
            <div class="w-8 h-8 bg-accent-500 rounded"></div>
          </div>
        </div>
      </div>
    `,
    }),
}
