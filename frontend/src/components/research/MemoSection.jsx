import { motion } from 'framer-motion'
import { CheckCircle2, AlertTriangle, FileText, Compass } from 'lucide-react'

function BulletList({ title, items = [], icon: Icon, tone }) {
  return (
    <div className="glass-panel rounded-2xl border border-white/[0.08] p-5">
      <h5 className="text-sm font-semibold text-paper">{title}</h5>
      <ul className="mt-3 space-y-2">
        {Array.isArray(items) && items.length > 0 ? (
          items.map((item, idx) => (
            <li key={`${title}-${idx}`} className="flex items-start gap-2 text-sm text-mist">
              <Icon size={15} className={`mt-0.5 flex-none ${tone}`} />
              <span>{item}</span>
            </li>
          ))
        ) : (
          <li className="text-sm text-mist/70">No entries available.</li>
        )}
      </ul>
    </div>
  )
}

export default function MemoSection({ memo = {} }) {
  return (
    <section className="space-y-4">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
      >
        <h4 className="font-display text-2xl font-medium text-paper">Investment Memo</h4>
        <p className="mt-1 text-sm text-mist">Professional analyst-style summary generated from AI debate outputs.</p>
      </motion.div>

      <div className="grid gap-4 lg:grid-cols-2">
        <motion.article
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="glass-panel rounded-2xl border border-white/[0.08] p-5"
        >
          <div className="flex items-center gap-2">
            <FileText size={16} className="text-amber" />
            <h5 className="text-sm font-semibold text-paper">Investment Thesis</h5>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-mist">{memo.investmentThesis || 'No thesis available.'}</p>
        </motion.article>

        <motion.article
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="glass-panel rounded-2xl border border-white/[0.08] p-5"
        >
          <div className="flex items-center gap-2">
            <Compass size={16} className="text-judge" />
            <h5 className="text-sm font-semibold text-paper">Long-Term Outlook</h5>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-mist">{memo.longTermOutlook || 'No outlook available.'}</p>
        </motion.article>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <BulletList title="Strengths" items={memo.strengths} icon={CheckCircle2} tone="text-bull" />
        <BulletList title="Risks" items={memo.risks} icon={AlertTriangle} tone="text-bear" />
      </div>
    </section>
  )
}
