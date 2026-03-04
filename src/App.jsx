import { useState, useEffect, useRef } from "react";
/* ═══════════════════════════════════════════════════════════════════
   STRYVE PE MARKETING VALUE MODEL — V6 (Big Screen Readability)
   
   Magic Trick: CMO enters company + URLs → AI scans → 3 fields →
   Full dashboard with 3 PE value lever pathways + enterprise value math
   
   Flow:
   1. Company Input + Digital Scan
   2. Quick Intake (Revenue, EBITDA%, Multiple)  
   3. Dashboard: EBITDA Growth | Multiple Expansion | Full Value Creation
   ═══════════════════════════════════════════════════════════════════ */
// ── THEME ──
const STRYVE_LOGO = "data:image/png;base64,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";
const T = {
  bg: "#0B0F1A", bgCard: "#111827", bgCardHover: "#1A2235",
  bgSoft: "#0F1629", bgAccent: "rgba(20,184,166,0.06)",
  accent: "#14B8A6", accentDim: "rgba(20,184,166,0.15)", accentBorder: "rgba(20,184,166,0.25)",
  accentSolid: "#0D9488", accentBright: "#2DD4BF",
  orange: "#FF8A00", orangeDim: "rgba(255,138,0,0.12)", orangeBorder: "rgba(255,138,0,0.25)", orangeSolid: "#E07A00",
  gold: "#F59E0B", goldDim: "rgba(245,158,11,0.12)", goldBorder: "rgba(245,158,11,0.25)",
  blue: "#3B82F6", blueDim: "rgba(59,130,246,0.12)", blueBorder: "rgba(59,130,246,0.25)",
  violet: "#8B5CF6", violetDim: "rgba(139,92,246,0.12)", violetBorder: "rgba(139,92,246,0.25)",
  red: "#EF4444", redDim: "rgba(239,68,68,0.12)",
  white: "#F1F5F9", text: "#CBD5E1", textMuted: "#64748B", textDim: "#475569",
  border: "rgba(148,163,184,0.08)", borderLight: "rgba(148,163,184,0.04)",
  shadow: "0 4px 24px rgba(0,0,0,0.3)", shadowSm: "0 2px 8px rgba(0,0,0,0.2)",
};

// ── INDUSTRY BENCHMARKS ──
const INDUSTRY_DATA = {
  "healthcare-services": { label: "Healthcare Services", avgMultiple: 12.5, avgGrowth: 0.08, avgMargin: 0.18, maxMarketingPct: 0.06 },
  "business-services": { label: "Business Services", avgMultiple: 10.0, avgGrowth: 0.10, avgMargin: 0.15, maxMarketingPct: 0.07 },
  "tech-enabled-services": { label: "Tech-Enabled Services", avgMultiple: 14.0, avgGrowth: 0.15, avgMargin: 0.20, maxMarketingPct: 0.10 },
  "industrial-services": { label: "Industrial Services", avgMultiple: 8.5, avgGrowth: 0.06, avgMargin: 0.14, maxMarketingPct: 0.05 },
  "consumer-services": { label: "Consumer Services", avgMultiple: 9.0, avgGrowth: 0.07, avgMargin: 0.12, maxMarketingPct: 0.08 },
  "financial-services": { label: "Financial Services", avgMultiple: 11.0, avgGrowth: 0.09, avgMargin: 0.22, maxMarketingPct: 0.06 },
  "infrastructure-services": { label: "Infrastructure / Critical Services", avgMultiple: 9.5, avgGrowth: 0.07, avgMargin: 0.16, maxMarketingPct: 0.05 },
  "manufacturing": { label: "Manufacturing", avgMultiple: 7.5, avgGrowth: 0.05, avgMargin: 0.13, maxMarketingPct: 0.04 },
  "distribution": { label: "Distribution", avgMultiple: 8.0, avgGrowth: 0.06, avgMargin: 0.10, maxMarketingPct: 0.04 },
  "other": { label: "Other", avgMultiple: 9.0, avgGrowth: 0.07, avgMargin: 0.15, maxMarketingPct: 0.07 },
};

// ── MARKETING LAYER DEFINITIONS ──
const LAYERS = [
  { key: "standardization", label: "Standardize", subtitle: "Brand & Messaging", icon: "◎",
    desc: "One platform. One brand system. One architecture every BU plugs into.",
    evOutcome: "Reduces integration cost and time for every acquisition",
    diagnosticQ: "Can your next acquisition plug into your web platform in weeks — or does it start from scratch?",
    evLever: "multiple", weight: 0.30 },
  { key: "traction", label: "Traction", subtitle: "Demand Generation & Pipeline", icon: "↗",
    desc: "A unified demand engine and marketing-to-sales system across all BUs.",
    evOutcome: "Creates measurable, predictable pipeline",
    diagnosticQ: "Can you tell the board exactly how much pipeline marketing generated this quarter — across every BU?",
    evLever: "ebitda", weight: 0.30 },
  { key: "visibility", label: "Visibility", subtitle: "Measurement & Attribution", icon: "◉",
    desc: "A single view of performance for the CEO, the board, and the next buyer.",
    evOutcome: "Makes marketing legible in diligence",
    diagnosticQ: "If a buyer asked for your marketing performance data tomorrow, could you produce one clean report?",
    evLever: "both", weight: 0.20 },
  { key: "governance", label: "Governance", subtitle: "Scalability & Playbooks", icon: "⬡",
    desc: "Playbooks and rules that make the next acquisition plug-and-play.",
    evOutcome: "Proves the platform is scalable",
    diagnosticQ: "Do you have a documented Day 1–100 marketing integration playbook for new acquisitions?",
    evLever: "both", weight: 0.20 },
];

// ── INITIATIVE LIBRARY ──
const INITIATIVES = {
  brand_audit: { name: "Brand Architecture Audit & Strategy", layer: "standardization", costPct: 0.003, ebitdaPct: 0.005, multipleBps: 15, timeline: "60 days", desc: "Map every BU brand, identify conflicts, define master brand architecture" },
  brand_unify: { name: "Visual Identity Unification", layer: "standardization", costPct: 0.008, ebitdaPct: 0.005, multipleBps: 25, timeline: "90 days", desc: "Unified design system, templates, brand guidelines across all BUs" },
  messaging_framework: { name: "Messaging Framework & Value Props", layer: "standardization", costPct: 0.004, ebitdaPct: 0.010, multipleBps: 15, timeline: "45 days", desc: "Platform-level messaging hierarchy that each BU inherits and adapts" },
  website_consolidation: { name: "Digital Presence Consolidation", layer: "standardization", costPct: 0.012, ebitdaPct: 0.008, multipleBps: 20, timeline: "120 days", desc: "Unified web platform with BU microsites under single architecture" },
  demand_gen: { name: "Unified Demand Generation Engine", layer: "traction", costPct: 0.025, ebitdaPct: 0.040, multipleBps: 15, timeline: "6-9 months", desc: "Cross-BU campaign infrastructure, shared audiences, coordinated outbound" },
  crm_integration: { name: "CRM & Pipeline Integration", layer: "traction", costPct: 0.008, ebitdaPct: 0.020, multipleBps: 10, timeline: "90 days", desc: "Single pipeline view across BUs, standardized stages, automated routing" },
  content_seo: { name: "Content & SEO Consolidation", layer: "traction", costPct: 0.010, ebitdaPct: 0.025, multipleBps: 10, timeline: "6 months", desc: "Unified content strategy, consolidated SEO authority, cross-BU thought leadership" },
  conversion_optimization: { name: "Conversion Rate Optimization", layer: "traction", costPct: 0.005, ebitdaPct: 0.015, multipleBps: 5, timeline: "90 days", desc: "Landing page optimization, lead scoring, nurture sequences across BUs" },
  attribution_model: { name: "Marketing Attribution Infrastructure", layer: "visibility", costPct: 0.006, ebitdaPct: 0.010, multipleBps: 20, timeline: "90 days", desc: "Multi-touch attribution, channel ROI, campaign-to-revenue tracking" },
  reporting_dashboard: { name: "Executive Reporting Dashboard", layer: "visibility", costPct: 0.004, ebitdaPct: 0.005, multipleBps: 15, timeline: "60 days", desc: "Board-ready marketing performance dashboard with portfolio-level KPIs" },
  data_infrastructure: { name: "Customer Data Infrastructure", layer: "visibility", costPct: 0.008, ebitdaPct: 0.015, multipleBps: 15, timeline: "4-6 months", desc: "Unified customer data platform, cross-BU analytics, predictive insights" },
  marketing_playbook: { name: "Marketing Playbook & SOPs", layer: "governance", costPct: 0.003, ebitdaPct: 0.005, multipleBps: 20, timeline: "60 days", desc: "Documented processes, campaign templates, approval workflows" },
  acquisition_playbook: { name: "Acquisition Integration Playbook", layer: "governance", costPct: 0.004, ebitdaPct: 0.010, multipleBps: 30, timeline: "45 days", desc: "Day 1-100 marketing integration checklist for new acquisitions" },
  team_structure: { name: "Marketing Org Design & Hiring Plan", layer: "governance", costPct: 0.005, ebitdaPct: 0.008, multipleBps: 10, timeline: "30 days", desc: "Optimal team structure, shared services model, fractional/FTE mix" },
  vendor_consolidation: { name: "Vendor & Martech Consolidation", layer: "governance", costPct: 0.002, ebitdaPct: 0.008, multipleBps: 10, timeline: "90 days", desc: "Consolidate redundant tools across BUs, negotiate enterprise agreements" },
};

