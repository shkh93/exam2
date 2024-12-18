export default [
  {
    path: '/',
    meta: {
      layout: 'main',
      auth: true,
    },
    
    component: () => import('@/layouts/PMain.vue'),
  },

  // {
  //   path: '/',
  //   meta: {
  //     layout: 'home',
  //     auth: true,
  //   },
    
  //   component: () => import('@/pages/Default.vue'),
  // }
]
