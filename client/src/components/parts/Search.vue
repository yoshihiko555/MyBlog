<template>
    <v-dialog
        v-model='dialog'
        transition="scroll-y-transition"
        eager
        overlay-color='#333'
        overlay-opacity='0.7'
    >
        <template #activator='{ on }'>
            <v-btn v-on='on' icon x-small class="mx-1">
                <v-icon>mdi-magnify</v-icon>
            </v-btn>
        </template>
        <!-- 検索フィールド -->
        <v-text-field
            v-model="searchText"
            prepend-inner-icon='mdi-magnify'
            placeholder='Search...'
            solo
            flat
            class="search_field"
            color='blue-grey darken-1'
            @keyup="onEnter"
            @click:prepend-inner="search"
        ></v-text-field>
        <div class="btn_wrap">
            <v-btn
                @click='dialog = false'
                class="mt-5 white--text"
                text
            >
            <v-icon>mdi-close</v-icon>
            CLOSE</v-btn>
        </div>
    </v-dialog>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'Serch',
    data: () => ({
        searchText: '',
        dialog: false,
    }),
    watch: {
    },
    methods: {
        ...mapActions([
            'updateSearchText',
            'updateSearchResult',
        ]),
        onEnter (e) {
            if (e.keyCode === 13) this.search()
        },
        search () {
            var trimedText = this.trim(this.searchText)
            this.updateSearchText(trimedText)
            var trimedTextList = [...new Set(trimedText.split(/\s+/))]
            var searchWord = trimedTextList.join(',')
            console.log('検索文字列 : ' + searchWord)
            this.$axios.get('api/article/', {
                params: {
                    searchText: searchWord
                }
            })
            .then(res => {
                console.log(res.data)
                this.dialog = false
                this.updateSearchResult(res.data)
                if (this.$router.currentRoute.name !== 'SearchResult') {
                    this.$router.push({
                        name: 'SearchResult'
                    })
                }
            })
            .catch(e => {
                console.log(e)
            })
        },
    }
}
</script>

<style lang="scss" scoped>
    .v-dialog__content {
        align-items: start;
        ::v-deep .v-dialog {
            margin: 0;
            border-radius: 0;
            box-shadow: none;

            .v-input {
                border-radius: 0;
                .v-input__slot {
                    margin: 0;
                }

                .v-text-field__details {
                    display: none;
                }
            }

            .btn_wrap {
                text-align: center;
            }
        }
    }

</style>
