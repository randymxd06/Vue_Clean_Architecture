<script lang="ts" setup>
import NavigationItem from "@/presentation/components/molecules/NavigationItem.vue"
import SectionHeader from "@/presentation/components/molecules/SectionHeader.vue"

/**=================================
 * NAVIGATION ITEM DATA INTERFACE
====================================*/
interface NavigationItemData {
    label: string
    icon: string
    href?: string
    isActive?: boolean
    badge?: {
        count: number | string
        variant?: "blue" | "red" | "green" | "gray"
    }
}

/**===========================
 * NAVIGATION SECTION PROPS
==============================*/
interface Props {
    title: string
    items: NavigationItemData[]
}

/**===============
 * DEFINE PROPS
==================*/
defineProps<Props>()

/**========
 * EMITS
===========*/
const emit = defineEmits<{
    "item-click": [item: NavigationItemData, event: Event]
}>()

/**===================================
 * HANDLE ITEM CLICK EVENT
 * @param {NavigationItemData} item
 * @param {Event} event
 * @returns {void}
======================================*/
const handleItemClick = (item: NavigationItemData, event: Event): void => {
    emit("item-click", item, event)
}
</script>

<template>

  <!--=============================
    NAVIGATION SECTION COMPONENT
  =================================-->
  <nav class="mt-2">
    <SectionHeader :title="title" />
    <ul class="space-y-1 px-4">
      <NavigationItem v-for="item in items" :key="item.label" v-bind="item" @click="handleItemClick(item, $event)" />
    </ul>
  </nav>

</template>
