import { Redis } from "@upstash/redis"

// Initialize Redis client
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL || "",
  token: process.env.UPSTASH_REDIS_REST_TOKEN || "",
})

// Cache keys
const CACHE_KEYS = {
  CALL_ANALYSIS: (callId: string) => `call:analysis:${callId}`,
  REP_INSIGHTS: (repId: string) => `rep:insights:${repId}`,
  TEAM_INSIGHTS: "team:insights",
}

// Cache TTL in seconds
const CACHE_TTL = {
  CALL_ANALYSIS: 60 * 60 * 24 * 7, // 7 days
  REP_INSIGHTS: 60 * 60 * 24, // 1 day
  TEAM_INSIGHTS: 60 * 60 * 3, // 3 hours
}

// Cache functions
export async function cacheCallAnalysis(callId: string, data: any) {
  try {
    await redis.set(CACHE_KEYS.CALL_ANALYSIS(callId), JSON.stringify(data), { ex: CACHE_TTL.CALL_ANALYSIS })
    return true
  } catch (error) {
    console.error("Error caching call analysis:", error)
    return false
  }
}

export async function getCachedCallAnalysis(callId: string) {
  try {
    const cached = await redis.get(CACHE_KEYS.CALL_ANALYSIS(callId))
    return cached ? JSON.parse(cached as string) : null
  } catch (error) {
    console.error("Error getting cached call analysis:", error)
    return null
  }
}

export async function cacheRepInsights(repId: string, data: any) {
  try {
    await redis.set(CACHE_KEYS.REP_INSIGHTS(repId), JSON.stringify(data), { ex: CACHE_TTL.REP_INSIGHTS })
    return true
  } catch (error) {
    console.error("Error caching rep insights:", error)
    return false
  }
}

export async function getCachedRepInsights(repId: string) {
  try {
    const cached = await redis.get(CACHE_KEYS.REP_INSIGHTS(repId))
    return cached ? JSON.parse(cached as string) : null
  } catch (error) {
    console.error("Error getting cached rep insights:", error)
    return null
  }
}

export async function invalidateCache(key: string) {
  try {
    await redis.del(key)
    return true
  } catch (error) {
    console.error("Error invalidating cache:", error)
    return false
  }
}

