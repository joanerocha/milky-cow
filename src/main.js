// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import Quasar, * as All from 'quasar-framework/dist/quasar.mat.esm.js'

import App from './App'
import Router from './router'
import Store from './store'

import { MagicPluginLoader } from './helpers'

import 'quasar-framework/dist/quasar.mat.styl'
import 'quasar-extras/material-icons.js'
import './css/styles.mat.styl'

Vue.config.productionTip = false

// init quasar
Vue.use(Quasar, {
  components: All,
  directives: All,
  plugins: All
})

// instance config
const app = {
  el: '#app',
  router: Router,
  store: Store,
  ...App
}

// init user plugins
MagicPluginLoader('i18n', app)
MagicPluginLoader('axios', app)

/* eslint-disable no-new */
new Vue(app)
