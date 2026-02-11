export function useAnalytics() {
  const track = (event, payload = {}) => {
    // For now: console
    console.log("[Analytics Event]", event, payload)

    // Future integrations:
    // window.gtag?.('event', event, payload)
    // window.dataLayer?.push({ event, ...payload })
  }

  return { track }
}
