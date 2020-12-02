<template>
    <div id="admin" class="main">
        <v-container v-show='isAuth'>
            <v-row>
                <h1>管理画面</h1>
            </v-row>

            <!-- 記事管理 -->
            <v-row>
                <v-col cols='6'>
                    <h2>記事管理</h2>
   		            <v-btn to='/admin/create' class='mr-3'>
                        記事作成
                    </v-btn>
                    <v-btn to='/admin/article'>
                        記事一覧
                    </v-btn>
                </v-col>
            </v-row>

            <!-- コメント管理 -->
            <v-row>
                <v-col cols='6'>
                    <h2>コメント管理</h2>
                    <v-btn to='/admin/comment'>
                        コメント一覧
                    </v-btn>
                </v-col>
            </v-row>

            <!-- カテゴリー管理 -->
            <v-row>
                <v-col cols='6'>
                    <h2>カテゴリー管理</h2>
                    <CreateCategory />
                    <v-btn to='/admin/category'>
                        カテゴリー一覧
                    </v-btn>
                </v-col>
            </v-row>
            <v-btn @click='sample'>test</v-btn>
        </v-container>
    </div>
</template>

<script>
import CreateCategory from '@/components/parts/CreateCategory'

export default {
    name: 'Admin',
    components: {
    	CreateCategory,
    },
    data: () => ({
        isAuth: true,
    }),
    created () {
        // if (!this.$session.has('token')) this.$router.push('/admin/signin')
        // else this.isAuth = this.$session.has('token')
    },
    methods: {
        sample () {
            this.$axios({
                url: '/api/user',
                method: 'POST',
                data: {
                    test: 'sample'
                }
            })
            .then(res => {
                console.log(res)
            })
            .catch(e => {
                console.log(e.response)
            })
        }
    }
}
</script>

<style lang="scss">

</style>
