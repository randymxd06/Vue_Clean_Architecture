<script lang="ts" setup>
interface Props {
  count: number | string;
  variant?: 'blue' | 'red' | 'green' | 'gray';
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'blue'
});

const variantClasses = {
  blue: 'bg-blue-100 text-blue-800',
  red: 'bg-red-100 text-red-800',
  green: 'bg-green-100 text-green-800',
  gray: 'bg-gray-100 text-gray-800'
};
</script>

<template>
  <span :class="[
    'text-xs px-2 py-1 rounded-full font-medium',
    variantClasses[variant]
  ]">
    {{ count }}
  </span>
</template>
