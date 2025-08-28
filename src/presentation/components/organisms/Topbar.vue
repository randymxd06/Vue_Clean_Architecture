<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue';

/**===============
 * TOPBAR PROPS
==================*/
interface Props {
    isMobile: boolean;
    sidebarVisible: boolean;
}

/**===============
 * DEFINE PROPS
==================*/
defineProps<Props>();

/**===============
 * DEFINE EMITS
==================*/
const emit = defineEmits(['open-sidebar', 'toggle-sidebar']);
</script>

<template>

    <!--==========
        TOP BAR
    ==============-->
    <header class="h-16 flex items-center justify-between px-6">

        <!--================================
            SIDEBAR TOGGLE AND BREADCRUMB
        ====================================-->
        <section class="flex gap-10">

            <!--==============================================
                BUTTON TO OPEN / CLOSE SIDEBAR (FOR MOBILE)
            ==================================================-->
            <button v-if="isMobile" type="button" class="cursor-pointer transition-transform hover:scale-110"
                @click="$emit('open-sidebar')">
                <svg width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none"
                    stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="feather feather-sidebar">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="9" y1="3" x2="9" y2="21"></line>
                </svg>
            </button>

            <!--=========================================
                BUTTON TO TOGGLE SIDEBAR (FOR DESKTOP)
            =============================================-->
            <button v-else type="button" class="cursor-pointer transition-transform hover:scale-110"
                @click="$emit('toggle-sidebar')">
                <svg width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none"
                    stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="feather feather-sidebar">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="9" y1="3" x2="9" y2="21"></line>
                </svg>
            </button>

            <!--=============
                BREADCRUMB
            =================-->
            <article class="hidden md:flex items-center space-x-2">
                <span class="text-gray-500">Dashboard</span>
                <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
                <span class="text-gray-900 font-medium">Inicio</span>
            </article>

        </section>

        <!--=================
            HEADER ACTIONS
        =====================-->
        <section class="flex items-center space-x-4">

            <!--===============
                THEME TOGGLE
            ===================-->
            <button class="p-2 rounded-lg hover:bg-gray-100 transition-colors font-semibold cursor-pointer">
                <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
            </button>

            <!--================
                NOTIFICATIONS
            ====================-->
            <button class="p-2 rounded-lg hover:bg-gray-100 relative transition-colors font-semibold cursor-pointer">
                <svg class="w-5 h-5 text-gray-600" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path fill="currentColor"
                        d="M224 0c-8.8 0-16 7.2-16 16l0 16.8C127.1 40.8 64 109 64 192l0 10.3c0 45.1-15.4 88.9-43.5 124.1L10.4 339C3.7 347.4 0 357.9 0 368.6 0 394.8 21.2 416 47.4 416l353.2 0c26.2 0 47.4-21.2 47.4-47.4 0-10.8-3.7-21.2-10.4-29.6l-10.1-12.6c-28.2-35.2-43.5-79-43.5-124.1l0-10.3c0-83-63.1-151.2-144-159.2L240 16c0-8.8-7.2-16-16-16zm0 64c70.7 0 128 57.3 128 128l0 10.3c0 52.4 17.8 103.2 50.6 144.1L412.6 359c2.2 2.7 3.4 6.1 3.4 9.6 0 8.5-6.9 15.4-15.4 15.4L47.4 384c-8.5 0-15.4-6.9-15.4-15.4 0-3.5 1.2-6.9 3.4-9.6l10.1-12.6C78.2 305.5 96 254.7 96 202.3L96 192c0-70.7 57.3-128 128-128zM156.1 464c9.9 28 36.6 48 67.9 48s58-20 67.9-48L256 464c-7.3 9.7-18.9 16-32 16s-24.7-6.3-32-16l-35.9 0z" />
                </svg>
                <span class="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            <!--=============
                ADD BUTTON
            =================-->
            <button
                class="p-2 rounded-lg hover:bg-gray-100 relative transition-colors cursor-pointer">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                </svg>
            </button>

        </section>

    </header>

</template>
