<template>
    <header id="header">
        <v-app-bar
            app
            flat
            dense
            color='white'
        >
            <v-row align='center'>
                <!-- ハンバーガーボタン設定 -->
                <v-app-bar-nav-icon @click="drawer = true" class="d-md-none"></v-app-bar-nav-icon>
                <router-link to='/' class="header_logo">
                    <h1>Yoshihiko</h1>
                </router-link>
                <v-spacer></v-spacer>
                <div class="header_link_wrap">
                    <router-link to='/about' class="link">About</router-link>
                    <router-link to='/about' class="link">Contact</router-link>
                </div>
                <Search/>
            </v-row>
        </v-app-bar>

        <!-- ハンバーガーメニュー設定 -->
        <v-navigation-drawer
            v-model='drawer'
            fixed
            temporary
        >
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
    </header>
</template>

<script>
import Search from '@/components/parts/Search'
export default {
    name: 'Header',
    components: {
        Search,
    },

    data: () => ({
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
                title: 'Admin',
                url: '/admin',
            },
        ]
    })
}
</script>

<style lang="scss">
    #header {
        .header_logo {
            color: #333;
            text-decoration: none;
        }
        .header_link_wrap {
            display: contents;
            .link {
                padding: 0 1%;
                color: #333;
                text-decoration: none;
            }
        }
    }
</style>
