import Store from '../store'

export default (to, from, next) => {
  let authenticated = Store.getters['user/userAuthenticated']
  if (to.name !=='login' && !authenticated) next({ name: 'login' })
  else next()
}