import { ref, onMounted, onBeforeUnmount } from "vue"

export function useReveal(options = {}) {
  const el = ref(null)
  const isVisible = ref(false)

  let observer = null

  onMounted(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches

    if (prefersReduced) {
      isVisible.value = true
      return
    }

    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      isVisible.value = true
      return
    }

    if (!el.value) return

    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          isVisible.value = true
          if (options.once !== false) {
            observer.disconnect()
          }
        } else {
          if (options.once === false) {
            isVisible.value = false
          }
        }
      },
      {
        threshold: options.threshold ?? 0.2,
        rootMargin: options.rootMargin ?? "0px 0px -10% 0px",
      }
    )

    observer.observe(el.value)

    requestAnimationFrame(() => {
      if (!el.value) return
      const rect = el.value.getBoundingClientRect()
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        isVisible.value = true
        if (options.once !== false) {
          observer?.disconnect()
        }
      }
    })
  })

  onBeforeUnmount(() => {
    observer?.disconnect()
  })

  return { el, isVisible }
}
