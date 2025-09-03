import type { Meta, StoryObj } from "@storybook/vue3"
import Avatar from "@/presentation/components/atoms/Avatar.vue"

/**===========================
 * AVATAR COMPONENT STORIES
==============================*/
const meta: Meta<typeof Avatar> = {
    title: "Atoms/Avatar",
    component: Avatar,
    argTypes: {
        size: { control: "select", options: ["sm", "md", "lg"] },
        src: { control: "text" },
        alt: { control: "text" },
    },
}

/**====================================
 * AVATAR COMPONENT META INFORMATION
=======================================*/
export default meta

/**====================
 * AVATAR STORY TYPE
=======================*/
type Story = StoryObj<typeof Avatar>

/**=======================
 * DEFAULT AVATAR STORY
==========================*/
export const Default: Story = {
    args: {
        src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        alt: "User Avatar",
        size: "md",
    },
}

/**=====================
 * AVATAR SIZES STORY
========================*/
export const Sizes: Story = {
    render: args => ({
        components: { Avatar },
        setup() {
            return { args }
        },
        template: `
      <div style="display: flex; gap: 1rem; align-items: center;">
        <Avatar v-bind="{ ...args, size: 'sm' }" />
        <Avatar v-bind="{ ...args, size: 'md' }" />
        <Avatar v-bind="{ ...args, size: 'lg' }" />
      </div>
    `,
    }),
    args: {
        src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        alt: "User Avatar",
    },
}

/**======================
 * FEMALE AVATAR STORY
=========================*/
export const FemaleAvatar: Story = {
    args: {
        src: "https://images.unsplash.com/photo-1517841905240-4729888e3b1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        alt: "Female Avatar",
        size: "md",
    },
}

/**====================
 * MALE AVATAR STORY
=======================*/
export const MaleAvatar: Story = {
    args: {
        src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        alt: "Male Avatar",
        size: "md",
    },
}

/**============================
 * BROKEN IMAGE AVATAR STORY
===============================*/
export const BrokenImage: Story = {
    args: {
        src: "https://imagen-rota.jpg",
        alt: "Image not found",
        size: "md",
    },
}
