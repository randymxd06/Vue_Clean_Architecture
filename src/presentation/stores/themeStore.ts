import { defineStore } from "pinia"
import { type ComputedRef, computed, ref, watch } from "vue"
import { AVAILABLE_THEMES, type Theme, type ThemeId } from "@/presentation/types/theme"

/**==================================
 * THEME STORE RESOURCES INTERFACE
=====================================*/
interface ThemeStoreResources {
    theme: string
    currentTheme: ComputedRef<Theme>
    lightThemes: ComputedRef<Theme[]>
    darkThemes: ComputedRef<Theme[]>
    toggleTheme: () => void
    toggleMode: () => void
    setTheme: (themeId: ThemeId) => void
}

/**=================================
 * USE THEME STORE
 * @returns {ThemeStoreResources}
====================================*/
export const useThemeStore = defineStore("theme", (): ThemeStoreResources => {
    /**=========
     * STATES
    ============*/
    const theme = ref<ThemeId>("light")

    /**================
     * COMPUTED
    ===================*/
    const currentTheme = computed((): Theme => {
        return AVAILABLE_THEMES.find(t => t.id === theme.value) || AVAILABLE_THEMES[0]
    })

    const lightThemes = computed((): Theme[] => {
        return AVAILABLE_THEMES.filter(t => t.mode === "light")
    })

    const darkThemes = computed((): Theme[] => {
        return AVAILABLE_THEMES.filter(t => t.mode === "dark")
    })

    /**===========================
     * APPLY THEME FUNCTION
     * @param {string} newTheme 
     * @returns {void}
    ==============================*/
    const applyTheme = (newTheme: string): void => {
        if (typeof document !== "undefined") {
            const themeObj = AVAILABLE_THEMES.find(t => t.id === newTheme)
            if (themeObj?.mode === "dark") {
                document.documentElement.classList.add("dark")
            } else {
                document.documentElement.classList.remove("dark")
            }
        }
    }

    /**======================
     * INIT THEME FUNCTION
     * @returns {void}
    =========================*/
    const initTheme = (): void => {
        if (typeof window !== "undefined") {
            const savedTheme = localStorage.getItem("theme") ?? "light"
            if (AVAILABLE_THEMES.find(t => t.id === savedTheme)) {
                theme.value = savedTheme
            }
            applyTheme(theme.value)
        }
    }

    /**========================
     * TOGGLE THEME FUNCTION
     * @returns {void}
    ===========================*/
    const toggleTheme = (): void => {
        theme.value = theme.value === "light" ? "dark" : "light"
    }

    /**========================
     * TOGGLE MODE FUNCTION
     * @returns {void}
    ===========================*/
    const toggleMode = (): void => {
        const currentMode = currentTheme.value.mode
        if (currentMode === "light") {
            // Find the first dark theme
            const darkTheme = AVAILABLE_THEMES.find(t => t.mode === "dark")
            if (darkTheme) {
                theme.value = darkTheme.id
            }
        } else {
            // Find the first light theme
            const lightTheme = AVAILABLE_THEMES.find(t => t.mode === "light")
            if (lightTheme) {
                theme.value = lightTheme.id
            }
        }
    }

    /**========================
     * SET THEME FUNCTION
     * @param {ThemeId} themeId
     * @returns {void}
    ===========================*/
    const setTheme = (themeId: ThemeId): void => {
        if (AVAILABLE_THEMES.find(t => t.id === themeId)) {
            theme.value = themeId
        }
    }

    /**======================
     * WATCH THEME CHANGES
    =========================*/
    watch(theme, newTheme => {
        applyTheme(newTheme)
        if (typeof window !== "undefined") {
            localStorage.setItem("theme", newTheme)
        }
    })

    /**===================
     * INITIALIZE THEME
    ======================*/
    initTheme()

    return {
        theme: theme.value,
        currentTheme,
        lightThemes,
        darkThemes,
        toggleTheme,
        toggleMode,
        setTheme,
    }
})
