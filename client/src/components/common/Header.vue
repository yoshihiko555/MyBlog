<template>
    <div id="header">
        <v-app-bar
            app
            flat
            dense
            color='white'
        >
            <v-row align='center'>
                <!-- ハンバーガーボタン設定 -->
                <v-app-bar-nav-icon @click="drawer = true" class="hamburger_menu d-sm-none"/>
                <router-link to='/' class="header_logo mx-auto mx-sm-4">
                    <h1>Yoshihiko</h1>
                </router-link>
                <div class="header_link_wrap">
                    <router-link to='/about' class="link mx-3 d-none d-sm-inline-block">About</router-link>
                    <router-link to='/contact' class="link mx-3 d-none d-sm-inline-block">Contact</router-link>
                    <div v-show='isAuth'>
                    	<router-link to='/admin' v-show='isAuth' class="link mx-3 d-none d-sm-inline-block">Admin</router-link>
	                    <router-link to='/admin/signin' class="link mx-3 d-none d-sm-inline-block">SignIn</router-link>
                    </div>
                    <v-btn icon x-small class='mx-1 d-none d-sm-inline-block' href='https://twitter.com/yoshihiko5555' target='blank'><v-icon>mdi-twitter</v-icon></v-btn>
                    <v-btn icon x-small class='mx-1 d-none d-sm-inline-block' href='https://www.instagram.com/yoshihiko.style/?hl=ja' target='blank'><v-icon>mdi-instagram</v-icon></v-btn>
                    <v-btn icon x-small class='mx-1 d-none d-sm-inline-block' href='https://github.com/shutotakizawa' target='blank'><v-icon>mdi-github</v-icon></v-btn>
                    <v-btn icon x-small class='mx-1 d-none d-sm-inline-block' href='https://www.linkedin.com/in/shuto-takizawa-a269b116b/' target='blank'><v-icon>mdi-linkedin</v-icon></v-btn>
                    <Search/>
                </div>
            </v-row>

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
                title: 'About Me',
                url: '/about',
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

<style lang="scss">
    #header {
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
        .header_link_wrap {
            margin-right: 2%;
            position: fixed;
            right: 0;
            display: inline-flex;
            align-items: center;
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
        }
    }
</style>
