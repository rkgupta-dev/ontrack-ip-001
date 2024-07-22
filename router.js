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
        {
          path: "bikes",
          component: () => import("./src/components/ModelList.vue"),
          name: "Bike List page", // Updated name to be unique
        },
        {
          path: "about",
          component: () => import("./src/components/AboutPage.vue"),
          name: "About page", // Updated name to be unique
        },
        {
          path: "contact",
          component: () => import("./src/components/ContactPage.vue"),
          name: "Contact page", // Updated name to be unique
        },
      ],
    },
  ],
});
