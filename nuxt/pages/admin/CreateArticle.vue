<template>
    <div id="create_article_wrap" class="main">
        <v-container v-show="isAuth">
            <v-row>
                <h1>記事作成</h1>
            </v-row>

            <v-row>
                <v-col cols='10'>
                    <v-form>
                        <v-text-field
                            v-model='article.title'
                            placeholder='title'
                            counter=255
                        />

                        <v-textarea
                            v-model='article.lead_text'
                            placeholder='lead_text'
                            counter=60
                        />

                        <mavon-editor v-model="article.content" ref='editor' language="en" />
                    </v-form>
                </v-col>

                <v-col cols='2' class="article_operation_wrap">
                    <v-btn
                        class="ope_btn mb-4"
                        @click='create(true)'
                    >
                        投稿
                    </v-btn>

                    <v-btn
                        class="ope_btn mb-4"
                        @click='create(false)'
                    >
                        下書き
                    </v-btn>

                    <CreateCategory />

                    <v-select
                        v-model="article.category"
                        :items="categoryList"
                        item-text='name'
                        item-value='id'
                        filled
                    />

                    <UploadImage
                        @upload='upload'
                    />

                    <SelectImage
                        @select='upload'
                    />

                    <h3>サムネイル</h3>
                    <div v-show="isShow">
                        <v-img :src='previewSrc' />
                        <v-btn
                            @click="deleteImage"
                        >
                            削除
                        </v-btn>
                    </div>
                    <v-file-input
                        ref='input'
                        accept="image/*"
                        prepend-icon="mdi-image"
                        @change='inputFile'
                    />
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import CreateCategory from '@/components/parts/CreateCategory'
import UploadImage from '@/components/parts/UploadImage'
import SelectImage from '@/components/parts/SelectImage'

const reader = new FileReader()

export default {
    name: 'CreateArticle',
    components: {
        CreateCategory,
        UploadImage,
        SelectImage,
    },
    data: () => ({
        isAuth: false,
        article: {},
        isShow: false,
        file: null,
        previewSrc: '',
    }),
    computed: {
        ...mapGetters([
            'categoryList',
        ])
    },
    created () {
        if (!this.$session.has('token')) this.$router.push('/admin/signin')
        else this.isAuth = this.$session.has('token')
    },
    methods: {
        ...mapActions([
            'updateRecentArticles',
        ]),
        create (flg) {
            this.article.is_public = flg
            console.log('投稿', this.article)
            let sendData
            if (this.file !== null) {
                sendData = new FormData()
                sendData.append('thumbnail', this.file)
                sendData.append('title', this.article.title)
                sendData.append('lead_text', this.article.lead_text)
                sendData.append('content', this.article.content)
                sendData.append('category', this.article.category)
                sendData.append('is_public', this.article.is_public)
            } else {
                sendData = this.article
            }
            this.$axios({
                url: '/api/article/',
                method: 'POST',
                data: sendData,
            })
            .then(res => {
                console.log(res)
                this.article = {}
                this.deleteImage()
                this.updateRecentArticles()
                this.$router.push('/')
            })
            .catch(e => {
                console.log(e)
            })
        },
        inputFile (e) {
            reader.readAsDataURL(e)
            reader.onload = e => {
                this.previewSrc = e.target.result
            }
            this.file = e
            this.isShow = true
        },
        deleteImage () {
            this.file = null
            this.previewSrc = ''
            this.$refs.input.lazyValue = ''
            this.isShow = false
        },
        upload (image) {
            this.$refs.editor.value += `![${image.file_name}](${image.file})`
        },
    }
}
</script>

<style lang="scss" scoped>
    .article_operation_wrap {
        height: calc(100vh - #{($header + $footer)});
        position: sticky;
        top: $header;
        &::v-deep {
            .ope_btn {
                width: 100%;
            }
        }
    }
    .v-note-wrapper {
        z-index: inherit !important;
    }
</style>
