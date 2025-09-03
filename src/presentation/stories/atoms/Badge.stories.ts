import type { Meta, StoryObj } from "@storybook/vue3"
import Badge from "@/presentation/components/atoms/Badge.vue"

/**==========================
 * BADGE COMPONENT STORIES
=============================*/
const meta: Meta<typeof Badge> = {
    title: "Atoms/Badge",
    component: Badge,
    argTypes: {
        count: { control: "text" },
        variant: { control: "select", options: ["blue", "red", "green", "gray"] },
    },
}

/**===================================
 * BADGE COMPONENT META INFORMATION
======================================*/
export default meta

/**===================
 * BADGE STORY TYPE
======================*/
type Story = StoryObj<typeof Badge>

/**======================
 * DEFAULT BADGE STORY
=========================*/
export const Default: Story = {
    args: {
        count: 5,
        variant: "blue",
    },
}

/**=======================
 * VARIANTS BADGE STORY
==========================*/
export const Variants: Story = {
    render: args => ({
        components: { Badge },
        setup() {
            return { args }
        },
        template: `
      <div style="display: flex; gap: 1rem; align-items: center;">
        <Badge v-bind="{ ...args, variant: 'blue' }" />
        <Badge v-bind="{ ...args, variant: 'red' }" />
        <Badge v-bind="{ ...args, variant: 'green' }" />
        <Badge v-bind="{ ...args, variant: 'gray' }" />
      </div>
    `,
    }),
    args: {
        count: 5,
    },
}

/**======================
 * NUMBERS BADGE STORY
=========================*/
export const Numbers: Story = {
    render: args => ({
        components: { Badge },
        setup() {
            return { args }
        },
        template: `
      <div style="display: flex; gap: 1rem; align-items: center;">
        <Badge v-bind="{ ...args, count: 1 }" />
        <Badge v-bind="{ ...args, count: 9 }" />
        <Badge v-bind="{ ...args, count: 25 }" />
        <Badge v-bind="{ ...args, count: 999 }" />
      </div>
    `,
    }),
    args: {
        variant: "blue",
    },
}

/**===================
 * TEXT BADGE STORY
======================*/
export const TextBadge: Story = {
    args: {
        count: "NEW",
        variant: "green",
    },
}

/**===========================
 * LARGE NUMBER BADGE STORY
==============================*/
export const LargeNumber: Story = {
    args: {
        count: 1000,
        variant: "red",
    },
}

/**===================
 * ZERO BADGE STORY
======================*/
export const Zero: Story = {
    args: {
        count: 0,
        variant: "gray",
    },
}
