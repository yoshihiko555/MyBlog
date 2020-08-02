<template>
    <v-card id="comments_wrap" class="mb-5">
        <v-container>
            <v-card-title>Comment List</v-card-title>
            <div v-if='isComment'>
                <v-row v-for='comment in comments' :key='comment.id'>
                    <v-col cols='12'>
                        <v-card-text>Name:{{ comment.name }}</v-card-text>
                        <v-card-text>Content:<br>{{ comment.content }}</v-card-text>
                    </v-col>
                </v-row>
            </div>
            <div v-else>
                <v-card-text>コメントがありません</v-card-text>
            </div>
        </v-container>
    </v-card>
</template>

<script>
export default {
    name: 'Comment',
    props: {
        comments: {
            required: true,
        },
        isComment: {
            required: true,
        }
    },
    data: () => ({
    }),
}
</script>

<style lang="scss">
</style>
