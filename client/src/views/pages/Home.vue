<template>
    <v-container class="main">
		<!-- メインコンテンツ -->
		<v-row>
			<v-col cols='12 py-0 px-sm-4 px-md-0'>
				<section class="home_main_wrap">
					<div class="home_main_content">
						<transition name='down_fade' appear @before-appear='beforeAppear' @after-appear='afterAppear'>
							<h2 data-delay='0'>Hello<br>Welcome to my site</h2>
						</transition>
						<transition name='down_fade' appear @before-appear='beforeAppear' @after-appear='afterAppear'>
							<p data-delay='500'>Sending useful information centered on programming</p>
						</transition>
						<transition name='down_fade' appear @before-appear='beforeAppear' @after-appear='afterAppear'>
							<v-btn to='/about' x-large outlined tile class="home_about_btn" data-delay='1000'>About Me</v-btn>
						</transition>
					</div>
					<!-- <transition name='down_fade' appear>
						<div class="guide_blog_wrap text-center">
							<p class="mb-0">Scroll</p>
							<v-btn
								text
								class="mb-5 bound"
								@click="$vuetify.goTo('.home-works-wrap', { easing: 'easeInOutCubic', duration: 600 })"
							>
								<v-icon>mdi-chevron-down</v-icon>
							</v-btn>
						</div>
					</transition> -->
				</section>
			</v-col>
		</v-row>

		<!-- ポートフォリオ一覧 -->
		<!-- <v-row class='home-works-wrap max-width'>
			<v-col cols='12' class='text-center'>
				<h3>Works</h3>
			</v-col>

			<v-col cols='12' sm='6' md='4' class='pa-0' v-for='site in sites' :key='site.id'>
				<ImgCard :url='site.url'>
					<template #img>
						<img src='@/static/img/about_header.jpg' />
					</template>
					<template #title>{{ site.name }}</template>
					<template #description>{{ site.description }}</template>
				</ImgCard>
			</v-col>
		</v-row> -->

		<!-- 記事一覧 -->
		<!-- <v-row class="home_articles_wrap">
			<v-col cols='12' class='text-center'>
				<h3>Articles</h3>
			</v-col>
			<v-col cols='12' sm='4' v-for='article in recentArticleList' :key='article.id'>
				<v-card tile class="my-5" height=470>
					<v-img :src='article.thumbnail' :alt='article.title' height='200'></v-img>
					<v-card-title class="home_title">{{ article.title | truncate(30) }}</v-card-title>

					<v-card-text class="home_lead_text">{{ article.lead_text | truncate(60) }}</v-card-text>

					<v-card-actions class="home_article_btn_wrap pa-5">
						<v-btn
							outlined
							tile
							color='blue-grey darken-1'
							:to='{ name: "DetailArticle", params: { title: article.title }}'
						>
							ReadMore
						</v-btn>
					</v-card-actions>
				</v-card>
			</v-col>
		</v-row> -->

        <!-- TOPへのボタン -->
        <transition name="to-top">
            <v-btn
                v-scroll='onScroll'
                v-show='fab'
                fixed
                bottom
                right
                icon
                x-large
                color='blue-grey darken-1'
                @click='$vuetify.goTo(0)'
            >
            <v-icon>mdi-chevron-up</v-icon>
            </v-btn>
        </transition>

        <!-- 動く背景 -->
<!--         <TheHomeBackGround /> -->
    </v-container>
</template>

<script>
import TheHomeBackGround from '@/components/verification/TheHomeBackGround'
import ImgCard from '@/components/parts/ImgCard'
import { mapGetters, mapActions } from 'vuex'
import Con from '@/static/js/const'
import { metaInfo } from '@/mixins'

export default {
	mixins: [metaInfo],
    components: {
    	TheHomeBackGround,
    	ImgCard,
    },
    data: () => ({
        fab: false,
        sites: Con.SITES
    }),
    computed: {
        ...mapGetters([
            'recentArticleList',
        ]),
    },
    methods: {
        onScroll (e) {
            if (typeof window === 'undefined') return
            const top = window.pageYOffset || e.target.scrollTop || 0
            this.fab = top > 850
        },
    	beforeAppear (el) {
        	const msec = el.dataset.delay
    		el.style.transitionDelay = `${msec}ms`
    	},
    	afterAppear (el) {
    		el.style.transitionDelay = ''
    	}
    },
}
</script>

<style lang="scss" scoped>

	@include vue-animation($tran-name: 'to-top', $anime-name: ('fade', 'scale'));

	.home_main_wrap {
	    position: relative;
	    display: flex;
	    min-height: calc(100vh - (#{$height-header} + #{$height-footer}));

	    .home_main_content {
	        align-self: center;
	    }

	    .guide_blog_wrap {
	        position: absolute;
	        bottom: 0;
	        left: 50%;
	        transform: translateX(-50%);
	    }
	}

	.home_articles_wrap {

	    .home_title {
	        min-height: 130px;
	        align-items: initial;
	        font-weight: 700;
        }

	    .home_lead_text {
	        min-height: 60px;
	    }

	    .home_article_btn_wrap {
	        justify-content: center;
	        align-items: center;
	    }
	}

    .down_fade-enter-active {
	    transition: opacity .5s ease-in-out, transform .6s ease-in;
	}

	.down_fade-enter {
        opacity: 0;
        transform: translateY(-20px);
	}

	.down_fade-leave-to {
	    opacity: 0;
	    transform: translateY(-20px) scale(0.97);
	}

	.max-width {
	    margin: 0;
	    width: 100vw;
	    position: relative;
	    left: 50%;
	    transform: translateX(-50%);
	}

	.bound {
		@include bound;
	}

	.link {
		color: #333;
		text-decoration: none;
		position: relative;
		transition: .3s;

		&::after {
			content: '';
			position: absolute;
			bottom: 0;
			left: 2%;
			width: 0;
			height: 1px;
			background-color: #333;
			transition: .3s;
		}

		&:hover::after {
			width: 100%;
		}
	}

</style>
