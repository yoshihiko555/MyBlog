<template>
    <v-container class="main">
		<v-row>
			<v-col cols='12' class="text-center">
				<h3>問い合わせを送信しました。</h3>
				<p>返信までしばらくお待ち下さい。</p>
				<v-btn
					to='/'
				>
					To Home
				</v-btn>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
export default {
    name: 'ContactComplete',
    data: () => ({
    }),
    methods: {
    }
}
</script>

<style lang="scss">
</style>
