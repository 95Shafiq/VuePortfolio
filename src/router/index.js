import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Me from '../views/Me.vue'
import About from '../views/About.vue'
import Resume from '../views/Resume.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            enterClass:
                'animate__animated animate__bounceInRight animate__faster',
            leaveClass: 'animate__animated animate__fadeOut animate__faster',
        },
    },
    {
        path: '/me',
        component: Me,
        meta: {
            enterClass: 'animate__animated animate__fadeIn animate__faster',
            leaveClass: 'animate__animated animate__fadeOut animate__faster',
        },
        children: [
            {
                path: 'about',
                name: 'About',
                component: About,
                meta: {
                    enterClass:
                        'animate__animated animate__fadeIn animate__faster',
                    leaveClass:
                        'animate__animated animate__fadeOut animate__faster',
                },
            },
            {
                path: 'resume',
                name: 'Resume',
                component: Resume,
                meta: {
                    enterClass:
                        'animate__animated animate__fadeIn animate__faster',
                    leaveClass:
                        'animate__animated animate__fadeOut animate__faster',
                },
            },
        ],
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
