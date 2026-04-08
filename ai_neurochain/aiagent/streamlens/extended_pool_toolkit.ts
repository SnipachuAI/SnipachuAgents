import { toolkitBuilder } from "@/ai/core"
import { FETCH_POOL_DATA_KEY } from "@/ai/modules/liquidity/pool-fetcher/key"
import { ANALYZE_POOL_HEALTH_KEY } from "@/ai/modules/liquidity/health-checker/key"
import { FetchPoolDataAction } from "@/ai/modules/liquidity/pool-fetcher/action"
import { AnalyzePoolHealthAction } from "@/ai/modules/liquidity/health-checker/action"

type Toolkit = ReturnType<typeof toolkitBuilder>

/**
 * Extended toolkit for liquidity analysis.
 * Includes:
 * – fetching raw pool data
 * – analyzing health / risks
 * – helper utilities for tool discovery
 */
export const EXTENDED_LIQUIDITY_TOOLS: Record<string, Toolkit> = Object.freeze({
  [`liquidityscan-${FETCH_POOL_DATA_KEY}`]: toolkitBuilder(new FetchPoolDataAction()),
  [`poolhealth-${ANALYZE_POOL_HEALTH_KEY}`]: toolkitBuilder(new AnalyzePoolHealthAction()),
})

/**
 * Get a tool from the extended liquidity toolkit.
 */
export function getExtendedLiquidityTool(key: string): Toolkit | undefined {
  return EXTENDED_LIQUIDITY_TOOLS[key]
}

/**
 * List all available extended liquidity tool keys.
 */
export function listExtendedLiquidityTools(): string[] {
  return Object.keys(EXTENDED_LIQUIDITY_TOOLS)
}

/**
 * Check if a given tool exists in the extended liquidity toolkit.
 */
export function hasExtendedLiquidityTool(key: string): boolean {
  return key in EXTENDED_LIQUIDITY_TOOLS
}
