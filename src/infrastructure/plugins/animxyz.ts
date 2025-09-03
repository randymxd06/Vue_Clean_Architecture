import VueAnimXyz from "@animxyz/vue3"
import type { App } from "vue"
import "@animxyz/core"

export function setupAnimXYZ(app: App) {
    app.use(VueAnimXyz)

    // OPTIONAL: CUSTOM CONFIGURATION
    // const xyzConfig = { /* your settings */ }
    // app.use(VueAnimXyz, xyzConfig)
}
