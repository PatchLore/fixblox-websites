# Most Important Next Steps — AI Automation Fixblox AI

## Executive Summary: The Pivot

**From:** Human-powered call answering agency (linear scaling, margin destruction)  
**To:** Self-serve AI Receptionist SaaS for UK trades (exponential scaling, 85%+ margins)

**Current Status:** HOLD — Do not start until AI Cost Explainer hits $500 MRR or DubBox ships MVP.

## Critical Issues to Fix (Pre-Pivot)

Before writing code, resolve these business-layer blockers:

| Issue | Risk Level | Fix Required |
|-------|------------|--------------|
| Compliance | HIGH | UK GDPR + FCA implications if storing call recordings. Need explicit consent flows. |
| Telephony Liability | HIGH | If AI gives wrong booking time, tradesperson misses job. You need E&O insurance or "beta" waivers. |
| Twilio AUP | MED | Twilio prohibits "interception of emergency services" and has strict usage policies for AI voice. Review Acceptable Use Policy. |
| Gemini API Stability | MED | Google cuts API access with 30 days notice. Have fallback to OpenAI GPT-4o-mini. |
| RTX 3050 Limitation | LOW | Voice inference happens in cloud (VAPI/Bland), but local testing needs GPU for TTS whisper models. |

## Phase Architecture (The Roadmap)

### Phase 0: Foundation (Week 1-2) — When you return to this

**Goal:** Working prototype for one test tradesperson (free pilot)

**Stack Specification:**

```
Frontend: Next.js 14 (App Router) + Tailwind + shadcn/ui
  - Routes: /dashboard, /onboarding, /settings/phone-number

Backend: 
  - API Routes (Next.js) for webhooks
  - n8n (self-hosted on Railway/Docker) for workflow logic
  - Database: Neon Postgres (existing stack)

AI Voice Layer:
  - Primary: VAPI.ai or Bland.ai (handles telephony + STT + LLM + TTS)
  - Fallback: Twilio + Deepgram + Gemini API + ElevenLabs (complex, avoid for MVP)

Integration:
  - Gmail API (read missed calls from notification emails)
  - Google Calendar API (booking slots)
  - Twilio (phone numbers, SIP trunking)
```

**Cursor Prompt (Save this for later):**

```
Build a Next.js 14 app for "Fixblox AI" - an automated receptionist for tradespeople.

Features:
1. Onboarding flow: User inputs business name, services, postcode coverage, calendar link
2. Phone number provisioning via Twilio API integration
3. Dashboard showing: Missed calls handled today, Booking conversion rate, Recent transcripts
4. Settings: Upload FAQ CSV (services/prices), Set availability hours, Connect Google Calendar
5. Webhook endpoint at /api/voice-handler receiving VAPI.ai payloads and logging to Neon Postgres

Use shadcn/ui for components, Prisma ORM, deploy-ready for Vercel.
```

### Phase 1: The AI Receptionist Core (Week 3-4)

**Goal:** Handle missed calls automatically

**Workflow Logic (n8n):**
- Trigger: Missed call detected (Twilio webhook or Gmail notification parser)
- Action: VAPI.ai places outbound call to caller immediately (2-minute delay)
- AI Persona: "Hi, this is [Business Name]'s assistant. [Tradesperson] is on a job right now. Are you calling about a quote?"
- Data Capture: Address, job type, urgency, budget range
- Booking: If clear fit → Calendar check → Book tentative slot → SMS tradesperson
- Fallback: Complex query → SMS summary to tradesperson + transcript link

**Critical Config:**
- Voice: Use Kokoro TTS (fast, cheap) or ElevenLabs "Callum" voice (trustworthy British male)
- LLM Prompt: Must include "You are not a human. You are an AI assistant for [Business]. If asked about pricing, give ranges only. Do not promise specific times."
- Safety: Hardcoded escalation for keywords: "emergency", "flood", "gas leak" → Immediate SMS to tradesperson + human handoff

### Phase 2: Self-Serve Gems Integration (Week 5-6) — Optional

Only if clients demand "Google Workspace native" feel:

**The "Gem Bridge":**
- Don't use native Gems (no API control)
- Build Chrome Extension that injects AI sidebar into Gmail
- Uses Gemini Pro API to draft replies based on call transcripts stored in your DB
- Marketing angle: "AI Employee that lives in your Gmail"

