import { motion } from 'framer-motion'
import VerdictCard from './VerdictCard.jsx'

export default function DebateSection({ bull = {}, bear = {} }) {
  return (
    <section className="space-y-4">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h4 className="font-display text-2xl font-medium text-paper">AI Debate Desk</h4>
        <p className="mt-1 text-sm text-mist">Bull and Bear analysts present opposing views before final judgement.</p>
      </motion.div>

      <div className="grid gap-4 lg:grid-cols-2">
        <VerdictCard side="bull" recommendation={bull.recommendation} argumentsList={bull.arguments} />
        <VerdictCard side="bear" recommendation={bear.recommendation} argumentsList={bear.arguments} />
      </div>
    </section>
  )
}
