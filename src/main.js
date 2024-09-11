/* import { createApp } from 'vue'
import './assets/css/style.css'
import App from './App.vue'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

createApp(App).mount('#app') */


import { createApp } from 'vue';
import './assets/css/style.css'
import App from './App.vue';
import { BootstrapVue3 } from 'bootstrap-vue-3';
import 'bootstrap/dist/css/bootstrap.min.css';

const app = createApp(App);
app.use(BootstrapVue3);
app.mount('#app');