### Phase 3: Scale (Month 2+)

- White-label: Other agencies resell your tech
- Marketplace: Pre-built "personalities" (Plumber persona vs Electrician persona)
- Viral feature: "Listen to your AI handle a customer" share button (privacy sanitized)

## Positioning & Copy Overhaul

**Current (Human Agency):**
- "Call Handling (£70/month)"
- "We answer calls for you"

**New (AI SaaS):**
- "The AI Receptionist That Never Misses a Call"
- "Set up in 10 minutes. Answers like your best employee at 2 AM."

**Homepage Rewrite (Sections):**
- Hero: "Your phone rings. You're on a roof. AI books the job."
- Demo: Embedded audio player "Listen to our AI book a £4k bathroom renovation"
- How it works:
  1. Forward missed calls to your Fixblox number
  2. AI calls back in 60 seconds
  3. Customer booked, you get SMS summary
- Pricing: Transparent SaaS tiers (see below)
- Trust: "Works with Gmail, Google Calendar, iPhone/Android. No apps to install."

## Pricing Strategy (SaaS Model)

| Tier | Price | Limits | Target |
|------|-------|--------|--------|
| Starter | £49/mo | 50 AI minutes, 1 user, Email support | Solo trades, new businesses |
| Pro | £149/mo | Unlimited minutes, 3 users, Calendar integration, Custom voice | Established trades (2-3 vans) |
| Elite | £299/mo | Everything + SMS follow-ups, Review generation, Priority support | Multi-trade businesses |

**Setup Fee:** £199 one-time (covers onboarding call + number porting + FAQ training)

**Margin Calculation:**
- VAPI.ai cost: ~$0.05/minute = £0.04/minute
- 50 minutes = £2 cost, £49 revenue = 96% gross margin
- Your time: £0 (self-serve onboarding)

## Risk Mitigation: Why This Might Fail

| Risk | Mitigation |
|------|------------|
| AI sounds robotic | Use ElevenLabs v2.5 with 30-second voice clone of actual tradesperson (with permission) |
| Booking wrong info | Always send SMS confirmation: "AI booked [Name] for [Date]. Reply CONFIRM or CALL to change" |
| Tradesperson distrust | "AI Shadow Mode" — AI listens but doesn't speak for first week, just logs what it would have said |
| Twilio bill shock | Hard limits in code: Max 5 min per call, daily spend caps, auto-pause if >£10/day |
| Google API deprecation | Abstract calendar layer: interface CalendarProvider — implement Google + Microsoft later |

## "Start Now" Trigger Conditions

**Do NOT start this project until:**
- [ ] AI Cost Explainer has 3+ paying customers OR DubBox is in closed beta
- [ ] You have £1,000 buffer for Twilio/VAPI API spend (unexpected viral traffic)
- [ ] You can dedicate 48 hours uninterrupted (this requires deep work, not 30-min evening sessions)

**Start immediately if:**
- A tradesperson in your network offers to pay £149/mo today for the AI version (validation)
- You find 3 competitors doing AI voice for trades (market validation + feature differentiation possible)

## Technical Debt Pre-Planning

### Schema (Neon Postgres)

```sql
-- Essential tables for revisit
CREATE TABLE businesses (
  id UUID PRIMARY KEY,
  name TEXT,
  twilio_number TEXT UNIQUE,
  forwarding_number TEXT,
  gemini_config JSONB, -- voice settings, prompts
  subscription_tier TEXT,
  created_at TIMESTAMP
);

CREATE TABLE calls (
  id UUID PRIMARY KEY,
  business_id UUID REFERENCES businesses(id),
  caller_number TEXT,
  transcript TEXT,
  booking_attempted BOOLEAN,
  sentiment_score FLOAT, -- Gemini analysis
  recording_url TEXT,
  created_at TIMESTAMP
);

CREATE TABLE bookings (
  id UUID PRIMARY KEY,
  call_id UUID REFERENCES calls(id),
  calendar_event_id TEXT,
  status TEXT -- pending, confirmed, cancelled
);
```

### Environment Variables (.env.template)

```
TWILIO_SID=
TWILIO_AUTH_TOKEN=
VAPI_API_KEY=
GEMINI_API_KEY=
DATABASE_URL=
GOOGLE_CLIENT_ID= # For calendar integration
GOOGLE_CLIENT_SECRET=