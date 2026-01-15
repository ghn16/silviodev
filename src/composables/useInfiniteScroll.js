import { ref, onMounted, onUnmounted } from 'vue'

export function useInfiniteScroll(callback, options = {}) {
  const {
    threshold = 0.1,
    rootMargin = '100px',
  } = options

  const observerTarget = ref(null)
  const isLoading = ref(false)
  const hasMore = ref(true)

  let observer

  const loadMore = async () => {
    if (isLoading.value || !hasMore.value) return
    
    isLoading.value = true
    try {
      const result = await callback()
      if (result === false) {
        hasMore.value = false
      }
    } finally {
      isLoading.value = false
    }
  }

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMore()
        }
      },
      {
        rootMargin,
        threshold,
      }
    )

    if (observerTarget.value) {
      observer.observe(observerTarget.value)
    }
  })

  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
    }
  })

  return {
    observerTarget,
    isLoading,
    hasMore,
  }
}