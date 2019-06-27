import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
// import Dropdown from 'bp-vuejs-dropdown'
import Welcome from './components/Welcome.vue'
import Page1 from './components/Page1.vue'
import Page2 from './components/Page2.vue'

// Vue.use(Dropdown)
Vue.use(VueRouter)
const routes = [
  { path : '/' , component : Welcome},
  { path : '/Page1' , component : Page1},
  { path : '/Page2' , component : Page2}


]

const router = new VueRouter({
  routes,
  linkExactActiveClass: 'active',
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
