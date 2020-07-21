<template>
    <div id="search_field_wrap">
        <!-- 検索フィールド -->
        <v-text-field
            v-model="searchText"
            prepend-inner-icon='mdi-magnify'
            placeholder='Search...'
            dense
            solo
            flat
            outlined
            rounded
            class="search_field"
            color='blue-grey darken-1'
        ></v-text-field>
    </div>
</template>

<script>
import _ from 'lodash'

export default {
    name: 'Serch',
    data: () => ({
        searchText: '',
    }),
    watch: {
        searchText (val) {
            if (val) {
                this.search(val)
            } else {

            }
        }
    },
    methods: {
        search: _.debounce(function search (searchText) {
            // 空白削除し、カンマ区切りの文字列で送る
            var trimedText = this.trim(searchText)
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
            })
            .catch(e => {
                console.log(e)
            })
        }, 500),
        trim (word) {
            return String(word).replace(/^\s+|\s+$/g, '')
        },
    }
}
</script>

<style lang="scss">
    #search_field_wrap {
        .search_field {
            .v-input__slot {
                margin: 0;
            }
        }

        .v-text-field__details {
            display: none !important;
        }
    }
</style>
