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
                    <v-btn to='/create'>
                        記事作成
                    </v-btn>
                </v-col>
            </v-row>

            <!-- コメント管理 -->
            <v-row>
                <v-col cols='6'>
                    <h2>コメント管理</h2>
                    <v-btn to='/comment'>
                        コメント一覧
                    </v-btn>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    name: 'Admin',

    data: () => ({
        isAuth: false,
    }),
    created () {
        if (!this.$session.has('token')) this.$router.push('/signin')
        else this.isAuth = this.$session.has('token')
    }
}
</script>

<style lang="scss">

</style>
