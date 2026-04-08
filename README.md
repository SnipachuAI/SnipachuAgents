<p align="center">
  <img width="400" height="400" alt="snipachu-ai-cover" src="https://github.com/user-attachments/assets/02314c23-648e-4532-a004-79c0b6cb2e83" />
</p>

<h1 align="center">Snipachu AI</h1>

<div align="center">
  <p><strong>AI-first on-chain analytics and research system for tokens, wallets, and project narratives</strong></p>
  <p>
    Token intelligence • Wallet profiling • Narrative compression • Multi-surface agent access • Credit-based usage
  </p>
</div>

<div align="center">

[![Web App](https://img.shields.io/badge/Web%20App-Open-3b82f6?style=for-the-badge&logo=googlechrome&logoColor=white)](https://your-web-app-link)
[![Telegram Mini App](https://img.shields.io/badge/Telegram%20Mini%20App-Launch-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white)](https://t.me/your_mini_app)
[![Docs](https://img.shields.io/badge/Docs-Read-8b5cf6?style=for-the-badge&logo=readthedocs&logoColor=white)](https://your-docs-link)
[![X.com](https://img.shields.io/badge/X.com-Follow-000000?style=for-the-badge&logo=x&logoColor=white)](https://x.com/your_account)
[![Telegram Community](https://img.shields.io/badge/Telegram%20Community-Join-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white)](https://t.me/your_group_or_channel)

</div>

---

> [!IMPORTANT]
> Snipachu AI is built around a wallet-based account model, shared credits, and the same agent logic across Web App, Telegram Mini App, and browser extension

> [!TIP]
> The platform is designed to move from analysis to action without breaking context, while keeping users in control of their own wallet

> [!NOTE]
> Product surfaces may differ in UI depth, but they all run on the same analytics layer, agent logic, and account-level credit balance

> [!CAUTION]
> Snipachu AI is a decision-support system, not financial advice, and all swaps or wallet actions still require explicit user approval

## System Definition

Snipachu AI is an AI-first analytics system that accepts a token address, wallet address, or project query, runs on-chain analysis, market interpretation, and narrative research, then returns structured metrics with a plain-English summary of risk and opportunity

Instead of acting like a chart-first terminal, the system is built to explain what matters before execution: liquidity quality, holder concentration, wallet behavior, exposure, and current project narrative

> [!IMPORTANT]
> The same intelligence layer powers three product surfaces: Web App for deep analysis, Telegram Mini App for compact checks, and browser extension for contextual inspection inside the browsing flow

## Operational Flow

The platform follows a single end-to-end path regardless of entry point

```text
Input
  ├─ Token address
  ├─ Wallet address
  └─ Project / token name

Ingestion
  ├─ On-chain data collection
  ├─ Market metric retrieval
  └─ External narrative source gathering

Processing
  ├─ Token analytics pipeline
  ├─ Wallet analytics pipeline
  └─ Research compression pipeline

Inference
  ├─ Analytics Agent summary generation
  └─ Research Agent narrative synthesis

Delivery
  ├─ Web App full output
  ├─ Telegram compact output
  └─ Extension quick context panel

Action Layer
  ├─ Watchlist / revisit
  ├─ Portfolio review
  └─ Swap flow entry with self-custody preserved
```

| Stage | Purpose | Output |
|---|---|---|
| Input | Receive token, wallet, or project query | Normalized request |
| Ingestion | Pull chain, market, and narrative data | Raw analysis context |
| Processing | Compute metrics, flags, and patterns | Structured analytics |
| Inference | Convert signals into readable conclusions | AI summary |
| Delivery | Fit response to each surface | Full, compact, or minimal UI |
| Action | Let user continue toward decision or execution | Watch, rebalance, or swap |

## Core Engines

### Parsing

The parsing layer normalizes identifiers and routes requests into the correct pipeline

It determines whether the input is a token, wallet, or project query, validates the network context, applies detail level, and prepares the job for downstream analytics or research logic

> [!TIP]
> This layer is what keeps the same request shape usable across Web App, Telegram Mini App, browser extension, and external API clients

### Processing

The processing layer computes the actual system intelligence

For tokens, it evaluates liquidity depth, volume behavior, volatility, holder concentration, and structural risk context

For wallets, it profiles holdings, portfolio concentration, PnL direction, activity style, and behavioral risk

For project queries, it groups narrative sources, removes duplicates, and extracts the events that materially changed the story around the asset

### Inference

The inference layer turns structured analytics into readable conclusions

The Analytics Agent explains whether the token or wallet setup looks healthy, fragile, concentrated, overheated, or structurally risky

The Research Agent condenses external information into a short digest so users do not need to manually scan news, posts, and fragmented project updates

> [!NOTE]
> The system is AI-first because interpretation is a core output, not a cosmetic add-on above raw numbers

### Orchestration

The orchestration layer manages how work is triggered, queued, returned, and reused across product surfaces

It powers synchronous lightweight calls, asynchronous jobs, shared history, shared credits, and unified agent behavior no matter where the request begins

| Engine | Primary role | Typical outputs |
|---|---|---|
| Parsing | Normalize and route input | Valid request object |
| Processing | Compute metrics and flags | Liquidity, volatility, PnL, risk signals |
| Inference | Explain what matters | Human-readable summaries |
| Orchestration | Manage jobs and delivery | Shared results, usage tracking, surface-specific response shapes |

## Control Surface

Snipachu AI is designed as a controllable system rather than a black box product shell

### Configs

Configs define network selection, detail level, time window, surface behavior, and optional output depth for different use cases

### Prompts

Agent-facing prompt structure governs how summaries are written, how risks are prioritized, and how concise or detailed each response should be

### Flags

Flags expose system-level risk markers such as thin liquidity, whale concentration, overexposure, abnormal flow behavior, and insufficient credits

### APIs

The API layer exposes analytics, agent execution, job polling, and webhook management under account-level authentication

### Modes

The same system supports different interaction modes

| Mode | Intended environment | Behavior |
|---|---|---|
| Short | Telegram and extension | Compressed metrics and short AI summary |
| Full | Web App | Expanded metrics, logs, and detailed review |
| Sync | Lightweight direct calls | Immediate response |
| Async | Heavier jobs | Run → poll → fetch result |

> [!WARNING]
> Surface differences change presentation, not logic. A token check triggered in Telegram and the same token check triggered in the Web App still draw from the same core pipelines and shared account credits

## Usage Tiers

### Basic

Basic usage is the entry layer for new users and lightweight checks

It typically starts with wallet sign-in, the free 10-credit test drive, a first token check, a first wallet check, and an optional research call to understand the full analysis loop

### Advanced

Advanced usage is for traders or power users who want more control over how the system is used

This includes recurring token and wallet analysis, deeper agent usage, API access, custom integrations, and broader use across Web App, Telegram, and browser extension

### Production

Production usage is for heavier operators, teams, and builders integrating Snipachu AI into internal dashboards, automation layers, or external products

This mode adds stronger operational requirements around concurrency, job handling, webhook reliability, credits monitoring, and system observability

| Tier | Best for | Core capability |
|---|---|---|
| Basic | New users and manual checks | Fast onboarding and simple agent runs |
| Advanced | Active traders and power users | Higher-volume analysis and customization |
| Production | Teams and integrations | API, jobs, webhooks, scale-aware usage |

## Architecture Notes

### Stack

Snipachu AI combines wallet-based authentication, on-chain data ingestion, analytics pipelines, AI summarization, job orchestration, and account-level credits into one coordinated system

### Key components

| Component | Function |
|---|---|
| Wallet-based account | Identity, sign-in, shared credits, shared history |
| Token analytics engine | Liquidity, volume, volatility, holder concentration, risk flags |
| Wallet analytics engine | Portfolio structure, PnL, behavior, exposure profile |
| Research engine | Narrative gathering, filtering, compression |
| Analytics Agent | Metrics + readable token or wallet explanation |
| Research Agent | Short-form narrative digest |
| Jobs layer | Async processing and result retrieval |
| Webhooks layer | Event delivery for jobs, credits, and plan changes |
| Credits engine | Metered product usage via account balance |

### Deployment model

The system is multi-surface by design

The Web App acts as the full control terminal

The Telegram Mini App acts as the compact mobile interface

The browser extension acts as a contextual inspection layer

The API allows the same analytics and agent outputs to be consumed by external tools

> [!IMPORTANT]
> One wallet equals one account, one credits balance, and one intelligence layer across all surfaces

## Reality Check

Snipachu AI is designed to improve clarity, not eliminate uncertainty

### Benchmarks

The most useful internal benchmark for this system is not whether it produces the largest amount of data, but whether it reduces the number of tabs, interpretation steps, and blind spots before a decision is made

A good result is faster recognition of thin liquidity, whale-heavy supply, poor wallet behavior, narrative shifts, or overconcentrated exposure before capital is committed

### Known caveats

| Caveat | Why it matters |
|---|---|
| AI summaries depend on input quality | Weak or incomplete upstream data reduces summary quality |
| On-chain signals can change quickly | A healthy setup can deteriorate fast in volatile markets |
| Narrative analysis is compressive | Digests reduce noise but also remove nuance |
| Wallet profiling is probabilistic | Behavioral interpretation is useful, but not absolute |
| Credits are finite | Heavy usage must be planned, monitored, or topped up |

### Realistic expectations

Users should expect decision support, risk surfacing, and compressed context

Users should not expect guarantees of safety, profitability, or perfect predictive power

> [!CAUTION]
> A strong summary is not a trading signal by itself. The purpose of the system is to improve judgment, not replace it

## Run / Deploy

### Local run

A local or lightweight setup is useful for testing basic analytics calls, validating auth, and checking response shapes before deeper integration

```bash
curl https://api.snipachu.ai/v1/analytics/token \
  -H "Authorization: Bearer $SNIPACHU_API_KEY" \
  -H "Content-Type: application/json" \
  -H "Idempotency-Key: $(uuidgen)" \
  -d '{
    "network": "solana",
    "address": "So11111111111111111111111111111111111111112",
    "detail_level": "short"
  }'
```

Expected response shape

```json
{
  "token": {
    "network": "solana",
    "address": "So11111111111111111111111111111111111111112"
  },
  "metrics": {
    "liquidity_usd": 152340.12,
    "volume_24h_usd": 83942.77,
    "volatility_24h": 0.19,
    "top10_holders_pct": 63.5
  },
  "flags": {
    "thin_liquidity": false,
    "whale_concentration": true
  },
  "summary": "Liquidity is decent but supply is heavily concentrated in a few wallets. Size positions carefully.",
  "credits_used": 1
}
```

### Production deployment

For higher-scale usage, the recommended model is account-level API auth, async jobs for heavier workloads, polling or webhook-driven result handling, and credits monitoring as part of the operational loop

```text
Client / Product Surface
        ↓
API Auth Layer
        ↓
Run Agent Endpoint
        ↓
Jobs Queue / Processing
        ↓
Result Storage
        ↓
Webhook or Polling Retrieval
        ↓
Internal Product / External Integration
```

### High-level production checklist

| Area | What matters |
|---|---|
| Auth | Scoped API keys and safe secret handling |
| Jobs | Queue visibility and retry-safe polling |
| Webhooks | Signature verification and idempotent event handling |
| Credits | Threshold alerts and usage monitoring |
| Reliability | Logging, status codes, latency tracking |
| Privacy | Minimal storage and no private key custody |

> [!TIP]
> For lightweight interfaces, use synchronous calls when possible. For heavy or repeated workloads, move to the run-agent plus jobs flow and wire webhooks into your own system

## Trust Layer

> [!IMPORTANT]
> Snipachu AI follows a non-custodial design. Wallet connection proves ownership, but signing stays inside the user wallet

> [!NOTE]
> The platform stores account metadata, usage logs, job metadata, and optional recent results for history and support purposes

> [!CAUTION]
> The platform does not store seed phrases, private keys, custody balances, full Telegram chat history, or full browsing history from the extension

| Trust area | Model |
|---|---|
| Identity | Wallet-based account |
| Signing | User wallet only |
| Custody | None |
| Billing | Credits purchased with $SNIPACHU |
| Transparency | On-chain burn and treasury visibility |
| Permissions | Explicit approvals for write actions |

## Closing Overview

Snipachu AI is best understood as an analysis system with one consistent intelligence core and multiple operational surfaces

It is built to reduce fragmentation between token data, wallet behavior, project narrative, and execution context, while keeping the user in control of custody, permissions, and final action

---

## License

This repository can be adapted to your preferred license model

For public release, replace this section with your actual license, legal notice, and official platform links
