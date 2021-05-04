export default Object.freeze({

	// *****************************
	// 各ポートフォリオの情報
	// *****************************
	SITES: [
		// Coopy
		{
			id: 1,
			name: 'Coopy',
			description: 'ブログサービス',
			img: require('@/static/img/works/coopy.png'),
			url: 'https://coopy.herokuapp.com/',
			github: 'https://github.com/shutotakizawa/coopy',
		},

		// Bandue
		{
			id: 2,
			name: 'Bandue',
			description: 'ソーシャルネットワークサービス',
			img: require('@/static/img/works/bandue.png'),
			url: 'https://bandue.herokuapp.com/',
			github: 'https://github.com/shutotakizawa/bandue',
		},

		// Offbal
		// {
		// 	id: 3,
		// 	name: 'Offbal',
		// 	description: 'タスク管理サービス',
		// 	img: '',
		// 	url: '',
		// 	github: '',
		// },

		// React Chat Demo
		// {
		// 	id: 4,
		// 	name: 'チャットボット',
		// 	description: 'チャットボットサービス',
		// 	img: '',
		// 	url: '',
		// 	github: '',
		// },
	],

	SKILLS: [
		{
			id: 1,
			name: 'HTML/CSS',
			period: 3,
			percent: 90,
		},
		{
			id: 2,
			name: 'JavaScript',
			period: 3,
			percent: 90,
		},
		{
			id: 3,
			name: 'SCSS',
			period: 2,
			percent: 50,
		},
		{
			id: 4,
			name: 'TypeScript',
			period: 1,
			percent: 30,
		},
		{
			id: 5,
			name: 'Python',
			period: 2,
			percent: 50,
		},
		{
			id: 6,
			name: 'Java',
			period: 2,
			percent: 50,
		},
		{
			id: 7,
			name: 'Docker',
			period: 1,
			percent: 40,
		},
		{
			id: 8,
			name: 'Vue',
			period: 2,
			percent: 60,
		},
		{
			id: 9,
			name: 'React',
			period: 1,
			percent: 30,
		},
		{
			id: 10,
			name: 'Django',
			period: 2,
			percent: 50,
		},
		{
			id: 11,
			name: 'Nuxt',
			period: 1,
			percent: 30,
		},
	]
})
