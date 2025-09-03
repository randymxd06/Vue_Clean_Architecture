import type { Meta, StoryObj } from "@storybook/vue3"
import AppBrand from "@/presentation/components/molecules/AppBrand.vue"

/**==============================
 * APP BRAND COMPONENT STORIES
=================================*/
const meta: Meta<typeof AppBrand> = {
    title: "Molecules/AppBrand",
    component: AppBrand,
    argTypes: {
        appName: { control: "text" },
        version: { control: "text" },
        logoLetter: { control: "text" },
    },
}

/**=======================================
 * APP BRAND COMPONENT META INFORMATION
==========================================*/
export default meta

/**=================================
 * APP BRAND COMPONENT STORY TYPE
====================================*/
type Story = StoryObj<typeof AppBrand>

/**==========================
 * DEFAULT APP BRAND STORY
=============================*/
export const Default: Story = {
    args: {
        appName: "My Application",
        version: "Version 2.0",
        logoLetter: "M",
    },
}

/**=========================
 * CUSTOM APP BRAND STORY
============================*/
export const CustomApp: Story = {
    args: {
        appName: "Vue Clean Architecture",
        version: "v1.0.0",
        logoLetter: "V",
    },
}

/**=============================
 * ENTERPRISE APP BRAND STORY
================================*/
export const Enterprise: Story = {
    args: {
        appName: "Enterprise Dashboard",
        version: "Production v3.2.1",
        logoLetter: "E",
    },
}

/**=============================
 * SHORT NAME APP BRAND STORY
================================*/
export const ShortName: Story = {
    args: {
        appName: "App",
        version: "Beta",
        logoLetter: "A",
    },
}

/**============================
 * LONG NAME APP BRAND STORY
===============================*/
export const LongName: Story = {
    args: {
        appName: "Integrated Business Management System",
        version: "Stable Version 4.5.2",
        logoLetter: "S",
    },
}
