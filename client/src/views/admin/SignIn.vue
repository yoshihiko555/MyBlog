<template>
	<v-container class="main">
    	<v-card
			outlined
			rounded
		>
			<v-card-title>SignIn</v-card-title>
			<v-form v-model="valid">
				<v-text-field
					v-model="inputData.username"
					:rules='[rules.required]'
					placeholder='UserName'
				/>
				<v-text-field
					v-model="inputData.password"
					placeholder='Password'
					:rules='[rules.required]'
					type='password'
				/>
				<v-btn
					:disabled='!valid'
					@click='signin'
				>
					SignIn
				</v-btn>
				<v-btn
					@click='reset'
				>reset</v-btn>
			</v-form>
    	</v-card>
	</v-container>
</template>

<script>
export default {
    name: 'SignIn',
    data: () => ({
        valid: false,
        inputData: {
            username: '',
            password: '',
        },
        rules: {
            required: v => !!v || '必須項目です',
        }
    }),
    methods: {
        signin () {
            this.$axios({
                url: '/auth/',
                method: 'POST',
                data: this.inputData
            })
            .then(res => {
                console.log(res)
                this.$session.set('token', res.data.token)
                this.$router.push('/admin')
            })
            .catch(e => {
                console.log(e)
            })
        },
        reset () {
            console.log(this.$session)
            this.$session.destroy()
        }
    }
}
</script>

<style lang="scss" scoped>
	.v-card::v-deep {
		margin: 50px auto;
		padding: 2em;
		width: 50%;
	}
</style>
