<template>
    <v-container class="main">
		<v-row>
			<v-col cols='12' class="text-center">
				<h3>Yoshihiko</h3>
				<p>Programmer</p>
			</v-col>
		</v-row>
		<v-row class="mb-5">
			<v-col cols='12'>
				<h4>Career</h4>
				<div class="pl-2">
					<p>1994年生まれ。栃木県出身。</p>
					<p>専門学校を卒業後、業界の技術職として4年間従事。</p>
					<p>2019年に某IT会社に転職。</p>
				</div>
			</v-col>

		</v-row>
		<v-row class="mb-5">
			<v-col cols='12'>
				<h4 class="mb-3">Skill</h4>
				<v-row>
					<v-col cols='12' sm='6' v-for="skill in skills" :key="skill.name">
						<skill-item :percent='skill.percent'>
							<template #name>
								{{ skill.name }}
							</template>
							<template #period>
								{{ skill.period }}
							</template>
							<template #icon>
								<img :src='skill.icon' :alt='skill.name'>
							</template>
						</skill-item>
					</v-col>
				</v-row>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import Con from '@/static/js/const'
import SkillItem from '@/components/parts/SkillItem'

export default {
	components: {
		SkillItem
	},
    data: () => ({
		skills: Con.SKILLS
    })
}
</script>

<style lang="scss" scoped>
	p {
		margin-bottom: 4px;
	}
</style>
