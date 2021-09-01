<template>
  <div class="flex align-center">
    <img :src='skill.icon' :alt='skill.name' width="30" class="block"/>
    <div>
      <h6>{{ skill.name }}</h6>
      <span>{{ skill.period }}year</span>
      <div class='root'>
        <div
          class="bar"
          role="progressbar"
          aria-valuemin="0"
          aria-valuemax="100"
          :aria-valuenow="skill.percent"
          :style='{ width: skill.percent + "%" }'
        >
          {{ skill.percent }}%
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, PropType } from '@nuxtjs/composition-api'
import { SkillType } from '~/utils/const'
export default defineComponent({
  props: {
    skill: {
      type: Object as PropType<SkillType>,
      required: true,
    }
  },
  setup () {

    return {

    }
  }
})
</script>

<style lang="scss" scoped>
  .root {
    height: 1.5rem;
		overflow: hidden;
		font-size: 1rem;
		font-weight: 500;
		background-color: #f5f5f5;
		border-radius: .25rem;

    .bar {
			display: flex;
			flex-direction: column;
			justify-content: center;
			color: #fff;
			text-align: center;
			white-space: nowrap;
			background-image: linear-gradient(to right, #e2ebf0 0%, #cfd9df 100%);
		}
  }
</style>
