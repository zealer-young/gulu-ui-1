import {createApp} from 'vue';
import {createRouter, createWebHashHistory} from 'vue-router';
import App from './App.vue';
import './index.scss';
import Doc from './views/Doc.vue';
import Home from './views/Home.vue';

const history = createWebHashHistory();
const router = createRouter({
    history: history,
    routes: [
        {path: '/', component: Home},
        {path: '/doc', component: Doc}
    ]
});

const app = createApp(App);
app.use(router);
app.mount('#app');
