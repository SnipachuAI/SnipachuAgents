(async () => {
  try {
    // 1) Analyze activity
    const activityAnalyzer = new TokenActivityAnalyzer("https://solana.rpc")
    const records = await activityAnalyzer.analyzeActivity("MintPubkeyHere", 20)

    // 2) Analyze depth
    const depthAnalyzer = new TokenDepthAnalyzer(
      "https://dex.api",
      "MarketPubkeyHere"
    )
    const depthMetrics = await depthAnalyzer.analyze(30)

    // 3) Detect patterns
    const volumes = records.map(r => r.amount)
    const patterns = detectVolumePatterns(volumes, 5, 100)

    // 4) Execute a custom task
    const engine = new ExecutionEngine()
    engine.register("report", async params => ({
      records: params.records.length,
    }))
    engine.enqueue("task1", "report", { records })
    engine.enqueue("task2", "report", { records: patterns })
    const taskResults = await engine.runAll()

    // 5) Sign the results
    const signer = new SigningEngine()
    const payload = JSON.stringify({
      depthMetrics,
      patterns,
      taskResults,
      timestamp: Date.now(),
    })
    const signature = await signer.sign(payload)
    const ok = await signer.verify(payload, signature)

    // Final combined output
    const output = {
      records,
      depthMetrics,
      patterns,
      taskResults,
      signatureValid: ok,
    }

    console.log(JSON.stringify(output, null, 2))
  } catch (err: any) {
    console.error("Pipeline failed:", err.message)
  }
})()
