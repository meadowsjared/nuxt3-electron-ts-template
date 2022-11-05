import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

(import.meta as ImportMeta & { env: any }).env.ELECTRON_DISABLE_SECURITY_WARNINGS = 'true';

const app = createApp(App);

app.use(createPinia()); //use pinia
app.use(router); //use router
app.mount('#app');
