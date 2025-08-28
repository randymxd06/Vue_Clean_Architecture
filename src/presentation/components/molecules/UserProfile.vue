<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue';
import Avatar from '@/presentation/components/atoms/Avatar.vue';
import Icon from '@/presentation/components/atoms/Icon.vue';
import Button from '@/presentation/components/atoms/Button.vue';

interface MenuItem {
  label: string;
  icon: string; // Cualquier nombre de icono de Lucide
  action: string;
}

interface Props {
    name: string;
    email: string;
    avatarSrc: string;
    showDropdown?: boolean;
    menuItems?: MenuItem[];
}

const props = withDefaults(defineProps<Props>(), {
    showDropdown: true,
    menuItems: () => [
        { label: 'Mi Perfil', icon: 'user', action: 'profile' },
        { label: 'Configuración', icon: 'settings', action: 'settings' },
        { label: 'Cerrar Sesión', icon: 'logout', action: 'logout' }
    ]
});

const emit = defineEmits<{
    'toggle-dropdown': [];
    'menu-item-click': [action: string];
}>();

const isDropdownOpen = ref(false);
const dropdownRef = ref<HTMLElement | null>(null);

const handleToggleDropdown = () => {
    isDropdownOpen.value = !isDropdownOpen.value;
    emit('toggle-dropdown');
};

const handleMenuItemClick = (action: string) => {
    emit('menu-item-click', action);
    isDropdownOpen.value = false;
};

// Cerrar dropdown cuando se hace click fuera
const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
        isDropdownOpen.value = false;
    }
};

onMounted(() => {
    document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside);
});
</script>

<template>
    <div class="relative" ref="dropdownRef">
        <!-- User Profile Button -->
        <div 
            class="flex items-center space-x-3 cursor-pointer hover:bg-gray-50 rounded-lg p-2 transition-colors"
            @click="handleToggleDropdown"
        >
            <Avatar :src="avatarSrc" :alt="name" />
            <div class="flex-1 min-w-0">
                <p class="text-sm font-medium truncate">{{ name }}</p>
                <p class="text-xs text-gray-400 truncate">{{ email }}</p>
            </div>
            <button 
                v-if="showDropdown"
                class="p-1 rounded hover:bg-gray-200 transition-colors"
                @click.stop="handleToggleDropdown"
            >
                <Icon 
                    name="chevron-down" 
                    size="sm" 
                    :class="[
                        'text-gray-400 transition-transform duration-200',
                        isDropdownOpen ? 'rotate-180' : ''
                    ]" 
                />
            </button>
        </div>

        <!-- Dropdown Menu -->
        <Transition
            enter-active-class="transition ease-out duration-100"
            enter-from-class="transform opacity-0 scale-95"
            enter-to-class="transform opacity-100 scale-100"
            leave-active-class="transition ease-in duration-75"
            leave-from-class="transform opacity-100 scale-100"
            leave-to-class="transform opacity-0 scale-95"
        >
            <div 
                v-if="isDropdownOpen && showDropdown"
                class="absolute bottom-full left-0 mb-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50"
            >
                <button
                    v-for="item in menuItems"
                    :key="item.action"
                    class="w-full flex items-center space-x-3 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors text-left"
                    @click="handleMenuItemClick(item.action)"
                >
                    <Icon :name="item.icon" size="sm" />
                    <span>{{ item.label }}</span>
                </button>
            </div>
        </Transition>
    </div>
</template>
