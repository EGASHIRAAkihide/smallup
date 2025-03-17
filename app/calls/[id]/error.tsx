"use client"

import ErrorBoundary from "@/components/error-boundary"

export default function CallDetailsError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return <ErrorBoundary error={error} reset={reset} context="call analysis" />
}

