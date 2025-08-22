import type { App } from 'vue'
import { setupPinia } from './pinia'
import { setupRouter } from './vue-router'
import { setupAnimXYZ } from './animxyz'

export function setupPlugins(app: App) {
    setupPinia(app);
    setupRouter(app);
    setupAnimXYZ(app);
}