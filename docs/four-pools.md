# The Four Pools

**Authority:** Book 2 (White Paper) · Book 10 (Accounting System)  
**Terminology frozen:** May 2026 (THOOTB-11)

---

## Overview

THOOTB's economy runs through four structurally separated pools. No pool can access another's funds directly. Each has a specific role, a specific flow direction, and a specific governance requirement.

**Balance Equation:** `D-Pool Net = R-Pool + FG-Pool (TH) + G-Pool`

---

## D-Pool — Daily Distribution Pool · 每日流通池

**Function:** Equal daily allocation to every citizen. The heartbeat of the system.

| Property | Value |
|----------|-------|
| Daily allocation | TH 1,000 / person / day (soft assumption, adjustable) |
| Clearing | Resets to zero at 23:59 every day |
| Profit | Not allowed |
| Accumulation | Not allowed |
| Voucher type | SV (System Voucher — auto-generated) |

**Why daily clearing?**
Preventing accumulation is the structural answer to speculation. If TH cannot be stored, it cannot be hoarded, traded, or used to gain power over others.

**Citizens receive:** TH 1,000/day  
**Businesses receive:** Allocation + B2C revenue + Export revenue − R-Pool procurement − Import costs  
**Government receives:** Allocation + service fees − operational costs

---

## R-Pool — Resource Tracking Pool · 物資記錄池

**Function:** Tracks all physical resources — raw materials, production, and recycling.

| Property | Value |
|----------|-------|
| Clearing | No — accumulates |
| Profit | Not allowed |
| Split | Available for Issue (liquid TH) + Stock (physical inventory) |
| Recycling | Free input — the only replenishment without external draw |

**The recycling advantage:**
`R(t+1) = R(t) − C(t) + C(t)·CHI + P(t) + I(t) − E(t)`

When CHI ≥ 0.70, the recycling feedback loop becomes self-sustaining. Below CHI 0.60, depletion accelerates rapidly.

**Circularity Harmony Index:**
`CHI = recycled / (recycled + landfilled + incinerated)`

---

## FG-Pool — Foreign Gateway Pool · 金融氣密艙

**Function:** Isolates the internal TH economy from external currency (FC) shocks. Acts as an airlock.

| Property | Value |
|----------|-------|
| Currencies | Holds both TH and FC |
| Clearing | No |
| Profit | Not allowed |
| Role in ONE Equation | Determines FX Margin |
| Risk level | **Highest** — identified as the "fatal pool" in Phase 2 stress tests |

**Why "Gateway"?**
FG-Pool is not just a foreign exchange account. It is the entry/exit point for all external economic activity — imports, exports, and currency conversion. Its airlock design prevents external shocks from penetrating the internal TH economy.

**Trade surplus allocation:**
- 70% → G-Pool
- 30% → FG-Pool

**Trade deficit:** Drawn exclusively from FG-Pool (never G-Pool directly).

---

## G-Pool — Global Strategic Reserve Pool · 戰略儲備池

**Function:** Global strategic reserve. Funds public goods, government operations, and crisis response.

| Property | Value |
|----------|-------|
| Clearing | No |
| Profit | Not allowed |
| Surplus inflow | 70% of trade surpluses |
| Governance | Multi-department approval required for any drawdown |
| Book 3 result | 260+ months capacity (21+ years reserve) |

**Four permitted uses:**

| Use | Governance Required |
|-----|-------------------|
| Strategic investment (R&D, infrastructure, education) | 3-Dept + Community Vote |
| Emergency response (disaster, pandemic, attack) | Tiered protocol |
| Zone support (new/struggling zones) | 3-Dept approval |
| Long-term reserve (cross-generational) | Never touch |

**Absolutely forbidden:** Using G-Pool for individual benefit, political pressure, or bypassing the three-department system.

---

## Pool Interaction Diagram

```
Citizens/Business/Government
         ↓ spend TH
      D-Pool (daily distribution)
         ↓ flows to
      R-Pool (resource tracking)
         ↓ surplus
      FG-Pool (foreign gateway)  ←→  External World (FC)
         ↓ 70% surplus
      G-Pool (global strategic reserve)
```

---

## Voucher Types (Book 10)

| Type | Name | Triggered by |
|------|------|-------------|
| PV | Payment Voucher | Outgoing payments |
| RV | Receipt Voucher | Incoming receipts |
| JV | Journal Voucher | Internal transfers |
| SV | System Voucher | Automatic system events (D-Pool distribution, daily clearing) |

*See Book 10 for complete accounting specifications.*
