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
            {
                path: '/user',
                name: 'User',
                component: () => import('../views/user/User.vue')
            },
            {
                path: '/mall',
                name: 'Mall',
                component: () => import('../views/mall/Mall.vue')
            },
            {
                path: '/other',
                name: 'Other',
                children: [
                    {
                       path: 'page1',
                       name:'Page1',
                       component: () => import('../views/other/Page1.vue')
                    },
                    {
                        path: 'page2',
                        name:'Page2',
                        component: () => import('../views/other/Page2.vue') 
                    }
                ]
                
            },
        ]

    },
    
]
export default createRouter({
    history: createWebHashHistory(),
    routes
})