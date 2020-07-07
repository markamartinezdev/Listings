import Vue from 'vue'
import VueRouter from 'vue-router'
import RouterValidation from './router-validation'
import routes from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(RouterValidation)


export default router
