import type { Meta, StoryObj } from "@storybook/vue3"
import Icon from "@/presentation/components/atoms/Icon.vue"

/**=========================
 * ICON COMPONENT STORIES
============================*/
const meta: Meta<typeof Icon> = {
    title: "Atoms/Icon",
    component: Icon,
    argTypes: {
        name: { control: "text" },
        size: {
            control: "select",
            options: ["sm", "md", "lg", 16, 20, 24, 32, 48, 64],
        },
        color: { control: "color" },
        strokeWidth: { control: "number", min: 1, max: 4, step: 0.5 },
    },
}

/**==================================
 * ICON COMPONENT META INFORMATION
=====================================*/
export default meta

/**============================
 * ICON COMPONENT STORY TYPE
===============================*/
type Story = StoryObj<typeof Icon>

/**=====================
 * DEFAULT ICON STORY
========================*/
export const Default: Story = {
    args: {
        name: "home",
        size: "md",
        color: undefined,
        strokeWidth: 2,
    },
}

/**===================
 * SIZES ICON STORY
======================*/
export const Sizes: Story = {
    render: args => ({
        components: { Icon },
        setup() {
            return { args }
        },
        template: `
      <div style="display: flex; gap: 1rem; align-items: center;">
        <Icon v-bind="{ ...args, size: 'sm' }" />
        <Icon v-bind="{ ...args, size: 'md' }" />
        <Icon v-bind="{ ...args, size: 'lg' }" />
        <Icon v-bind="{ ...args, size: 32 }" />
        <Icon v-bind="{ ...args, size: 48 }" />
      </div>
    `,
    }),
    args: {
        name: "star",
        color: "#3b82f6",
    },
}

/**======================
 * POPULAR ICONS STORY
=========================*/
export const PopularIcons: Story = {
    render: args => ({
        components: { Icon },
        setup() {
            return { args }
        },
        template: `
      <div style="display: grid; grid-template-columns: repeat(6, 1fr); gap: 1.5rem; padding: 1rem;">
        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 60px;">
          <div style="display: flex; align-items: center; justify-content: center; height: 24px; margin-bottom: 8px;">
            <Icon v-bind="{ ...args, name: 'home' }" />
          </div>
          <div style="font-size: 11px; color: #6b7280; font-weight: 500; text-align: center;">home</div>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 60px;">
          <div style="display: flex; align-items: center; justify-content: center; height: 24px; margin-bottom: 8px;">
            <Icon v-bind="{ ...args, name: 'user' }" />
          </div>
          <div style="font-size: 11px; color: #6b7280; font-weight: 500; text-align: center;">user</div>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 60px;">
          <div style="display: flex; align-items: center; justify-content: center; height: 24px; margin-bottom: 8px;">
            <Icon v-bind="{ ...args, name: 'settings' }" />
          </div>
          <div style="font-size: 11px; color: #6b7280; font-weight: 500; text-align: center;">settings</div>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 60px;">
          <div style="display: flex; align-items: center; justify-content: center; height: 24px; margin-bottom: 8px;">
            <Icon v-bind="{ ...args, name: 'search' }" />
          </div>
          <div style="font-size: 11px; color: #6b7280; font-weight: 500; text-align: center;">search</div>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 60px;">
          <div style="display: flex; align-items: center; justify-content: center; height: 24px; margin-bottom: 8px;">
            <Icon v-bind="{ ...args, name: 'bell' }" />
          </div>
          <div style="font-size: 11px; color: #6b7280; font-weight: 500; text-align: center;">bell</div>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 60px;">
          <div style="display: flex; align-items: center; justify-content: center; height: 24px; margin-bottom: 8px;">
            <Icon v-bind="{ ...args, name: 'mail' }" />
          </div>
          <div style="font-size: 11px; color: #6b7280; font-weight: 500; text-align: center;">mail</div>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 60px;">
          <div style="display: flex; align-items: center; justify-content: center; height: 24px; margin-bottom: 8px;">
            <Icon v-bind="{ ...args, name: 'heart' }" />
          </div>
          <div style="font-size: 11px; color: #6b7280; font-weight: 500; text-align: center;">heart</div>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 60px;">
          <div style="display: flex; align-items: center; justify-content: center; height: 24px; margin-bottom: 8px;">
            <Icon v-bind="{ ...args, name: 'star' }" />
          </div>
          <div style="font-size: 11px; color: #6b7280; font-weight: 500; text-align: center;">star</div>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 60px;">
          <div style="display: flex; align-items: center; justify-content: center; height: 24px; margin-bottom: 8px;">
            <Icon v-bind="{ ...args, name: 'check' }" />
          </div>
          <div style="font-size: 11px; color: #6b7280; font-weight: 500; text-align: center;">check</div>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 60px;">
          <div style="display: flex; align-items: center; justify-content: center; height: 24px; margin-bottom: 8px;">
            <Icon v-bind="{ ...args, name: 'x' }" />
          </div>
          <div style="font-size: 11px; color: #6b7280; font-weight: 500; text-align: center;">x</div>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 60px;">
          <div style="display: flex; align-items: center; justify-content: center; height: 24px; margin-bottom: 8px;">
            <Icon v-bind="{ ...args, name: 'plus' }" />
          </div>
          <div style="font-size: 11px; color: #6b7280; font-weight: 500; text-align: center;">plus</div>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 60px;">
          <div style="display: flex; align-items: center; justify-content: center; height: 24px; margin-bottom: 8px;">
            <Icon v-bind="{ ...args, name: 'minus' }" />
          </div>
          <div style="font-size: 11px; color: #6b7280; font-weight: 500; text-align: center;">minus</div>
        </div>
      </div>
    `,
    }),
    args: {
        size: "md",
        color: "#6b7280",
        strokeWidth: 2,
    },
}

/**====================
 * COLORS ICON STORY
=======================*/
export const Colors: Story = {
    render: args => ({
        components: { Icon },
        setup() {
            return { args }
        },
        template: `
      <div style="display: flex; gap: 1rem; align-items: center;">
        <Icon v-bind="{ ...args, color: '#ef4444' }" />
        <Icon v-bind="{ ...args, color: '#3b82f6' }" />
        <Icon v-bind="{ ...args, color: '#10b981' }" />
        <Icon v-bind="{ ...args, color: '#f59e0b' }" />
        <Icon v-bind="{ ...args, color: '#8b5cf6' }" />
        <Icon v-bind="{ ...args, color: '#6b7280' }" />
      </div>
    `,
    }),
    args: {
        name: "heart",
        size: "lg",
    },
}

/**===========================
 * STROKE WIDTHS ICON STORY
==============================*/
export const StrokeWidths: Story = {
    render: args => ({
        components: { Icon },
        setup() {
            return { args }
        },
        template: `
      <div style="display: flex; gap: 1rem; align-items: center;">
        <Icon v-bind="{ ...args, strokeWidth: 1 }" />
        <Icon v-bind="{ ...args, strokeWidth: 2 }" />
        <Icon v-bind="{ ...args, strokeWidth: 3 }" />
        <Icon v-bind="{ ...args, strokeWidth: 4 }" />
      </div>
    `,
    }),
    args: {
        name: "circle",
        size: "lg",
        color: "#3b82f6",
    },
}

/**=====================
 * INVALID ICON STORY
========================*/
export const InvalidIcon: Story = {
    args: {
        name: "icon-that-does-not-exist",
        size: "md",
        color: "#ef4444",
    },
}
