<template>
	<div class="page">
		<div class="page_content">
			<slot />
		</div>
	</div>
</template>

<script>
export default {
	
}
</script>

<style lang="scss" scoped>
.page {
	width: 100vw;
	height: auto;
	background-color: $white;
	padding: $spacing-large $spacing-small;

	.page_content {
		width: 800px;
		max-width: 100%;
		margin: 0 auto;
	}
}
</style>