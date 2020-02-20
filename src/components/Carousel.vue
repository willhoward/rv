<template>
	<div class="carousel">
		<div class="carousel_content" v-bind:style="{ width: `${slides.length * 100}vw`, transform: `translateX(-${slide * 100}vw)` }">
			<div v-for="s in slides" v-bind:key="s.id" class="slide">
				<img v-bind:src="s.imageSrc" />
			</div>
		</div>
		<div class="carousel_navigation">
			<button
				v-for="(s, index) in slides"
				v-bind:key="s.id" class="navigation_button"
				v-bind:style="{ backgroundColor: slide === index ? 'black' : 'white'}"
				v-on:click="slide = index"
			/>
		</div>
	</div>
</template>

<script>
import slides from '@/assets/slides.json';

export default {
	name: 'Carousel',
	data: function () {
    return {
			slide: 0,
    }
  },
	computed: {
    slides() {
      return slides.map(s => s);
    }
  }
}
</script>

<style lang="scss" scoped>

.carousel {
	width: 100vw;
	height: 460px;
	position: relative;
	overflow: hidden;

	.carousel_content {
		height: 400px;
		position: absolute;
		top: 0;
		left: 0;
		transition: 500ms all ease-in-out;

		.slide {
			width: 100vw;
			height: 400px;
			display: inline-block;

			img {
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}
	}

	.carousel_navigation {
		width: 100vw;
		height: 60px;
		padding: $spacing-small;
		background-color: $cream;
		position: absolute;
		bottom: 0;
		left: 0;
		text-align: center;

		.navigation_button {
			width: 20px;
			height: 20px;
			margin: 0 $spacing-tiny;
			color: $white;
			border: none;
			border-radius: 50%;
			box-shadow: none;
			outline: none;
			-webkit-appearance: none;
			cursor: pointer;
			transition: 400ms all linear;
		}
	}
}
</style>