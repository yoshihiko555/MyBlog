<template>
	<div class="skill-item__wrap d-flex align-center">
		<div class="icon"><slot name="icon"></slot></div>
		<div>
			<h6 class="mr-1"><slot name="name">Title</slot></h6>
			<span class=""><slot name="period">3</slot>year</span>
			<progress-bar :percent='percent' />
		</div>
	</div>
</template>

<script>
import ProgressBar from '@/components/parts/ProgressBar'

export default {
	props: {
		percent: {
			type: Number,
			required: true,
		}
	},
	components: {
		ProgressBar
	}
}
</script>

<style lang="scss" scoped>
	.skill-item__wrap {
		height: 60px;

		.icon {
			flex-basis: 20%;
			text-align: center;

			& > img {
				width: 50px;
			}
		}

		div:last-child {
			flex-basis: 80%;

			h6 {
				display: inline-block;
				font-size: 1.2em;
			}

			span {
				color: rgb(165, 165, 165);
				font-size: .8em;
				font-weight: 600;
			}
		}
	}

</style>
