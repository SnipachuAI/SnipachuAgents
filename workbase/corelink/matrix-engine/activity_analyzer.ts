/**
 * Analyze on‐chain token activity: fetches recent activity and summarizes transfers.
 */
export interface ActivityRecord {
  timestamp: number
  signature: string
  source: string
  destination: string
  amount: number
  slot?: number
  err?: any
}

export class TokenActivityAnalyzer {
  constructor(private rpcEndpoint: string) {}

  async fetchRecentSignatures(mint: string, limit = 100): Promise<string[]> {
    const url = `${this.rpcEndpoint}/getSignaturesForAddress/${mint}?limit=${limit}`
    const res = await fetch(url)
    if (!res.ok) throw new Error(`Failed to fetch signatures: ${res.status}`)
    const json = await res.json()
    return json.map((e: any) => e.signature)
  }

  async analyzeActivity(mint: string, limit = 50): Promise<ActivityRecord[]> {
    const sigs = await this.fetchRecentSignatures(mint, limit)
    const out: ActivityRecord[] = []

    for (const sig of sigs) {
      try {
        const txRes = await fetch(`${this.rpcEndpoint}/getTransaction/${sig}`)
        if (!txRes.ok) continue
        const tx = await txRes.json()

        const pre = tx.meta?.preTokenBalances || []
        const post = tx.meta?.postTokenBalances || []

        for (let i = 0; i < post.length; i++) {
          const p = post[i]
          const q = pre[i] || { uiTokenAmount: { uiAmount: 0 }, owner: null }
          const delta =
            (p.uiTokenAmount.uiAmount || 0) -
            (q.uiTokenAmount.uiAmount || 0)
          if (delta !== 0) {
            out.push({
              timestamp: (tx.blockTime ?? 0) * 1000,
              signature: sig,
              source: q.owner || "unknown",
              destination: p.owner || "unknown",
              amount: Math.abs(delta),
              slot: tx.slot,
              err: tx.meta?.err,
            })
          }
        }
      } catch {
        // skip invalid transaction
      }
    }
    return out
  }

  /**
   * Count total transferred amount from records.
   */
  summarize(records: ActivityRecord[]): {
    totalVolume: number
    transfers: number
    uniqueAccounts: number
  } {
    const totalVolume = records.reduce((s, r) => s + r.amount, 0)
    const transfers = records.length
    const accounts = new Set(
      records.flatMap(r => [r.source, r.destination])
    )
    return {
      totalVolume,
      transfers,
      uniqueAccounts: accounts.size,
    }
  }
}
