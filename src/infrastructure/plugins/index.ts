import type { App } from 'vue'
import { setupPinia } from './pinia'
import { setupRouter } from './vue-router'
import { setupAnimXYZ } from './animxyz'
import { useThemeStore } from '@/presentation/stores/themeStore'

export function setupPlugins(app: App) {
    setupPinia(app);
    
    // Inicializar el theme store después de Pinia
    const themeStore = useThemeStore();
    
    setupRouter(app);
    setupAnimXYZ(app);
}