<template>
  <div>
		<Carousel />
		<Page>
			<Headline title="Home page content" />
			<p v-for="paragraph in content" v-bind:key="paragraph" class="content">
				{{ paragraph }}
				<Spacer direction="vertical" />
			</p>
		</Page>
  </div>
</template>

<script>
import Carousel from '@/components/Carousel.vue';
import Page from '@/components/Page.vue';
import Headline from '@/components/Headline.vue';
import Spacer from '@/components/Spacer.vue';
import loremIpsum from '@/assets/lorem-ipsum.json';

export default {
	name: 'Home',
	components: {
		Carousel,
		Page,
		Headline,
		Spacer,
	},
	computed: {
    content() {
      return loremIpsum.map(item => item);
    }
  }
}
</script>
