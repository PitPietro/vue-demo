import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import VuetifyView from "@/views/VuetifyView";
import JsonPlaceholder from "@/views/JsonPlaceholder";
import MarkdownEditor from "@/views/MarkdownEditor";
import GitHubCommits from "@/views/GitHubCommits";
import Store from "@/views/StoreView";

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
        path: '/vuetify',
        name: 'Vuetify',
        component: VuetifyView,
        // component: () => import('../components/Alerts.vue')
        // component: Alerts
        // child: { ... }
    },
    {
        path: '/json/:id',
        name: 'JsonPlaceholder',
        component: JsonPlaceholder,
    },
    {
        path: '/md-editor',
        name: 'MarkdownEditor',
        component: MarkdownEditor,
    },
    {
        path: '/github',
        name: 'GitHubCommits',
        component: GitHubCommits,
    },
    {
        path: '/store',
        name: 'Store',
        component: Store,
    }
]

const router = new VueRouter({
    // short for `routes: routes`
    routes
})

export default router