<template>

    <main class="flex min-h-screen bg-gray-50">

        <!--==========
            SIDEBAR
        ==============-->
        <section :class="[
            'fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0',
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        ]">

            <!--=================
                SIDEBAR HEADER
            =====================-->
            <article class="flex items-center justify-between h-16 px-6 border-b border-gray-200">

                <!--=================
                    LOGO AND TITLE
                =====================-->
                <section class="flex items-center space-x-3">

                    <!--=======
                        LOGO
                    ===========-->
                    <article class="flex items-center justify-center w-8 h-8 bg-blue-600 rounded-lg">
                        <i class="fas fa-chart-bar text-white text-sm"></i>
                    </article>

                    <!--========
                        TITLE
                    ============-->
                    <article class="hidden lg:block">
                        <h1 class="text-lg font-semibold text-gray-900">Mi Aplicación</h1>
                        <p class="text-xs text-gray-500">Versión 2.0</p>
                    </article>

                </section>

                <!--========================
                    CLOSE BUTTON (MOBILE)
                ============================-->
                <button @click="toggleSidebar"
                    class="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100">
                    <i class="fas fa-times"></i>
                </button>

            </article>

            <!--==================
                MAIN NAVIGATION
            ======================-->
            <article class="flex-1 px-4 py-6 space-y-2 overflow-y-auto">

                <section class="space-y-1">
                    <p class="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        Navegación Principal
                    </p>
                    <article class="space-y-1">
                        <a v-for="item in mainNavigation" :key="item.name" href="#" :class="[
                            'group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors duration-150',
                            item.isActive
                                ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700'
                                : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                        ]">
                            <i :class="[item.icon, 'mr-3 text-sm']"></i>
                            <span class="flex-1">{{ item.name }}</span>
                            <span v-if="item.badge"
                                class="ml-auto inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                {{ item.badge }}
                            </span>
                        </a>
                    </article>
                </section>

                <section class="pt-6 space-y-1">
                    <p class="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        Herramientas
                    </p>
                    <article class="space-y-1">
                        <a v-for="item in secondaryNavigation" :key="item.name" href="#"
                            class="group flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-50 hover:text-gray-900 transition-colors duration-150">
                            <i :class="[item.icon, 'mr-3 text-sm']"></i>
                            {{ item.name }}
                        </a>
                    </article>
                </section>

            </article>

            <!--============
                USER MENU
            ================-->
            <article class="flex-shrink-0 border-t border-gray-200 p-4">

                <section class="relative">

                    <button @click="toggleUserMenu"
                        class="group w-full flex items-center text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 p-2 hover:bg-gray-50 transition-colors duration-150 cursor-pointer">
                        <img class="inline-block h-9 w-9 rounded-full"
                            src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt="Sofia Davis" />
                        <article class="ml-3 text-left">
                            <p class="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                                Sofia Davis
                            </p>
                            <p class="text-xs font-medium text-gray-500 group-hover:text-gray-700">
                                sofia@example.com
                            </p>
                        </article>
                        <i class="fas fa-chevron-up ml-auto text-gray-400 group-hover:text-gray-600"></i>
                    </button>

                    <div v-if="userMenuOpen"
                        class="absolute bottom-full left-0 right-0 mb-1 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <article class="py-1">
                            <a href="#" class="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                <i class="fas fa-user mr-3"></i>
                                Perfil
                            </a>
                            <a href="#" class="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                <i class="fas fa-cog mr-3"></i>
                                Configuración
                            </a>
                            <div class="border-t border-gray-100"></div>
                            <a href="#" class="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                <i class="fas fa-sign-out-alt mr-3"></i>
                                Cerrar sesión
                            </a>
                        </article>
                    </div>

                </section>

            </article>

        </section>

        <!--==========================
            HEADER AND MAIN CONTENT
        ==============================-->
        <section class="flex-1 flex flex-col lg:ml-0">

            <!--=========
                HEADER
            =============-->
            <header class="bg-white shadow-sm border-b border-gray-200">
                <div class="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
                    <div class="flex items-center space-x-4">
                        <button @click="toggleSidebar"
                            class="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100">
                            <i class="fas fa-bars"></i>
                        </button>

                        <nav class="flex" aria-label="Breadcrumb">
                            <ol class="flex items-center space-x-2">
                                <li>
                                    <a href="#" class="text-gray-400 hover:text-gray-600">
                                        <i class="fas fa-home"></i>
                                    </a>
                                </li>
                                <li>
                                    <div class="flex items-center">
                                        <i class="fas fa-chevron-right text-gray-300 mx-2"></i>
                                        <a href="#" class="text-sm font-medium text-gray-500 hover:text-gray-700">
                                            Dashboard
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <div class="flex items-center">
                                        <i class="fas fa-chevron-right text-gray-300 mx-2"></i>
                                        <span class="text-sm font-medium text-gray-900">Inicio</span>
                                    </div>
                                </li>
                            </ol>
                        </nav>
                    </div>

                    <div class="flex items-center space-x-4">

                        <button @click="toggleTheme"
                            class="p-2 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100">
                            <i :class="isDark ? 'fas fa-sun' : 'fas fa-moon'"></i>
                        </button>

                        <button class="relative p-2 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100">
                            <i class="fas fa-bell"></i>
                            <span
                                class="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400 ring-2 ring-white"></span>
                        </button>

                    </div>
                </div>
            </header>

            <!--===============
                MAIN CONTENT
            ===================-->
            <div class="w-[95%] mx-auto my-7 p-6 bg-white rounded-xl shadow-sm">
                <router-view />
            </div>

        </section>

        <!--=========================
            MOBILE SIDEBAR OVERLAY
        =============================-->
        <section v-if="sidebarOpen" @click="closeSidebar" class="fixed inset-0 z-40 bg-black opacity-60 lg:hidden">
        </section>

    </main>

