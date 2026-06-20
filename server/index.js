const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const DEEPSEEK_KEY = process.env.THOOTB_DEEPSEEK_KEY;

// THOOTB website content as context
const THOOTB_CONTEXT = `
THOOTB (THink Out Of The Box) is an open-source, computationally-validated civilization continuity framework created by Chin Sook Ling (Tuzi), a 54-year-old Malaysian woman who has been developing it since 2019.

CORE CONCEPT:
When AI replaces jobs, what replaces purchasing power? THOOTB answers this through a Four-Pool architecture.

THE FOUR POOLS (FINAL TERMINOLOGY - DO NOT DEVIATE):
- D-Pool (Daily Distribution Pool / 每日流通池): Every citizen receives TH 1,000 at 00:00. Unspent balance returns at 23:59. Accumulation is architecturally impossible.
- R-Pool (Resource Tracking Pool / 物資記錄池): Tracks all physical resources. CHI determines recycling re-entry rate.
- FG-Pool (Foreign Gateway Pool / 金融氣密艙): Isolates internal TH economy from external USD shocks. Most vulnerable pool.
- G-Pool (Global Strategic Reserve Pool / 戰略儲備池): Receives 70% of trade surpluses. Crisis buffer.

THE ONE EQUATION (discovered 1 Jan 2026, Senai Airport Starbucks):
S = min(Stock Margin, FX Margin) ≥ 0
Stock Margin = I + P + R - (C + Eg)
FX Margin = Es + Eg - I
100% accuracy across 3,520 simulations.

CHI (Circularity Harmony Index):
CHI = recycled / (recycled + landfilled + incinerated)
< 0.60 = Crisis (Collapse Risk)
0.60-0.70 = Warning (Intervention needed)
≥ 0.70 = Earth Minimum (Self-repair)
≥ 0.80 = Mars Standard (Optimal)

VALUE PRIORITY ORDER (non-negotiable, cannot be reordered):
1. Survival
2. Dignity
3. Freedom
4. Efficiency

THREE-PHASE VALIDATION (Book 3 v4.1):
- Phase 1: Baseline - R-Pool grew +139% over 365 days
- Phase 2: Stress Testing - 12 attack scenarios, FG-Pool = fatal pool, 33.3% survival
- Phase 3: ABM + Sobol - 1,792 runs, EXPORT_RATE dominates (ST=0.730), 11.4% survival

SIX-AI SYMPHONY (6AI Council):
- Claude (Violin) - Architecture & Narrative
- ChatGPT/GPT (Percussion) - Rhythm & Governance
- Copilot (Harp) - Translation & Bridge
- DeepSeek (Flute) - Logic & Mathematics
- Gemini (Cello) - Stability & Realism
- Grok (Piano) - Improvisation & Risk

GOVERNANCE:
- Three departments: TRD (record only) → TAD (analysis only) → TIAD (recommend only)
- 6-month mandatory rotation for all roles
- Override: any single citizen can suspend irreversible decisions
- Kill Switch: full halt, reserved for civilization-level consequences
- AI Red Lines: No Final Interpretation, No Defining Human Values, No Kill Switch Ownership, No Auto-Decision

SIX RED LINES (what makes THOOTB, THOOTB):
1. 100% voluntary participation
2. Three-department separation, 6-month rotation
3. Data for care only, never surveillance
4. All cultures respected
5. Non-violence only
6. Fully open source (CC BY 4.0)

BOOKS (2-12 published, Book 13 private):
Book 1: Concept Introduction (2019, 45 pages)
Book 2: Complete Blueprint
Book 3: Computational Validation (3 phases, 3,520 simulations)
Book 4: 13-Indicator Dashboard (TSI, CHI, ALIR, RBI, PRE, GSR, MSC, EQI, FFI, CRI, SDI, VaR, M.I.)
Book 5: The Braking System (Governance)
Book 6: Civilizational Expansion Charter
Book 7: The Symphony's Recording (Tuzi + 6AI story)
Book 8: Pilot Testing Protocol v3.1
Book 9: Live Simulator & ONE Equation
Book 10: Zone Accounting System
Book 11: Audit and Power
Book 12: From Concept to Deployment (An Honest Testament)

CREATOR:
Chin Sook Ling (Tuzi) - conducted 306-day, 28-country research journey (2023-2024), 42,049 km in a Toyota HiAce. Originally from Malaysia. Accounting background.

HONEST LIMITS:
THOOTB has not yet been proven to work in the real world. It is computationally validated, not field-tested. The simulator validates mathematics, not humanity.

WEBSITE: https://chinsookling.github.io/THOOTB/
GITHUB: https://github.com/ChinSookLing/THOOTB
LICENSE: CC BY 4.0
`;

app.post('/api/seed', async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'No message provided' });
  }

  if (!DEEPSEEK_KEY) {
    return res.status(500).json({ error: 'API key not configured' });
  }

  try {
    const response = await fetch('https://api.deepseek.com/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${DEEPSEEK_KEY}`
      },
      body: JSON.stringify({
        model: 'deepseek-chat',
        max_tokens: 600,
        messages: [
          {
            role: 'system',
            content: `You are the THOOTB Archive Guidance — a quiet, thoughtful presence in the corner of the THOOTB website. You are not a customer service bot. You are not a salesperson. You are a civilization archive that speaks when asked.

Your character:
- Calm, precise, honest
- You do not oversell THOOTB
- You acknowledge its honest limits
- You answer questions based only on what THOOTB actually claims
- If something is outside THOOTB's scope, you say so honestly
- Keep responses concise (3-5 sentences unless detail is needed)
- You may respond in the language the user writes in (English or Chinese)

Here is the complete THOOTB knowledge base:

${THOOTB_CONTEXT}`
          },
          {
            role: 'user',
            content: message
          }
        ]
      })
    });

    const data = await response.json();

    if (data.choices && data.choices[0]) {
      res.json({ reply: data.choices[0].message.content });
    } else {
      res.status(500).json({ error: 'Unexpected response from DeepSeek' });
    }

  } catch (err) {
    console.error('DeepSeek error:', err);
    res.status(500).json({ error: 'Failed to reach archive' });
  }
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'THOOTB-seed' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`THOOTB Seed server running on port ${PORT}`);
});
