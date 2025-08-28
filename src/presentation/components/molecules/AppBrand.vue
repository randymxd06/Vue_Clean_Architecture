<script lang="ts" setup>
import Logo from '@/presentation/components/atoms/Logo.vue';

interface Props {
  appName?: string;
  version?: string;
  logoLetter?: string;
}

const props = withDefaults(defineProps<Props>(), {
  appName: 'Mi Aplicación',
  version: 'Versión 2.0',
  logoLetter: 'M'
});
</script>

<template>
  <div class="flex items-center space-x-2">
    <Logo :letter="logoLetter" />
    <div>
      <h1 class="font-semibold">{{ appName }}</h1>
      <p class="text-xs font-semibold">{{ version }}</p>
    </div>
  </div>
</template>
