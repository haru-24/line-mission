export { default as NuxtLogo } from '../../components/NuxtLogo.vue'
export { default as Detail } from '../../components/detail/Detail.vue'
export { default as ToppageFinishedToDo } from '../../components/toppage/FinishedToDo.vue'
export { default as ToppageNewToDo } from '../../components/toppage/NewToDo.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