// ── OPPORTUNITY TIERS ──
const OPPORTUNITY_TIERS = {
  D: { target: "C", label: "Fix the Basics", sublabel: "Eliminate buyer concerns", revLow: 0.03, revHigh: 0.06, multLow: 0.15, multHigh: 0.3, investLow: 0.02, investHigh: 0.035, months: "12-18" },
  C: { target: "B", label: "Market Ready", sublabel: "Build institutional capability", revLow: 0.05, revHigh: 0.10, multLow: 0.2, multHigh: 0.4, investLow: 0.03, investHigh: 0.05, months: "18-24" },
  B: { target: "A", label: "Premium Positioning", sublabel: "Command a buyer premium", revLow: 0.06, revHigh: 0.12, multLow: 0.25, multHigh: 0.5, investLow: 0.035, investHigh: 0.06, months: "18-24" },
  A: { target: "A+", label: "Optimize & Maintain", sublabel: "Protect the premium", revLow: 0.02, revHigh: 0.05, multLow: 0.05, multHigh: 0.15, investLow: 0.02, investHigh: 0.03, months: "Ongoing" },
};

// ── FINANCIAL ENGINE ──
function fmt$(n) {
  if (n == null || isNaN(n) || !isFinite(n)) return "—";
  if (Math.abs(n) >= 1000000) return "$" + (n / 1000000).toFixed(1) + "M";
  if (Math.abs(n) >= 1000) return "$" + Math.round(n / 1000) + "K";
  return "$" + Math.round(n).toLocaleString();
}
function fmtPct(n) { return n == null ? "—" : (n * 100).toFixed(1) + "%"; }
function fmtX(n) { return n == null ? "—" : n.toFixed(1) + "×"; }

function buildOpportunity(inputs, scanScores) {
  const { revenue, ebitdaMargin, currentMultiple, buCount, acquisitionsPlanned, industry } = inputs;
  const ebitda = revenue * ebitdaMargin;
  const currentEV = ebitda * currentMultiple;
  const industryData = INDUSTRY_DATA[industry] || INDUSTRY_DATA.other;
  const avgScore = ((scanScores.standardization || 0) + (scanScores.traction || 0) + (scanScores.visibility || 0) + (scanScores.governance || 0)) / 4;
  const compositeGrade = avgScore >= 75 ? "A" : avgScore >= 55 ? "B" : avgScore >= 35 ? "C" : "D";
  const tier = OPPORTUNITY_TIERS[compositeGrade];
  const rawInvestLow = Math.round(revenue * tier.investLow);
  const rawInvestHigh = Math.round(revenue * Math.min(tier.investHigh, industryData.maxMarketingPct || 0.06));
  const ebitdaCap = Math.round(ebitda * 0.25);
  const investLow = Math.min(rawInvestLow, ebitdaCap);
  const investHigh = Math.min(rawInvestHigh, ebitdaCap);
  const conservativeEV = Math.round((ebitda * (1 + tier.revLow)) * (currentMultiple + tier.multLow));
  const aggressiveEV = Math.round((ebitda * (1 + tier.revHigh)) * (currentMultiple + tier.multHigh));
  const evDeltaLow = conservativeEV - currentEV;
  const evDeltaHigh = aggressiveEV - currentEV;
  const roiLow = investHigh > 0 ? Math.round(evDeltaLow / investHigh) : 0;
  const roiHigh = investLow > 0 ? Math.round(evDeltaHigh / investLow) : 0;
  const layerRanking = LAYERS.map(l => ({
    ...l, score: scanScores[l.key] || 0,
    initiatives: Object.entries(INITIATIVES).filter(([, init]) => init.layer === l.key).map(([key, init]) => ({ key, ...init })),
  })).sort((a, b) => a.score - b.score);
  return {
    compositeGrade, avgScore: Math.round(avgScore), tier,
    current: { revenue, ebitda, currentEV, currentMultiple, ebitdaMargin },
    industryData,
    investment: { low: investLow, high: investHigh, ebitdaCapped: investHigh >= ebitdaCap },
    ev: { conservativeEV, aggressiveEV, evDeltaLow, evDeltaHigh },
    roi: { low: roiLow, high: roiHigh },
    year1: { ebitdaLiftLow: Math.round(revenue * tier.revLow * ebitdaMargin), ebitdaLiftHigh: Math.round(revenue * tier.revHigh * ebitdaMargin) },
    multiple: { low: currentMultiple + tier.multLow, high: currentMultiple + tier.multHigh, expansionLow: tier.multLow, expansionHigh: tier.multHigh },
    revenue: { low: Math.round(revenue * (1 + tier.revLow)), high: Math.round(revenue * (1 + tier.revHigh)), growthLow: tier.revLow, growthHigh: tier.revHigh },
    layerRanking, buCount, acquisitionsPlanned, scanScores,
  };
}

// ── API ──
async function fetchRetry(url, opts, retries = 2) {
  for (let i = 0; i <= retries; i++) {
    const res = await fetch(url, opts);
    if (res.status === 429 && i < retries) { await new Promise(r => setTimeout(r, 3000 * (i + 1))); continue; }
    return res;
  }
}

const SCAN_PROMPT = (company, urls, buCount) => `You are a PE marketing due diligence analyst. Scan this company's digital presence efficiently.
Company: "${company}"
URLs: ${urls.join(", ")}
Stated BU count: ${buCount || "Unknown"}
INSTRUCTIONS — do exactly 3 web searches, no more:
1. Search "${urls[0]}" — assess the main website: brand quality, messaging, lead capture, content, navigation structure. Look for portfolio/subsidiary pages.
2. Search "${company} site:${(() => { try { return new URL(urls[0]).hostname; } catch(e) { return urls[0]; } })()}" — find additional pages. If no results, search "${company} LinkedIn" instead.
3. Search "${company} revenue employees" — look for business size indicators.
CRITICAL RULE for discoveredBUs: ONLY include companies explicitly listed on the provided website as subsidiaries, divisions, brands, or portfolio companies.
Score 0-100: standardization (brand consistency), traction (demand gen evidence), visibility (analytics/tracking), governance (process consistency).
Respond with ONLY this JSON — no markdown, no backticks:
{
  "company": "confirmed name",
  "discoveredBUs": [{"name": "BU name", "url": "URL if found", "relationship": "subsidiary|division|brand", "source": "exact page URL"}],
  "websites": [{"url": "...", "name": "...", "type": "platform|business_unit", "status": "active|minimal|outdated", "observations": "2-3 sentences"}],
  "socialProfiles": [{"platform": "LinkedIn|Twitter|Facebook|YouTube", "name": "...", "url": "...", "entity": "platform|BU", "observation": "1 sentence"}],
  "scores": {"standardization": 0, "traction": 0, "visibility": 0, "governance": 0},
  "scoringRationale": {"standardization": "evidence", "traction": "evidence", "visibility": "evidence", "governance": "evidence"},
  "topFinding": "Most important finding for PE buyer — 1 sentence",
  "brandConsistencyGrade": "A|B|C|D",
  "digitalMaturityGrade": "A|B|C|D",
  "criticalGaps": ["gap 1", "gap 2", "gap 3"],
  "buyerConcerns": ["PE buyer diligence flag 1", "flag 2"],
  "strengths": ["strength 1", "strength 2"],
  "estimatedFinancials": {
    "inferredIndustry": "healthcare-services|business-services|tech-enabled-services|industrial-services|consumer-services|financial-services|infrastructure-services|manufacturing|distribution|other",
    "estimatedRevenue": null,
    "revenueConfidence": "high|medium|low|none",
    "revenueRationale": "where this came from",
    "estimatedEmployees": null,
    "estimatedMultiple": null,
    "multipleRationale": "industry median basis"
  }
}`;

function extractJSON(text) {
  const clean = text.replace(/```json\s*/g, "").replace(/```\s*/g, "").trim();
  const start = clean.indexOf("{");
  if (start === -1) return null;
  let depth = 0, inString = false, escaped = false;
  for (let i = start; i < clean.length; i++) {
    const ch = clean[i];
    if (escaped) { escaped = false; continue; }
    if (ch === "\\") { escaped = true; continue; }
    if (ch === '"') { inString = !inString; continue; }
    if (inString) continue;
    if (ch === "{") depth++;
    else if (ch === "}") { depth--; if (depth === 0) return clean.substring(start, i + 1); }
  }
  return null;
}

async function runDigitalScan(company, urls, buCount) {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 75000);
    const res = await fetchRetry("/api/anthropic", {
      method: "POST", headers: { "Content-Type": "application/json" }, signal: controller.signal,
      body: JSON.stringify({ model: "claude-sonnet-4-20250514", max_tokens: 4096,
        messages: [{ role: "user", content: SCAN_PROMPT(company, urls, buCount) }],
        tools: [{ type: "web_search_20250305", name: "web_search" }] }),
    });
    clearTimeout(timeout);
    if (!res.ok) return { _error: res.status === 429 ? "ratelimit" : "api" };
    const data = await res.json();
    const allText = (data.content || []).map(b => {
      if (b.type === "text") return b.text || "";
      if (b.content && Array.isArray(b.content)) return b.content.map(c => c.text || "").join("\n");
      return "";
    }).filter(Boolean).join("\n").trim();
    if (!allText) return { _error: "empty" };
    const json = extractJSON(allText);
    if (!json) return { _error: data.stop_reason === "max_tokens" ? "truncated" : "parse" };
    return JSON.parse(json);
  } catch (e) {
    if (e.name === "AbortError") return { _error: "timeout" };
    return { _error: "network" };
  }
}

