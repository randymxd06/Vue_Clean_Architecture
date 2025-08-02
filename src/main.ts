import "./presentation/assets/css/main.css";

import { createPinia } from "pinia";
import { createApp } from "vue";

import App from "./presentation/App.vue";
import router from "./presentation/router";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
