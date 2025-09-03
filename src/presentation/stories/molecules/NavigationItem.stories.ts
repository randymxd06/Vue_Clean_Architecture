import type { Meta, StoryObj } from "@storybook/vue3"
import NavigationItem from "@/presentation/components/molecules/NavigationItem.vue"

/**====================================
 * NAVIGATION ITEM COMPONENT STORIES
=======================================*/
const meta: Meta<typeof NavigationItem> = {
    title: "Molecules/NavigationItem",
    component: NavigationItem,
    argTypes: {
        label: { control: "text" },
        icon: { control: "text" },
        href: { control: "text" },
        isActive: { control: "boolean" },
        badge: { control: "object" },
    },
    decorators: [
        () => ({
            template: '<ul class="space-y-1"><story /></ul>',
        }),
    ],
}

/**=============================================
 * NAVIGATION ITEM COMPONENT META INFORMATION
================================================*/
export default meta

/**=======================================
 * NAVIGATION ITEM COMPONENT STORY TYPE
==========================================*/
type Story = StoryObj<typeof NavigationItem>

/**================================
 * DEFAULT NAVIGATION ITEM STORY
===================================*/
export const Default: Story = {
    args: {
        label: "Dashboard",
        icon: "home",
        href: "/dashboard",
        isActive: false,
    },
}

/**===============================
 * ACTIVE NAVIGATION ITEM STORY
==================================*/
export const Active: Story = {
    args: {
        label: "Products",
        icon: "box",
        href: "/products",
        isActive: true,
    },
}

/**===================================
 * NAVIGATION ITEM WITH BADGE STORY
======================================*/
export const WithBadge: Story = {
    args: {
        label: "Notifications",
        icon: "bell",
        href: "/notifications",
        isActive: false,
        badge: {
            count: 5,
            variant: "red",
        },
    },
}

/**========================================
 * NAVIGATION ITEM WITH BLUE BADGE STORY
===========================================*/
export const WithBlueBadge: Story = {
    args: {
        label: "Messages",
        icon: "message-circle",
        href: "/messages",
        isActive: false,
        badge: {
            count: 12,
            variant: "blue",
        },
    },
}

/**=========================================
 * NAVIGATION ITEM WITH GREEN BADGE STORY
============================================*/
export const WithGreenBadge: Story = {
    args: {
        label: "Completed Tasks",
        icon: "check-circle",
        href: "/tasks",
        isActive: true,
        badge: {
            count: "New",
            variant: "green",
        },
    },
}

/**======================================
 * NAVIGATION ITEM EXTERNAL LINK STORY
=========================================*/
export const ExternalLink: Story = {
    args: {
        label: "Documentation",
        icon: "book-open",
        href: "https://docs.example.com",
        isActive: false,
    },
}

/**=================================
 * SETTINGS NAVIGATION ITEM STORY
====================================*/
export const Settings: Story = {
    args: {
        label: "Settings",
        icon: "settings",
        href: "/settings",
        isActive: false,
    },
}

/**==============================
 * USERS NAVIGATION ITEM STORY
=================================*/
export const Users: Story = {
    args: {
        label: "Users",
        icon: "users",
        href: "/users",
        isActive: false,
        badge: {
            count: 99,
            variant: "gray",
        },
    },
}

/**===================================
 * NAVIGATION MENU IN CONTEXT STORY
======================================*/
export const NavigationMenuContext: Story = {
    render: () => ({
        components: { NavigationItem },
        template: `
      <div class="w-64 bg-white border border-gray-200 rounded-lg p-4">
        <h3 class="text-sm font-medium text-gray-500 mb-3">NAVEGACIÓN PRINCIPAL</h3>
        <ul class="space-y-1">
          <NavigationItem
            label="Dashboard"
            icon="home"
            href="/dashboard"
            :isActive="true"
          />
          <NavigationItem
            label="Products"
            icon="box"
            href="/products"
            :isActive="false"
          />
          <NavigationItem
            label="Notifications"
            icon="bell"
            href="/notifications"
            :isActive="false"
            :badge="{ count: 5, variant: 'red' }"
          />
          <NavigationItem
            label="Messages"
            icon="message-circle"
            href="/messages"
            :isActive="false"
            :badge="{ count: 12, variant: 'blue' }"
          />
          <NavigationItem
            label="Settings"
            icon="settings"
            href="/settings"
            :isActive="false"
          />
        </ul>
      </div>
    `,
    }),
}
