<template>
  <div class="relative">
    <!-- Botón del selector -->
    <button
      @click="isOpen = !isOpen"
      class="flex items-center justify-center w-10 h-10 rounded-lg transition-colors duration-200 hover:bg-hover-medium focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 cursor-pointer"
      :class="[
        currentTheme.mode === 'dark' 
          ? 'text-text-primary hover:bg-primary-100' 
          : 'text-text-primary hover:bg-primary-100'
      ]"
      aria-label="Selector de tema"
    >
      <Icon 
        :name="currentTheme.mode === 'dark' ? 'moon' : 'sun'" 
        class="w-5 h-5" 
      />
    </button>

    <!-- Panel del selector -->
    <div
      v-if="isOpen"
      class="absolute right-0 top-12 w-80 bg-card border border-border rounded-lg shadow-lg z-50 p-4"
      @click.stop
    >
      <!-- Header -->
      <div class="flex items-center justify-between mb-4">
        <h3 class="text-lg font-semibold text-text-primary">Seleccionar Tema</h3>
        <button
          @click="isOpen = false"
          class="text-text-muted hover:text-text-primary transition-colors cursor-pointer"
        >
          <Icon name="x" class="w-5 h-5" />
        </button>
      </div>

      <!-- Toggle rápido de modo -->
      <div class="flex items-center justify-between mb-4 p-3 bg-surface-50 rounded-lg">
        <span class="text-sm font-medium text-text-primary">Modo {{ currentTheme.mode === 'dark' ? 'Oscuro' : 'Claro' }}</span>
        <button
          @click="themeStore.toggleMode()"
          class="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          :class="currentTheme.mode === 'dark' ? 'bg-primary-600' : 'bg-surface-300'"
        >
          <span
            class="inline-block h-4 w-4 transform rounded-full bg-white transition-transform"
            :class="currentTheme.mode === 'dark' ? 'translate-x-6' : 'translate-x-1'"
          />
        </button>
      </div>

      <!-- Lista de temas por modo -->
      <div class="space-y-4">
        <!-- Temas claros -->
        <div>
          <h4 class="text-sm font-medium text-text-secondary mb-2">Temas Claros</h4>
          <div class="grid grid-cols-2 gap-2">
            <button
              v-for="theme in lightThemes"
              :key="theme.id"
              @click="selectTheme(theme.id)"
              class="relative p-3 rounded-lg border-2 transition-all duration-200 hover:shadow-md group cursor-pointer"
              :class="[
                currentTheme.id === theme.id
                  ? 'border-primary-500 bg-primary-50'
                  : 'border-border hover:border-primary-300'
              ]"
            >
              <!-- Preview del tema -->
              <div class="flex space-x-1 mb-2">
                <div
                  class="w-4 h-4 rounded-full border border-surface-300"
                  :style="{ backgroundColor: theme.colors.primary }"
                />
                <div
                  class="w-4 h-4 rounded-full border border-surface-300"
                  :style="{ backgroundColor: theme.colors.secondary }"
                />
                <div
                  class="w-4 h-4 rounded-full border border-surface-300"
                  :style="{ backgroundColor: theme.colors.accent }"
                />
              </div>
              
              <!-- Nombre del tema -->
              <div class="text-left">
                <p class="text-sm font-medium text-text-primary truncate">{{ theme.name }}</p>
                <p class="text-xs text-text-muted truncate">{{ theme.description }}</p>
              </div>

              <!-- Indicador de tema activo -->
              <div
                v-if="currentTheme.id === theme.id"
                class="absolute top-2 right-2 w-4 h-4 bg-primary-500 rounded-full flex items-center justify-center"
              >
                <Icon name="check" class="w-3 h-3 text-white" />
              </div>
            </button>
          </div>
        </div>

        <!-- Temas oscuros -->
        <div>
          <h4 class="text-sm font-medium text-text-secondary mb-2">Temas Oscuros</h4>
          <div class="grid grid-cols-2 gap-2">
            <button
              v-for="theme in darkThemes"
              :key="theme.id"
              @click="selectTheme(theme.id)"
              class="relative p-3 rounded-lg border-2 transition-all duration-200 hover:shadow-md group cursor-pointer"
              :class="[
                currentTheme.id === theme.id
                  ? 'text-white' 
                  : 'border-border hover:border-primary-300'
              ]"
              :style="getSelectedDarkThemeBackground(theme)"
            >
              <!-- Preview del tema -->
              <div class="flex space-x-1 mb-2">
                <div
                  class="w-4 h-4 rounded-full border border-surface-300"
                  :style="{ backgroundColor: theme.colors.primary }"
                />
                <div
                  class="w-4 h-4 rounded-full border border-surface-300"
                  :style="{ backgroundColor: theme.colors.secondary }"
                />
                <div
                  class="w-4 h-4 rounded-full border border-surface-300"
                  :style="{ backgroundColor: theme.colors.accent }"
                />
              </div>
              
              <!-- Nombre del tema -->
              <div class="text-left">
                <p class="text-sm font-medium truncate" :class="currentTheme.id === theme.id ? 'text-white' : 'text-text-primary'">{{ theme.name }}</p>
                <p class="text-xs truncate" :class="currentTheme.id === theme.id ? 'text-gray-300' : 'text-text-muted'">{{ theme.description }}</p>
              </div>

              <!-- Indicador de tema activo -->
              <div
                v-if="currentTheme.id === theme.id"
                class="absolute top-2 right-2 w-4 h-4 bg-primary-500 rounded-full flex items-center justify-center"
              >
                <Icon name="check" class="w-3 h-3 text-white" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Overlay para cerrar el panel -->
    <div
      v-if="isOpen"
      class="fixed inset-0 z-40"
      @click="isOpen = false"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useThemeStore } from '@/presentation/stores/themeStore'
import { Icon } from '@/presentation/components'
import type { ThemeId } from '@/presentation/types/theme'

const themeStore = useThemeStore()
const isOpen = ref(false)

const currentTheme = computed(() => themeStore.currentTheme)
const lightThemes = computed(() => themeStore.lightThemes)
const darkThemes = computed(() => themeStore.darkThemes)

const selectTheme = (themeId: ThemeId) => {
  themeStore.setTheme(themeId)
  // No cerrar automáticamente para permitir comparar temas
}

// Función para obtener el color de fondo del tema seleccionado
const getSelectedDarkThemeBackground = (theme: any) => {
  if (currentTheme.value.id !== theme.id) return {}
  
  // Convertir hex a rgba con opacidad
  const hex = theme.colors.primary.replace('#', '')
  const r = parseInt(hex.substr(0, 2), 16)
  const g = parseInt(hex.substr(2, 2), 16)
  const b = parseInt(hex.substr(4, 2), 16)
  
  return {
    backgroundColor: `rgba(${r}, ${g}, ${b}, 0.2)`,
    borderColor: theme.colors.primary
  }
}

// Cerrar el panel al presionar Escape
const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    isOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
})
</script>
