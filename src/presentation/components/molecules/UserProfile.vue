<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from "vue"
import Avatar from "@/presentation/components/atoms/Avatar.vue"
import Button from "@/presentation/components/atoms/Button.vue"
import Icon from "@/presentation/components/atoms/Icon.vue"

/**======================
 * MENU ITEM INTERFACE
=========================*/
interface MenuItem {
    label: string
    icon: string
    action: string
}

/**=========================
 * USER PROFILE INTERFACE
============================*/
interface Props {
    name: string
    email: string
    avatarSrc: string
    showDropdown?: boolean
    menuItems?: MenuItem[]
}

/**=======================
 * DEFAULT PROPS VALUES
==========================*/
withDefaults(defineProps<Props>(), {
    showDropdown: true,
    menuItems: () => [
        { label: "Mi Perfil", icon: "user", action: "profile" },
        { label: "Configuración", icon: "settings", action: "settings" },
        { label: "Cerrar Sesión", icon: "log-out", action: "logout" },
    ],
})

/**========
 * EMITS
===========*/
const emit = defineEmits<{
    "toggle-dropdown": []
    "menu-item-click": [action: string]
}>()

/**=================
 * DROPDOWN STATE
====================*/
const isDropdownOpen = ref(false)
const dropdownRef = ref<HTMLElement | null>(null)

/**===============================
 * HANDLE TOGGLE DROPDOWN EVENT
 * @returns {void}
==================================*/
const handleToggleDropdown = (): void => {
    isDropdownOpen.value = !isDropdownOpen.value
    emit("toggle-dropdown")
}

/**===============================
 * HANDLE MENU ITEM CLICK EVENT
 * @param {string} action
 * @returns {void}
==================================*/
const handleMenuItemClick = (action: string): void => {
    emit("menu-item-click", action)
    isDropdownOpen.value = false
}

/**=============================
 * HANDLE CLICK OUTSIDE EVENT
 * @param {MouseEvent} event
 * @returns {void}
================================*/
const handleClickOutside = (event: MouseEvent): void => {
    if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
        isDropdownOpen.value = false
    }
}

/**=============
 * ON MOUNTED
================*/
onMounted(() => {
    document.addEventListener("click", handleClickOutside)
})

/**===============
 * ON UNMOUNTED
==================*/
onUnmounted(() => {
    document.removeEventListener("click", handleClickOutside)
})
</script>

<template>

    <!--=========================
        USER PROFILE COMPONENT
    =============================-->
    <section class="relative" ref="dropdownRef">

        <!--======================
            USER PROFILE BUTTON
        ==========================-->
        <article
            class="flex items-center space-x-3 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg p-2 transition-colors"
            @click="handleToggleDropdown">
            <Avatar :src="avatarSrc" :alt="name" />
            <div class="flex-1 min-w-0">
                <p class="text-sm font-medium truncate dark:text-white">{{ name }}</p>
                <p class="text-xs text-gray-400 truncate">{{ email }}</p>
            </div>
            <Button v-if="showDropdown" variant="ghost" size="sm" class="p-1" @click.stop="handleToggleDropdown">
                <Icon name="chevron-down" size="sm" :class="[
                    'text-gray-400 transition-transform duration-200',
                    isDropdownOpen ? 'rotate-180' : ''
                ]" />
            </Button>
        </article>

        <!--================
            DROPDOWN MENU
        ====================-->
        <Transition enter-active-class="transition ease-out duration-100"
            enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
            leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100"
            leave-to-class="transform opacity-0 scale-95">
            <article v-if="isDropdownOpen && showDropdown"
                class="absolute bottom-full left-0 mb-2 w-48 bg-white dark:bg-gray-700 rounded-lg shadow-lg border border-gray-200 dark:border-gray-500 py-1 z-50">
                <Button v-for="item in menuItems" :key="item.action" variant="ghost" size="sm"
                    class="w-full justify-start space-x-3 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                    @click="handleMenuItemClick(item.action)">
                    <Icon :name="item.icon" size="sm" />
                    <span>{{ item.label }}</span>
                </Button>
            </article>
        </Transition>

    </section>

</template>
