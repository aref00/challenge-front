import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import HomeView from '../views/HomeView.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () =>
      import(/* webpackChunkName: "login" */ '../views/LoginView.vue'),
  },
  {
    path: '/register',
    name: 'register',
    component: () =>
      import(/* webpackChunkName: "register" */ '../views/RegisterView.vue'),
  },
  {
    path: '/articles',
    name: 'dashboard',
    component: () =>
      import(/* webpackChunkName: "dashboard" */ '../views/DashboardView.vue'),
    children: [
      {
        path: '',
        name: 'articles',
        component: () =>
          import(
            /* webpackChunkName: "articles" */ '../views/ArticlesView.vue'
          ),
        children: [{ path: 'page/:page', name: 'pagination' }],
      },
      {
        path: 'new',
        name: 'new',
        component: () =>
          import(
            /* webpackChunkName: "new-article" */ '../views/NewArticlesView.vue'
          ),
      },
      {
        path: 'edit/:slug',
        name: 'edit',
        component: () =>
          import(
            /* webpackChunkName: "new-article" */ '../views/NewArticlesView.vue'
          ),
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
