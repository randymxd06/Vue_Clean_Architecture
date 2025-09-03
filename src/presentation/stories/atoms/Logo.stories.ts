import type { Meta, StoryObj } from "@storybook/vue3"
import Logo from "@/presentation/components/atoms/Logo.vue"

/**=========================
 * LOGO COMPONENT STORIES
============================*/
const meta: Meta<typeof Logo> = {
    title: "Atoms/Logo",
    component: Logo,
    argTypes: {
        size: { control: "select", options: ["sm", "md", "lg"] },
        letter: { control: "text" },
    },
}

/**==================================
 * LOGO COMPONENT META INFORMATION
=====================================*/
export default meta

/**============================
 * LOGO COMPONENT STORY TYPE
===============================*/
type Story = StoryObj<typeof Logo>

/**=====================
 * DEFAULT LOGO STORY
========================*/
export const Default: Story = {
    args: {
        size: "md",
        letter: "M",
    },
}

/**===================
 * SIZES LOGO STORY
======================*/
export const Sizes: Story = {
    render: args => ({
        components: { Logo },
        setup() {
            return { args }
        },
        template: `
      <div style="display: flex; gap: 1rem; align-items: center;">
        <Logo v-bind="{ ...args, size: 'sm' }" />
        <Logo v-bind="{ ...args, size: 'md' }" />
        <Logo v-bind="{ ...args, size: 'lg' }" />
      </div>
    `,
    }),
    args: {
        letter: "L",
    },
}

/**===============================
 * DIFFERENT LETTERS LOGO STORY
==================================*/
export const DifferentLetters: Story = {
    render: args => ({
        components: { Logo },
        setup() {
            return { args }
        },
        template: `
      <div style="display: flex; gap: 1rem; align-items: center;">
        <Logo v-bind="{ ...args, letter: 'A' }" />
        <Logo v-bind="{ ...args, letter: 'B' }" />
        <Logo v-bind="{ ...args, letter: 'C' }" />
        <Logo v-bind="{ ...args, letter: 'X' }" />
        <Logo v-bind="{ ...args, letter: 'Y' }" />
        <Logo v-bind="{ ...args, letter: 'Z' }" />
      </div>
    `,
    }),
    args: {
        size: "md",
    },
}

/**======================
 * COMPANY LOGOS STORY
=========================*/
export const CompanyLogos: Story = {
    render: args => ({
        components: { Logo },
        setup() {
            return { args }
        },
        template: `
      <div style="display: flex; gap: 1rem; align-items: center;">
        <div style="text-align: center;">
          <Logo v-bind="{ ...args, letter: 'G' }" />
          <div style="font-size: 12px; margin-top: 4px;">Google</div>
        </div>
        <div style="text-align: center;">
          <Logo v-bind="{ ...args, letter: 'M' }" />
          <div style="font-size: 12px; margin-top: 4px;">Microsoft</div>
        </div>
        <div style="text-align: center;">
          <Logo v-bind="{ ...args, letter: 'A' }" />
          <div style="font-size: 12px; margin-top: 4px;">Apple</div>
        </div>
        <div style="text-align: center;">
          <Logo v-bind="{ ...args, letter: 'N' }" />
          <div style="font-size: 12px; margin-top: 4px;">Netflix</div>
        </div>
        <div style="text-align: center;">
          <Logo v-bind="{ ...args, letter: 'S' }" />
          <div style="font-size: 12px; margin-top: 4px;">Spotify</div>
        </div>
      </div>
    `,
    }),
    args: {
        size: "lg",
    },
}

/**=====================
 * NUMBERS LOGO STORY
========================*/
export const Numbers: Story = {
    render: args => ({
        components: { Logo },
        setup() {
            return { args }
        },
        template: `
      <div style="display: flex; gap: 1rem; align-items: center;">
        <Logo v-bind="{ ...args, letter: '1' }" />
        <Logo v-bind="{ ...args, letter: '2' }" />
        <Logo v-bind="{ ...args, letter: '3' }" />
        <Logo v-bind="{ ...args, letter: '9' }" />
      </div>
    `,
    }),
    args: {
        size: "md",
    },
}

/**================================
 * SPECIAL CHARACTERS LOGO STORY
===================================*/
export const SpecialCharacters: Story = {
    render: args => ({
        components: { Logo },
        setup() {
            return { args }
        },
        template: `
      <div style="display: flex; gap: 1rem; align-items: center;">
        <Logo v-bind="{ ...args, letter: '@' }" />
        <Logo v-bind="{ ...args, letter: '#' }" />
        <Logo v-bind="{ ...args, letter: '$' }" />
        <Logo v-bind="{ ...args, letter: '&' }" />
      </div>
    `,
    }),
    args: {
        size: "md",
    },
}
