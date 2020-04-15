import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import myForm from './myForm';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


new Vue({
  // el: '#app',
  template: '<myForm />',
  components: {
    myForm
  }
})