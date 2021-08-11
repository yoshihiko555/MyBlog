/** サイト名 */
const SITE_NAME = 'Yoshihiko'

/**
 * Titleの設定
 */
export const setTitle = pathTitle => {
	const pageTitle = !pathTitle ? SITE_NAME : `${pathTitle} | ${SITE_NAME}`
	return (window.document.title = pageTitle)
}

/**
 * Descriptionの設定
 */
export const setDescription = pathMeta => {
	const defaultDescription = 'This is initial description.'
	const description = pathMeta ? pathMeta : defaultDescription
	document
		.querySelector("meta[name='description']")
		.setAttribute('content', description)
}

/**
 * 空白文字の変換
 */
export const trim = word => String(word).replace(/^\s+|\s+$/g, '')

export const globalMixins = {
		methods: {
			setTitle,
            setDescription,
            trim,
		}
}

/**
 * 各種メタデータの設定
 */
export const metaInfo = {
	metaInfo () {
		const isDetail = this.$route.name === 'DetailArticle'
		const title = isDetail
			? `${this.detailArticle.title} | ${SITE_NAME}`
			: this.$route.meta.title
		const description = isDetail
			? this.detailArticle.lead_text
			: this.$route.meta.description
		const img = isDetail
			? `${this.detailArticle.thumbnail}`
			: `${process.env.VUE_APP_CLOUDINARY_BASEURL}/ogp_images/${this.$route.meta.image}`

		return {
			meta: [
				{ property: 'twitter:card', content: 'summary_large_image' },
				{ property: 'twitter:title', content: title },
				{ property: 'twitter:site', content: '@anonymous' },
				{ property: 'twitter:creator', content: '@anonymous' },
				{ property: 'twitter:description', content: description },
				{ property: 'twitter:image', content: img },
				{ property: 'og:title', content: title },
				{ property: 'og:description', content: description },
				{ property: 'og:type', content: 'website' },
				{ property: 'og:url', content: location.href },
				{ property: 'og:image', content: img },
				{ property: 'og:site_name', content: SITE_NAME },
			]
		}
	}
}
