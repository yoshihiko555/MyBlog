<template>
    <div id='sidebar_wrap'>
        <h1 class="sidebar_logo">Yoshihiko</h1>

        <v-img src='@/static/img/pithuy.jpeg'></v-img>

        <p>This is my personal blog where I share a lot of stuffs about life and work everything I do in between.</p>

        <div class="sns_wrap">
            <v-btn icon href='https://twitter.com/yoshihiko5555' target='blank'><v-icon>mdi-twitter</v-icon></v-btn>
            <v-btn icon href='https://www.instagram.com/yoshihiko.style/?hl=ja' target='blank'><v-icon>mdi-instagram</v-icon></v-btn>
            <v-btn icon href='https://github.com/shutotakizawa' target='blank'><v-icon>mdi-github</v-icon></v-btn>
            <v-btn icon href='https://www.linkedin.com/in/shuto-takizawa-a269b116b/' target='blank'><v-icon>mdi-linkedin</v-icon></v-btn>
        </div>

        <v-divider></v-divider>

        <div>
            <h2>Recent Articles</h2>
        </div>

        <div>
            <h2>Categorys</h2>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Sidebar',

    data: () => ({

    })
}
</script>

<style lang="scss">

</style>
