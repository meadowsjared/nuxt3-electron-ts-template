import { createApp } from 'vue';
import { createPinia } from 'pinia';

import Index from './Index.vue';
import router from './router';
import './main.css';

const meta = import.meta as ImportMeta & { env: { VITE_FIREBASE_KEY: string } };
meta.env.ELECTRON_DISABLE_SECURITY_WARNINGS = 'true';

const app = createApp(Index);

app.use(createPinia()); //use pinia
app.use(router); //use router
app.mount('#app');
