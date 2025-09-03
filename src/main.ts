import "./presentation/assets/css/main.css"
import { createApp } from "vue"
import { setupPlugins } from "./infrastructure/plugins"
import App from "./presentation/App.vue"

const app = createApp(App)

setupPlugins(app)

app.mount("#app")
