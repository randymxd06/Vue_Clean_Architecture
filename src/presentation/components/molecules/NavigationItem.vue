<script lang="ts" setup>
import Badge from "@/presentation/components/atoms/Badge.vue"
import Icon from "@/presentation/components/atoms/Icon.vue"

/**========================
 * NAVIGATION ITEM PROPS
===========================*/
interface Props {
    label: string
    icon: string
    href?: string
    isActive?: boolean
    badge?: {
        count: number | string
        variant?: "blue" | "red" | "green" | "gray"
    }
}

/**=======================
 * DEFAULT PROPS VALUES
==========================*/
withDefaults(defineProps<Props>(), {
    href: "#",
    isActive: false,
})

/**========
 * EMITS
===========*/
const emit = defineEmits<{
    click: [event: Event]
}>()

/**=======================
 * HANDLE CLICK EVENT
 * @param {Event} event
 * @returns {void}
==========================*/
const handleClick = (event: Event): void => {
    emit("click", event)
}
</script>

<template>

  <!--===============================
    NAVIGATION ITEM LINK COMPONENT
  ===================================-->
  <ul>
    <li>
      <router-link v-if="href.startsWith('/')" :to="href" :class="[
        'flex items-center space-x-3 px-3 py-2 rounded-lg font-semibold transition-colors',
        isActive
          ? 'bg-gray-200'
          : 'text-gray-700 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-700'
      ]" @click="handleClick">
        <Icon :name="icon" />
        <span>{{ label }}</span>
        <Badge v-if="badge" :count="badge.count" :variant="badge.variant" class="ml-auto" />
      </router-link>
      <a v-else :href="href" :class="[
        'flex items-center space-x-3 px-3 py-2 rounded-lg font-semibold transition-colors',
        isActive
          ? 'bg-gray-200'
          : 'text-gray-700 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-700'
      ]" @click="handleClick">
        <Icon :name="icon" />
        <span>{{ label }}</span>
        <Badge v-if="badge" :count="badge.count" :variant="badge.variant" class="ml-auto" />
      </a>
    </li>
  </ul>
</template>
