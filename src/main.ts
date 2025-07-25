import './presentation/assets/css/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './presentation/App.vue';
import router from './presentation/router';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');
