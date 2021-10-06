import { createApp } from 'vue';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import router from './router';
import store from './store';
import App from './App.vue';

const app = createApp(App);
app.use(router);
app.use(store);
app.use(VueSweetalert2);
app.mount('#app');
