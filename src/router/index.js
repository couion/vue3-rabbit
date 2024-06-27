import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      component: () => import('@/views/login/index.vue')
    },
    {
      path: '/',
      component: () => import('@/views/layout/index.vue'),
      children: [
        {
          path: '',
          component: () => import('@/views/layout/home/index.vue')
        },
        {
          path: 'category/:id',
          component: () => import('@/views/layout/category/index.vue')
        },
        {
          path: 'category/sub/:id',
          component: () => import('@/views/layout/subCategory/index.vue')
        },
        {
          path: 'detail/:id',
          component: () => import('@/views/layout/Detail/index.vue')
        },
        {
          path: 'cartlist',
          component: () => import('@/views/layout/cartList/index.vue')
        },
        {
          path: 'checkout',
          component: () => import('@/views/layout/checkOut/index.vue')
        },
        {
          path: 'pay',
          component: () => import('@/views/layout/pay/index.vue')
        },
        {
          path: 'paycallback', // 注意路径，必须是paycallback
          component: () => import('@/views/layout/pay/payBack.vue')
        },
        {
          path: 'member', // 
          component: () => import('@/views/layout/member/index.vue'),
          children: [
            {
              path: '', // 
              component: () => import('@/views/layout/member/components/UserInfo.vue'),

            },
            {
              path: 'order', // 
              component: () => import('@/views/layout/member/components/UserOrder.vue'),

            }
          ]
        },
      ]
    },
  ],
  //路由行为定制
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
