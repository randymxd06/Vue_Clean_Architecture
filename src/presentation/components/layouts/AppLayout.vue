<script lang="ts" setup>
import { ref } from 'vue';
const sidebarVisible = ref(true);
</script>

<template>

    <main class="h-screen flex bg-gray-100">

        <!--==========
            SIDEBAR
        ==============-->
        <aside v-if="sidebarVisible" class="w-64 flex flex-col bg-gray-100">

            <!--==================
                LOGO / APP NAME
            ======================-->
            <section class="p-4">

                <article class="flex items-center space-x-2">

                    <!--=======
                        LOGO
                    ===========-->
                    <div class="w-10 h-10 bg-black rounded-xl flex items-center justify-center">
                        <span class="text-gray-100 text-sm font-bold">M</span>
                    </div>

                    <!--===========
                        APP NAME
                    ===============-->
                    <div>
                        <h1 class="font-semibold">Mi Aplicación</h1>
                        <p class="text-xs font-semibold">Versión 2.0</p>
                    </div>

                </article>

            </section>

            <!--=============
                NAVIGATION
            =================-->
            <nav class="mt-2 flex-1 overflow-y-auto">

                <section class="px-4 mb-2">
                    <p class="text-xs font-medium text-gray-500 tracking-wide">
                        Navegación Principal
                    </p>
                </section>

                <ul class="space-y-1 px-4">
                    <li>
                        <a href="#" class="flex items-center space-x-3 px-3 py-2 rounded-lg bg-gray-200 font-semibold">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="m8 5l4-4 4 4" />
                            </svg>
                            <span>Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href="#"
                            class="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-200 transition-colors font-semibold">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                            <span>Proyectos</span>
                            <span class="ml-auto bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">12</span>
                        </a>
                    </li>
                    <li>
                        <a href="#"
                            class="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-200 transition-colors font-semibold">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                            <span>Mensajes</span>
                            <span class="ml-auto bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">3</span>
                        </a>
                    </li>
                    <li>
                        <a href="#"
                            class="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-200 transition-colors font-semibold">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2v16a2 2 0 002 2z" />
                            </svg>
                            <span>Calendario</span>
                        </a>
                    </li>
                    <li>
                        <a href="#"
                            class="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-200 transition-colors font-semibold">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <span>Documentos</span>
                        </a>
                    </li>
                    <li>
                        <a href="#"
                            class="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-200 transition-colors font-semibold">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                            <span>Analíticas</span>
                        </a>
                    </li>
                    <li>
                        <a href="#"
                            class="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-200 transition-colors font-semibold">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <span>Equipo</span>
                        </a>
                    </li>
                </ul>

            </nav>

            <!--=================
                BOTTOM SECTION
            =====================-->
            <section class="p-4 mt-auto">

                <!--=====================
                    SETTINGS AND INBOX
                =========================-->
                <article class="space-y-2 mb-4">
                    <a href="#"
                        class="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-200 transition-colors font-semibold">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span class="text-sm">Configuración</span>
                    </a>
                    <a href="#"
                        class="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-200 transition-colors font-semibold">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                        </svg>
                        <span class="text-sm">Bandeja de entrada</span>
                    </a>
                </article>

                <!--===============
                    USER PROFILE
                ===================-->
                <article class="pt-4">
                    <div class="flex items-center space-x-3">
                        <img class="w-8 h-8 rounded-full"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face"
                            alt="Sofia Davis">
                        <div class="flex-1 min-w-0">
                            <p class="text-sm font-mediumtruncate">Sofia Davis</p>
                            <p class="text-xs text-gray-400 truncate">sofia@example.com</p>
                        </div>
                        <button class="p-1 rounded hover:bg-gray-200 transition-colors">
                            <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                    </div>
                </article>

            </section>

        </aside>

        <!--====================
            MAIN CONTENT AREA
        ========================-->
        <section class="flex-1 flex flex-col overflow-hidden pr-2 pt-2" :class="{ 'pl-2': !sidebarVisible }">

            <!--===========================
                CONTENT CARD WITH TOPBAR
            ===============================-->
            <article class="bg-white rounded-t-xl shadow-sm flex-1 flex flex-col overflow-hidden">

                <!--==========
                    TOP BAR
                ==============-->
                <header class="h-16 flex items-center justify-between px-6">

                    <section class="flex gap-10">

                        <!--=============================
                            HIDE / SHOW SIDEBAR BUTTON
                        =================================-->
                        <button type="button" class="cursor-pointer transition-transform hover:scale-110"
                            @click="sidebarVisible = !sidebarVisible">
                            <svg width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                                fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="feather feather-sidebar">
                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                <line x1="9" y1="3" x2="9" y2="21"></line>
                            </svg>
                        </button>

                        <!--=============
                            BREADCRUMB
                        =================-->
                        <article class="flex items-center space-x-2">
                            <span class="text-gray-500">Dashboard</span>
                            <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 5l7 7-7 7" />
                            </svg>
                            <span class="text-gray-900 font-medium">Inicio</span>
                        </article>

                    </section>

                    <!--=====================
                        SEARCH AND ACTIONS
                    =========================-->
                    <section class="flex items-center space-x-4">

                        <!--=========
                            SEARCH
                        =============-->
                        <article class="relative">
                            <input type="text" placeholder="Buscar..."
                                class="w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                            <svg class="w-5 h-5 text-gray-400 absolute left-3 top-2.5" fill="none" stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </article>

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
                        <button
                            class="p-2 rounded-lg hover:bg-gray-100 relative transition-colors font-semibold cursor-pointer">
                            <svg class="w-5 h-5 text-gray-600" fill="none" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512">
                                <path fill="currentColor"
                                    d="M224 0c-8.8 0-16 7.2-16 16l0 16.8C127.1 40.8 64 109 64 192l0 10.3c0 45.1-15.4 88.9-43.5 124.1L10.4 339C3.7 347.4 0 357.9 0 368.6 0 394.8 21.2 416 47.4 416l353.2 0c26.2 0 47.4-21.2 47.4-47.4 0-10.8-3.7-21.2-10.4-29.6l-10.1-12.6c-28.2-35.2-43.5-79-43.5-124.1l0-10.3c0-83-63.1-151.2-144-159.2L240 16c0-8.8-7.2-16-16-16zm0 64c70.7 0 128 57.3 128 128l0 10.3c0 52.4 17.8 103.2 50.6 144.1L412.6 359c2.2 2.7 3.4 6.1 3.4 9.6 0 8.5-6.9 15.4-15.4 15.4L47.4 384c-8.5 0-15.4-6.9-15.4-15.4 0-3.5 1.2-6.9 3.4-9.6l10.1-12.6C78.2 305.5 96 254.7 96 202.3L96 192c0-70.7 57.3-128 128-128zM156.1 464c9.9 28 36.6 48 67.9 48s58-20 67.9-48L256 464c-7.3 9.7-18.9 16-32 16s-24.7-6.3-32-16l-35.9 0z" />
                            </svg>
                            <span class="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                        </button>

                        <!--=============
                            ADD BUTTON
                        =================-->
                        <button
                            class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center space-x-2 transition-colors cursor-pointer">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 4v16m8-8H4" />
                            </svg>
                            <span>Agregar</span>
                        </button>

                    </section>

                </header>

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