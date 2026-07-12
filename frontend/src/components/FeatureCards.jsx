import { motion } from 'framer-motion'
import { Swords, FileText, Gauge, ShieldAlert } from 'lucide-react'

const features = [
  {
    id: 'bull-bear',
    code: 'BVB',
    icon: Swords,
    title: 'Bull vs Bear Analysis',
    desc: 'Two agents argue opposite sides of every thesis with sourced evidence, so you see the strongest case for and against before you decide.',
    accent: 'text-bull',
    ring: 'group-hover:border-bull/30',
  },
  {
    id: 'memo',
    code: 'MEMO',
    icon: FileText,
    title: 'Investment Memo',
    desc: 'A drafted, committee-ready memo with thesis, catalysts, and risks — structured the way analysts actually write them.',
    accent: 'text-judge',
    ring: 'group-hover:border-judge/30',
  },
  {
    id: 'score',
    code: 'SCORE',
    icon: Gauge,
    title: 'AI Score Breakdown',
    desc: 'Every score traces back to its inputs: growth, moat, valuation, and macro sensitivity, each weighted and shown in the open.',
    accent: 'text-amber',
    ring: 'group-hover:border-amber/30',
  },
  {
    id: 'risk',
    code: 'RISK',
    icon: ShieldAlert,
    title: 'Risk Analysis',
    desc: 'Concentration, leverage, and regulatory exposure flagged automatically, with severity ranked against sector peers.',
    accent: 'text-bear',
    ring: 'group-hover:border-bear/30',
  },
]

export default function FeatureCards() {
  return (
    <section className="mx-auto max-w-[88rem] px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-xl text-center"
      >
        <span className="eyebrow">What's inside a report</span>
        <h2 className="mt-3 font-display text-3xl font-medium tracking-tight text-paper sm:text-4xl">
          Four instruments, one panel
        </h2>
      </motion.div>

      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {features.map((f, i) => (
          <motion.div
            key={f.id}
            id={f.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -3 }}
            className={`group glass-panel relative overflow-hidden rounded-2xl border border-white/[0.06] p-6 transition-colors duration-300 ${f.ring} sm:p-7`}
          >
            <div className="flex items-start justify-between">
              <span className={`flex h-11 w-11 items-center justify-center rounded-xl bg-ink-950/60 ${f.accent}`}>
                <f.icon size={20} />
              </span>
              <span className="font-mono text-[11px] tracking-[0.15em] text-mist/50">{f.code}</span>
            </div>
            <h3 className="mt-5 font-display text-xl font-medium text-paper">{f.title}</h3>
            <p className="mt-2.5 text-sm leading-relaxed text-mist">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
