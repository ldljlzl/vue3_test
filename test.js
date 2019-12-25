// import { Vue } from "./packages/vue/dist/vue.global.js";
export function useMousePosition() {
  const x = Vue.ref(0)
  const y = Vue.ref(0)

  function update(e) {
    x.value = e.pageX
    y.value = e.pageY
  }

  onMounted(() => {
    window.addEventListener('mousemove', update)
  })

  onUnmounted(() => {
    window.removeEventListener('mousemove', update)
  })

  return { x, y }
}
