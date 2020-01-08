import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _b7533ec2 = () => interopDefault(import('../pages/create.vue' /* webpackChunkName: "pages/create" */))
const _d50334c8 = () => interopDefault(import('../pages/main.vue' /* webpackChunkName: "pages/main" */))
const _0879ac02 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/create",
    component: _b7533ec2,
    name: "create"
  }, {
    path: "/main",
    component: _d50334c8,
    name: "main"
  }, {
    path: "/",
    component: _0879ac02,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
