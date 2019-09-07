import TextareaAutosize from './components/TextareaAutosize.vue'
const version = '__VERSION__'

const install = Vue => {
  Vue.component('TextareaAutosize', TextareaAutosize)
}

const plugin = {
  install,
  version
}

export default plugin

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}
