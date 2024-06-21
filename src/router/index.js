// src/router/index.js

import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/home.vue';
import Login from '@/components/login.vue';

const routes = [
    {
        path: '/',
        name: 'Login',
        component: Login
    },
    {
        path: '/home/:userId',
        name: 'Home',
        component: Home
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
