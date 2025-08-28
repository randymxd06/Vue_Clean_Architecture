<script lang="ts" setup>
interface Props {
  src: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg';
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md'
});

const sizeClasses = {
  sm: 'w-6 h-6',
  md: 'w-8 h-8',
  lg: 'w-12 h-12'
};
</script>

<template>
  <img 
    :class="[
      'rounded-full object-cover',
      sizeClasses[size]
    ]"
    :src="src"
    :alt="alt"
  >
</template>
