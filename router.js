import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: () => import("./src/components/HomePage.vue"),
      name: "Main App",
      children: [
        {
          path: "",
          component: () => import("./src/components/HelloWorld.vue"),
          name: "Hello World page",
        },
        {
          path: "form",
          component: () => import("./src/components/FormApp.vue"),
          name: "Form App page", // Updated name to be unique
        },
      ],
    },
  ],
});
