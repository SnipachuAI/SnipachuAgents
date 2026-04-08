/**
 * Analyze on‐chain orderbook depth for a given market.
 */
export interface Order {
  price: number
  size: number
}

export interface DepthMetrics {
  averageBidDepth: number
  averageAskDepth: number
  spread: number
  totalBidVolume: number
  totalAskVolume: number
  midPrice: number
}

export class TokenDepthAnalyzer {
  constructor(private rpcEndpoint: string, private marketId: string) {}

  async fetchOrderbook(
    depth = 50
  ): Promise<{ bids: Order[]; asks: Order[] }> {
    const url = `${this.rpcEndpoint}/orderbook/${this.marketId}?depth=${depth}`
    const res = await fetch(url)
    if (!res.ok) throw new Error(`Orderbook fetch failed: ${res.status}`)
    return (await res.json()) as { bids: Order[]; asks: Order[] }
  }

  async analyze(depth = 50): Promise<DepthMetrics> {
    const { bids, asks } = await this.fetchOrderbook(depth)

    const avg = (arr: Order[]) =>
      arr.reduce((s, o) => s + o.size, 0) / Math.max(arr.length, 1)
    const sum = (arr: Order[]) => arr.reduce((s, o) => s + o.size, 0)

    const bestBid = bids[0]?.price ?? 0
    const bestAsk = asks[0]?.price ?? 0
    const midPrice =
      bestBid > 0 && bestAsk > 0 ? (bestBid + bestAsk) / 2 : 0

    return {
      averageBidDepth: avg(bids),
      averageAskDepth: avg(asks),
      spread: bestAsk - bestBid,
      totalBidVolume: sum(bids),
      totalAskVolume: sum(asks),
      midPrice,
    }
  }

  /**
   * Detect if market has healthy depth by comparing bid/ask balance.
   */
  async isHealthy(depth = 50, imbalanceThreshold = 2): Promise<boolean> {
    const metrics = await this.analyze(depth)
    if (metrics.totalAskVolume === 0 || metrics.totalBidVolume === 0) {
      return false
    }
    const ratio =
      metrics.totalBidVolume > metrics.totalAskVolume
        ? metrics.totalBidVolume / metrics.totalAskVolume
        : metrics.totalAskVolume / metrics.totalBidVolume
    return ratio <= imbalanceThreshold
  }
}
