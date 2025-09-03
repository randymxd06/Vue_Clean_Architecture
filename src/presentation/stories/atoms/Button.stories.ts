import type { Meta, StoryObj } from "@storybook/vue3"
import Button from "@/presentation/components/atoms/Button.vue"

/**===========================
 * BUTTON COMPONENT STORIES
==============================*/
const meta: Meta<typeof Button> = {
    title: "Atoms/Button",
    component: Button,
    argTypes: {
        disabled: { control: "boolean" },
        variant: {
            control: "select",
            options: ["primary", "secondary", "outline", "ghost", "danger"],
        },
        size: { control: "select", options: ["sm", "md", "lg"] },
        fullWidth: { control: "boolean" },
        type: { control: "select", options: ["button", "submit", "reset"] },
    },
}

/**====================================
 * BUTTON COMPONENT META INFORMATION
=======================================*/
export default meta

/**==============================
 * BUTTON COMPONENT STORY TYPE
=================================*/
type Story = StoryObj<typeof Button>

/**=======================
 * DEFAULT BUTTON STORY
==========================*/
export const Default: Story = {
    args: {
        variant: "primary",
        size: "md",
        disabled: false,
        fullWidth: false,
        type: "button",
        default: "Button",
    },
}

/**========================
 * DISABLED BUTTON STORY
===========================*/
export const Disabled: Story = {
    args: {
        variant: "primary",
        size: "md",
        disabled: true,
        default: "Disabled",
    },
}

/**========================
 * VARIANTS BUTTON STORY
===========================*/
export const Variants: Story = {
    render: args => ({
        components: { Button },
        setup() {
            return { args }
        },
        template: `
      <div style="display: flex; gap: 1rem;">
        <Button v-bind="{ ...args, variant: 'primary' }">Primary</Button>
        <Button v-bind="{ ...args, variant: 'secondary' }">Secondary</Button>
        <Button v-bind="{ ...args, variant: 'outline' }">Outline</Button>
        <Button v-bind="{ ...args, variant: 'ghost' }">Ghost</Button>
        <Button v-bind="{ ...args, variant: 'danger' }">Danger</Button>
      </div>
    `,
    }),
    args: {
        size: "md",
        disabled: false,
    },
}

/**=====================
 * SIZES BUTTON STORY
========================*/
export const Sizes: Story = {
    render: args => ({
        components: { Button },
        setup() {
            return { args }
        },
        template: `
      <div style="display: flex; gap: 1rem;">
        <Button v-bind="{ ...args, size: 'sm' }">Small</Button>
        <Button v-bind="{ ...args, size: 'md' }">Medium</Button>
        <Button v-bind="{ ...args, size: 'lg' }">Large</Button>
      </div>
    `,
    }),
    args: {
        variant: "primary",
        disabled: false,
    },
}

/**==========================
 * FULL WIDTH BUTTON STORY
=============================*/
export const FullWidth: Story = {
    args: {
        variant: "primary",
        size: "md",
        fullWidth: true,
        default: "Full Width",
    },
}
