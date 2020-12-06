import Vue from 'vue'

Vue.mixin({
    methods: {
        trim (word) {
            return String(word).replace(/^\s+|\s+$/g, '')
        }
    }
})
