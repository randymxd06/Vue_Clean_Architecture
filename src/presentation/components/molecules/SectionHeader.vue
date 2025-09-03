<script lang="ts" setup>
/**=======================
 * SECTION HEADER PROPS
==========================*/
interface Props {
    title: string
}

/**===============
 * DEFINE PROPS
==================*/
defineProps<Props>()
</script>

<template>

  <!--===============
    SECTION HEADER
  ===================-->
  <section class="px-4 mb-2">
    <p class="text-xs font-medium text-gray-500 tracking-wide">
      {{ title }}
    </p>
  </section>

</template>
