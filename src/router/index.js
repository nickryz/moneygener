import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/mfo/:name',
    name: 'Propos',
    props: true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/ProposPage.vue')
  },
  {
    path: '/privacypolicy',
    name: 'PrivacyPolicy',
    component: () => import('../views/PrivacyPolicy.vue')
  },
  {
    path: '/termsconditions',
    name: 'TermsConditions',
    component: () => import('../views/TermsConditions.vue')
  }
]

const router = new VueRouter({
  /* mode: 'history', */
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  window.gtag('config', 'UA-114428072-2', {
    page_path: to.path
  })
  next()
})

export default router
