<script lang="ts" setup>
import { computed } from "vue"

/**=============================
 * NOTIFICATION BADGE PROPS
================================*/
interface Props {
    count?: number
    showDot?: boolean
    variant?: "red" | "blue" | "green" | "orange"
}

/**=======================
 * DEFAULT PROPS VALUES
==========================*/
const props = withDefaults(defineProps<Props>(), {
    count: 0,
    showDot: false,
    variant: "red",
})

/**===============================
 * NOTIFICATION BADGE CLASSES
==================================*/
const variantClasses = {
    red: "bg-red-500",
    blue: "bg-blue-500",
    green: "bg-green-500",
    orange: "bg-orange-500",
}

/**===================================
 * SHOW BADGE (COUNT > 0 OR SHOW DOT)
======================================*/
const showBadge = computed(() => props.count > 0 || props.showDot)

/**=======================
 * DISPLAY COUNT OR DOT
==========================*/
const displayText = computed(() => {
    if (props.showDot) return ""
    if (props.count > 99) return "99+"
    return props.count.toString()
})
</script>

<template>

  <!--==========================
    NOTIFICATION BADGE
  ==============================-->
  <span v-if="showBadge" :class="[
    'absolute flex items-center justify-center text-white text-xs font-bold rounded-full',
    variantClasses[variant],
    showDot || count === 0
      ? 'w-2 h-2 -top-1 -right-1'
      : count < 10
        ? 'w-5 h-5 -top-2 -right-2'
        : 'w-6 h-6 -top-2 -right-2'
  ]">
    {{ displayText }}
  </span>

</template>
