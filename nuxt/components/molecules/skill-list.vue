<template>
  <v-row>
    <v-col cols='12' sm='6' v-for="skill in skills" :key="skill.name">
      <skill-item :skill='skill' />
    </v-col>
  </v-row>
</template>

<script lang='ts'>
import Vue from 'vue'
import SkillItem from '~/components/atoms/skill-item/index.vue'
import { SKILLS } from '~/utils/const'

export default Vue.extend({
  components: {
    SkillItem
  },
  data: () => ({
    skills: SKILLS,
  }),
})
</script>
