<template>
  <div class='root'>
    <div
			class="bar"
			role="progressbar"
			aria-valuemin="0"
			aria-valuemax="100"
			:aria-valuenow="percent"
			:style='{ width: percent + "%" }'
    >
      {{ percent }}%
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
export default Vue.extend({
  props: {
    percent: {
      type: Number,
      required: true
    }
  },
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
