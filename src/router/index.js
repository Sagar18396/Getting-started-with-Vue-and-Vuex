import { createRouter, createWebHistory } from 'vue-router';
import HelloWorld from '../components/HelloWorld.vue';
import StoreUsage from '../components/StoreUsage.vue';

const routes = [
    {
        path: '/',
        component: HelloWorld
    },
    {
        path: '/vuex',
        component: StoreUsage
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
