<script lang="ts" setup>
import Logo from "@/presentation/components/atoms/Logo.vue"

/**==================
 * APP BRAND PROPS
=====================*/
interface Props {
    appName?: string
    version?: string
    logoLetter?: string
}

/**=======================
 * DEFAULT PROPS VALUES
==========================*/
withDefaults(defineProps<Props>(), {
    appName: "Mi Aplicación",
    version: "Versión 2.0",
    logoLetter: "M",
})
</script>

<template>

  <!--====================
    APP BRAND COMPONENT
  ========================-->
  <section class="flex items-center space-x-2">
    <Logo :letter="logoLetter" />
    <article>
      <h1 class="font-semibold dark:text-gray-200">{{ appName }}</h1>
      <p class="text-xs font-semibold dark:text-gray-400">{{ version }}</p>
    </article>
  </section>

</template>
