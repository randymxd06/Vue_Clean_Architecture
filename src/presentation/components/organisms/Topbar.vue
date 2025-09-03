<script lang="ts" setup>
import { computed } from "vue"
import { useThemeStore } from "@/presentation/stores/themeStore"
import { Breadcrumb, SidebarToggle, TopbarActions } from "../index"

/**===============
 * TOPBAR PROPS
==================*/
interface Props {
    isMobile: boolean
    sidebarVisible: boolean
}

/**===============
 * DEFINE PROPS
==================*/
const props = defineProps<Props>()

/**===============
 * DEFINE EMITS
==================*/
const emit = defineEmits<{
    "open-sidebar": []
    "toggle-sidebar": []
    "notifications-click": []
}>()

/**===============
 * THEME STORE
==================*/
const themeStore = useThemeStore()

/**====================
 * BREADCRUMB ITEMS
=======================*/
const breadcrumbItems = computed(() => [
    { label: "Dashboard", active: false },
    { label: "Inicio", active: true },
])
</script>

<template>

    <!--==========
        TOP BAR
    ==============-->
    <header class="h-16 flex items-center justify-between px-6">

        <!--================================
            SIDEBAR TOGGLE AND BREADCRUMB
        ====================================-->
        <section class="flex items-center gap-10">

            <!--=====================
                SIDEBAR TOGGLE
            =========================-->
            <SidebarToggle :is-mobile="isMobile" :sidebar-visible="sidebarVisible" @open-sidebar="$emit('open-sidebar')"
                @toggle-sidebar="$emit('toggle-sidebar')" />

            <!--=============
                BREADCRUMB
            =================-->
            <Breadcrumb :items="breadcrumbItems" />

        </section>

        <!--=================
            HEADER ACTIONS
        =====================-->
        <TopbarActions :notification-count="1" @toggle-theme="themeStore.toggleTheme"
            @notifications-click="$emit('notifications-click')" />

    </header>

</template>
