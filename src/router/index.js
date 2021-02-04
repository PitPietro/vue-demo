import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Alerts from "@/components/Alerts";

// docs: https://router.vuejs.org/guide/#javascript

Vue.use(VueRouter)

// const Alerts = { template: '<Alerts />'}


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/alerts',
        name: 'Alerts',
        component: Alerts,
        // component: () => import('../components/Alerts.vue')
        // component: Alerts
        // child: { ... }
    }
]

const router = new VueRouter({
    // short for `routes: routes`
    routes
})

export default router