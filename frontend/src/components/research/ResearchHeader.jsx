import { motion, animate } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'
import { Brain, Sparkles } from 'lucide-react'

function toVerdictLabel(recommendation) {
  if (!recommendation) return 'N/A'
  const normalized = recommendation.toLowerCase()
  if (normalized === 'invest') return 'BUY'
  return recommendation.toUpperCase()
}

function verdictTone(recommendation) {
  const verdict = toVerdictLabel(recommendation)
  if (verdict === 'BUY') return 'text-bull border-bull/35 bg-bull-dim/35'
  if (verdict === 'HOLD') return 'text-amber border-amber/35 bg-amber/10'
  if (verdict === 'PASS') return 'text-bear border-bear/35 bg-bear-dim/35'
  return 'text-mist border-white/15 bg-white/[0.04]'
}

export default function ResearchHeader({ companyName, recommendation, aiScore, confidence }) {
  const safeScore = Number.isFinite(aiScore) ? Math.max(0, Math.min(100, Math.round(aiScore))) : 0
  const safeConfidence = Number.isFinite(confidence) ? Math.max(0, Math.min(100, Math.round(confidence))) : 0
  const verdict = toVerdictLabel(recommendation)
  const [animatedScore, setAnimatedScore] = useState(0)

  useEffect(() => {
    const controls = animate(0, safeScore, {
      duration: 1.1,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setAnimatedScore(Math.round(latest)),
    })
    return () => controls.stop()
  }, [safeScore])

  const scoreTone = useMemo(() => {
    if (safeScore >= 70) return 'text-bull'
    if (safeScore >= 45) return 'text-amber'
    return 'text-bear'
  }, [safeScore])

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="glass-panel relative overflow-hidden rounded-2xl border border-white/[0.08] p-6 shadow-card"
    >
      <div className="pointer-events-none absolute -left-20 top-0 h-44 w-44 rounded-full bg-amber/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-44 w-44 rounded-full bg-judge/10 blur-3xl" />

      <div className="relative flex flex-wrap items-start justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-3 py-1">
            <Sparkles size={13} className="text-amber" />
            <span className="eyebrow">AI Investment Report</span>
          </div>
          <h3 className="mt-3 font-display text-3xl font-medium uppercase tracking-tight text-paper sm:text-4xl">
            {companyName || 'Unknown Company'}
          </h3>
          <p className="mt-3 text-xs uppercase tracking-[0.2em] text-mist/70">AI Verdict</p>
          <div className={`mt-2 inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-lg font-semibold ${verdictTone(recommendation)}`}>
            <Brain size={16} />
            {verdict}
          </div>
        </div>

        <div className="min-w-[220px] rounded-xl border border-white/10 bg-ink-950/40 p-4">
          <p className="text-xs uppercase tracking-[0.2em] text-mist/70">AI Score</p>
          <p className={`mt-1 font-mono text-3xl font-semibold ${scoreTone}`}>
            {animatedScore}
            <span className="text-lg text-mist">/100</span>
          </p>
          <div className="mt-3 h-2 overflow-hidden rounded-full bg-ink-950">
            <motion.div
              className="h-full rounded-full bg-amber"
              initial={{ width: 0 }}
              animate={{ width: `${safeScore}%` }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
          <p className="mt-3 text-xs uppercase tracking-[0.2em] text-mist/70">
            Confidence <span className="ml-1 text-paper">{safeConfidence}%</span>
          </p>
        </div>
      </div>
    </motion.section>
  )
}
