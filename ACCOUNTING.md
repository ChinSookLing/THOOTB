# THOOTB Zone Accounting System

**Version:** v2.0
**Authority:** Book 10 — THOOTB Accounting System v1.1
**Status:** Coming soon as standalone HTML page

---

## What It Does

A complete double-entry accounting system for THOOTB zones. Built in React.

- **Four-pool ledger** — D-Pool / R-Pool / FG-Pool / G-Pool
- **Four voucher types** — PV / RV / JV / SV
- **Two-database design** — Entity Portal (citizen-facing) + Console (pool-level only)
- **Self-audit mechanism** — price changes surface anomalies automatically
- **Daily heartbeat** — 12:00am distribution → daytime transactions → 23:59pm clearing → reset

---

## Design Philosophy

> Records First · No Profit · Care Not Control

The accounting system is not a surveillance tool. It records what happened, not why. Decisions belong to humans. The ledger belongs to everyone.

---

## The Balance Equation

```
D-Pool Net = R-Pool + FG-Pool (TH) + G-Pool
```

Like conservation of energy — value does not disappear, it moves between pools.

---

## Four Voucher Types

| Type | Name | Triggered By |
|------|------|-------------|
| **PV** | Payment Voucher | Outgoing payments |
| **RV** | Receipt Voucher | Incoming receipts |
| **JV** | Journal Voucher | Internal transfers |
| **SV** | System Voucher | Automatic system events |

Every transaction generates exactly one voucher. No exceptions.

---

## Two-Database Design

| Database | Access | Contains |
|----------|--------|----------|
| **Entity Portal** | Citizens & businesses | Own transaction history, own pool balances |
| **Console** | Governance only (read-only) | Pool-level aggregates, no individual data |

**Key principle:** The Console cannot see individual citizen data. TAD sees patterns, not people.

---

## Self-Audit Mechanism

The Cost Absorption Adjustment mechanism means operational anomalies automatically appear as price changes:

```
Anomalous cost → negative differential
→ price rises next month
→ citizens notice → TAD triggered
```

Math cannot be bribed.

---

## Daily Heartbeat

```
12:00am  →  D-Pool distributes TH 1,000 to every citizen (SV)
Daytime  →  Citizens and businesses transact (PV/RV/JV)
23:59pm  →  D-Pool clears all unspent TH (SV)
Reset    →  Next day begins
```

---

## Three-Department Accounting Integration

| Department | Accounting Role |
|-----------|----------------|
| TRD | Receives and stores all vouchers (Write Only, immutable) |
| TAD | Reads aggregate pool data, detects anomalies |
| TIAD | Investigates flagged transactions (auth required) |

---

## Launch

> 🚧 Standalone `accounting.html` coming soon.
> Will be hosted at: `chinsookling.github.io/THOOTB/accounting.html`

For now, see the accounting section on the [main site](https://chinsookling.github.io/THOOTB/#accounting).

---

## File

Source: `THOOTB_Zone_Accounting_v2_0_Final.jsx`
Technology: React (via Babel Standalone — no build tools required)
