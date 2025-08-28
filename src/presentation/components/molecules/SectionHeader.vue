<script lang="ts" setup>
interface Props {
  title: string;
}

defineProps<Props>();
</script>

<template>
  <section class="px-4 mb-2">
    <p class="text-xs font-medium text-gray-500 tracking-wide">
      {{ title }}
    </p>
  </section>
</template>
