import Vue from 'vue'

Vue.filter('truncate', (value: string, max: number, suffix: string = '...') => {
  if (!value) return ''
  if (value.length >= max) return value.substr(0, max) + suffix
  return value
})
