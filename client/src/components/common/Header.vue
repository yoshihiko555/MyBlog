<template>
    <div>
		<v-app-bar
			app
			flat
			color='white'
			class="container pa-0"
			height='50px'
		>
			<!-- ハンバーガーメニューのボタン -->
			<v-app-bar-nav-icon @click="drawer = true" class="d-sm-none"/>

			<router-link to='/'>
				<img src="@/static/img/logo.svg" alt="logo" width="30px" height="30px">
			</router-link>

			<div>
				<router-link to='/about' class="link mx-3 d-none d-sm-inline-block">About</router-link>
				<router-link to='/blog' class="link mx-3 d-none d-sm-inline-block">Blog</router-link>
				<router-link to='/works' class="link mx-3 d-none d-sm-inline-block">Works</router-link>
				<router-link to='/contact' class="link mx-3 d-none d-sm-inline-block">Contact</router-link>
				<div v-show='isAuth'>
					<router-link to='/admin' v-show='isAuth' class="link mx-3 d-none d-sm-inline-block">Admin</router-link>
					<router-link to='/admin/signin' class="link mx-3 d-none d-sm-inline-block">SignIn</router-link>
				</div>
				<v-btn icon x-small class='mx-1 d-none d-sm-inline-block' href='https://twitter.com/yoshihiko5555' target='blank'><v-icon>mdi-twitter</v-icon></v-btn>
				<v-btn icon x-small class='mx-1 d-none d-sm-inline-block' href='https://github.com/yoshihiko555' target='blank'><v-icon>mdi-github</v-icon></v-btn>
				<Search />
			</div>

		</v-app-bar>

        <!-- ハンバーガーメニュー設定 -->
        <v-navigation-drawer
            v-model='drawer'
            fixed
            temporary
        >
            <div class="sidebar_wrap pa-4">
                <Sidebar/>
            </div>
            <v-list
                nav
                dense
            >
                <v-list-item
                    v-for='(menu, i) in menus'
                    :key='i'
                    :to='menu.url'
                >
                    <v-list-item-title>{{ menu.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
import Search from '@/components/parts/Search'
import Sidebar from '@/components/common/Sidebar'

export default {
    name: 'Header',
    components: {
        Search,
        Sidebar,
    },

    data: () => ({
    	isAuth: false,
        drawer: false,
        menus: [
            {
                title: 'Home',
                url: '/',
            },
            {
                title: 'About',
                url: '/about',
            },
            {
                title: 'Blog',
                url: '/blog',
            },
            {
                title: 'Works',
                url: '/works',
            },
            {
                title: 'Contact',
                url: '/contact',
            },
        ]
    }),
    created () {
    	this.isAuth = this.$session.has('token')
    }
}
</script>

<style lang="scss" scoped>

    .hamburger_menu {
        position: fixed;
        left: 0;
    }

    .header_logo {
        margin-left: 2%;
        font-size: 12px;
        color: #333;
        text-decoration: none;
    }

	.link {
		color: #333;
		text-decoration: none;
		position: relative;
		transition: .3s;

		&::after {
			position: absolute;
			bottom: 0;
			left: 2%;
			content: '';
			width: 0;
			height: 1px;
			background-color: #333;
			transition: .3s;
		}

		&:hover::after {
			width: 100%;
		}
	}

	.v-toolbar::v-deep {
		.v-toolbar__content {
			justify-content: space-between;
		}
	}

</style>
