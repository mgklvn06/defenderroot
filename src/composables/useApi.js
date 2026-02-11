import { ref, onUnmounted } from 'vue'

export function useApi(apiFunction) {
  const loading = ref(false)
  const error = ref(null)
  const data = ref(null)
  let isCancelled = false

  const execute = async () => {
    loading.value = true
    error.value = null
    data.value = null

    try {
      const result = await apiFunction()
      if (!isCancelled) {
        data.value = result
      }
    } catch (err) {
      if (!isCancelled) {
        error.value = err.message || 'An error occurred'
      }
    } finally {
      if (!isCancelled) {
        loading.value = false
      }
    }
  }

  onUnmounted(() => {
    isCancelled = true
  })

  return {
    loading,
    error,
    data,
    execute
  }
}
