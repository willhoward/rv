<template>
	<div class="headline">
		<h1>{{ title }}</h1>
	</div>
</template>

<script>
export default {
	name: 'Headline',
	props: {
		title: String,
	},
}
</script>

<style lang="scss" scoped>
.headline {
	width: 100%;
	height: auto;
	text-align: center;
	padding-bottom: $spacing-large;

	h1 {
		font-size: 48px;
		font-weight: 700;
	}
}
</style>