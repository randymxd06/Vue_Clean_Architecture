import type { Meta, StoryObj } from "@storybook/vue3"
import SidebarToggle from "@/presentation/components/molecules/SidebarToggle.vue"

/**===================================
 * SIDEBAR TOGGLE COMPONENT STORIES
======================================*/
const meta: Meta<typeof SidebarToggle> = {
    title: "Molecules/SidebarToggle",
    component: SidebarToggle,
    argTypes: {
        isMobile: { control: "boolean" },
        sidebarVisible: { control: "boolean" },
    },
}

/**============================================
 * SIDEBAR TOGGLE COMPONENT META INFORMATION
===============================================*/
export default meta

/**======================================
 * SIDEBAR TOGGLE COMPONENT STORY TYPE
=========================================*/
type Story = StoryObj<typeof SidebarToggle>

/**===============================
 * DEFAULT SIDEBAR TOGGLE STORY
==================================*/
export const Default: Story = {
    args: {
        isMobile: false,
        sidebarVisible: false,
    },
}
