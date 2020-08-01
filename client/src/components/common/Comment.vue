<template>
    <v-card id="comments_wrap" class="mb-5">
        <v-container>
            <v-card-title>Comment List</v-card-title>
            <v-row v-for='comment in comments' :key='comment.id'>
                <v-col cols='12'>
                    <v-card-text>Name:{{ comment.name }}</v-card-text>
                    <v-card-text>Title:{{ comment.title }}</v-card-text>
                    <v-card-text>Content:<br>{{ comment.content }}</v-card-text>
                </v-col>
            </v-row>
        </v-container>
    </v-card>
</template>

<script>
export default {
    name: 'Comment',
    props: {
        comments: {
            required: true,
        }
    },
    data: () => ({
    }),
}
</script>

<style lang="scss">
</style>
