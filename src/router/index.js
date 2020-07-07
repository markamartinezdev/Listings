import Vue from 'vue'
import VueRouter from 'vue-router'
import RouterValidation from './router-validation'

// views
import UpdatePassword from '@/views/UpdatePassword'
import Login from '@/views/Login'
import Rent from '@/views/Rent'
import Buy from '@/views/Buy'
import Listing from '@/views/Listing'
import SavedSearches from '@/views/SavedSearches'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/buy',
    component: Login
  },
  {
    path: '/buy',
    name: 'buy',
    component: Buy
  },
  {
    path: '/rent',
    name: 'rent',
    component: Rent
  },
  {
    path: '/saved_searches',
    redirect: '/buy',
    name: 'saved_searches',
    component: Buy
  },
  {
    path: '/favorites',
    redirect: '/buy',
    name: 'favorites',
    component: Buy
  },
  {
    path: '/listing/:listingId',
    name: 'listing',
    component: Buy
  },
  {
    path: '/update_password',
    name: 'UpdatePassword',
    component: UpdatePassword
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(RouterValidation)


export default router
