import Vue from 'vue';
import App from './App.vue';
import router from './router';
// import loremIpsum from '@/assets/lorem-ipsum.json';

Vue.config.productionTip = false;

new Vue({
	router,
  render: h => h(App)
}).$mount('#app')
