import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Admin from '../views/Admin.vue'
import CreateArticle from '../views/CreateArticle.vue'
import DetailArticle from '../views/DetailArticle.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
    {
        path: '/admin',
        name: 'Admin',
        component: Admin,
    },
    {
        path: '/create',
        name: 'Create',
        component: CreateArticle,
    },
    {
        path: '/:title',
        name: 'DetailArticle',
        component: DetailArticle,
    },
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
