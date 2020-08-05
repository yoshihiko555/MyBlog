import Vue from 'vue'
import VueRouter from 'vue-router'
import { setTitle, setDescription } from '@/mixins'

// Main
import Home from '../views/pages/Home.vue'
import About from '../views/pages/About.vue'
import Contact from '../views/pages/Contact.vue'
import ContactComplete from '../views/pages/ContactComplete.vue'
import DetailArticle from '../views/pages/DetailArticle.vue'
import SearchResult from '../views/pages/SearchResult.vue'
import NotFound from '../views/pages/NotFound.vue'
import InternalServerError from '../views/pages/InternalServerError.vue'

// Admin
import Admin from '../views/admin/Admin.vue'
import CreateArticle from '../views/admin/CreateArticle.vue'
import SignIn from '../views/admin/SignIn.vue'
import CommentList from '../views/admin/CommentList.vue'
import CategoryList from '../views/admin/CategoryList.vue'
import ArticleList from '../views/admin/ArticleList.vue'

Vue.use(VueRouter)

/**
 * Main
 */
const main = [
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
        path: '/contact_complete',
        name: 'ContactComplete',
        component: ContactComplete,
        meta: {
        	title: 'ContactComplete',
        	description: 'Send Contact Complete',
        }
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
        path: '/500',
        name: 'InternalServerError',
        component: InternalServerError,
        meta: {
        	title: 'サーバーエラーが発生しました。',
        	description: 'サーバーエラーが発生しました。しばらくお待ちください。'
        }
    },
    {
        path: '*',
        name: 'NotFound',
        component: NotFound,
        meta: {
        	title: 'お探しのページが見つかりませんでした。',
        	description: 'お探しのページが見つかりませんでした。',
        }
    },
]

/**
 * Admin
 */
const admin = [
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
        path: '/admin/signin',
        name: 'SignIn',
        component: SignIn,
    },
    {
        path: '/admin/create',
        name: 'Create',
        component: CreateArticle,
    },
    {
        path: '/admin/comment',
        name: 'Comment',
        component: CommentList,
    },
    {
    	path: '/admin/category',
    	name: 'CategoryList',
    	component: CategoryList,
    },
    {
    	path: '/admin/article',
    	name: 'ArticleList',
    	component: ArticleList,
    },
]

const routes = [...admin, ...main]

const router = new VueRouter({
    mode: 'history',
    routes,
    scrollBehavior (to, from, savedPosition) {
    	// スクロール位置の設定
    	if (savedPosition) return savedPosition
    	else return { x: 0, y: 0 }
    }
})

router.beforeEach((to, from, next) => {
	setTitle(to.meta.title)
	setDescription(to.meta.description)
	next()
})

export default router
