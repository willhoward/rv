<template>
	<button class="button">
		<slot />
	</button>
</template>

<script>
export default {
	name: 'Button',
}
</script>

<style scoped lang="scss">
	button {
		width: auto;
		min-width: 100px;
		height: auto;
		padding: $spacing-tiny;
		color: $white;
		background-color: $black;
		border: none;
		border-radius: $border-radius;
		box-shadow: none;
		outline: none;
		-webkit-appearance: none;
		font-size: 13px;
		font-weight: 700;
		cursor: pointer;
		transition: 200ms all ease-in-out;
		box-shadow: $box-shadow-small;

		&:hover {
			transform: translateY(-2px);
			box-shadow: $box-shadow-large;
		}
	}
</style>