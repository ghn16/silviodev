import { ref } from 'vue'

const isTransitioning = ref(false)
const transitionName = ref('fade')

export function usePageTransition() {
  const startTransition = (name = 'fade') => {
    isTransitioning.value = true
    transitionName.value = name
  }

  const endTransition = () => {
    isTransitioning.value = false
  }

  return {
    isTransitioning,
    transitionName,
    startTransition,
    endTransition,
  }
}