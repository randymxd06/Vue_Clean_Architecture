import type { Meta, StoryObj } from "@storybook/vue3"
import SectionHeader from "@/presentation/components/molecules/SectionHeader.vue"

/**===================================
 * SECTION HEADER COMPONENT STORIES
======================================*/
const meta: Meta<typeof SectionHeader> = {
    title: "Molecules/SectionHeader",
    component: SectionHeader,
    argTypes: {
        title: { control: "text" },
    },
}

/**============================================
 * SECTION HEADER COMPONENT META INFORMATION
===============================================*/
export default meta

/**======================================
 * SECTION HEADER COMPONENT STORY TYPE
=========================================*/
type Story = StoryObj<typeof SectionHeader>

/**===============================
 * DEFAULT SECTION HEADER STORY
==================================*/
export const Default: Story = {
    args: {
        title: "PRINCIPAL NAVIGATION",
    },
}

/**================================
 * FEATURES SECTION HEADER STORY
===================================*/
export const Features: Story = {
    args: {
        title: "FEATURES",
    },
}

/**================================
 * SETTINGS SECTION HEADER STORY
===================================*/
export const Settings: Story = {
    args: {
        title: "SETTINGS",
    },
}

/**=============================
 * TOOLS SECTION HEADER STORY
================================*/
export const Tools: Story = {
    args: {
        title: "TOOLS",
    },
}

/**=============================
 * ADMIN SECTION HEADER STORY
================================*/
export const Admin: Story = {
    args: {
        title: "ADMINISTRATION",
    },
}

/**============================
 * HELP SECTION HEADER STORY
===============================*/
export const Help: Story = {
    args: {
        title: "HELP AND SUPPORT",
    },
}

/**===============================
 * REPORTS SECTION HEADER STORY
==================================*/
export const Reports: Story = {
    args: {
        title: "REPORTS AND ANALYSIS",
    },
}

/**===================================
 * INTEGRATION SECTION HEADER STORY
======================================*/
export const Integration: Story = {
    args: {
        title: "INTEGRATIONS",
    },
}
