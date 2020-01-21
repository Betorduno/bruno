import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _b7533ec2 = () => interopDefault(import('../pages/create.vue' /* webpackChunkName: "pages/create" */))
const _d8c31a92 = () => interopDefault(import('../pages/listUsers.vue' /* webpackChunkName: "pages/listUsers" */))
const _d50334c8 = () => interopDefault(import('../pages/main.vue' /* webpackChunkName: "pages/main" */))
const _dabdb2a2 = () => interopDefault(import('../pages/recordPassword.vue' /* webpackChunkName: "pages/recordPassword" */))
const _65e12c06 = () => interopDefault(import('../pages/register.vue' /* webpackChunkName: "pages/register" */))
const _7bdd5d5c = () => interopDefault(import('../pages/form/_id.vue' /* webpackChunkName: "pages/form/_id" */))
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
    path: "/listUsers",
    component: _d8c31a92,
    name: "listUsers"
  }, {
    path: "/main",
    component: _d50334c8,
    name: "main"
  }, {
    path: "/recordPassword",
    component: _dabdb2a2,
    name: "recordPassword"
  }, {
    path: "/register",
    component: _65e12c06,
    name: "register"
  }, {
    path: "/form/:id?",
    component: _7bdd5d5c,
    name: "form-id"
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
