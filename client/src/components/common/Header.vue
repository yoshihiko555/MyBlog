<template>
    <header id="header">
        <v-app-bar
            app
            flat
            dense
        >
            <v-row align='center'>
                <!-- ハンバーガーボタン設定 -->
                <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
                <v-spacer></v-spacer>
                <!-- 検索フィールド -->
                <v-text-field
                    prepend-inner-icon='mdi-magnify'
                    placeholder='Search...'
                    dense
                    solo
                    flat
                    outlined
                    rounded
                    class="search_field"
                    color='blue-grey darken-1'
                ></v-text-field>
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
export default {
    name: 'Header',

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
        .search_field {
            max-width: 30%;

            .v-input__slot {
                margin: 0;
            }
        }

        .v-text-field__details {
            display: none !important;
        }
    }
</style>