</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue"

// Reactive state
const sidebarOpen = ref(false)
const userMenuOpen = ref(false)
const isDark = ref(false)

// Navigation data
const mainNavigation = ref([
    { name: "Dashboard", icon: "fas fa-home", isActive: true },
    { name: "Proyectos", icon: "fas fa-folder", badge: "12" },
    { name: "Mensajes", icon: "fas fa-comments", badge: "3" },
    { name: "Calendario", icon: "fas fa-calendar" },
    { name: "Documentos", icon: "fas fa-file-alt" },
    { name: "Analíticas", icon: "fas fa-chart-line" },
    { name: "Equipo", icon: "fas fa-users" },
])

const secondaryNavigation = ref([
    { name: "Configuración", icon: "fas fa-cog" },
    { name: "Bandeja de entrada", icon: "fas fa-inbox" },
])

// Methods
const toggleSidebar = () => {
    sidebarOpen.value = !sidebarOpen.value
}

const closeSidebar = () => {
    sidebarOpen.value = false
}

const toggleUserMenu = () => {
    userMenuOpen.value = !userMenuOpen.value
}

const toggleTheme = () => {
    isDark.value = !isDark.value
}

// Close dropdowns when clicking outside
const handleClickOutside = event => {
    if (!event.target.closest(".relative")) {
        userMenuOpen.value = false
    }
}

// Handle responsive behavior
const handleResize = () => {
    if (window.innerWidth >= 1024) {
        sidebarOpen.value = false
    }
}

onMounted(() => {
    document.addEventListener("click", handleClickOutside)
    window.addEventListener("resize", handleResize)
})

onUnmounted(() => {
    document.removeEventListener("click", handleClickOutside)
    window.removeEventListener("resize", handleResize)
})
</script>

<style scoped>
/* Asegurar que FontAwesome esté disponible */
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');

/* Animaciones personalizadas */
.transform {
    transition-property: transform;
}

/* Scrollbar personalizado */
::-webkit-scrollbar {
    width: 6px;
}

::-webkit-scrollbar-track {
    background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
    background: #c1c1c1;
    border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
    background: #a8a8a8;
}
</style>