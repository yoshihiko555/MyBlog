<template>
    <div id="category_list_wrap" class="main">
   		<v-container v-show='isAuth'>
            <v-row>
                <h1>カテゴリー一覧</h1>
            </v-row>
            <div v-if="categorys.length > 0">
            <v-row v-for="category in categorys" :key='category.id'>
                <v-col cols='8'>
                	<p>Name:{{ category.name }}</p>
                </v-col>
            </v-row>
            </div>
            <div v-else>
                <p>カテゴリーがありません</p>
            </div>
        </v-container>
    </div>
</template>

<script>
export default {
    name: 'CategoryList',

    data: () => ({
    	isAuth: false,
    	categorys: [],
    }),
    created () {
        if (!this.$session.has('token')) {
            this.$router.push('/admin/signin')
        } else {
            this.isAuth = this.$session.has('token')
            this.getCategorys()
        }
    },
    methods: {
    	getCategorys () {
    		this.$axios({
    			url: '/api/category/',
    			method: 'GET',
    		})
    		.then(res => {
    			console.log(res)
    			this.categorys = res.data
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
