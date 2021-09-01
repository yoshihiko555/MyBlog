<template>
  <div class="container">
    <div class='text-center'>
      <h3>Yoshihiko</h3>
      <p>Engineer</p>
    </div>
    <div>
      <h4>Career</h4>
      <div class="pl-2">
        <p>1994年生まれ。栃木県出身。</p>
        <p>専門学校を卒業後、業界の技術職として4年間従事。</p>
        <p>2019年に某IT会社に転職。</p>
      </div>
    </div>
    <div>
      <h4>Skill</h4>
      <skill-list :skills="skills"/>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from '@nuxtjs/composition-api'
import SkillList from '~/components/molecules/skill-list.vue'
import { SKILLS, SkillType } from '~/utils/const'

type Data = {
  skills: SkillType[]
}

export default defineComponent({
  components: {
    SkillList
  },
  setup (): Data {
    return {
      skills: SKILLS,
    }
  }
})
</script>
