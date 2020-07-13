<template>
    <v-carousel
        id="carousel_wrap"
        height='400'
        hide-delimiter-background
        show-arrows-on-hover
    >
        <v-carousel-item
            v-for='(article, i) in latestArticleList'
            :key='i'
        >
            <v-sheet
                height='100%'
                class="carousel_image"
                :style='{ backgroundImage: `url("${article.thumbnail}")` }'
            >
                <v-row
                    class="fill-height"
                    align='center'
                    justify='center'
                >
                    <div>{{ article.title }}</div>
                </v-row>
            </v-sheet>
        </v-carousel-item>
    </v-carousel>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'CarouselArticles',
    data: () => ({

    }),
    computed: {
        ...mapGetters([
            'latestArticleList',
        ])
    },
}
</script>

<style lang="scss">
    #carousel_wrap {

        .carousel_image {
            background-size: cover;
            background-position: center center;
        }
    }
</style>
