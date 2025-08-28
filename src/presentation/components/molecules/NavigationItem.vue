<script lang="ts" setup>
import Icon from '@/presentation/components/atoms/Icon.vue';
import Badge from '@/presentation/components/atoms/Badge.vue';

interface Props {
  label: string;
  icon: string; // Cualquier nombre de icono de Lucide
  href?: string;
  isActive?: boolean;
  badge?: {
    count: number | string;
    variant?: 'blue' | 'red' | 'green' | 'gray';
  };
}

const props = withDefaults(defineProps<Props>(), {
  href: '#',
  isActive: false
});

const emit = defineEmits<{
  click: [event: Event];
}>();

const handleClick = (event: Event) => {
  emit('click', event);
};
</script>

<template>
  <li>
    <router-link 
      v-if="href.startsWith('/')"
      :to="href"
      :class="[
        'flex items-center space-x-3 px-3 py-2 rounded-lg font-semibold transition-colors',
        isActive 
          ? 'bg-gray-200' 
          : 'text-gray-700 hover:bg-gray-200'
      ]"
      @click="handleClick"
    >
      <Icon :name="icon" />
      <span>{{ label }}</span>
      <Badge 
        v-if="badge" 
        :count="badge.count" 
        :variant="badge.variant" 
        class="ml-auto"
      />
    </router-link>
    <a 
      v-else
      :href="href"
      :class="[
        'flex items-center space-x-3 px-3 py-2 rounded-lg font-semibold transition-colors',
        isActive 
          ? 'bg-gray-200' 
          : 'text-gray-700 hover:bg-gray-200'
      ]"
      @click="handleClick"
    >
      <Icon :name="icon" />
      <span>{{ label }}</span>
      <Badge 
        v-if="badge" 
        :count="badge.count" 
        :variant="badge.variant" 
        class="ml-auto"
      />
    </a>
  </li>
</template>
