<script lang="ts" setup>
import { useSidebar } from "@/presentation/composables/useSidebar"
import Sidebar from "../organisms/Sidebar.vue"
import Topbar from "../organisms/Topbar.vue"

const { sidebarVisible, isMobile, openSidebar, closeSidebar, toggleSidebar } = useSidebar()
</script>

<template>

    <!--=============
        APP LAYOUT
    =================-->
    <main class="h-screen flex bg-gray-100 dark:bg-gray-800 relative transform transition-all duration-700 ease-in-out">

        <!--==========
            SIDEBAR
        ==============-->
        <Sidebar :is-mobile="isMobile" :sidebar-visible="sidebarVisible" @close-sidebar="closeSidebar" />

        <!--============================
            OVERLAY FOR MOBILE DRAWER
        ================================-->
        <aside v-if="isMobile && sidebarVisible" class="fixed inset-0 bg-black opacity-80 z-40" @click="closeSidebar">
        </aside>

        <!--====================
            MAIN CONTENT AREA
        ========================-->
        <section :class="[
            'flex-1 flex flex-col overflow-hidden pr-2 pt-2 transition-all duration-700 ease-in-out',
            isMobile ? 'ml-2' : (sidebarVisible ? 'ml-0' : '-ml-64 pl-2')
        ]">

            <!--===========================
                CONTENT CARD WITH TOPBAR
            ===============================-->
            <article
                class="bg-white dark:bg-gray-900 rounded-t-xl shadow-sm flex-1 flex flex-col overflow-hidden transition-all duration-700 ease-in-out">

                <!--==========
                    TOP BAR
                ==============-->
                <Topbar :is-mobile="isMobile" :sidebar-visible="sidebarVisible" @open-sidebar="openSidebar"
                    @toggle-sidebar="toggleSidebar" />

                <!--===============
                    CONTENT AREA
                ===================-->
                <main class="flex-1 overflow-auto">

                    <section class="mx-auto p-6">

                        <!--==============
                            ROUTER-VIEW
                        ==================-->
                        <router-view />

                    </section>

                </main>

            </article>

        </section>

    </main>

</template>