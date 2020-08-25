import Layout from '../views/Layout.vue'

export const routes = [
    {
        path: '/login',
        name: 'Login',
        component: () => import(/* webpackChunkName: "Login" */ '../views/Login.vue')
      },
      {
        path: '*',
        component: () => import(/* webpackChunkName: "error404" */ '../views/error404.vue')
      },
      {
        path: '/',
        name: 'layout',
        component: Layout,
        redirect: '/Home',
        children: [
            {
                path: '/home',
                name: 'Home',
                component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue')
              },
              {
                path: '/about',
                name: 'About',
                component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
              }
        ]
      },
      
  ]

