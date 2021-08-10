<template>
  <v-container class="main">
	  <v-row class="mb-3">
		  <v-col cols='12' class="text-center">
			  <h1>Works</h1>
		  </v-col>
	  </v-row>
	  <v-row class="max-width">
		  <v-col cols='12' sm='6' md='4' class="pa-0" v-for="site in sites" :key="site.name">
			  <ImgCard :url='site.url' :github='site.github'>
			  	<template #img>
					  <img :src="site.img" :alt="site.name"/>
				</template>
				<template #title>{{ site.name }}</template>
				<template #description>{{ site.description }}</template>
			  </ImgCard>
		  </v-col>
	  </v-row>
  </v-container>
</template>

<script>
import ImgCard from '@/components/parts/ImgCard'
import Con from '@/static/js/const'
import { metaInfo } from '@/mixins'

export default {
	mixins: [metaInfo],
	components: {
		ImgCard
	},
	data: () => ({
		sites: Con.SITES
	}),
	created () {

	},
	methods: {

	}
}
</script>

<style lang="scss" scoprd>
	.max-width {
	    margin: 0;
	    width: 100vw;
	    position: relative;
	    left: 50%;
	    transform: translateX(-50%);
	}
</style>
