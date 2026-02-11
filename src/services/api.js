export async function fetchEngagementModels() {
  const response = await fetch("/api/engagement-models")
  if (!response.ok) {
    throw new Error("Failed to load engagement models")
  }
  return response.json()
}
