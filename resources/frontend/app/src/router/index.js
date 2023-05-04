import { createRouter, createWebHistory } from 'vue-router'
import store from '../store/index.js'
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/profile/profile.vue'),
    meta:{
      requireLogin: true
    }
  },
  {
    path: '/debug',
    name: 'debug',
    component: () => import('../views/debug/debug.vue')
  },
  {
    path:'/auth',
    name: 'Auth',
    component: () => import('../views/sign_up/AuthLayout.vue'),
    children:[
      {
        path:'/login',
        name:'login',
        component: () => import('../views/sign_up/log-in.vue')
      },
      {
        path:'/register',
        name:'register',
        component: () => import('../views/sign_up/sign-in.vue')
      }
    ]
  },
  {
    path: '/log-in',
    name: 'log-in',
    component: () => import('../views/sign_up/log-in.vue')
  },
  {
    path: '/sign-in',
    name: 'sign-in',
    component: () => import('../views/sign_up/sign-in.vue')
  },
  {
    path:'/log-in',
    redirect:'auth/log-in',
  },
  {
    path:'/sign-in',
    redirect:'auth/sign-in',
  },

  {
    path: '/courses',
    name: 'courses',
    component: () => import('../views/courses/courses.vue'),
    meta:{
      requireLogin: true
    }
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('../views/blog/blog.vue')
  },
  {
    path: '/speed_test',
    name: 'speed_test',
    component: () => import('../views/speedTest/speedTest.vue'),
    meta:{
      requireLogin: true
    }
  },
  {
    path: '/help',
    name: 'help',
    component: () => import('../views/help/help.vue')
  },
  {
    path: '/job',
    name: 'job',
    component: () => import('../views/job/job.vue')
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import('../views/sign_up/sign-in.vue')
  },
  {
    path: '/mass_media',
    name: 'mass_media',
    component: () => import('../views/press/press.vue')
  },
  {
    path: '/sponsors',
    name: 'sponsors',
    component: () => import('../views/blog/blog.vue')
  },
  {
    path: '/practice',
    name: 'practice',
    component: () => import('../views/practice/practice.vue'),
  },
  {
    path:'/login',
    redirect:'auth/login',
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to,from,next)=>{
  if(to.matched.some(record=>record.meta.requireLogin)){
    if(!store.state.isAuthenticated){
      console.log(store.state.isAuthenticated)
      next({
        path: "/log-in",
        query: { redirect: to.fullPath }
      });
    }
    else {
      next();
    }
  }
  else next();
})
export default router
