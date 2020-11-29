import Vue from 'vue'

Vue.filter('truncate', (value, num, end) => {
    if (!value) return ''
    const e = end || '...'
    if (value.length >= num) return value.substr(0, num) + e
    return value
})
