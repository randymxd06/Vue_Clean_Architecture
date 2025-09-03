import Logo from '@/presentation/components/atoms/Logo.vue';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta<typeof Logo> = {
  title: 'Atoms/Logo',
  component: Logo,
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    letter: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof Logo>;

export const Default: Story = {
  args: {
    size: 'md',
    letter: 'M',
  },
};

export const Sizes: Story = {
  render: (args) => ({
    components: { Logo },
    setup() { return { args }; },
    template: `
      <div style="display: flex; gap: 1rem; align-items: center;">
        <Logo v-bind="{ ...args, size: 'sm' }" />
        <Logo v-bind="{ ...args, size: 'md' }" />
        <Logo v-bind="{ ...args, size: 'lg' }" />
      </div>
    `,
  }),
  args: {
    letter: 'L',
  },
};

export const DifferentLetters: Story = {
  render: (args) => ({
    components: { Logo },
    setup() { return { args }; },
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
    size: 'md',
  },
};

export const CompanyLogos: Story = {
  render: (args) => ({
    components: { Logo },
    setup() { return { args }; },
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
    size: 'lg',
  },
};

export const Numbers: Story = {
  render: (args) => ({
    components: { Logo },
    setup() { return { args }; },
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
    size: 'md',
  },
};

export const SpecialCharacters: Story = {
  render: (args) => ({
    components: { Logo },
    setup() { return { args }; },
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
    size: 'md',
  },
};