const RECS_PROMPT = (company, scan, financials, uploadedContext) => `You are a PE marketing strategist. Generate specific, evidence-linked recommendations for "${company}".
SCAN: ${JSON.stringify(scan, null, 2)}
FINANCIALS: Revenue $${(financials.revenue/1000000).toFixed(1)}M, EBITDA ${(financials.ebitdaMargin*100).toFixed(0)}%, ${financials.currentMultiple}x multiple, ${financials.buCount} BUs, ${financials.industry}
${uploadedContext ? `UPLOADED DOCS:\n${uploadedContext}` : ""}
Generate exactly 6 recommendations. Each MUST reference a specific scan finding (quote it), explain EV impact, give a concrete next step, assign to standardization|traction|visibility|governance, and classify as quick_win (<90 days) or system_build (90+ days).
Also generate company_narrative (what marketing tells a buyer TODAY), value_narrative (what it could tell), and assessment_basis array.
Respond ONLY with this JSON:
{
  "recommendations": [{"action":"...","evidence":"...","evImpact":"...","nextStep":"...","layer":"...","phase":"quick_win|system_build","timeline":"...","effort":"low|medium|high"}],
  "companyNarrative": "...",
  "valueNarrative": "...",
  "assessmentBasis": ["source 1", "source 2"]
}`;

async function runRecommendations(company, scan, financials, uploadedFiles) {
  try {
    let uploadedContext = "";
    const docMessages = [];
    if (uploadedFiles && uploadedFiles.length > 0) {
      const textFiles = uploadedFiles.filter(f => f.extractedText);
      const imageFiles = uploadedFiles.filter(f => f.base64 && !f.extractedText);
      if (textFiles.length > 0) uploadedContext = textFiles.map(f => `--- ${f.name} ---\n${f.extractedText}`).join("\n\n");
      imageFiles.forEach(f => docMessages.push({ type: "image", source: { type: "base64", media_type: f.mimeType || "image/png", data: f.base64 } }));
    }
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 60000);
    const res = await fetchRetry("/api/anthropic", {
      method: "POST", headers: { "Content-Type": "application/json" }, signal: controller.signal,
      body: JSON.stringify({ model: "claude-sonnet-4-20250514", max_tokens: 4096,
        messages: [{ role: "user", content: [...docMessages, { type: "text", text: RECS_PROMPT(company, scan, financials, uploadedContext) }] }] }),
    });
    clearTimeout(timeout);
    if (!res.ok) return null;
    const data = await res.json();
    const allText = (data.content || []).map(b => b.type === "text" ? (b.text || "") : "").filter(Boolean).join("\n").trim();
    if (!allText) return null;
    const json = extractJSON(allText);
    return json ? JSON.parse(json) : null;
  } catch (e) { return null; }
}

// ── SHARED UI COMPONENTS ──
function Card({ children, style = {}, glow }) {
  return <div style={{ background: T.bgCard, border: `1px solid ${glow || T.border}`, borderRadius: 14, padding: 20, transition: "all 0.2s", ...style }}>{children}</div>;
}
function StatBlock({ label, value, sub, large, color, prefix }) {
  return <div>
    <div style={{ fontSize: 15, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: T.textMuted, marginBottom: 8 }}>{label}</div>
    <div style={{ fontSize: large ? 28 : 20, fontWeight: 700, color: color || T.white, lineHeight: 1.1, fontFamily: "'Space Mono', monospace" }}>
      {prefix && <span style={{ fontSize: large ? 16 : 12, color: T.textMuted, marginRight: 2 }}>{prefix}</span>}{value}
    </div>
    {sub && <div style={{ fontSize: 16, color: T.textMuted, marginTop: 3 }}>{sub}</div>}
  </div>;
}
function SectionLabel({ icon, label, color }) {
  return <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
    <span style={{ fontSize: 18, opacity: 0.5, color: color || T.textMuted }}>{icon}</span>
    <span style={{ fontSize: 15, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: color || T.textMuted }}>{label}</span>
    <div style={{ flex: 1, height: 1, background: T.border, marginLeft: 8 }} />
  </div>;
}
function GradeChip({ grade, size = "md" }) {
  const colors = { A: T.accent, B: T.blue, C: T.gold, D: T.red };
  const c = colors[grade] || T.textMuted;
  const s = size === "lg" ? { fontSize: 24, padding: "8px 18px" } : { fontSize: 16, padding: "4px 14px" };
  return <span style={{ ...s, fontWeight: 700, borderRadius: 6, background: `${c}18`, color: c, border: `1px solid ${c}30` }}>{grade}</span>;
}
function StryveHeader({ compact }) {
  const size = compact ? 32 : 44;
  return <div style={{ display: "flex", alignItems: "center", gap: 14, padding: compact ? "14px 0" : "20px 0" }}>
    <img src={STRYVE_LOGO} alt="Stryve" style={{ width: size, height: size, objectFit: "contain", mixBlendMode: "lighten" }} />
    <span style={{ fontSize: compact ? 11 : 13, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: T.orange }}>Stryve</span>
    <span style={{ fontSize: compact ? 9 : 10, color: T.textMuted, letterSpacing: "0.04em" }}>PE Marketing Value Model</span>
  </div>;
}
function ScoreBar({ score, label, color, showLabel = true }) {
  const c = color || (score >= 70 ? T.accent : score >= 40 ? T.gold : T.red);
  return <div>
    {showLabel && <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
      <span style={{ fontSize: 16, color: T.text }}>{label}</span>
      <span style={{ fontSize: 17, fontWeight: 700, color: c, fontFamily: "'Space Mono', monospace" }}>{score}</span>
    </div>}
    <div style={{ height: 4, background: "rgba(148,163,184,0.08)", borderRadius: 2, overflow: "hidden" }}>
      <div style={{ width: `${score}%`, height: "100%", borderRadius: 2, background: `linear-gradient(90deg, ${c}90, ${c})`, transition: "width 0.8s ease" }} />
    </div>
  </div>;
}

