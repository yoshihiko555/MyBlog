<template>
    <div id='home' class="main">
    	<v-container>
    		<!-- メインコンテンツ -->
    		<v-row>
    			<v-col cols='12 py-0 px-sm-4 px-md-0'>
    				<section class='home-main-wrap'>
	    				<div class='home-main-content'>
                           	<h2>Hello<br>Welcome to my blog</h2>
                            <p>Sending useful information centered on programming</p>
                            <v-btn to='/about' x-large outlined tile class="home_about_btn">About Me</v-btn>
	    				</div>
                        <div class="guide-blog-wrap text-center">
                            <p class="mb-0">My Articles</p>
                            <v-btn
                                text
                                class="mb-5"
                                @click="$vuetify.goTo('.home-articles-wrap', { easing: 'easeInOutCubic', duration: 600 })"
                            >
                                <v-icon>mdi-chevron-down</v-icon>
                            </v-btn>
                        </div>
    				</section>
            	</v-col>
            </v-row>

   			<!-- 記事一覧 -->
            <v-row class="home-articles-wrap">
                <v-col cols='12' sm='4' v-for='article in recentArticleList' :key='article.id'>
                    <v-card tile class="my-5" height=470>
                        <v-img :src='article.thumbnail' :alt='article.title' height='200' />
                        <v-card-title class="home-title">{{ article.title | truncate(30) }}</v-card-title>

                        <v-card-text class="home-lead-text">{{ article.lead_text | truncate(60) }}</v-card-text>

                        <v-card-actions class="home-article-btn-wrap pa-5">
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
            </v-row>
    	</v-container>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
// import { sample } from '@/middleware/local'

export default {
  // middleware: ['local', sample],
  components: {
  },
  // asyncData ({ $axios }) {
  	// console.log('index asyncData')
  	// console.log('CTX:', ctx)
  	// console.log('AXIOS:', $axios)
  	// console.log('CTX', params)
  	// const { data } = await ctx.$axios.get('http://localhost:8000/api/article/recent_articles/')
  	// console.log('Data', data)
  // },
  // fetch () {
	  // console.log('index fetch')
	  // console.log('CTX:', )
	  // console.log('THIS:', this)
	  // console.log('AXIOS:', this.$axios)
  // },
  data: () => ({
      text: '01234567890123456789'
  }),
  computed: {
	  ...mapGetters([
		 'recentArticleList',
	  ]),
      test () {
          return this.$store.state.sample
      }
  },
  created () {
    //   console.log(this.$store.getters)
    // this.updateRecentArticles()
  },
  mounted () {
	  this.$nextTick(() => {
		  this.$nuxt.$loading.start()
		  setTimeout(() => this.$nuxt.$loading.finish(), 1000)
	  })
  },
  methods: {
      ...mapActions(['updateRecentArticles']),
      up () {
          this.$store.commit('upSample')
      },
      fetch () {
        this.$axios({
            url: '/api/article/recent_articles/',
            method: 'GET'
        })
        .then(res => {
            console.log(res)
        })
        .catch(e => {
            console.log(e.response)
        })
      },
      onScroll (e) {
          if (typeof window === 'undefined') return
          const top = window.pageYOffset || e.target.scrollTop || 0
          this.fab = top > 850
      },
  }
}
</script>

<style lang='scss' scoped>
    #home {
        .home-main-wrap {
            position: relative;
            display: flex;
            min-height: calc(100vh - (#{$header} + 12px));

            .home-main-content {
                align-self: center;
            }

            .guide-blog-wrap {
                position: absolute;
                bottom: 0;
                left: 50%;
                transform: translateX(-50%);
            }
        }

        .home-articles-wrap {
            .home-title {
                min-height: 130px;
                align-items: initial;
                font-weight: 700;
            }
            .home-lead-text {
                min-height: 60px;
            }

            .home-article-btn-wrap {
                justify-content: center;
                align-items: center;
            }
        }

        .fade-enter-active, .fade-leave-active {
            transition: 0.5s;
        }
        .fade-enter, .fade-leave-to {
            opacity: 0;
            transform: scale(0);
        }
    }
</style>
