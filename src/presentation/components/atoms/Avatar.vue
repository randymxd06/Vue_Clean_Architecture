<script lang="ts" setup>
/**===============
 * AVATAR PROPS
==================*/
interface Props {
    src: string
    alt: string
    size?: "sm" | "md" | "lg"
}

/**=======================
 * DEFAULT PROPS VALUES
==========================*/
withDefaults(defineProps<Props>(), {
    size: "md",
})

/**===========================
 * CLASSES FOR AVATAR SIZES
==============================*/
const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-12 h-12",
}
</script>

<template>

  <!--=============
    AVATAR IMAGE
  =================-->
  <img :class="['rounded-full object-cover', sizeClasses[size]]" :src="src" :alt="alt">

</template>
