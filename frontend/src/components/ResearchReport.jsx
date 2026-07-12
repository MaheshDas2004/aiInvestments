import { motion } from 'framer-motion'
import ResearchHeader from './research/ResearchHeader.jsx'
import DebateSection from './research/DebateSection.jsx'
import ScoreDashboard from './research/ScoreDashboard.jsx'
import MemoSection from './research/MemoSection.jsx'
import ReasoningTimeline from './research/ReasoningTimeline.jsx'

export default function ResearchReport({ data, companyName }) {
  if (!data) return null

  const bull = data.bull || {}
  const bear = data.bear || {}
  const judge = data.judge || {}
  const memo = data.memo || {}
  return (
    <section className="print-surface relative mx-auto mt-10 max-w-[88rem] space-y-8 overflow-hidden rounded-3xl border border-white/[0.08] bg-ink-900/35 p-5 shadow-card sm:p-7">
      <div className="pointer-events-none absolute left-10 top-16 h-40 w-40 rounded-full bg-amber/10 blur-3xl" />
      <div className="pointer-events-none absolute right-10 top-52 h-44 w-44 rounded-full bg-judge/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-8 left-1/2 h-36 w-36 -translate-x-1/2 rounded-full bg-bull/10 blur-3xl" />

      <motion.div
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.08,
            },
          },
        }}
        className="relative space-y-8"
      >
        <ResearchHeader
          companyName={companyName}
          recommendation={judge.recommendation || memo.recommendation}
          aiScore={judge.aiScore}
          confidence={judge.confidence}
        />
        <DebateSection bull={bull} bear={bear} />
        <ScoreDashboard scores={judge.scores} />
        <MemoSection memo={memo} />
        <ReasoningTimeline steps={judge.reasoning} />
      </motion.div>
    </section>
  )
}