// ── REPORT OVERLAY ──
function ReportOverlay({ companyData, opportunity, onClose }) {
  const opp = opportunity; const scan = companyData.scan; const cur = opp.current;
  const today = new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
  const layerColors = { standardization: "#F59E0B", traction: "#2DD4BF", visibility: "#3B82F6", governance: "#8B5CF6" };
  const gc = (g) => ({ A: "#2DD4BF", B: "#3B82F6", C: "#F59E0B", D: "#EF4444" }[g] || "#94A3B8");
  const concerns = [...(scan.buyerConcerns || []), ...(scan.criticalGaps || [])].slice(0, 3);
  const topActions = opp.layerRanking.flatMap(l => l.initiatives.slice(0, 2)).slice(0, 6);
  const script = `Your marketing is a Grade ${opp.compositeGrade}. We've identified ${fmt$(opp.ev.evDeltaLow)} to ${fmt$(opp.ev.evDeltaHigh)} in enterprise value opportunity at ${fmtPct(opp.investment.low / cur.revenue)} to ${fmtPct(opp.investment.high / cur.revenue)} of revenue. That's a ${opp.roi.low}–${opp.roi.high}× return.`;
  const info = [opp.industryData?.label, companyData.buCount + " BUs", "Rev: " + fmt$(cur.revenue), "EBITDA: " + fmt$(cur.ebitda), fmtX(cur.currentMultiple) + " Multiple", "EV: " + fmt$(cur.currentEV)].filter(Boolean).join(" · ");
  const S = {
    page: { position: "fixed", inset: 0, zIndex: 9999, background: "#fff", overflow: "auto", color: "#334155", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" },
    inner: { maxWidth: 920, margin: "0 auto", padding: "40px 32px 28px" },
    btn: { padding: "10px 20px", borderRadius: 6, border: "none", fontSize: 16, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" },
    accent: { height: 2, background: "#FF8A00", borderRadius: 1, marginBottom: 18 },
    finding: { background: "#FFFBF5", border: "1px solid #FF8A0040", borderLeft: "3px solid #FF8A00", padding: "14px 18px", marginBottom: 20, borderRadius: "0 4px 4px 0" },
    cols: { display: "flex", gap: 32, marginBottom: 20 },
    secLabel: { fontSize: 12, fontWeight: 700, color: "#FF8A00", letterSpacing: "0.08em", marginBottom: 14 },
    grade: (c) => ({ background: c, color: "#fff", fontSize: 15, fontWeight: 700, padding: "4px 12px", borderRadius: 4, display: "inline-block" }),
    heroBox: { background: "#F8FAFC", border: "1px solid #E2E8F0", borderTop: "3px solid #FF8A00", borderRadius: 4, padding: "18px 16px", textAlign: "center", marginBottom: 10 },
    scriptBox: { background: "#F8FAFC", border: "1px solid #E2E8F0", borderLeft: "3px solid #FF8A00", padding: "14px 18px", borderRadius: "0 4px 4px 0", marginBottom: 10 },
  };
  return <div style={S.page} className="report-overlay">
    <div style={S.inner}>
      <div className="no-print" style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
        <button onClick={onClose} style={{ ...S.btn, background: "#F1F5F9", color: "#64748B" }}>← Back</button>
        <button onClick={() => window.print()} style={{ ...S.btn, background: "#FF8A00", color: "#fff" }}>⎙ Print / Save PDF</button>
      </div>
      <div style={{ display: "flex", alignItems: "baseline", marginBottom: 4 }}>
        <span style={{ fontSize: 20, fontWeight: 800, color: "#0F172A" }}>STRYVE</span>
        <span style={{ fontSize: 15, color: "#64748B", marginLeft: 12 }}>PE Marketing Value Assessment</span>
        <span style={{ flex: 1 }} />
        <span style={{ fontSize: 14, color: "#94A3B8" }}>{today}</span>
      </div>
      <div style={S.accent} />
      <div style={{ fontSize: 30, fontWeight: 700, color: "#0F172A", marginBottom: 6 }}>{companyData.company}</div>
      <div style={{ fontSize: 14, color: "#64748B", marginBottom: 18 }}>{info}</div>
      <div style={S.finding}>
        <div style={{ fontSize: 11.5, fontWeight: 700, color: "#FF8A00", letterSpacing: "0.08em", marginBottom: 6 }}>TOP FINDING</div>
        <div style={{ fontSize: 15, color: "#334155", lineHeight: 1.85 }}>{scan.topFinding || "Digital presence scan complete."}</div>
      </div>
      <div style={S.cols}>
        <div style={{ flex: "0 0 46%" }}>
          <div style={S.secLabel}>DIGITAL SCAN RESULTS</div>
          <div style={{ display: "flex", gap: 18, marginBottom: 18 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ fontSize: 14, color: "#64748B" }}>Composite</span>
              <span style={S.grade(gc(opp.compositeGrade))}>{opp.compositeGrade}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ fontSize: 14, color: "#64748B" }}>Avg Score</span>
              <span style={{ fontSize: 16, fontWeight: 700 }}>{opp.avgScore}/100</span>
            </div>
          </div>
          {LAYERS.map(layer => {
            const score = opp.scanScores?.[layer.key] || 0;
            const lc = layerColors[layer.key] || "#94A3B8";
            return <div key={layer.key} style={{ marginBottom: 9 }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 15, marginBottom: 4 }}>
                <span>{layer.label}</span><span style={{ fontWeight: 700, color: lc }}>{score}</span>
              </div>
              <div style={{ height: 5, background: "#F1F5F9", borderRadius: 3 }}>
                <div style={{ height: "100%", width: `${score}%`, background: lc, borderRadius: 3 }} />
              </div>
            </div>;
          })}
          {concerns.length > 0 && <div style={{ marginTop: 16 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: "#EF4444", letterSpacing: "0.08em", marginBottom: 8 }}>BUYER CONCERNS</div>
            {concerns.map((c, i) => <div key={i} style={{ fontSize: 14, color: "#334155", marginBottom: 4 }}>• {c}</div>)}
          </div>}
        </div>
        <div style={{ flex: 1 }}>
          <div style={S.secLabel}>ENTERPRISE VALUE OPPORTUNITY</div>
          <div style={S.heroBox}>
            <div style={{ fontSize: 36, fontWeight: 800, color: "#FF8A00", lineHeight: 1 }}>{fmt$(opp.ev.evDeltaLow)} – {fmt$(opp.ev.evDeltaHigh)}</div>
            <div style={{ fontSize: 14, color: "#64748B", marginTop: 3 }}>Enterprise Value Opportunity Range</div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 10 }}>
            <div><div style={{ fontSize: 11, color: "#94A3B8" }}>INVESTMENT</div><div style={{ fontSize: 18, fontWeight: 700 }}>{fmt$(opp.investment.low)} – {fmt$(opp.investment.high)}/yr</div></div>
            <div><div style={{ fontSize: 11, color: "#94A3B8" }}>RETURN</div><div style={{ fontSize: 18, fontWeight: 700, color: "#FF8A00" }}>{opp.roi.low}–{opp.roi.high}×</div></div>
            <div><div style={{ fontSize: 11, color: "#94A3B8" }}>REVENUE</div><div style={{ fontSize: 18, fontWeight: 700, color: "#2DD4BF" }}>{fmtPct(opp.revenue.growthLow)} – {fmtPct(opp.revenue.growthHigh)}</div></div>
            <div><div style={{ fontSize: 11, color: "#94A3B8" }}>MULTIPLE</div><div style={{ fontSize: 18, fontWeight: 700, color: "#F59E0B" }}>+{opp.multiple.expansionLow.toFixed(1)} – +{opp.multiple.expansionHigh.toFixed(1)}×</div></div>
          </div>
          <div style={{ background: "#F0FDF4", borderRadius: 4, padding: "16px 10px", fontSize: 14 }}>
            <strong>Grade {opp.compositeGrade} → {opp.tier.target}:</strong> {opp.tier.label} — {opp.tier.sublabel}. Timeline: {opp.tier.months} months.
          </div>
        </div>
      </div>
      <div style={{ borderTop: "1px solid #E2E8F0", paddingTop: 10, marginBottom: 10 }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: "#FF8A00", letterSpacing: "0.08em", marginBottom: 10 }}>PRIORITY ACTIONS</div>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
          <thead><tr style={{ background: "#F8FAFC" }}>
            {["Initiative", "Layer", "Timeline"].map(h => <th key={h} style={{ padding: "8px 10px", textAlign: "left", fontSize: 11, color: "#94A3B8", fontWeight: 600 }}>{h}</th>)}
          </tr></thead>
          <tbody>{topActions.map((init, idx) => <tr key={idx} style={{ background: idx % 2 === 0 ? "#FCFDFE" : "#fff" }}>
            <td style={{ padding: "8px 10px" }}>{init.name}</td>
            <td style={{ padding: "8px 10px", color: "#64748B" }}>{LAYERS.find(l => l.key === init.layer)?.label || init.layer}</td>
            <td style={{ padding: "8px 10px", color: "#64748B" }}>{init.timeline}</td>
          </tr>)}</tbody>
        </table>
      </div>
      <div style={S.scriptBox}>
        <div style={{ fontSize: 11, fontWeight: 700, color: "#FF8A00", letterSpacing: "0.08em", marginBottom: 6 }}>WHAT TO SAY IN THE MEETING</div>
        <div style={{ fontSize: 15, color: "#334155", fontStyle: "italic", lineHeight: 1.8 }}>"{script}"</div>
      </div>
      <div style={{ borderTop: "1px solid #E2E8F0", paddingTop: 6 }}>
        <div style={{ fontSize: 11, color: "#94A3B8", marginBottom: 6 }}>Range estimates based on industry benchmarks and automated digital presence scan. Results are directional.</div>
        <div style={{ fontSize: 12 }}><span style={{ fontWeight: 700, color: "#FF8A00" }}>STRYVE</span><span style={{ color: "#94A3B8" }}> · {today}</span></div>
      </div>
    </div>
    <style>{`@media print { .no-print { display: none !important; } .report-overlay { position: static !important; } }`}</style>
  </div>;
}

// ── PAGE 1: COMPANY INPUT + SCAN ──
const SCAN_PHASES = ["Scanning website architecture...","Discovering portfolio companies...","Assessing brand and messaging quality...","Searching for company footprint...","Estimating financial profile...","Evaluating demand generation...","Scoring marketing maturity...","Identifying value creation levers...","Compiling findings..."];

