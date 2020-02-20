<template>
	<div v-bind:class="`spacer_${direction}`" />
</template>

<script>
export default {
	props: {
		direction: String,
	}
}
</script>

<style lang="scss" scoped>
	.spacer_horizontal {
		width: $spacing-small;
		height: $spacing-tiny;
	}

	.spacer_vertical {
		width: $spacing-tiny;
		height: $spacing-small;
	}
</style>