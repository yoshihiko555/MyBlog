<template>
    <div id="contact_complete_wrap" class="main">
        <v-container>
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
    </div>
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
