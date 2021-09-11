import Vue from 'vue'
import moment from 'moment'

Vue.filter('truncate', (value: string, max: number, suffix: string = '...') => {
  if (!value) return ''
  if (value.length >= max) return value.substr(0, max) + suffix
  return value
})
