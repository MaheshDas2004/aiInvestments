import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { LineChart, TrendingUp, TrendingDown, Scale } from 'lucide-react'
import GradientBackground from '../GradientBackground.jsx'

const tape = [
  { t: 'NVDA', v: '+2.4%', up: true },
  { t: 'AAPL', v: '+0.8%', up: true },
  { t: 'TSLA', v: '-1.2%', up: false },
  { t: 'MSFT', v: '+1.1%', up: true },
  { t: 'AMZN', v: '-0.4%', up: false },
  { t: 'GOOGL', v: '+0.6%', up: true },
]

export default function AuthLayout({ eyebrow, title, subtitle, children, footer }) {
  return (
    <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
      {/* Brand panel */}
      <div className="relative hidden overflow-hidden border-r border-white/[0.06] bg-ink-900 lg:block">
        <GradientBackground />
        <div className="relative flex h-full flex-col justify-between p-10 xl:p-14">
          <Link to="/" className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-amber/15 text-amber">
              <LineChart size={18} strokeWidth={2.25} />
            </span>
            <span className="font-display text-lg font-semibold tracking-tight text-paper">
              InvestIQ<span className="text-amber">.</span>
            </span>
          </Link>

          <div className="max-w-md">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-display text-3xl font-medium leading-tight tracking-tight text-paper xl:text-4xl"
            >
              Every ticker gets a fair hearing.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 text-sm leading-relaxed text-mist xl:text-base"
            >
              A bull, a bear, and a judge review the data before InvestIQ commits to a score —
              transparent by design.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 flex gap-3"
            >
              {[
                { icon: TrendingUp, label: 'Bull', color: 'text-bull' },
                { icon: TrendingDown, label: 'Bear', color: 'text-bear' },
                { icon: Scale, label: 'Judge', color: 'text-judge' },
              ].map((a) => (
                <div key={a.label} className="glass-panel flex flex-1 flex-col items-center gap-1.5 rounded-xl py-4">
                  <a.icon size={16} className={a.color} />
                  <span className="font-mono text-[10px] uppercase tracking-wide text-mist">{a.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ticker tape */}
          <div className="relative overflow-hidden rounded-lg border border-white/[0.06] bg-ink-950/50 py-3">
            <div className="animate-ticker flex w-max gap-8 whitespace-nowrap px-4 font-mono text-xs">
              {[...tape, ...tape].map((item, i) => (
                <span key={i} className="flex items-center gap-1.5">
                  <span className="text-mist">{item.t}</span>
                  <span className={item.up ? 'text-bull' : 'text-bear'}>{item.v}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Form panel */}
      <div className="flex items-center justify-center bg-ink-950 px-6 py-12 sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-sm"
        >
          <Link to="/" className="mb-8 flex items-center gap-2.5 lg:hidden">
            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-amber/15 text-amber">
              <LineChart size={18} strokeWidth={2.25} />
            </span>
            <span className="font-display text-lg font-semibold tracking-tight text-paper">InvestIQ.</span>
          </Link>

          <span className="eyebrow">{eyebrow}</span>
          <h1 className="mt-2 font-display text-2xl font-medium tracking-tight text-paper sm:text-3xl">
            {title}
          </h1>
          {subtitle && <p className="mt-2 text-sm text-mist">{subtitle}</p>}

          <div className="mt-8">{children}</div>

          {footer && <div className="mt-8 text-center text-sm text-mist">{footer}</div>}
        </motion.div>
      </div>
    </div>
  )
}
