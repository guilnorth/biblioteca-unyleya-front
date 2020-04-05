import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/:endpoint",
    name: "List",
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/base/ListBase.vue"),
    children: [
      {
        path: ":id",
        name: "Edit",
        component: () =>
          import(/* webpackChunkName: "login" */ "../components/base/DetailBase.vue")
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth) {
    next("/");
  } else {
    next();
  }
});

export default router;

/* 
meta: {
  requiresAuth: true
} */
