export default Object.freeze({

	// *****************************
	// 各ポートフォリオの情報
	// *****************************
	SITES: [
		// Coopy
		{
			name: 'Coopy',
			description: 'ブログサービス',
			img: require('@/static/img/works/coopy.png'),
			url: 'https://coopy.herokuapp.com/',
			github: 'https://github.com/shutotakizawa/coopy',
		},

		// Bandue
		{
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
			name: 'HTML',
			period: 3,
			percent: 90,
			icon: require('@/static/img/icon/html5.svg'),
		},
		{
			name: 'CSS',
			period: 3,
			percent: 90,
			icon: require('@/static/img/icon/css3.svg'),
		},
		{
			name: 'SCSS',
			period: 2,
			percent: 50,
			icon: require('@/static/img/icon/sass.svg'),
		},
		{
			name: 'JavaScript',
			period: 3,
			percent: 90,
			icon: require('@/static/img/icon/javascript.svg'),
		},
		{
			name: 'jQuery',
			period: 3,
			percent: 90,
			icon: require('@/static/img/icon/jquery.svg'),
		},
		{
			name: 'Vue',
			period: 2,
			percent: 60,
			icon: require('@/static/img/icon/vue.svg'),
		},
		{
			name: 'React',
			period: 0.5,
			percent: 20,
			icon: require('@/static/img/icon/react.svg'),
		},
		{
			name: 'TypeScript',
			period: 0.5,
			percent: 20,
			icon: require('@/static/img/icon/typescript.svg'),
		},
		{
			name: 'Java',
			period: 2,
			percent: 50,
			icon: require('@/static/img/icon/java.svg'),
		},
		{
			name: 'Python',
			period: 2,
			percent: 40,
			icon: require('@/static/img/icon/python.svg'),
		},
		{
			name: 'Django',
			period: 2,
			percent: 40,
			icon: require('@/static/img/icon/django.svg'),
		},
		{
			name: 'Docker',
			period: 1.5,
			percent: 50,
			icon: require('@/static/img/icon/docker.svg'),
		},
	]
})
