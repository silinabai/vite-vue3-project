import { createRouter, createWebHashHistory } from 'vue-router';

/** 首页 */
const Home = () => import('@/views/home/index.vue');

// @ts-ignore
const NODE_ENV = import.meta.env.NODE_ENV;

const getRouteBasePath = () => (NODE_ENV === 'production' ? '/static/mk-h5-ink-screen/' : '/');
const routerHistory = createWebHashHistory(getRouteBasePath());
const routes = [
    {
        path: '/',
        redirect: '/home',
    },
    {
        path: '/home',
        name: 'Home',
        component: Home,
    },
];

const router = createRouter({
    history: routerHistory,
    routes,
});

export default router;
