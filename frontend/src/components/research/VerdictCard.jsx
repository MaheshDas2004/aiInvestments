import { motion } from 'framer-motion'
import { CircleCheckBig, ShieldAlert, TrendingUp, TrendingDown } from 'lucide-react'

function toVerdictLabel(recommendation) {
  if (!recommendation) return 'N/A'
  const normalized = recommendation.toLowerCase()
  if (normalized === 'invest') return 'BUY'
  return recommendation.toUpperCase()
}

export default function VerdictCard({ side, recommendation, argumentsList = [] }) {
  const isBull = side === 'bull'
  const badgeTone = isBull
    ? 'bg-bull-dim/35 border-bull/30 text-bull'
    : 'bg-bear-dim/35 border-bear/30 text-bear'

  return (
    <motion.article
      initial={{ opacity: 0, x: isBull ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -2 }}
      className="glass-panel rounded-2xl border border-white/[0.08] p-5"
    >
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className={`flex h-8 w-8 items-center justify-center rounded-lg border ${badgeTone}`}>
            {isBull ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
          </span>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-mist/70">
              {isBull ? 'Bull Analyst' : 'Bear Analyst'}
            </p>
            <p className="text-sm font-semibold text-paper">{toVerdictLabel(recommendation)}</p>
          </div>
        </div>
        <span className={`rounded-full border px-2 py-1 text-xs font-semibold ${badgeTone}`}>
          {toVerdictLabel(recommendation)}
        </span>
      </div>

      <ul className="space-y-2">
        {Array.isArray(argumentsList) && argumentsList.length > 0 ? (
          argumentsList.map((item, idx) => (
            <li key={`${side}-${idx}`} className="flex items-start gap-2 text-sm leading-relaxed text-mist">
              {isBull ? (
                <CircleCheckBig size={15} className="mt-0.5 flex-none text-bull" />
              ) : (
                <ShieldAlert size={15} className="mt-0.5 flex-none text-bear" />
              )}
              <span>{item}</span>
            </li>
          ))
        ) : (
          <li className="text-sm text-mist/70">No arguments available.</li>
        )}
      </ul>
    </motion.article>
  )
}
