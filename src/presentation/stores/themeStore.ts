import { defineStore } from "pinia"
import { ref, watch } from "vue"

export const useThemeStore = defineStore("theme", () => {
    const theme = ref("light")

    // Aplicar el tema al documento HTML
    const applyTheme = (newTheme: string) => {
        if (typeof document !== 'undefined') {
            if (newTheme === 'dark') {
                document.documentElement.classList.add('dark')
            } else {
                document.documentElement.classList.remove('dark')
            }
        }
    }

    // Inicializar el tema desde localStorage o usar 'light' por defecto
    const initTheme = () => {
        if (typeof window !== 'undefined') {
            const savedTheme = localStorage.getItem('theme') || 'light'
            theme.value = savedTheme
            applyTheme(savedTheme)
        }
    }

    const toggleTheme = () => {
        theme.value = theme.value === "light" ? "dark" : "light"
    }

    // Observar cambios en el tema y aplicarlos
    watch(theme, (newTheme) => {
        applyTheme(newTheme)
        if (typeof window !== 'undefined') {
            localStorage.setItem('theme', newTheme)
        }
    })

    // Inicializar tema al crear el store
    initTheme()

    return {
        theme,
        toggleTheme,
    }
})
