import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const _import_ = file => () => import('@/example/' + file + '.vue')

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: _import_('index')
    }
  ]
})
