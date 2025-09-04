import type { App } from "vue"
import { useThemeStore } from "@/presentation/stores/themeStore"
import { setupAnimXYZ } from "./animxyz"
import { setupPinia } from "./pinia"
import { setupRouter } from "./vue-router"

export function setupPlugins(app: App) {
    setupPinia(app)
    useThemeStore()
    setupRouter(app)
    setupAnimXYZ(app)
}
