import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import myForm from '../myForm';


Vue.use(VueRouter);

new Vue({
  
  template: '<myForm />',
  components: {
    myForm
  }
})



const routes = [
  {
    path: "/",
    name: "home-route",
    component: Home,
  },
  {
    path: "/chat",
    name: "chat-route",
  components: {
    myForm
  }
},

  // },
  {
    path: "/appointments",
    name: "appointments-route",
    component: () =>
      import(/* webpackChunkName: "details" */ "../views/Appointments.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;



