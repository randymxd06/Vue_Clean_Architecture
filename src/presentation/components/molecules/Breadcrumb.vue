<script lang="ts" setup>
import { Icon } from "../index"

/**============================
 * BREADCRUMB ITEM INTERFACE
===============================*/
interface BreadcrumbItem {
    label: string
    active?: boolean
}

/**===================
 * BREADCRUMB PROPS
======================*/
interface Props {
    items: BreadcrumbItem[]
}

/**===============
 * DEFINE PROPS
==================*/
defineProps<Props>()
</script>

<template>

  <!--==================
    BREADCRUMB COMPONENT
  ======================-->
  <nav class="hidden md:flex items-center space-x-2">

    <template v-for="(item, index) in items" :key="index">

      <!--====================
        BREADCRUMB SEPARATOR
      ========================-->
      <Icon v-if="index > 0" name="chevron-right" size="sm" color="#9CA3AF" />

      <!--=================
        BREADCRUMB ITEM
      =====================-->
      <span :class="[
        'text-sm',
        item.active
          ? 'text-gray-900 dark:text-gray-400 font-medium'
          : 'text-gray-500 dark:text-gray-500'
      ]">
        {{ item.label }}
      </span>

    </template>

  </nav>

</template>
