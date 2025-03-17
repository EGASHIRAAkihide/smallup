import { describe, it, expect, vi, beforeEach } from "vitest"
import { analyzeCall, generateCoachingInsights } from "@/app/actions/ai-analysis"
import * as cache from "@/lib/cache"

// Mock fetch
global.fetch = vi.fn()

// Mock cache functions
vi.mock("@/lib/cache", () => ({
  getCachedCallAnalysis: vi.fn(),
  cacheCallAnalysis: vi.fn(),
  getCachedRepInsights: vi.fn(),
  cacheRepInsights: vi.fn(),
}))

// Mock database functions
vi.mock("@/lib/db", () => ({
  saveCallAnalysis: vi.fn(),
  saveCoachingInsights: vi.fn(),
}))

// Mock revalidatePath
vi.mock("next/cache", () => ({
  revalidatePath: vi.fn(),
}))

describe("AI Integration", () => {
  beforeEach(() => {
    vi.resetAllMocks()
  })

  describe("analyzeCall", () => {
    it("should return cached analysis if available", async () => {
      const mockCachedData = { transcript: [], score: 85 }
      vi.mocked(cache.getCachedCallAnalysis).mockResolvedValue(mockCachedData)

      const result = await analyzeCall({
        callId: "test-call-id",
        audioUrl: "test-audio-url",
        metadata: {
          rep: "Test Rep",
          customer: "Test Customer",
          date: "2024-03-20",
          duration: "10:00",
        },
      })

      expect(result).toEqual(mockCachedData)
      expect(global.fetch).not.toHaveBeenCalled()
    })

    it("should fetch analysis from API if not cached", async () => {
      const mockApiResponse = { transcript: [], score: 90 }
      vi.mocked(cache.getCachedCallAnalysis).mockResolvedValue(null)
      vi.mocked(global.fetch).mockResolvedValue({
        ok: true,
        json: () => Promise.resolve(mockApiResponse),
      } as Response)

      const result = await analyzeCall({
        callId: "test-call-id",
        audioUrl: "test-audio-url",
        metadata: {
          rep: "Test Rep",
          customer: "Test Customer",
          date: "2024-03-20",
          duration: "10:00",
        },
      })

      expect(result).toEqual(mockApiResponse)
      expect(global.fetch).toHaveBeenCalledTimes(1)
      expect(cache.cacheCallAnalysis).toHaveBeenCalledWith("test-call-id", mockApiResponse)
    })
  })

  describe("generateCoachingInsights", () => {
    it("should return cached insights if available", async () => {
      const mockCachedData = { strengths: [], improvements: [] }
      vi.mocked(cache.getCachedRepInsights).mockResolvedValue(mockCachedData)

      const result = await generateCoachingInsights("test-rep-id")

      expect(result).toEqual(mockCachedData)
      expect(global.fetch).not.toHaveBeenCalled()
    })

    it("should fetch insights from API if not cached", async () => {
      const mockApiResponse = { strengths: [], improvements: [] }
      vi.mocked(cache.getCachedRepInsights).mockResolvedValue(null)
      vi.mocked(global.fetch).mockResolvedValue({
        ok: true,
        json: () => Promise.resolve(mockApiResponse),
      } as Response)

      const result = await generateCoachingInsights("test-rep-id")

      expect(result).toEqual(mockApiResponse)
      expect(global.fetch).toHaveBeenCalledTimes(1)
      expect(cache.cacheRepInsights).toHaveBeenCalledWith("test-rep-id", mockApiResponse)
    })
  })
})

