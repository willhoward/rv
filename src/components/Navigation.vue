<template>
	<div>
		<div class="nav flex">
			<div class="flex_equal" />
			<div class="flex_item">
				<router-link to="/">
					<Button>
						Home
					</Button>
				</router-link>
			</div>
			<div class="flex_item">
				<Spacer direction="horizontal" />
			</div>
			<div class="flex_item">
				<router-link to="/about">
					<Button>
						About
					</Button>
				</router-link>
			</div>
			<div class="flex_item">
				<Spacer direction="horizontal" />
			</div>
			<div class="flex_item">
				<router-link to="/contact">
					<Button>
						Contact
					</Button>
				</router-link>
			</div>
			<div class="flex_equal" />
		</div>
		<div class="nav_placeholder" />
	</div>
</template>

<script>
import Button from '@/components/Button.vue';
import Spacer from '@/components/Spacer.vue';

export default {
	name: 'Navigation',
	components: {
		Button,
		Spacer,
	},
}
</script>

<style scoped lang="scss">
.nav {
	width: 100vw;
	height: auto;
	padding: $spacing-small;
	background-color: $white;
	position: fixed;
	z-index: 2;
	box-shadow: $box-shadow-small;
}

.flex {
	width: 100%;
	height: auto;
	display: flex;

	.flex_item {
		flex: 0 0 content;
		min-width: 0;
	}

	.flex_equal {
		flex: 1 0 0;
		min-width: 0;
	}

	.flex_space {
		flex: 1 1 auto;
		min-width: 0;
	}
}

.nav_placeholder {
	width: 100vw;
	height: 80px;
}
</style>