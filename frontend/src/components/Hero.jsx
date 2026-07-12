import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles } from 'lucide-react'
import GradientBackground from './GradientBackground.jsx'
import TribunalCard from './TribunalCard.jsx'
import { useAuth } from '../context/AuthContext.jsx'

export default function Hero() {
  const { isAuthenticated } = useAuth()

  return (
    <section className="relative overflow-hidden pb-20 pt-16 sm:pt-24">
      <GradientBackground />
      <div className="relative mx-auto grid max-w-[88rem] grid-cols-1 gap-14 px-4 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:px-8">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5"
          >
            <Sparkles size={13} className="text-amber" />
            <span className="eyebrow">Three AI analysts, one verdict</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl font-medium leading-[1.08] tracking-tight text-paper sm:text-5xl lg:text-[3.4rem]"
          >
            Research any stock the way a{' '}
            <span className="italic text-amber">investment committee</span> would.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-lg text-base leading-relaxed text-mist sm:text-lg"
          >
            InvestIQ runs a Bull agent, a Bear agent, and a Judge on every ticker you search —
            then reconciles their debate into a single, explainable AI Score and memo.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Link to={isAuthenticated ? '/dashboard' : '/login'} className="btn-primary">
              Start free research
              <ArrowRight size={16} />
            </Link>
            <a href="#bull-bear" className="btn-ghost">
              See how it works
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 flex items-center gap-6 border-t border-white/[0.06] pt-6"
          >
            <div>
              <p className="font-mono text-xl font-semibold text-paper">6,400+</p>
              <p className="text-xs text-mist">Tickers covered</p>
            </div>
            <div className="h-8 w-px bg-white/10" />
            <div>
              <p className="font-mono text-xl font-semibold text-paper">3</p>
              <p className="text-xs text-mist">Agents per report</p>
            </div>
            <div className="h-8 w-px bg-white/10" />
            <div>
              <p className="font-mono text-xl font-semibold text-paper">&lt;60s</p>
              <p className="text-xs text-mist">Time to memo</p>
            </div>
          </motion.div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <TribunalCard />
        </div>
      </div>
    </section>
  )
}
