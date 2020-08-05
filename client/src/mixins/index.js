/**
 * Titleの設定
 */
export const setTitle = pathTitle => {
	const siteTitle = 'Yoshihiko'
	const pageTitle = !pathTitle ? siteTitle : `${pathTitle} | ${siteTitle}`
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

export const toErrorPage = (status, router) => {
//	router.push(`/${status}`)
}

export const globalMixins = {
		methods: {
			setTitle,
            setDescription,
            trim,
            toErrorPage,
		}
}
