import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
// import { compile } from 'vue';

const routes = [
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
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
  {
    path: '/userlogin',
    component: () => import('../views/UserLogin.vue'),
  },
  {
    path: '/dashboard',
    component: () => import('../views/TheDashboard.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/TheProducts.vue'),
      },
      {
        path: 'orders',
        component: () => import('../views/TheOrders.vue'),
      },
      {
        path: 'coupons',
        component: () => import('../views/TheCoupons.vue'),
      },
    ],
  },
  {
    path: '/user',
    component: () => import('../views/TheUserboard.vue'),
    children: [
      {
        path: 'cart',
        component: () => import('../views/UserCart.vue'),
      },
      {
        path: 'product/:productId',
        component: () => import('../views/UserProduct.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes,
});

export default router;
