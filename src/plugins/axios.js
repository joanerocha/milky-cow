import axios from 'axios'

export default ({ app, router, store, Vue }) => {
  Vue.prototype.$axios = axios
}
