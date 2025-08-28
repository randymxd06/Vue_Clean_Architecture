<script lang="ts" setup>
import SectionHeader from '@/presentation/components/molecules/SectionHeader.vue';
import NavigationItem from '@/presentation/components/molecules/NavigationItem.vue';

interface NavigationItemData {
  label: string;
  icon: string; // Cualquier nombre de icono de Lucide
  href?: string;
  isActive?: boolean;
  badge?: {
    count: number | string;
    variant?: 'blue' | 'red' | 'green' | 'gray';
  };
}

interface Props {
  title: string;
  items: NavigationItemData[];
}

defineProps<Props>();

const emit = defineEmits<{
  'item-click': [item: NavigationItemData, event: Event];
}>();

const handleItemClick = (item: NavigationItemData, event: Event) => {
  emit('item-click', item, event);
};
</script>

<template>
  <nav class="mt-2">
    <SectionHeader :title="title" />
    <ul class="space-y-1 px-4">
      <NavigationItem
        v-for="item in items"
        :key="item.label"
        v-bind="item"
        @click="handleItemClick(item, $event)"
      />
    </ul>
  </nav>
</template>
