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
                        <SendCommentReply
                            :comment='comment'
                            @add-comment='addComment($event, comment)'
                        />
                        <div v-show="comment.reply.length > 0">
                            <v-row v-for='reply in comment.reply' :key='reply.id'>
                                <v-col cols='12'>
                                    <v-card-text>Name:{{ reply.name }}</v-card-text>
                                    <v-card-text>Content:<br>{{ reply.content }}</v-card-text>
                                </v-col>
                            </v-row>
                        </div>
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
            required: true,
        },
        isComment: {
            required: true,
        }
    },
    data: () => ({
    }),
    methods: {
        addComment (reply, comment) {
            console.log(reply)
            console.log(comment)
            // comment.reply.push(reply)
        }
    },
}
</script>

<style lang="scss">
</style>
