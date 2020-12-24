<template>
    <div class="main">
        <h1>Blog</h1>
        <TheHomeBackGround />
        <div class="sample">
            <img class='img' src="@/static/img/about_header.jpg" alt="">
        </div>
    </div>
</template>

<script>
import TheHomeBackGround from '@/components/verification/TheHomeBackGround'
export default {
	components: {
		TheHomeBackGround,
	},
    data: () => ({
    }),
    methods: {
    }
}
</script>

<style lang="scss" scoped>
    .sample {
        width: 300px;
        height: 300px;

        img {
            width: 100%;
            height: 100%;
            transition: all .2s;

            &:hover {
                opacity: .5;
            }
        }
    }

</style>
