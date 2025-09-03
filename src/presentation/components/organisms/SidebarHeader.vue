<script lang="ts" setup>
import AppBrand from "@/presentation/components/molecules/AppBrand.vue"

/**=======================
 * SIDEBAR HEADER PROPS
==========================*/
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

  <!--=========================
    SIDEBAR HEADER COMPONENT
  =============================-->
  <section class="p-4">
    <AppBrand :app-name="appName" :version="version" :logo-letter="logoLetter" />
  </section>

</template>
