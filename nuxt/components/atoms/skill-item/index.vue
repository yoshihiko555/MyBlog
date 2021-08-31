<template>
  <div class='root'>
    <skill-title />
    <skill-progress :percent='skill.percent' />
  </div>
</template>

<script lang='ts'>
import Vue, { PropOptions } from 'vue'
import SkillTitle from './skill-title.vue'
import SkillProgress from './skill-progress.vue'

interface Skill {
  name: string
  period: number
  percent: number
  icon: string
}

export default Vue.extend({
  components: {
    SkillTitle,
    SkillProgress,
  },
  props: {
    skill: {
      type: Object,
      required: true,
    } as PropOptions<Skill>
  },
  data: () => ({

  }),
  watch: {

  },
  computed: {

  },
  created () {

  },
  mounted () {

  },
  methods: {

  },
})
</script>
