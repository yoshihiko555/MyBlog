/**
 * Titleの設定
 */
export const setTitle = pathTitle => {
	const siteTitle = 'Yoshihiko'
	const pageTitle = !pathTitle ? siteTitle : `${pathTitle} | ${siteTitle}`
	return (window.document.title = pageTitle)
}

export const setDescription = pathMeta => {
	const defaultDescription = 'This is initial description.'
	const description = pathMeta ? pathMeta : defaultDescription
	document
		.querySelector("meta[name='description']")
		.setAttribute('content', description)
}

export const globalMixins = {
		methods: {
			setTitle,
			setDescription,
		}
}
