import { defineStore } from "pinia"
import { ref, watch } from "vue"

/**==================================
 * THEME STORE RESOURCES INTERFACE
=====================================*/
interface ThemeStoreResources {
    theme: string;
    toggleTheme: () => void;
}

/**=================================
 * USE THEME STORE
 * @returns {ThemeStoreResources}
====================================*/
export const useThemeStore = defineStore("theme", (): ThemeStoreResources => {
    
    /**=========
     * STATES
    ============*/
    const theme = ref("light");

    /**===========================
     * APPLY THEME FUNCTION
     * @param {string} newTheme 
     * @returns {void}
    ==============================*/
    const applyTheme = (newTheme: string): void => {
        if (typeof document !== 'undefined') {
            if (newTheme === 'dark') {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        }
    }

    /**======================
     * INIT THEME FUNCTION
     * @returns {void}
    =========================*/
    const initTheme = (): void => {
        if (typeof window !== 'undefined') {
            const savedTheme = localStorage.getItem('theme') || 'light';
            theme.value = savedTheme;
            applyTheme(savedTheme);
        }
    }

    /**========================
     * TOGGLE THEME FUNCTION
     * @returns {void}
    ===========================*/
    const toggleTheme = (): void => {
        theme.value = theme.value === "light" ? "dark" : "light";
    }

    /**======================
     * WATCH THEME CHANGES
    =========================*/
    watch(theme, (newTheme) => {
        applyTheme(newTheme);
        if (typeof window !== 'undefined') {
            localStorage.setItem('theme', newTheme);
        }
    })

    /**===================
     * INITIALIZE THEME
    ======================*/
    initTheme();

    return {
        theme: theme.value,
        toggleTheme,
    }
    
})
