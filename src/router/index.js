import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    redirect: "/books"
  },
  {
    path: "/:endpoint",
    name: "List",
    component: () =>
      import(/* webpackChunkName: "list" */ "../components/base/ListBase.vue"),
    children: [
      {
        path: ":id",
        name: "Detail",
        component: () =>
          import(
            /* webpackChunkName: "detail" */ "../components/base/DetailBase.vue"
          )
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
