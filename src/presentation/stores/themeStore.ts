import { defineStore } from "pinia"
import { ref, watch, computed } from "vue"
import { AVAILABLE_THEMES, type Theme, type ThemeId } from "@/presentation/types/theme"

export const useThemeStore = defineStore("theme", () => {
    const currentThemeId = ref<ThemeId>("light")

    // Tema actual basado en el ID
    const currentTheme = computed<Theme>(() => {
        return AVAILABLE_THEMES.find(theme => theme.id === currentThemeId.value) || AVAILABLE_THEMES[0]
    })

    // Temas agrupados por modo
    const lightThemes = computed(() => AVAILABLE_THEMES.filter(theme => theme.mode === 'light'))
    const darkThemes = computed(() => AVAILABLE_THEMES.filter(theme => theme.mode === 'dark'))

    // Función para aplicar el tema al documento HTML
    const applyTheme = (themeId: ThemeId) => {
        if (typeof document === 'undefined') return

        const theme = AVAILABLE_THEMES.find(t => t.id === themeId)
        if (!theme) return

        const html = document.documentElement
        
        // Remover todas las clases de tema existentes
        html.classList.remove('dark')
        AVAILABLE_THEMES.forEach(t => {
            if (t.id !== 'light' && t.id !== 'dark') {
                const themeClass = getThemeClass(t.id)
                html.classList.remove(themeClass)
            }
        })

        // Aplicar el nuevo tema
        if (theme.mode === 'dark') {
            html.classList.add('dark')
        }

        if (theme.id !== 'light' && theme.id !== 'dark') {
            const themeClass = getThemeClass(theme.id)
            html.classList.add(themeClass)
        }
    }

    // Función para obtener la clase CSS del tema
    const getThemeClass = (themeId: ThemeId): string => {
        const themeMapping: Record<string, string> = {
            'emerald-light': 'theme-emerald',
            'emerald-dark': 'theme-emerald',
            'purple-light': 'theme-purple',
            'purple-dark': 'theme-purple',
            'rose-light': 'theme-rose',
            'rose-dark': 'theme-rose',
            'ocean-light': 'theme-ocean',
            'ocean-dark': 'theme-ocean',
            'sunset-light': 'theme-sunset',
            'sunset-dark': 'theme-sunset',
        }
        return themeMapping[themeId] || ''
    }

    // Inicializar el tema desde localStorage
    const initTheme = () => {
        if (typeof window !== 'undefined') {
            const savedThemeId = localStorage.getItem('themeId') as ThemeId || 'light'
            currentThemeId.value = savedThemeId
            applyTheme(savedThemeId)
        }
    }

    // Cambiar tema
    const setTheme = (themeId: ThemeId) => {
        currentThemeId.value = themeId
    }

    // Toggle entre modo claro y oscuro manteniendo la paleta de colores
    const toggleMode = () => {
        const current = currentTheme.value
        let targetThemeId: ThemeId

        if (current.mode === 'light') {
            // Buscar la versión oscura del tema actual
            if (current.id === 'light') {
                targetThemeId = 'dark'
            } else {
                const baseTheme = current.id.replace('-light', '')
                targetThemeId = `${baseTheme}-dark` as ThemeId
            }
        } else {
            // Buscar la versión clara del tema actual
            if (current.id === 'dark') {
                targetThemeId = 'light'
            } else {
                const baseTheme = current.id.replace('-dark', '')
                targetThemeId = `${baseTheme}-light` as ThemeId
            }
        }

        // Verificar que el tema objetivo existe
        const targetTheme = AVAILABLE_THEMES.find(t => t.id === targetThemeId)
        if (targetTheme) {
            setTheme(targetThemeId)
        }
    }

    // Función de compatibilidad con el sistema anterior
    const toggleTheme = () => {
        toggleMode()
    }

    // Observar cambios en el tema y aplicarlos
    watch(currentThemeId, (newThemeId) => {
        applyTheme(newThemeId)
        if (typeof window !== 'undefined') {
            localStorage.setItem('themeId', newThemeId)
        }
    })

    // Inicializar tema al crear el store
    initTheme()

    return {
        // Estado
        currentThemeId,
        currentTheme,
        lightThemes,
        darkThemes,
        availableThemes: AVAILABLE_THEMES,
        
        // Acciones
        setTheme,
        toggleMode,
        toggleTheme, // Para compatibilidad
        
        // Computed
        theme: currentTheme, // Para compatibilidad
    }
})
