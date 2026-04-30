# THOOTB Live Simulator

**Version:** v3.6
**Authority:** Book 9 — Live Simulator & ONE Equation v1.2
**Status:** Coming soon as standalone HTML page

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

## The ONE Equation (Live)

The simulator runs the ONE Equation continuously:

```
S = min(Stock Margin, FX Margin) ≥ 0
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

## Launch

> 🚧 Standalone `simulator.html` coming soon.
> Will be hosted at: `chinsookling.github.io/THOOTB/simulator.html`

For now, see the simulator section on the [main site](https://chinsookling.github.io/THOOTB/#simulator).

---

## File

Source: `THOOTB_Simulator_v3_6.jsx`
Technology: React + Tailwind CSS (via Babel Standalone — no build tools required)
