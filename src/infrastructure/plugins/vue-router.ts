import type { App } from "vue"
import router from "../../presentation/router"

export function setupRouter(app: App) {
    app.use(router)
}
