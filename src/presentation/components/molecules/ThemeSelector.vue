<template>
  <div class="relative">
    <!-- Selector button -->
    <button
      @click="isOpen = !isOpen"
      class="flex items-center justify-center w-10 h-10 rounded-lg transition-colors duration-200 hover:bg-hover-medium focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 cursor-pointer"
      :class="[
        currentTheme.mode === 'dark' 
          ? 'text-text-primary hover:bg-primary-100' 
          : 'text-text-primary hover:bg-primary-100'
      ]"
      aria-label="Theme selector"
    >
      <Icon 
        :name="currentTheme.mode === 'dark' ? 'moon' : 'sun'" 
        class="w-5 h-5" 
      />
    </button>

    <!-- Selector panel -->
    <div
      v-if="isOpen"
      class="absolute right-0 top-12 w-80 bg-card border border-border rounded-lg shadow-lg z-50 p-4 transform transition-all duration-700 ease-in-out"
      @click.stop
    >
      <!-- Header -->
      <div class="flex items-center justify-between mb-4">
        <h3 class="text-lg font-semibold text-text-primary">Select Theme</h3>
        <button
          @click="isOpen = false"
          class="text-text-muted hover:text-text-primary transition-colors cursor-pointer"
        >
          <Icon name="x" class="w-5 h-5" />
        </button>
      </div>

      <!-- Quick mode toggle -->
      <div class="flex items-center justify-between mb-4 p-3 bg-surface-50 rounded-lg transform transition-all duration-700 ease-in-out">
        <span class="text-sm font-medium text-text-primary">{{ currentTheme.mode === 'dark' ? 'Dark' : 'Light' }} Mode</span>
        <button
          @click="themeStore.toggleMode()"
          class="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 cursor-pointer"
          :class="currentTheme.mode === 'dark' ? 'bg-primary-600' : 'bg-surface-300'"
        >
          <span
            class="inline-block h-4 w-4 transform rounded-full bg-white transition-transform"
            :class="currentTheme.mode === 'dark' ? 'translate-x-6' : 'translate-x-1'"
          />
        </button>
      </div>

      <!-- Theme list by mode -->
      <div class="space-y-4">
        <!-- Light themes -->
        <div>
          <h4 class="text-sm font-medium text-text-secondary mb-2">Light Themes</h4>
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
              <!-- Theme preview -->
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
              
              <!-- Theme name -->
              <div class="text-left">
                <p class="text-sm font-medium text-text-primary truncate">{{ theme.name }}</p>
                <p class="text-xs text-text-muted truncate">{{ theme.description }}</p>
              </div>

              <!-- Active theme indicator -->
              <div
                v-if="currentTheme.id === theme.id"
                class="absolute top-2 right-2 w-4 h-4 bg-primary-500 rounded-full flex items-center justify-center"
              >
                <Icon name="check" class="w-3 h-3 text-white" />
              </div>
            </button>
          </div>
        </div>

        <!-- Dark themes -->
        <div>
          <h4 class="text-sm font-medium text-text-secondary mb-2">Dark Themes</h4>
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
              <!-- Theme preview -->
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
              
              <!-- Theme name -->
              <div class="text-left">
                <p class="text-sm font-medium truncate" :class="currentTheme.id === theme.id ? 'text-white' : 'text-text-primary'">{{ theme.name }}</p>
                <p class="text-xs truncate" :class="currentTheme.id === theme.id ? 'text-gray-300' : 'text-text-muted'">{{ theme.description }}</p>
              </div>

              <!-- Active theme indicator -->
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

    <!-- Overlay to close panel -->
    <div
      v-if="isOpen"
      class="fixed inset-0 z-40"
      @click="isOpen = false"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from "vue"
import { Icon } from "@/presentation/components"
import { useThemeStore } from "@/presentation/stores/themeStore"
import type { ThemeId } from "@/presentation/types/theme"

const themeStore = useThemeStore()
const isOpen = ref(false)

const currentTheme = computed(() => themeStore.currentTheme)
const lightThemes = computed(() => themeStore.lightThemes)
const darkThemes = computed(() => themeStore.darkThemes)

const selectTheme = (themeId: ThemeId) => {
    themeStore.setTheme(themeId)
    // Don't close automatically to allow theme comparison
}

// Function to get the background color of the selected theme
const getSelectedDarkThemeBackground = (theme: any) => {
    if (currentTheme.value.id !== theme.id) return {}

    // Convert hex to rgba with opacity
    const hex = theme.colors.primary.replace("#", "")
    const r = parseInt(hex.substr(0, 2), 16)
    const g = parseInt(hex.substr(2, 2), 16)
    const b = parseInt(hex.substr(4, 2), 16)

    return {
        backgroundColor: `rgba(${r}, ${g}, ${b}, 0.2)`,
        borderColor: theme.colors.primary,
    }
}

// Close panel when pressing Escape key
const handleKeydown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
        isOpen.value = false
    }
}

onMounted(() => {
    document.addEventListener("keydown", handleKeydown)
})

onUnmounted(() => {
    document.removeEventListener("keydown", handleKeydown)
})
</script>
