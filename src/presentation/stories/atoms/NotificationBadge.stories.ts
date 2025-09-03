import NotificationBadge from '@/presentation/components/atoms/NotificationBadge.vue';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta<typeof NotificationBadge> = {
  title: 'Atoms/NotificationBadge',
  component: NotificationBadge,
  argTypes: {
    count: { control: 'number' },
    showDot: { control: 'boolean' },
    variant: { control: 'select', options: ['red', 'blue', 'green', 'orange'] },
  },
  decorators: [
    () => ({
      template: `
        <div style="display: flex; align-items: center; justify-content: center; padding: 40px;">
          <div style="position: relative; display: inline-block;">
            <div style="width: 40px; height: 40px; background-color: #f3f4f6; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 16px;">
              📧
            </div>
            <story />
          </div>
        </div>
      `,
    }),
  ],
};

export default meta;

type Story = StoryObj<typeof NotificationBadge>;

export const Default: Story = {
  args: {
    count: 3,
    showDot: false,
    variant: 'red',
  },
};

export const DotOnly: Story = {
  args: {
    count: 0,
    showDot: true,
    variant: 'red',
  },
};

export const Variants: Story = {
  render: (args) => ({
    components: { NotificationBadge },
    setup() { return { args }; },
    template: `
      <div style="display: flex; gap: 2rem; align-items: center; justify-content: center; padding: 20px;">
        <div style="position: relative; display: inline-block;">
          <div style="width: 40px; height: 40px; background-color: #f3f4f6; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 16px;">📧</div>
          <NotificationBadge v-bind="{ ...args, variant: 'red' }" />
        </div>
        <div style="position: relative; display: inline-block;">
          <div style="width: 40px; height: 40px; background-color: #f3f4f6; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 16px;">📧</div>
          <NotificationBadge v-bind="{ ...args, variant: 'blue' }" />
        </div>
        <div style="position: relative; display: inline-block;">
          <div style="width: 40px; height: 40px; background-color: #f3f4f6; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 16px;">📧</div>
          <NotificationBadge v-bind="{ ...args, variant: 'green' }" />
        </div>
        <div style="position: relative; display: inline-block;">
          <div style="width: 40px; height: 40px; background-color: #f3f4f6; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 16px;">📧</div>
          <NotificationBadge v-bind="{ ...args, variant: 'orange' }" />
        </div>
      </div>
    `,
  }),
  args: {
    count: 5,
    showDot: false,
  },
};

export const Numbers: Story = {
  render: (args) => ({
    components: { NotificationBadge },
    setup() { return { args }; },
    template: `
      <div style="display: flex; gap: 2rem; align-items: center; justify-content: center; padding: 20px;">
        <div style="position: relative; display: inline-block;">
          <div style="width: 40px; height: 40px; background-color: #f3f4f6; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 16px;">📧</div>
          <NotificationBadge v-bind="{ ...args, count: 1 }" />
        </div>
        <div style="position: relative; display: inline-block;">
          <div style="width: 40px; height: 40px; background-color: #f3f4f6; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 16px;">📧</div>
          <NotificationBadge v-bind="{ ...args, count: 9 }" />
        </div>
        <div style="position: relative; display: inline-block;">
          <div style="width: 40px; height: 40px; background-color: #f3f4f6; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 16px;">📧</div>
          <NotificationBadge v-bind="{ ...args, count: 25 }" />
        </div>
        <div style="position: relative; display: inline-block;">
          <div style="width: 40px; height: 40px; background-color: #f3f4f6; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 16px;">📧</div>
          <NotificationBadge v-bind="{ ...args, count: 150 }" />
        </div>
      </div>
    `,
  }),
  args: {
    variant: 'red',
    showDot: false,
  },
};

export const DotsVariants: Story = {
  render: (args) => ({
    components: { NotificationBadge },
    setup() { return { args }; },
    template: `
      <div style="display: flex; gap: 2rem; align-items: center; justify-content: center; padding: 20px;">
        <div style="position: relative; display: inline-block;">
          <div style="width: 40px; height: 40px; background-color: #f3f4f6; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 16px;">📧</div>
          <NotificationBadge v-bind="{ ...args, variant: 'red' }" />
        </div>
        <div style="position: relative; display: inline-block;">
          <div style="width: 40px; height: 40px; background-color: #f3f4f6; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 16px;">🔔</div>
          <NotificationBadge v-bind="{ ...args, variant: 'blue' }" />
        </div>
        <div style="position: relative; display: inline-block;">
          <div style="width: 40px; height: 40px; background-color: #f3f4f6; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 16px;">💬</div>
          <NotificationBadge v-bind="{ ...args, variant: 'green' }" />
        </div>
        <div style="position: relative; display: inline-block;">
          <div style="width: 40px; height: 40px; background-color: #f3f4f6; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 16px;">⚠️</div>
          <NotificationBadge v-bind="{ ...args, variant: 'orange' }" />
        </div>
      </div>
    `,
  }),
  args: {
    count: 0,
    showDot: true,
  },
};

export const HighNumbers: Story = {
  render: (args) => ({
    components: { NotificationBadge },
    setup() { return { args }; },
    template: `
      <div style="display: flex; gap: 2rem; align-items: center; justify-content: center; padding: 20px;">
        <div style="position: relative; display: inline-block;">
          <div style="width: 40px; height: 40px; background-color: #f3f4f6; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 16px;">📧</div>
          <NotificationBadge v-bind="{ ...args, count: 99 }" />
        </div>
        <div style="position: relative; display: inline-block;">
          <div style="width: 40px; height: 40px; background-color: #f3f4f6; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 16px;">📧</div>
          <NotificationBadge v-bind="{ ...args, count: 100 }" />
        </div>
        <div style="position: relative; display: inline-block;">
          <div style="width: 40px; height: 40px; background-color: #f3f4f6; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 16px;">📧</div>
          <NotificationBadge v-bind="{ ...args, count: 999 }" />
        </div>
        <div style="position: relative; display: inline-block;">
          <div style="width: 40px; height: 40px; background-color: #f3f4f6; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 16px;">📧</div>
          <NotificationBadge v-bind="{ ...args, count: 1500 }" />
        </div>
      </div>
    `,
  }),
  args: {
    variant: 'red',
    showDot: false,
  },
};

export const NoNotification: Story = {
  args: {
    count: 0,
    showDot: false,
    variant: 'red',
  },
};
