import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    //這個物件是用來重新導向首頁路徑的
    path: '/',
    redirect: '/box1', //redirect 的功能就是把 path:'' 的路徑 更改到其他路徑上
  },
  {
    path: '/box1',
    name: 'Box1',
    component: () => import('@/components/Box1.vue'),
  },

  {
    path: '/box2',
    name: 'Box2',
    component: () => import('@/components/Box2.vue'),
    children: [
      {
        //子路徑也要重新導向
        path: '',
        redirect: 'child1',
      },
      {
        path: 'child1',
        name: 'Child1',
        component: () => import('@/components/Child1.vue'),
      },
      {
        path: 'child2',
        name: 'Child2',
        component: () => import('@/components/Child2.vue'),
      },
      {
        path: 'child3',
        name: 'Child3',
        component: () => import('@/components/Child3.vue'),
      },
    ],
  },
];

// eslint-disable-next-line no-new
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: 'active', //命名一個叫做 active 的class
  linkExactActiveClass: 'exact-active', //命名一個叫做 exact-active 的class
});

export default router;
