import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
    {
        path: '/page1',
        component: () => import('../components/form.vue')
    },
    {
        path: '/page2',
        component: () => import('../components/form-item.vue')
    }
];
const router = createRouter({
    history: createWebHashHistory(),
    routes
});
export default router;