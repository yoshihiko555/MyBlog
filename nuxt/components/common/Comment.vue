<template>
    <v-container>
	    <v-card
	    	id="comments_wrap"
	    	class="mb-5"
	    	flat
	    >
            <v-card-title>Comment List</v-card-title>
            <div v-if='isComment'>
                <v-row v-for='comment in comments' :key='comment.id'>
                    <v-col cols='12'>
                        <v-card-text>Name:{{ comment.name }}</v-card-text>
                        <v-card-text>Content:<br>{{ comment.content }}</v-card-text>
                        <div v-show="comment.reply.length > 0">
                            <v-row v-for='reply in comment.reply' :key='reply.id' class="ml-5">
                                <v-col cols='12'>
                                    <v-card-text>Name:{{ reply.name }}</v-card-text>
                                    <v-card-text>Content:<br>{{ reply.content }}</v-card-text>
                                </v-col>
                            </v-row>
                        </div>
                        <div class="text-right mb-3">
                            <SendCommentReply
                                :comment='comment'
                            />
                        </div>
                        <v-divider />
                    </v-col>
                </v-row>
            </div>
            <div v-else>
                <v-card-text>コメントがありません</v-card-text>
            </div>
   		</v-card>
    </v-container>
</template>

<script>
import SendCommentReply from '@/components/parts/SendCommentReply'
export default {
    name: 'Comment',
    components: {
        SendCommentReply,
    },
    props: {
        comments: {
            type: Array,
            required: true,
        },
        isComment: {
            type: Boolean,
            required: true,
        }
    },
    data: () => ({
    }),
    methods: {
    },
}
</script>

<style lang="scss">
</style>