function CompanyInputPage({ onComplete }) {
  const [company, setCompany] = useState("");
  const [urls, setUrls] = useState([""]);
  const [buCount, setBuCount] = useState("");
  const [scanning, setScanning] = useState(false);
  const [scanPhase, setScanPhase] = useState(0);
  const [scanResult, setScanResult] = useState(null);
  const [error, setError] = useState(null);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleFileUpload = async (e) => {
    const files = Array.from(e.target.files || []);
    const processed = [];
    for (const file of files) {
      try {
        const base64 = await new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result.split(",")[1]);
          reader.onerror = reject;
          reader.readAsDataURL(file);
        });
        const entry = { name: file.name, size: file.size, mimeType: file.type, base64 };
        if (file.type === "text/plain" || file.type === "text/csv" || file.name.endsWith(".md")) entry.extractedText = await file.text();
        processed.push(entry);
      } catch (err) { console.warn("File read failed:", file.name, err); }
    }
    setUploadedFiles(prev => [...prev, ...processed]);
  };
  const removeFile = (idx) => setUploadedFiles(prev => prev.filter((_, i) => i !== idx));
  const addUrl = () => setUrls(p => [...p, ""]);
  const updateUrl = (i, v) => setUrls(p => { const n = [...p]; n[i] = v; return n; });
  const removeUrl = (i) => setUrls(p => p.filter((_, j) => j !== i));
  const validUrls = urls.filter(u => u.trim());

  const handleScan = async () => {
    if (!company.trim() || validUrls.length === 0) return;
    setScanning(true); setError(null); setScanResult(null); setScanPhase(0);
    const phaseTimer = setInterval(() => setScanPhase(p => Math.min(p + 1, SCAN_PHASES.length - 1)), 5000);
    const result = await runDigitalScan(company.trim(), validUrls, parseInt(buCount) || 3);
    clearInterval(phaseTimer); setScanning(false);
    if (result._error) {
      const msgs = { timeout: "Scan timed out — try again.", ratelimit: "Service busy — wait and retry.", api: "Service unavailable.", parse: "Parse error — retry.", truncated: "Response truncated — retry.", empty: "No results returned.", network: "Connection issue." };
      setError(msgs[result._error] || "Scan failed — try again."); return;
    }
    setScanResult(result);
  };

  const handleConfirm = () => {
    if (!scanResult) return;
    const discoveredCount = scanResult.discoveredBUs?.length || 0;
    const effectiveBuCount = parseInt(buCount) || (discoveredCount > 0 ? discoveredCount : 3);
    onComplete({ company: company.trim(), urls: validUrls, buCount: effectiveBuCount, scan: scanResult, uploadedFiles });
  };

  return <div style={{ maxWidth: 800, margin: "0 auto", padding: "72px 32px" }}>
    <StryveHeader />
    {!scanResult && !scanning && <>
      <div style={{ marginBottom: 56 }}>
        <div style={{ fontSize: 15, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: T.orange, marginBottom: 18 }}>PE Marketing Due Diligence</div>
        <h1 style={{ fontSize: 48, fontWeight: 700, margin: "0 0 12px", letterSpacing: "-0.03em", lineHeight: 1.2, color: T.white }}>Where is the marketing<br />leaving value on the table?</h1>
        <p style={{ fontSize: 20, color: T.text, lineHeight: 1.85, maxWidth: 560 }}>Enter a portfolio company. We'll scan their digital presence, score marketing maturity, and model the enterprise value impact of fixing it.</p>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
        <div>
          <label style={{ fontSize: 15, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: T.textMuted, marginBottom: 10, display: "block" }}>Company / Platform Name</label>
          <input value={company} onChange={e => setCompany(e.target.value)} placeholder="e.g. Apex Infrastructure Services"
            style={{ width: "100%", padding: "20px 24px", fontSize: 22, background: T.bgCard, border: `1px solid ${company ? T.orangeBorder : T.border}`, borderRadius: 12, color: T.white, fontFamily: "inherit", outline: "none", boxSizing: "border-box" }} />
        </div>
        <div>
          <label style={{ fontSize: 15, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: T.textMuted, marginBottom: 10, display: "block" }}>Website URLs</label>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {urls.map((u, i) => <div key={i} style={{ display: "flex", gap: 12 }}>
              <input value={u} onChange={e => updateUrl(i, e.target.value)} placeholder={i === 0 ? "Platform website — e.g. https://apexinfra.com" : "Business unit website"}
                style={{ flex: 1, padding: "18px 22px", fontSize: 20, background: T.bgCard, border: `1px solid ${T.border}`, borderRadius: 10, color: T.white, fontFamily: "inherit", outline: "none", boxSizing: "border-box" }} />
              {urls.length > 1 && <button onClick={() => removeUrl(i)} style={{ width: 36, borderRadius: 10, border: `1px solid ${T.border}`, background: "transparent", color: T.textDim, fontSize: 20, cursor: "pointer" }}>×</button>}
            </div>)}
          </div>
          <button onClick={addUrl} style={{ marginTop: 14, padding: "10px 20px", borderRadius: 8, border: `1px dashed ${T.border}`, background: "transparent", color: T.textMuted, fontSize: 17, cursor: "pointer", fontFamily: "inherit" }}>+ Add another URL</button>
        </div>
        <div>
          <label style={{ fontSize: 15, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: T.textMuted, marginBottom: 10, display: "block" }}>Number of Business Units</label>
          <input value={buCount} onChange={e => setBuCount(e.target.value.replace(/\D/g, ""))} placeholder="e.g. 5"
            style={{ width: 100, padding: "18px 22px", fontSize: 20, background: T.bgCard, border: `1px solid ${T.border}`, borderRadius: 10, color: T.white, fontFamily: "'Space Mono', monospace", outline: "none", boxSizing: "border-box" }} />
        </div>
        <div>
          <label style={{ fontSize: 15, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: T.textMuted, marginBottom: 10, display: "block" }}>Supporting Documents <span style={{ fontWeight: 400, textTransform: "none", letterSpacing: 0 }}>(optional)</span></label>
          <div style={{ padding: "22px", borderRadius: 12, border: `1px dashed ${T.border}`, background: T.bgCard, textAlign: "center", cursor: "pointer", position: "relative" }}
            onClick={() => document.getElementById("file-upload-input").click()}>
            <input id="file-upload-input" type="file" multiple accept=".pdf,.png,.jpg,.jpeg,.csv,.txt,.md" onChange={handleFileUpload} style={{ position: "absolute", opacity: 0, width: 0, height: 0 }} />
            <div style={{ fontSize: 28, marginBottom: 8, opacity: 0.4 }}>+</div>
            <div style={{ fontSize: 17, color: T.textMuted }}>Drop pitch decks, marketing plans, CRM exports, org charts</div>
          </div>
          {uploadedFiles.length > 0 && <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 16 }}>
            {uploadedFiles.map((f, i) => <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "16px 10px", borderRadius: 8, background: T.bgSoft, border: `1px solid ${T.border}` }}>
              <span style={{ fontSize: 16, color: T.orange }}>✓</span>
              <span style={{ fontSize: 17, color: T.white, flex: 1 }}>{f.name}</span>
              <span style={{ fontSize: 15, color: T.textDim }}>{(f.size / 1024).toFixed(0)}KB</span>
              <button onClick={(e) => { e.stopPropagation(); removeFile(i); }} style={{ background: "none", border: "none", color: T.textDim, cursor: "pointer", fontSize: 20, padding: "0 8px" }}>×</button>
            </div>)}
          </div>}
        </div>
        {error && <div style={{ padding: "16px 20px", borderRadius: 8, background: T.redDim, border: `1px solid ${T.red}30`, fontSize: 17, color: T.red }}>{error}</div>}
        <button onClick={handleScan} disabled={!company.trim() || validUrls.length === 0}
          style={{ padding: "22px 40px", borderRadius: 12, border: "none", background: company.trim() && validUrls.length > 0 ? `linear-gradient(135deg, ${T.orange}, ${T.orangeSolid})` : T.bgCard,
            color: company.trim() && validUrls.length > 0 ? "#fff" : T.textDim, fontSize: 22, fontWeight: 700, cursor: company.trim() && validUrls.length > 0 ? "pointer" : "default",
            fontFamily: "inherit", boxShadow: company.trim() ? `0 4px 20px ${T.orange}40` : "none", transition: "all 0.3s" }}>
          Run Digital Scan →
        </button>
      </div>
    </>}
    {scanning && <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 22, paddingTop: 80 }}>
      <div style={{ width: 72, height: 72, borderRadius: 16, background: T.orangeDim, border: `2px solid ${T.orangeBorder}`, display: "flex", alignItems: "center", justifyContent: "center", animation: "pulse 1.5s ease infinite" }}>
        <span style={{ fontSize: 32 }}>◎</span>
      </div>
      <div style={{ fontSize: 22, fontWeight: 600, color: T.white }}>{SCAN_PHASES[scanPhase]}</div>
      <div style={{ fontSize: 17, color: T.textMuted, maxWidth: 400, textAlign: "center" }}>Scanning {validUrls.length} website{validUrls.length > 1 ? "s" : ""} for "{company}"</div>
      <div style={{ width: 240, height: 3, background: T.border, borderRadius: 2, overflow: "hidden", marginTop: 14 }}>
        <div style={{ width: `${Math.min(95, (scanPhase + 1) * 11)}%`, height: "100%", background: `linear-gradient(90deg, ${T.orange}, ${T.orangeSolid})`, borderRadius: 2, transition: "width 1.5s ease" }} />
      </div>
    </div>}
    {scanResult && <div>
      <Card glow={T.orangeBorder} style={{ marginBottom: 24, background: `linear-gradient(135deg, ${T.bgCard}, ${T.orangeDim})` }}>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 18 }}>
          <div style={{ width: 44, height: 44, borderRadius: 12, background: T.orangeDim, border: `1px solid ${T.orangeBorder}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <span style={{ fontSize: 28 }}>◎</span>
          </div>
          <div>
            <div style={{ fontSize: 15, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: T.orange, marginBottom: 8 }}>TOP FINDING</div>
            <div style={{ fontSize: 20, color: T.white, fontWeight: 600, lineHeight: 1.85 }}>{scanResult.topFinding}</div>
          </div>
        </div>
      </Card>
      {scanResult.discoveredBUs?.length > 0 && <Card style={{ marginBottom: 24 }}>
        <SectionLabel icon="◎" label={`Discovered Portfolio Companies (${scanResult.discoveredBUs.length})`} />
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
          {scanResult.discoveredBUs.map((bu, i) => <div key={i} style={{ padding: "14px 18px", borderRadius: 8, background: T.bgSoft, border: `1px solid ${T.border}` }}>
            <div style={{ fontSize: 17, fontWeight: 600, color: T.white }}>{bu.name}</div>
            {bu.url && <div style={{ fontSize: 15, color: T.textDim, marginTop: 4 }}>{bu.url}</div>}
          </div>)}
        </div>
      </Card>}
      {scanResult.estimatedFinancials && (scanResult.estimatedFinancials.estimatedRevenue || scanResult.estimatedFinancials.inferredIndustry) && <Card style={{ marginBottom: 24, borderLeft: `4px solid ${T.orange}` }}>
        <div style={{ fontSize: 15, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: T.orange, marginBottom: 14 }}>FINANCIAL ESTIMATES FROM SCAN</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 22 }}>
          {scanResult.estimatedFinancials.inferredIndustry && <div>
            <div style={{ fontSize: 15, color: T.textMuted }}>Industry</div>
            <div style={{ fontSize: 18, fontWeight: 600, color: T.white }}>{INDUSTRY_DATA[scanResult.estimatedFinancials.inferredIndustry]?.label || scanResult.estimatedFinancials.inferredIndustry}</div>
          </div>}
          {scanResult.estimatedFinancials.estimatedRevenue && <div>
            <div style={{ fontSize: 15, color: T.textMuted }}>Est. Revenue</div>
            <div style={{ fontSize: 18, fontWeight: 600, color: T.white }}>${scanResult.estimatedFinancials.estimatedRevenue}M <span style={{ fontSize: 14, color: T.textDim }}>({scanResult.estimatedFinancials.revenueConfidence} confidence)</span></div>
          </div>}
          {scanResult.estimatedFinancials.estimatedEmployees && <div>
            <div style={{ fontSize: 15, color: T.textMuted }}>Est. Employees</div>
            <div style={{ fontSize: 18, fontWeight: 600, color: T.white }}>{scanResult.estimatedFinancials.estimatedEmployees}</div>
          </div>}
        </div>
        {scanResult.estimatedFinancials.revenueRationale && <div style={{ fontSize: 16, color: T.textDim, marginTop: 14, lineHeight: 1.85, fontStyle: "italic" }}>{scanResult.estimatedFinancials.revenueRationale}</div>}
      </Card>}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 24 }}>
        <Card>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
            <span style={{ fontSize: 15, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: T.textMuted }}>Brand Consistency</span>
            <GradeChip grade={scanResult.brandConsistencyGrade} size="lg" />
          </div>
          <ScoreBar score={scanResult.scores?.standardization || 0} label="Standardization" color={T.accent} />
        </Card>
        <Card>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
            <span style={{ fontSize: 15, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: T.textMuted }}>Digital Maturity</span>
            <GradeChip grade={scanResult.digitalMaturityGrade} size="lg" />
          </div>
          <ScoreBar score={scanResult.scores?.traction || 0} label="Demand Gen" color={T.blue} />
        </Card>
      </div>
      <Card style={{ marginBottom: 24 }}>
        <SectionLabel icon="◉" label="Marketing Layer Scores" />
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {LAYERS.map(l => <div key={l.key}>
            <ScoreBar score={scanResult.scores?.[l.key] || 0} label={l.label} />
            <div style={{ fontSize: 16, color: T.textDim, marginTop: 3, lineHeight: 1.85 }}>{scanResult.scoringRationale?.[l.key] || ""}</div>
          </div>)}
        </div>
      </Card>
      {scanResult.criticalGaps?.length > 0 && <Card style={{ marginBottom: 24, borderLeft: `4px solid ${T.gold}` }}>
        <div style={{ fontSize: 15, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: T.gold, marginBottom: 14 }}>BUYER CONCERNS</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {[...(scanResult.buyerConcerns || []), ...(scanResult.criticalGaps || [])].slice(0, 5).map((g, i) =>
            <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
              <span style={{ color: T.gold, fontSize: 16, marginTop: 1 }}>▸</span>
              <span style={{ fontSize: 17, color: T.text, lineHeight: 1.85 }}>{g}</span>
            </div>
          )}
        </div>
      </Card>}
      {scanResult.strengths?.length > 0 && <Card style={{ marginBottom: 30, borderLeft: `4px solid ${T.accent}` }}>
        <div style={{ fontSize: 15, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: T.accent, marginBottom: 14 }}>STRENGTHS</div>
        {scanResult.strengths.map((s, i) => <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", marginTop: i > 0 ? 4 : 0 }}>
          <span style={{ color: T.accent, fontSize: 16, marginTop: 1 }}>✓</span>
          <span style={{ fontSize: 17, color: T.text, lineHeight: 1.85 }}>{s}</span>
        </div>)}
      </Card>}
      <button onClick={handleConfirm} style={{ width: "100%", padding: "22px 40px", borderRadius: 12, border: "none", background: `linear-gradient(135deg, ${T.orange}, ${T.orangeSolid})`, color: "#fff", fontSize: 22, fontWeight: 700, cursor: "pointer", fontFamily: "inherit", boxShadow: `0 4px 20px ${T.orange}40` }}>
        Looks Right — Build the Value Model →
      </button>
    </div>}
    <style>{`@keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }`}</style>
  </div>;
}

// ── PAGE 2: QUICK INTAKE ──
function IntakePage({ companyData, onComplete }) {
  const est = companyData.scan?.estimatedFinancials || {};
  const inferredInd = est.inferredIndustry || "";
  const indData = INDUSTRY_DATA[inferredInd] || null;
  const [revenue, setRevenue] = useState(est.estimatedRevenue ? String(est.estimatedRevenue) : "");
  const [margin, setMargin] = useState(indData ? String(Math.round(indData.avgMargin * 100)) : "");
  const [multiple, setMultiple] = useState(est.estimatedMultiple ? String(est.estimatedMultiple) : indData ? String(indData.avgMultiple) : "");
  const [industry, setIndustry] = useState(inferredInd);
  const [acqPlanned, setAcqPlanned] = useState("");
  const [autoFilled] = useState({ revenue: !!est.estimatedRevenue, margin: !!indData, multiple: !!(est.estimatedMultiple || indData), industry: !!inferredInd });

  const handleIndustryChange = (k) => {
    setIndustry(k);
    const d = INDUSTRY_DATA[k];
    if (d) {
      if (autoFilled.margin || !margin) setMargin(String(Math.round(d.avgMargin * 100)));
      if (autoFilled.multiple || !multiple) setMultiple(String(d.avgMultiple));
    }
  };
  const rev = parseFloat(revenue) * 1000000 || 0;
  const mar = parseFloat(margin) / 100 || 0;
  const mult = parseFloat(multiple) || 0;
  const canProceed = rev > 0 && mar > 0 && mult > 0 && industry;

  return <div style={{ maxWidth: 740, margin: "0 auto", padding: "60px 32px" }}>
    <StryveHeader compact />
    <div style={{ marginBottom: 32 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 10 }}>
        <div style={{ width: 8, height: 8, borderRadius: 99, background: T.orange }} />
        <span style={{ fontSize: 20, fontWeight: 600, color: T.white }}>{companyData.company}</span>
        <span style={{ fontSize: 14, fontWeight: 600, padding: "4px 12px", borderRadius: 4, background: T.orangeDim, color: T.orange, border: `1px solid ${T.orangeBorder}` }}>SCAN COMPLETE</span>
      </div>
      <h2 style={{ fontSize: 32, fontWeight: 700, color: T.white, margin: "0 0 8px", letterSpacing: "-0.02em" }}>Three numbers to unlock the value model</h2>
      <p style={{ fontSize: 20, color: T.text, lineHeight: 1.8, margin: 0 }}>We need the financials to calculate enterprise value impact. Everything else comes from the digital scan.</p>
    </div>
    <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
      <div>
        <label style={{ fontSize: 15, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: T.textMuted, marginBottom: 10, display: "flex", alignItems: "center", gap: 12 }}>
          Annual Revenue ($M){autoFilled.revenue && revenue && <span style={{ fontSize: 12, fontWeight: 600, padding: "2px 10px", borderRadius: 4, background: T.orangeDim, color: T.orange, border: `1px solid ${T.orangeBorder}`, textTransform: "none", letterSpacing: 0 }}>estimated from scan</span>}
        </label>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{ color: T.textMuted, fontSize: 22 }}>$</span>
          <input value={revenue} onChange={e => setRevenue(e.target.value)} placeholder="e.g. 45" type="number" step="0.1"
            style={{ width: 140, padding: "20px 22px", fontSize: 24, background: T.bgCard, border: `1px solid ${revenue ? T.orangeBorder : T.border}`, borderRadius: 12, color: T.white, fontFamily: "'Space Mono', monospace", outline: "none", boxSizing: "border-box" }} />
          <span style={{ color: T.textMuted, fontSize: 20 }}>M</span>
        </div>
      </div>
      <div>
        <label style={{ fontSize: 15, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: T.textMuted, marginBottom: 10, display: "flex", alignItems: "center", gap: 12 }}>
          EBITDA Margin (%){autoFilled.margin && margin && <span style={{ fontSize: 12, fontWeight: 600, padding: "2px 10px", borderRadius: 4, background: T.orangeDim, color: T.orange, border: `1px solid ${T.orangeBorder}`, textTransform: "none", letterSpacing: 0 }}>industry median</span>}
        </label>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <input value={margin} onChange={e => setMargin(e.target.value)} placeholder="e.g. 18" type="number" step="0.5"
            style={{ width: 120, padding: "20px 22px", fontSize: 24, background: T.bgCard, border: `1px solid ${margin ? T.orangeBorder : T.border}`, borderRadius: 12, color: T.white, fontFamily: "'Space Mono', monospace", outline: "none", boxSizing: "border-box" }} />
          <span style={{ color: T.textMuted, fontSize: 20 }}>%</span>
        </div>
      </div>
      <div>
        <label style={{ fontSize: 15, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: T.textMuted, marginBottom: 10, display: "flex", alignItems: "center", gap: 12 }}>
          Current EBITDA Multiple{autoFilled.multiple && multiple && <span style={{ fontSize: 12, fontWeight: 600, padding: "2px 10px", borderRadius: 4, background: T.orangeDim, color: T.orange, border: `1px solid ${T.orangeBorder}`, textTransform: "none", letterSpacing: 0 }}>industry median</span>}
        </label>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <input value={multiple} onChange={e => setMultiple(e.target.value)} placeholder="e.g. 10" type="number" step="0.5"
            style={{ width: 120, padding: "20px 22px", fontSize: 24, background: T.bgCard, border: `1px solid ${multiple ? T.orangeBorder : T.border}`, borderRadius: 12, color: T.white, fontFamily: "'Space Mono', monospace", outline: "none", boxSizing: "border-box" }} />
          <span style={{ color: T.textMuted, fontSize: 20 }}>×</span>
        </div>
      </div>
      <div>
        <label style={{ fontSize: 15, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: T.textMuted, marginBottom: 10, display: "block" }}>Industry</label>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
          {Object.entries(INDUSTRY_DATA).map(([k, v]) =>
            <button key={k} onClick={() => handleIndustryChange(k)}
              style={{ padding: "20px 14px", borderRadius: 8, border: `1px solid ${industry === k ? T.accentBorder : T.border}`,
                background: industry === k ? T.accentDim : "transparent", color: industry === k ? T.accent : T.text,
                fontSize: 17, fontWeight: industry === k ? 600 : 400, cursor: "pointer", fontFamily: "inherit", transition: "all 0.12s" }}>
              {v.label}
            </button>
          )}
        </div>
      </div>
      <div>
        <label style={{ fontSize: 15, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: T.textMuted, marginBottom: 10, display: "block" }}>Acquisitions Planned (Next 24 months)</label>
        <input value={acqPlanned} onChange={e => setAcqPlanned(e.target.value.replace(/\D/g, ""))} placeholder="e.g. 2"
          style={{ width: 80, padding: "18px 22px", fontSize: 22, background: T.bgCard, border: `1px solid ${T.border}`, borderRadius: 10, color: T.white, fontFamily: "'Space Mono', monospace", outline: "none", boxSizing: "border-box" }} />
      </div>
      {canProceed && <Card glow={T.orangeBorder} style={{ background: `linear-gradient(135deg, ${T.bgCard}, ${T.orangeDim})` }}>
        <div style={{ fontSize: 15, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: T.orange, marginBottom: 10 }}>CURRENT STATE</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 22 }}>
          <StatBlock label="EBITDA" value={fmt$(rev * mar)} color={T.white} />
          <StatBlock label="Multiple" value={fmtX(mult)} color={T.white} />
          <StatBlock label="Enterprise Value" value={fmt$(rev * mar * mult)} color={T.orange} large />
        </div>
      </Card>}
      <button onClick={() => onComplete({ revenue: rev, ebitdaMargin: mar, currentMultiple: mult, industry, acquisitionsPlanned: parseInt(acqPlanned) || 0, buCount: companyData.buCount })} disabled={!canProceed}
        style={{ padding: "22px 40px", borderRadius: 12, border: "none", background: canProceed ? `linear-gradient(135deg, ${T.orange}, ${T.orangeSolid})` : T.bgCard,
          color: canProceed ? "#fff" : T.textDim, fontSize: 22, fontWeight: 700, cursor: canProceed ? "pointer" : "default",
          fontFamily: "inherit", boxShadow: canProceed ? `0 4px 20px ${T.orange}40` : "none", transition: "all 0.3s", opacity: canProceed ? 1 : 0.5 }}>
        Show Me the Value →
      </button>
    </div>
  </div>;
}

// ── PAGE 3: DASHBOARD ──
function Dashboard({ companyData, financialInputs, opportunity, recommendations }) {
  const opp = opportunity; const scan = companyData.scan; const cur = opp.current;
  const [showReport, setShowReport] = useState(false);
  const [activeLayer, setActiveLayer] = useState(null);
  const [showSystemBuild, setShowSystemBuild] = useState(false);
  const gradeColor = { A: T.accent, B: T.blue, C: T.gold, D: T.red }[opp.compositeGrade] || T.textMuted;
  const layerColors = { standardization: T.gold, traction: T.accent, visibility: T.blue, governance: T.violet };
  const evPctLow = cur.currentEV > 0 ? ((opp.ev.evDeltaLow / cur.currentEV) * 100).toFixed(0) : 0;
  const evPctHigh = cur.currentEV > 0 ? ((opp.ev.evDeltaHigh / cur.currentEV) * 100).toFixed(0) : 0;
  const meetingScript = `Your marketing is a Grade ${opp.compositeGrade}. We've identified ${fmt$(opp.ev.evDeltaLow)} to ${fmt$(opp.ev.evDeltaHigh)} in enterprise value opportunity at ${fmtPct(opp.investment.low / cur.revenue)} to ${fmtPct(opp.investment.high / cur.revenue)} of revenue. That's a ${opp.roi.low}–${opp.roi.high}× return on marketing investment.`;
  const concerns = [...(scan.buyerConcerns || []), ...(scan.criticalGaps || [])].slice(0, 5);
  const recs = recommendations?.recommendations || [];
  const quickWinRecs = recs.filter(r => r.phase === "quick_win");
  const systemBuildRecs = recs.filter(r => r.phase === "system_build");
  const companyNarrative = recommendations?.companyNarrative || null;
  const valueNarrative = recommendations?.valueNarrative || null;
  const assessmentBasis = recommendations?.assessmentBasis || [];
  const allInits = opp.layerRanking.flatMap(layer => layer.initiatives.map(init => ({ ...init, layerKey: layer.key, layerLabel: layer.label, layerScore: layer.score })));
  const hasRecs = recs.length > 0;

  const renderRec = (rec, idx) => {
    const lc = layerColors[rec.layer] || T.textMuted;
    const layerLabel = LAYERS.find(l => l.key === rec.layer)?.label || rec.layer;
    const effortColor = rec.effort === "low" ? T.accent : rec.effort === "medium" ? T.gold : T.orange;
    return <div key={idx} style={{ padding: "18px 20px", borderRadius: 10, background: T.bgSoft, border: `1px solid ${T.border}`, borderLeft: `4px solid ${lc}` }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
        <span style={{ fontSize: 18, fontWeight: 700, color: T.white }}>{rec.action}</span>
        <div style={{ display: "flex", gap: 10, alignItems: "center", flexShrink: 0 }}>
          <span style={{ fontSize: 14, fontWeight: 600, padding: "4px 10px", borderRadius: 4, background: effortColor + "18", color: effortColor, border: `1px solid ${effortColor}30` }}>{rec.effort}</span>
          <span style={{ fontSize: 15, color: T.textMuted }}>{rec.timeline}</span>
        </div>
      </div>
      <div style={{ fontSize: 16, color: T.gold, lineHeight: 1.85, marginBottom: 8, fontStyle: "italic" }}>"{rec.evidence}"</div>
      <div style={{ fontSize: 16, color: T.textDim, lineHeight: 1.85, marginBottom: 8 }}>{rec.evImpact}</div>
      <div style={{ fontSize: 16, color: T.white, lineHeight: 1.85, padding: "10px 14px", borderRadius: 6, background: lc + "10", border: `1px solid ${lc}15` }}>
        <span style={{ fontWeight: 600, color: lc }}>Next step:</span> {rec.nextStep}
      </div>
      <div style={{ fontSize: 15, color: lc, fontWeight: 500, marginTop: 10 }}>{layerLabel}</div>
    </div>;
  };

  return <div style={{ minHeight: "100vh", background: T.bg, color: T.text, fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", padding: "0 32px 60px" }}>
    <div style={{ maxWidth: 1100, margin: "0 auto" }}>
      <StryveHeader compact />
      <div style={{ padding: "8px 0 22px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 10 }}>
          <h1 style={{ fontSize: 30, fontWeight: 700, margin: 0, color: T.white, letterSpacing: "-0.02em" }}>{companyData.company}</h1>
          <span style={{ fontSize: 16, color: T.textMuted }}>{companyData.buCount} BUs · {opp.industryData.label}</span>
          <GradeChip grade={opp.compositeGrade} />
          <div style={{ flex: 1 }} />
          <button onClick={() => setShowReport(true)} style={{ padding: "12px 22px", borderRadius: 8, border: "none", background: `linear-gradient(135deg, ${T.orange}, ${T.orangeSolid})`, color: "#fff", fontSize: 16, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}>
            ↓ Executive Summary
          </button>
        </div>
        <div style={{ fontSize: 17, color: T.textMuted }}>{fmt$(cur.revenue)} Revenue · {fmt$(cur.ebitda)} EBITDA · {fmtX(cur.currentMultiple)} Multiple · {fmt$(cur.currentEV)} Enterprise Value</div>
      </div>

      {/* Opening */}
      <Card glow={T.orangeBorder} style={{ marginBottom: 30, background: `linear-gradient(135deg, ${T.bgCard}, ${T.orangeDim})` }}>
        <div style={{ fontSize: 14, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: T.orange, marginBottom: 18 }}>Your Opening</div>
        <div style={{ fontSize: 24, color: T.white, fontWeight: 400, lineHeight: 1.8, fontStyle: "italic", marginBottom: 24 }}>"{meetingScript}"</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 14 }}>
          {[
            { label: "EV Opportunity", value: `${fmt$(opp.ev.evDeltaLow)} – ${fmt$(opp.ev.evDeltaHigh)}`, sub: `${evPctLow}–${evPctHigh}% of current EV`, color: T.orange },
            { label: "Investment", value: `${fmt$(opp.investment.low)} – ${fmt$(opp.investment.high)}`, sub: `${fmtPct(opp.investment.low / cur.revenue)} – ${fmtPct(opp.investment.high / cur.revenue)} of revenue`, color: T.white },
            { label: "Return", value: `${opp.roi.low} – ${opp.roi.high}×`, sub: "EV created per $1", color: T.accent },
            { label: "Timeline", value: opp.tier.months, sub: `Grade ${opp.compositeGrade} → ${opp.tier.target}`, color: T.white },
          ].map((item, i) => <div key={i} style={{ background: T.bgSoft, borderRadius: 8, padding: "16px 18px", border: `1px solid ${T.border}` }}>
            <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: T.textMuted, marginBottom: 6 }}>{item.label}</div>
            <div style={{ fontSize: 22, fontWeight: 800, color: item.color }}>{item.value}</div>
            <div style={{ fontSize: 15, color: T.textDim }}>{item.sub}</div>
          </div>)}
        </div>
      </Card>

      {/* Narrative */}
      {companyNarrative && <Card style={{ marginBottom: 24, borderLeft: `4px solid ${T.gold}` }}>
        <div style={{ fontSize: 14, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: T.gold, marginBottom: 10 }}>What Your Marketing Tells a Buyer Today</div>
        <div style={{ fontSize: 18, color: T.text, lineHeight: 1.8, fontStyle: "italic" }}>{companyNarrative}</div>
        {valueNarrative && <>
          <div style={{ fontSize: 14, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: T.accent, marginTop: 18, marginBottom: 10 }}>What It Could Tell Them</div>
          <div style={{ fontSize: 18, color: T.accent, lineHeight: 1.8 }}>{valueNarrative}</div>
        </>}
      </Card>}

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 22, marginBottom: 30 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <Card glow={T.orangeBorder} style={{ background: `linear-gradient(135deg, ${T.bgCard}, ${T.orangeDim})` }}>
            <div style={{ fontSize: 14, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: T.orange, marginBottom: 10 }}>Top Finding</div>
            <div style={{ fontSize: 20, color: T.white, fontWeight: 500, lineHeight: 1.85 }}>{scan.topFinding}</div>
          </Card>
          {concerns.length > 0 && <Card style={{ borderLeft: `4px solid ${T.gold}` }}>
            <div style={{ fontSize: 14, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: T.gold, marginBottom: 14 }}>What a Buyer Would Flag</div>
            {concerns.map((g, i) => <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 8 }}>
              <span style={{ color: T.gold }}>▸</span><span style={{ fontSize: 17, color: T.text, lineHeight: 1.85 }}>{g}</span>
            </div>)}
          </Card>}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          {scan.strengths?.length > 0 && <Card style={{ borderLeft: `4px solid ${T.accent}` }}>
            <div style={{ fontSize: 14, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: T.accent, marginBottom: 14 }}>What's Working</div>
            {scan.strengths.map((s, i) => <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 4 }}>
              <span style={{ color: T.accent }}>✓</span><span style={{ fontSize: 17, color: T.text, lineHeight: 1.85 }}>{s}</span>
            </div>)}
          </Card>}
          {opp.investment.ebitdaCapped && <div style={{ padding: "16px 20px", borderRadius: 8, background: T.orangeDim, border: `1px solid ${T.orange}20` }}>
            <div style={{ fontSize: 15, color: T.orange, fontWeight: 600 }}>Investment capped at 25% of EBITDA — preserving profit margin</div>
          </div>}
        </div>
      </div>

      {/* Opportunity */}
      <Card style={{ marginBottom: 30 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
          <div style={{ width: 52, height: 52, borderRadius: 10, background: gradeColor + "20", border: `1px solid ${gradeColor}40`, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontSize: 24, fontWeight: 800, color: gradeColor }}>{opp.compositeGrade}</span>
          </div>
          <div>
            <div style={{ fontSize: 14, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: T.orange, marginBottom: 4 }}>Grade {opp.compositeGrade} → {opp.tier.target}: {opp.tier.label}</div>
            <div style={{ fontSize: 18, color: T.white, fontWeight: 500 }}>{opp.tier.sublabel}</div>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 14 }}>
          {[
            { label: "Revenue Growth", value: `${fmtPct(opp.revenue.growthLow)} – ${fmtPct(opp.revenue.growthHigh)}`, sub: `over ${opp.tier.months} months`, color: T.accent },
            { label: "Multiple Expansion", value: `+${opp.multiple.expansionLow.toFixed(1)} – +${opp.multiple.expansionHigh.toFixed(1)}×`, sub: `${fmtX(cur.currentMultiple)} → ${fmtX(opp.multiple.low)} to ${fmtX(opp.multiple.high)}`, color: T.gold },
            { label: "New Revenue Range", value: `${fmt$(opp.revenue.low)} – ${fmt$(opp.revenue.high)}`, sub: `from ${fmt$(cur.revenue)}`, color: T.white },
            { label: "New EV Range", value: `${fmt$(opp.ev.conservativeEV)} – ${fmt$(opp.ev.aggressiveEV)}`, sub: `from ${fmt$(cur.currentEV)}`, color: T.orange },
          ].map((item, i) => <div key={i} style={{ background: T.bgSoft, borderRadius: 8, padding: "16px 18px", border: `1px solid ${T.border}` }}>
            <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: T.textMuted, marginBottom: 6 }}>{item.label}</div>
            <div style={{ fontSize: 20, fontWeight: 700, color: item.color }}>{item.value}</div>
            <div style={{ fontSize: 15, color: T.textDim }}>{item.sub}</div>
          </div>)}
        </div>
      </Card>

      {/* Recommendations */}
      <Card style={{ marginBottom: 30 }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginBottom: 8 }}>
          <span style={{ fontSize: 14, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: T.orange }}>{hasRecs ? "What To Do About It" : "First 90 Days"}</span>
        </div>
        {hasRecs ? <>
          {quickWinRecs.length > 0 && <div style={{ marginBottom: 24 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, margin: "12px 0 10px" }}>
              <span style={{ fontSize: 17, fontWeight: 700, color: T.orange }}>Quick Wins</span>
              <span style={{ fontSize: 15, color: T.textMuted }}>First 90 days</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>{quickWinRecs.map(renderRec)}</div>
          </div>}
          {systemBuildRecs.length > 0 && <div>
            <div onClick={() => setShowSystemBuild(!showSystemBuild)} style={{ display: "flex", alignItems: "center", gap: 12, cursor: "pointer", padding: "14px 0" }}>
              <span style={{ fontSize: 17, color: T.blue, fontWeight: 600 }}>{showSystemBuild ? "▼" : "▶"} System Build</span>
              <span style={{ fontSize: 15, color: T.textMuted }}>4–9 months — {systemBuildRecs.length} initiatives</span>
            </div>
            {showSystemBuild && <div style={{ display: "flex", flexDirection: "column", gap: 14, marginTop: 14 }}>{systemBuildRecs.map(renderRec)}</div>}
          </div>}
        </> : <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {allInits.slice(0, 6).map((init, idx) => {
            const lc = layerColors[init.layerKey] || T.textMuted;
            return <div key={idx} style={{ padding: "16px 20px", borderRadius: 8, background: T.bgSoft, border: `1px solid ${T.border}` }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6 }}>
                <div style={{ width: 8, height: 8, borderRadius: 99, background: lc, flexShrink: 0 }} />
                <span style={{ fontSize: 18, fontWeight: 600, color: T.white }}>{init.name}</span>
                <span style={{ fontSize: 15, color: T.textMuted, marginLeft: "auto" }}>{init.timeline}</span>
              </div>
              <div style={{ fontSize: 16, color: T.textDim, lineHeight: 1.85, paddingLeft: 20 }}>{init.desc}</div>
            </div>;
          })}
        </div>}
      </Card>

      {/* Layer Assessment */}
      <Card style={{ marginBottom: 30 }}>
        <SectionLabel icon="◎" label="Full Assessment — Four Layers of Enterprise Value" />
        {assessmentBasis.length > 0 && <div style={{ marginBottom: 20, padding: "14px 18px", borderRadius: 8, background: T.bgSoft, border: `1px solid ${T.border}` }}>
          <div style={{ fontSize: 14, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: T.textMuted, marginBottom: 8 }}>Assessment Based On</div>
          <div style={{ fontSize: 16, color: T.textDim, lineHeight: 1.8 }}>{assessmentBasis.join(" · ")}</div>
        </div>}
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          {opp.layerRanking.map(layer => {
            const lc = layerColors[layer.key] || T.textMuted;
            const isActive = activeLayer === layer.key;
            return <div key={layer.key} style={{ cursor: "pointer", padding: "16px 18px", borderRadius: 8, background: isActive ? lc + "10" : "transparent", border: `1px solid ${isActive ? lc + "30" : "transparent"}`, transition: "all 0.15s" }}
              onClick={() => setActiveLayer(isActive ? null : layer.key)}>
              <ScoreBar score={layer.score} label={layer.label} color={lc} />
              <div style={{ fontSize: 16, color: lc, fontWeight: 600, marginTop: 10 }}>→ {layer.evOutcome}</div>
              {scan.scoringRationale?.[layer.key] && <div style={{ fontSize: 16, color: T.textDim, marginTop: 8, lineHeight: 1.85 }}>{scan.scoringRationale[layer.key]}</div>}
              {isActive && layer.diagnosticQ && <div style={{ marginTop: 14, padding: "14px 16px", borderRadius: 6, background: lc + "10", border: `1px solid ${lc}20` }}>
                <div style={{ fontSize: 14, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: lc, marginBottom: 6 }}>Ask This in the Meeting</div>
                <div style={{ fontSize: 17, color: T.white, fontStyle: "italic", lineHeight: 1.85 }}>{layer.diagnosticQ}</div>
              </div>}
            </div>;
          })}
        </div>
      </Card>

      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 12, padding: "22px 0", opacity: 0.5 }}>
        <img src={STRYVE_LOGO} alt="Stryve" style={{ width: 16, height: 16, objectFit: "contain", mixBlendMode: "lighten" }} />
        <span style={{ fontSize: 15, letterSpacing: "0.1em", textTransform: "uppercase", color: T.textMuted }}>Stryve · PE Marketing Value Model</span>
      </div>
    </div>
    {showReport && <ReportOverlay companyData={companyData} opportunity={opp} onClose={() => setShowReport(false)} />}
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap');
      @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
      @keyframes fadeUp { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
    `}</style>
  </div>;
}

