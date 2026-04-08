/**
 * Detect volume‐based patterns in a series of activity amounts.
 */
export interface PatternMatch {
  index: number
  window: number
  average: number
  max: number
  min: number
  variance: number
}

export function detectVolumePatterns(
  volumes: number[],
  windowSize: number,
  threshold: number
): PatternMatch[] {
  const matches: PatternMatch[] = []

  for (let i = 0; i + windowSize <= volumes.length; i++) {
    const slice = volumes.slice(i, i + windowSize)
    const avg = slice.reduce((a, b) => a + b, 0) / windowSize
    const max = Math.max(...slice)
    const min = Math.min(...slice)
    const variance =
      slice.reduce((acc, v) => acc + Math.pow(v - avg, 2), 0) / windowSize

    if (avg >= threshold) {
      matches.push({
        index: i,
        window: windowSize,
        average: avg,
        max,
        min,
        variance,
      })
    }
  }

  return matches
}

/**
 * Detects continuous rising trends in volume.
 */
export function detectRisingTrends(
  volumes: number[],
  minLength: number
): number[][] {
  const trends: number[][] = []
  let start = 0

  for (let i = 1; i < volumes.length; i++) {
    if (volumes[i] <= volumes[i - 1]) {
      if (i - start >= minLength) {
        trends.push(volumes.slice(start, i))
      }
      start = i
    }
  }

  if (volumes.length - start >= minLength) {
    trends.push(volumes.slice(start))
  }

  return trends
}
