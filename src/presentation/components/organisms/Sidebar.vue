<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue';

interface Props {
    isMobile: boolean;
    sidebarVisible: boolean;
}

defineProps<Props>();

const emit = defineEmits(['close-sidebar']);
</script>

<template>

    <!--==========
        SIDEBAR
    ==============-->
    <aside :class="[
        'w-64 flex flex-col bg-gray-100 transform transition-all duration-700 ease-in-out z-50',
        isMobile
            ? [
                'fixed top-0 left-0 h-full shadow-xl',
                sidebarVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0 pointer-events-none'
            ]
            : [
                'relative h-full',
                sidebarVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0 pointer-events-none'
            ]
    ]">

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
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 5l4-4 4 4" />
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
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                </div>
            </article>

        </section>

    </aside>
    
</template>