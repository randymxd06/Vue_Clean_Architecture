<script lang="ts" setup>
/**=============
 * LOGO PROPS
================*/
interface Props {
    size?: "sm" | "md" | "lg"
    letter?: string
}

/**=======================
 * DEFAULT PROPS VALUES
==========================*/
withDefaults(defineProps<Props>(), {
    size: "md",
    letter: "M",
})

/**===============
 * SIZE CLASSES
==================*/
const sizeClasses = {
    sm: "w-6 h-6 text-xs",
    md: "w-10 h-10 text-sm",
    lg: "w-12 h-12 text-base",
}
</script>

<template>

  <!--===============
    LOGO COMPONENT
  ===================-->
  <section :class="[
    'bg-black rounded-xl flex items-center justify-center',
    sizeClasses[size]
  ]">
    <span class="text-gray-100 font-bold">{{ letter }}</span>
  </section>

</template>
