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
        ]),
        onEnter (e) {
            if (e.keyCode === 13) this.search()
        },
        search () {
            // 初期化
            this.dialog = false
            const trimedText = this.trim(this.searchText)
            // this.updateSearchText(trimedText)
            // if (this.$router.currentRoute.name !== 'SearchResult') {
                this.$router.push({
                    name: 'SearchResult',
                    query: {
                        searchText: trimedText
                    }
                })
            // }
            this.searchText = ''
        },
    }
}
</script>

<style lang="scss" scoped>

    .v-dialog__content::v-deep {
        align-items: start;

        .v-dialog {
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
