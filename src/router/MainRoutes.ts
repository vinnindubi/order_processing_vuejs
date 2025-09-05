const MainRoutes = {
  path: '/main',
  meta: {
    requiresAuth: true
  },
  redirect: '/main',
  component: () => import('@/layouts/dashboard/DashboardLayout.vue'),
  children: [
    {
      name: 'LandingPage',
      path: '/',
      component: () => import('@/views/dashboard/DefaultDashboard.vue')
    },
    {
      name: 'Dashboard',
      path: '/dashboard',
      component: () => import('@/views/dashboard/DefaultDashboard.vue')
    },
    {
      name: 'Customers',
      path: '/customers',
      component: () => import('@/views/pages/CustomersPage.vue')
    },
    {
      name: 'Products',
      path: '/products',
      component: () => import('@/views/pages/Products.vue')
    },
    {
      name: 'Orders',
      path: '/orders',
      component: () => import('@/views/pages/Orders.vue')
    },
    {
      name: 'Cart',
      path: '/cartItems',
      component: () => import('@/views/pages/Cart.vue')
    },

    {
      name: 'Typography',
      path: '/typography',
      component: () => import('@/views/typography/TypographyPage.vue')
    },
    {
      name: 'Colors',
      path: '/colors',
      component: () => import('@/views/colors/ColorPage.vue')
    },
    {
      name: 'Shadow',
      path: '/shadow',
      component: () => import('@/views/shadows/ShadowPage.vue')
    },
    {
      name: 'Color',
      path: '/icon/ant',
      component: () => import('@/views/icons/AntDesignIcons.vue')
    },
    {
      name: 'other',
      path: '/sample-page',
      component: () => import('@/views/StarterPage.vue')
    }
  ]
};

export default MainRoutes;