// ── MAIN APP ──
const LOADING_PHASES = ["Building opportunity model...","Analyzing scan findings...","Generating personalized recommendations...","Linking evidence to actions...","Finalizing assessment..."];

export default function StryveValueModel() {
  const [view, setView] = useState("input");
  const [companyData, setCompanyData] = useState(null);
  const [financialInputs, setFinancialInputs] = useState(null);
  const [opportunity, setOpportunity] = useState(null);
  const [recommendations, setRecommendations] = useState(null);
  const [loadingPhase, setLoadingPhase] = useState(0);

  const handleScanComplete = (data) => { setCompanyData(data); setView("intake"); };

  const handleIntakeComplete = async (inputs) => {
    setFinancialInputs(inputs); setView("loading"); setLoadingPhase(0);
    const phaseTimer = setInterval(() => setLoadingPhase(p => Math.min(p + 1, LOADING_PHASES.length - 1)), 4000);
    const fullInputs = { ...inputs, buCount: companyData.buCount, acquisitionsPlanned: inputs.acquisitionsPlanned || 0 };
    const opp = buildOpportunity(fullInputs, companyData.scan?.scores || {});
    setOpportunity(opp);
    const recs = await runRecommendations(companyData.company, companyData.scan, { ...fullInputs, revenue: inputs.revenue, ebitdaMargin: inputs.ebitdaMargin, currentMultiple: inputs.currentMultiple, industry: inputs.industry }, companyData.uploadedFiles);
    clearInterval(phaseTimer); setRecommendations(recs); setView("dashboard");
  };

  return <div style={{ minHeight: "100vh", background: T.bg, color: T.text, fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif" }}>
    {view === "input" && <CompanyInputPage onComplete={handleScanComplete} />}
    {view === "intake" && companyData && <IntakePage companyData={companyData} onComplete={handleIntakeComplete} />}
    {view === "loading" && <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh" }}>
      <StryveHeader />
      <div style={{ textAlign: "center", marginTop: 56 }}>
        <div style={{ fontSize: 42, marginBottom: 18, animation: "pulse 1.5s infinite" }}>✦</div>
        <div style={{ fontSize: 20, color: T.white, fontWeight: 600 }}>{LOADING_PHASES[loadingPhase]}</div>
        <div style={{ fontSize: 16, color: T.textMuted, marginTop: 14 }}>This takes 15–30 seconds — generating recommendations specific to your company</div>
      </div>
    </div>}
    {view === "dashboard" && companyData && opportunity && <Dashboard companyData={companyData} financialInputs={financialInputs} opportunity={opportunity} recommendations={recommendations} />}
  </div>;
}
