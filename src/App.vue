<template>
  <div id="app">
    <Navigation />
    <router-view />
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue';

export default {
	components: {
		Navigation,
	}
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Poppins:400,500,700&display=swap');
@import url('https://fonts.googleapis.com/css?family=Lora&display=swap');

* {
	margin: 0;
	vertical-align: top;
	box-sizing: border-box;
	font-family: 'Poppins', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

body {
	background-color: $cream;
}

p.content {
	color: $gray;
}
</style>