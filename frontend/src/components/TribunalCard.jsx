import { motion } from 'framer-motion'
import { TrendingUp, TrendingDown, Scale, ArrowUpRight } from 'lucide-react'
import GaugeMeter from './ui/GaugeMeter.jsx'

const panel = [
  {
    key: 'bull',
    role: 'Bull',
    icon: TrendingUp,
    color: 'text-bull',
    bg: 'bg-bull-dim/40',
    border: 'border-bull/20',
    confidence: 78,
    take: 'Margin expansion and recurring revenue mix support re-rating above sector average.',
  },
  {
    key: 'bear',
    role: 'Bear',
    icon: TrendingDown,
    color: 'text-bear',
    bg: 'bg-bear-dim/40',
    border: 'border-bear/20',
    confidence: 41,
    take: 'Customer concentration and slowing unit growth raise downside risk into FY27.',
  },
  {
    key: 'judge',
    role: 'Judge',
    icon: Scale,
    color: 'text-judge',
    bg: 'bg-judge-dim/40',
    border: 'border-judge/20',
    confidence: 82,
    take: 'Bull case weighted higher: durable moat outweighs near-term concentration risk.',
  },
]

export default function TribunalCard({ ticker = 'NVDA', company = 'NVIDIA Corp.', score = 82 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, rotate: -1 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className="glass-panel relative w-full max-w-md overflow-hidden rounded-2xl p-5 shadow-card sm:p-6"
    >
      {/* header */}
      <div className="flex items-start justify-between border-b border-white/[0.06] pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-amber">${ticker}</span>
            <span className="eyebrow">Live research</span>
          </div>
          <h3 className="mt-1 font-display text-xl font-medium text-paper">{company}</h3>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.4 }}
          className="flex items-center gap-1 rounded-full border border-bull/30 bg-bull-dim/40 px-3 py-1 text-xs font-semibold text-bull"
        >
          <ArrowUpRight size={13} />
          Strong Buy
        </motion.div>
      </div>

      {/* gauge + summary */}
      <div className="flex items-center gap-5 py-5">
        <GaugeMeter score={score} size={128} />
        <div className="flex-1 space-y-2">
          <p className="text-sm leading-relaxed text-mist">
            Composite of growth, moat durability, and macro sensitivity, reconciled across
            three independent research agents.
          </p>
          <div className="flex gap-2 pt-1">
            {['Growth', 'Moat', 'Macro'].map((tag) => (
              <span key={tag} className="rounded-md border border-white/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-mist">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* tribunal rows */}
      <div className="space-y-2 border-t border-white/[0.06] pt-4">
        {panel.map((p, i) => (
          <motion.div
            key={p.key}
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.1 + i * 0.15, duration: 0.5 }}
            className={`flex gap-3 rounded-lg border ${p.border} ${p.bg} p-3`}
          >
            <span className={`mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-md bg-ink-950/40 ${p.color}`}>
              <p.icon size={14} />
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between">
                <span className={`font-mono text-[11px] font-semibold uppercase tracking-wide ${p.color}`}>{p.role}</span>
                <span className="font-mono text-[11px] text-mist">{p.confidence}%</span>
              </div>
              <p className="mt-0.5 truncate text-xs leading-relaxed text-mist/90 sm:whitespace-normal">{p.take}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
