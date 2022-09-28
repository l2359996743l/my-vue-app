import {createRouter,createWebHashHistory} from 'vue-router'
const routes = [
    {
        path: '/',
        component: () => import('../views/index.vue'),
        children: [
            {
                path: '/',
                name: 'Home',
                component: () => import('../views/home/Home.vue')
            },
        ]

    },
]
export default createRouter({
    history: createWebHashHistory(),
    routes
})