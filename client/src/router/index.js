import Vue from 'vue'
import VueRouter from 'vue-router'
import { setTitle, setDescription } from '@/mixins'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Admin from '../views/Admin.vue'
import Contact from '../views/Contact.vue'
import CreateArticle from '../views/CreateArticle.vue'
import DetailArticle from '../views/DetailArticle.vue'
import SearchResult from '../views/SearchResult.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
        	title: 'Home',
        	description: 'Home View',
        }
    },
    {
        path: '/about',
        name: 'About',
        component: About,
        meta: {
        	title: 'About',
        	description: 'About Me',
        }
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact,
        meta: {
        	title: 'Contact',
        	description: 'Contact Me',
        }
    },
    {
        path: '/admin',
        name: 'Admin',
        component: Admin,
        meta: {
        	title: 'Admin',
        	description: 'Admin View',
        }
    },
    {
        path: '/create',
        name: 'Create',
        component: CreateArticle,
    },
    {
        path: '/search',
        name: 'SearchResult',
        component: SearchResult,
    },
    {
        path: '/post/:title',
        name: 'DetailArticle',
        component: DetailArticle,
    },
    {
        path: '*',
        name: 'NotFound',
        component: NotFound,
    },
]

const router = new VueRouter({
    mode: 'history',
    routes
})

router.beforeEach((to, from, next) => {
	setTitle(to.meta.title)
	setDescription(to.meta.description)
	next()
})

export default router
