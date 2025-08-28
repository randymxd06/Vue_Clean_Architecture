<script lang="ts" setup>
import { computed } from 'vue';
import * as LucideIcons from 'lucide-vue-next';

interface Props {
  name: string; // Cualquier nombre de icono de Lucide
  size?: number | 'sm' | 'md' | 'lg';
  color?: string;
  strokeWidth?: number;
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  strokeWidth: 2
});

const getSize = (size: number | string) => {
  if (typeof size === 'number') return size;
  
  const sizeMap: Record<string, number> = {
    sm: 16,
    md: 20,
    lg: 24
  };
  
  return sizeMap[size] || 20;
};

// Convertir kebab-case a PascalCase para nombres de Lucide
const toPascalCase = (str: string) => {
  return str
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
};

// Buscar el icono dinámicamente
const IconComponent = computed(() => {
  // Primero intentar con el nombre exacto
  let iconName = toPascalCase(props.name);
  
  // Si no existe, intentar con variaciones comunes
  const variations = [
    iconName,
    `${iconName}Icon`,
    iconName.replace('Icon', '')
  ];
  
  for (const variant of variations) {
    if (variant in LucideIcons) {
      return (LucideIcons as any)[variant];
    }
  }
  
  // Si no encuentra el icono, usar un icono por defecto
  console.warn(`Icon "${props.name}" not found in Lucide Icons`);
  return LucideIcons.HelpCircle;
});
</script>

<template>
  <component 
    :is="IconComponent"
    :size="getSize(size)"
    :color="color"
    :stroke-width="strokeWidth"
  />
</template>
