import { motion } from 'framer-motion'

/**
 * Instrument-style radial gauge for the AI Score (0-100).
 * Renders as a 270deg dial with tick marks, echoing a physical meter.
 */
export default function GaugeMeter({ score = 82, size = 148, label = 'AI SCORE' }) {
  const stroke = 8
  const radius = (size - stroke) / 2
  const circumference = 2 * Math.PI * radius
  const arcFraction = 0.75 // 270 of 360 degrees
  const arcLength = circumference * arcFraction
  const filled = (score / 100) * arcLength

  const rotation = -225 // start angle so the open gap sits at the bottom

  const color = score >= 70 ? '#34D399' : score >= 45 ? '#E8A33D' : '#F0575F'

  const ticks = Array.from({ length: 10 })

  return (
    <div className="relative flex flex-col items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-0">
        <g transform={`rotate(${rotation} ${size / 2} ${size / 2})`}>
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="#1B212C"
            strokeWidth={stroke}
            strokeDasharray={`${arcLength} ${circumference}`}
            strokeLinecap="round"
          />
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={`${arcLength} ${circumference}`}
            initial={{ strokeDashoffset: arcLength }}
            animate={{ strokeDashoffset: arcLength - filled }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            style={{ filter: `drop-shadow(0 0 6px ${color}80)` }}
          />
        </g>
        {ticks.map((_, i) => {
          const angle = (rotation + (i / (ticks.length - 1)) * 270) * (Math.PI / 180)
          const cx = size / 2
          const cy = size / 2
          const r1 = radius - stroke / 2 - 2
          const r2 = radius - stroke / 2 - 6
          const x1 = cx + r1 * Math.cos(angle)
          const y1 = cy + r1 * Math.sin(angle)
          const x2 = cx + r2 * Math.cos(angle)
          const y2 = cy + r2 * Math.sin(angle)
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#3A4457" strokeWidth={1} />
        })}
      </svg>
      <div className="absolute flex flex-col items-center">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="font-mono text-3xl font-semibold text-paper"
        >
          {score}
        </motion.span>
        <span className="eyebrow mt-1">{label}</span>
      </div>
    </div>
  )
}
