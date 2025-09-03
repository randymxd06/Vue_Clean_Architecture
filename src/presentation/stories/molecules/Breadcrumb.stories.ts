import type { Meta, StoryObj } from "@storybook/vue3"
import Breadcrumb from "@/presentation/components/molecules/Breadcrumb.vue"

/**===============================
 * BREADCRUMB COMPONENT STORIES
==================================*/
const meta: Meta<typeof Breadcrumb> = {
    title: "Molecules/Breadcrumb",
    component: Breadcrumb,
    argTypes: {
        items: { control: "object" },
    },
}

/**========================================
 * BREADCRUMB COMPONENT META INFORMATION
===========================================*/
export default meta

/**==================================
 * BREADCRUMB COMPONENT STORY TYPE
=====================================*/
type Story = StoryObj<typeof Breadcrumb>

/**===========================
 * DEFAULT BREADCRUMB STORY
==============================*/
export const Default: Story = {
    args: {
        items: [
            { label: "Home", active: false },
            { label: "Products", active: false },
            { label: "Details", active: true },
        ],
    },
}

/**==========================
 * SIMPLE BREADCRUMB STORY
=============================*/
export const Simple: Story = {
    args: {
        items: [
            { label: "Home", active: false },
            { label: "Dashboard", active: true },
        ],
    },
}

/**========================
 * LONG BREADCRUMB STORY
===========================*/
export const Long: Story = {
    args: {
        items: [
            { label: "Home", active: false },
            { label: "Administration", active: false },
            { label: "Users", active: false },
            { label: "Management", active: false },
            { label: "Profiles", active: false },
            { label: "Permissions", active: true },
        ],
    },
}

/**==========================
 * SINGLE BREADCRUMB STORY
=============================*/
export const Single: Story = {
    args: {
        items: [{ label: "Dashboard", active: true }],
    },
}

/**==================================
 * ADMINISTRATIVE BREADCRUMB STORY
=====================================*/
export const Administrative: Story = {
    args: {
        items: [
            { label: "Control Panel", active: false },
            { label: "Settings", active: false },
            { label: "System", active: true },
        ],
    },
}
