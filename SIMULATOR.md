# THOOTB Live Simulator

**Version:** v3.6  
**Authority:** Book 9 — Live Simulator & ONE Equation v1.2  
**Status:** ✅ Live at [chinsookling.github.io/THOOTB/simulator.html](https://chinsookling.github.io/THOOTB/simulator.html)

---

## What It Does

An interactive React-based simulator where you can:

- Set **population size** (e.g. 50, 100, 500 people)
- Choose **development phase** (Phase 1–4)
- Adjust **export rate**, **recycling rate**, **FG-Pool initial reserve**
- Trigger **8 black swan events** (export collapse, import price spike, population exodus, etc.)
- Watch the **four pools respond in real time**
- See **13 civilization health indicators** update live
- Read **Human Check prompts** — because numbers are never the whole story

---

## Four Pools

| Pool | Full Name | Chinese | Function |
|------|-----------|---------|----------|
| D-Pool | Daily Distribution Pool | 每日流通池 | Issues TH 1,000/citizen daily, resets at midnight |
| R-Pool | Resource Tracking Pool | 物資記錄池 | Tracks all physical resources, no markup |
| FG-Pool | Foreign Gateway Pool | 金融氣密艙 | Isolates internal TH from external USD shocks |
| G-Pool | Global Strategic Reserve Pool | 戰略儲備池 | Receives 70% trade surplus, strategic reserve |

---

## The ONE Equation (Live)

The simulator runs the ONE Equation continuously:

```
S = min(Stock Margin, FX Margin) ≥ 0
```

```
Stock Margin = I + P + R - (C + Eg)
FX Margin    = Es + Eg - I
```

Green = zone survives · Red = collapse imminent

---

## Key Parameters

| Parameter | Default | Notes |
|-----------|---------|-------|
| Population | 100 | Minimum viable: 50 |
| Daily Spending | TH 1,000/person | Soft assumption, adjustable |
| FG-Pool Initial | FC 200,000 | ~54 days runway at default import rate |
| Daily Import | FC 3,684 | Phase 1 baseline |
| Export Achievement | 100% | % of target export income reached |
| Recycling Rate | 70% | ≥70% = self-sustaining loop |
| Phase | Phase 1 | 85% export population |

---

## Black Swan Events

1. Export market collapse
2. Import price spike (2×)
3. Population exodus (30%)
4. Key skill loss
5. Foreign currency freeze
6. Supply chain disruption
7. Narrative collapse (Activity Rate crash)
8. Internal faction breakdown

---

## Three-Department View

The simulator shows all three audit departments in real time:

- **TRD** — Transaction Record Department: every daily record
- **TAD** — Transaction Analysis Department: 13 indicators + Human Check
- **TIAD** — Transaction Investigation & Action Department: recommendations

---

## Validation Results

- **Phase 1 collapse rate**: 68% — exit as fast as possible
- **Phase 4 collapse rate**: 7% — system matures significantly
- **Recycling ≥ 70%**: collapse rate drops to 4%
- **ONE Equation accuracy**: 100% across 3,520 simulation runs
- **Six-AI consensus**: all six AIs independently converged on S = min(Stock Margin, FX Margin) ≥ 0

---

## File

Source: `THOOTB_Simulator_v3_6.jsx`  
Technology: React (Babel pre-compiled — no build tools required)  
Live: [simulator.html](https://chinsookling.github.io/THOOTB/simulator.html)
