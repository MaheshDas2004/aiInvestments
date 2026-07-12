import { motion } from 'framer-motion'
import { GitBranchPlus } from 'lucide-react'

export default function ReasoningTimeline({ steps = [] }) {
  return (
    <section className="space-y-4">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="flex items-center gap-2"
      >
        <GitBranchPlus size={17} className="text-amber" />
        <h4 className="font-display text-2xl font-medium text-paper">AI Decision Process</h4>
      </motion.div>

      <div className="glass-panel rounded-2xl border border-white/[0.08] p-5">
        <div className="space-y-4">
          {Array.isArray(steps) && steps.length > 0 ? (
            steps.map((step, idx) => (
              <motion.div
                key={`reason-${idx}`}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className="flex gap-3"
              >
                <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-md border border-amber/30 bg-amber/10 font-mono text-xs text-amber">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <p className="text-sm leading-relaxed text-mist">{step}</p>
              </motion.div>
            ))
          ) : (
            <p className="text-sm text-mist/70">No reasoning steps available.</p>
          )}
        </div>
      </div>
    </section>
  )
}
