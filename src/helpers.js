import Vue from 'vue'
import router from './router'
import store from './store'

const MagicPluginLoader = (pluginName, app) => {
  // eslint-disable-next-line
  let plugin = require('./plugins/' + pluginName).default
  plugin({ app, router, store, Vue })
}

export { MagicPluginLoader }
