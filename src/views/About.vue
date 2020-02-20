<template>
  <div>
		<Page>
			<Headline title="About page content" />
			<p v-for="paragraph in content" v-bind:key="paragraph">
				{{ paragraph }}
				<Spacer direction="vertical" />
			</p>
		</Page>
  </div>
</template>

<script>
import Page from '@/components/Page.vue';
import Headline from '@/components/Headline.vue';
import Spacer from '@/components/Spacer.vue';
import loremIpsum from '@/assets/lorem-ipsum.json';

export default {
	name: 'Home',
	components: {
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