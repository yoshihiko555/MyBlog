<template>
    <v-card id="signin_wrao" class="main">
        <v-container>
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
        </v-form>
        <v-btn
            @click='reset'
        >
            reset
        </v-btn>
        <v-btn
            @click='test'
        >
            test
        </v-btn>
        </v-container>
    </v-card>
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
        },
        token: '',
    }),
    methods: {
        signin () {
            console.log(this.$auth)
            this.$auth.loginWith('local', { data: this.inputData })
            .then(res => {
                console.log(res)
            })
            .catch(e => {
                console.log(e)
            })
            // this.$axios({
            //     url: '/auth/',
            //     method: 'POST',
            //     data: this.inputData
            // })
            // .then(res => {
            //     console.log(res)
            //     this.token = res.data.token
            //     // this.$session.set('token', res.data.token)
            //     // this.$router.push('/admin')
            // })
            // .catch(e => {
            //     console.log(e)
            // })
        },
        reset () {
            console.log(this.$session)
            this.$session.destroy()
        },
        test () {
            // this.$axios.defaults.
            this.$axios({
                url: '/api/category/',
                method: 'POST',
				headers: {
					Authorization: `JWT ${this.token}`,
					'Content-Type': 'application/json'
				},
                data: {
                    name: 'sample'
                }
            })
            .then(res => {
                console.log(res)
            })
            .catch(e => {
                console.log(e)
            })
        }
    }
}
</script>

<style lang="scss">
</style>
