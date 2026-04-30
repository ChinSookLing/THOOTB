# THOOTB — THink Out Of The Box

> *A post-scarcity economic framework with four pools, one continuity equation, live simulation, and accounting infrastructure.*

**Pronunciation:** /θuːb/ — "THooth"
**Author:** Chin Sook Ling (Tuzi)
**Collaboration:** Claude · ChatGPT · Copilot · DeepSeek · Gemini · Grok
**License:** CC BY 4.0
**Status:** Book Series ongoing · Simulation validated · Accounting system built

🌐 **Live Site:** [chinsookling.github.io/THOOTB](https://chinsookling.github.io/THOOTB/)

---

## What is THOOTB?

THOOTB is an open framework for a fair, circular, and auditable economic system. It is not a promise of a perfect world — it is a transparent way to test whether a better one can operate.

Designed since 2019. Stress-tested by six AI systems. Validated through 3,520 simulations.

> "THOOTB does not ask you to believe. It lets you test."

---

## The Four Pools

| Pool | Full Name | Function |
|------|-----------|----------|
| **D-Pool** | Daily Distribution Pool | Equal daily allocation to every citizen. Clears to zero at 23:59. |
| **R-Pool** | Resource Pool | Tracks physical resources, production, and recycling. |
| **FG-Pool** | Foreign Gateway Pool | Isolates the internal economy from external currency shocks. |
| **G-Pool** | Guarantee Pool | Strategic reserve. Funds public goods and crisis response. |

**Balance Equation:** `D-Pool Net = R-Pool + FG-Pool (TH) + G-Pool`

---

## The ONE Equation

Discovered 2026-01-01 at Senai Airport, Johor, Malaysia.

```
S = min(Stock Margin, FX Margin) ≥ 0

Stock Margin = I + P + R − (C + Eg)
FX Margin   = Es + Eg − I
```

A civilization can sustain itself when both margins stay non-negative.
Six AIs independently converged on the same equation. 3,520 simulations confirmed 100% accuracy.

→ See [`docs/one-equation.md`](docs/one-equation.md) for full derivation.

---

## Live Simulator

An interactive React simulator where you can set population size, export rate, recycling rate, and black swan events — and observe how the four pools respond in real time.

→ See [`simulator/`](simulator/) for details and launch link.

---

## Accounting System

A complete double-entry accounting architecture for THOOTB zones. Four pools, four voucher types (PV/RV/JV/SV), two-database design, and self-audit mechanism.

→ See [`accounting/`](accounting/) for details and launch link.

---

## Books Roadmap

| Book | Title | Status |
|------|-------|--------|
| Book 1 | Concept Introduction | ✅ Published 2019 |
| Book 2 | White Paper (White Book) | ✅ v11.2 |
| Book 3 | Sandbox Verification | ✅ v4.1 |
| Book 4 | Macro-Indicator Model | ✅ v3.1 |
| Book 5 | Governance & Civilizational Safeguards | ✅ v3.1 |
| Book 6 | Civilizational Expansion Charter | ✅ v2.1 |
| Book 7 | The Symphony Recording | ✅ v1.0 |
| Book 8 | Pilot Testing Protocol | ✅ v3.1 |
| Book 9 | Live Simulator & ONE Equation | ✅ v1.2 |
| Book 10 | THOOTB Accounting System | ✅ v1.1 |
| Book 11 | Audit and Power | ✅ v1.1 |
| Book 12 | From Concept to Deployment | ✅ v2.0 |
| Book 13 | SECRET Operation Notes | 🔒 Internal |

---

## Key Concepts

- **CHI** (Circularity Harmony Index): `recycled / (recycled + landfilled + incinerated)` — ≥ 0.70 Earth minimum, ≥ 0.80 Mars standard
- **Daily Spending**: TH 1,000 / person / day (soft assumption, adjustable by Zone GD)
- **Six Red Lines**: Physical safety · Basic survival · Exit freedom · Thought freedom · Privacy floor · Due process
- **Exit Right**: Unconditional. No reason required. No approval needed. Always open.
- **Self-Destruct Switch**: Triggered when CHI × RBI < 2.1 for 3 years, or exit rate > 30%/year, or any red line breached.

---

## Terminology Reference

All pool names frozen as of April 2026. See [`docs/terminology.md`](docs/terminology.md) for the complete freeze decision and historical variants.

---

## License

Open Source · [Creative Commons Attribution 4.0 International (CC BY 4.0)](LICENSE)

One restriction: content may not be used in ways that violate the Four Core Principles of THOOTB.

> "If this README is ever treated as a sacred text, please burn it immediately." — Grok, Book 11
