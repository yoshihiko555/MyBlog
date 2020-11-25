<template>
    <div id="category_list_wrap" class="main">
   		<v-container v-show='isAuth'>
            <v-row>
                <h1>カテゴリー一覧</h1>
            </v-row>
            <div v-if="categoryList.length > 0">
                <v-row v-for="category in categoryList" :key='category.id'>
                    <v-col cols='8'>
                        <p>CategoryName: {{ category.name }}</p>
                    </v-col>

                    <v-col cols='4'>
                        <v-btn
                            @click='showEdit(category)'
                        >
                            編集
                        </v-btn>
                        <v-btn
                            @click="deleteCategory(category)"
                        >
                            削除
                        </v-btn>
                    </v-col>
                </v-row>
            </div>
            <div v-else>
                <p>カテゴリーがありません</p>
            </div>
        </v-container>
        <EditCategory
            ref='edit'
        />
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

import EditCategory from '@/components/parts/EditCategory'

export default {
    name: 'CategoryList',
    components: {
        EditCategory,
    },
    data: () => ({
        isAuth: false,
    }),
    computed: {
        ...mapGetters([
            'categoryList',
        ])
    },
    created () {
        if (!this.$session.has('token')) this.$router.push('/admin/signin')
        else this.isAuth = this.$session.has('token')
    },
    methods: {
        showEdit (category) {
            this.$refs.edit.showEdit(category)
        },
        deleteCategory (category) {
            this.$axios({
                url: `/api/category/${category.id}/`,
                method: 'DELETE',
            })
            .then(res => {
                console.log(res)
            })
            .catch(e => {
                console.log(e)
            })
        }
    }
}
</script>

<style lang="scss">

</style>
