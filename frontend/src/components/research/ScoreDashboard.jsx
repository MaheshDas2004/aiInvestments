import { motion } from "framer-motion";

function scoreStatus(value) {
  if (value >= 75) return "Excellent";
  if (value >= 60) return "Good";
  if (value >= 40) return "Moderate";
  return "Weak";
}

function ScoreDial({ label, value = 0, explanation }) {
  const safe = Number.isFinite(value)
    ? Math.max(0, Math.min(100, Math.round(value)))
    : 0;

  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (safe / 100) * circumference;

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -2 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className="glass-panel rounded-2xl border border-white/[0.08] p-4"
    >
      <p className="text-xs uppercase tracking-[0.18em] text-mist/70">
        {label}
      </p>

      <div className="mt-3 flex items-center gap-4">
        <div className="relative h-24 w-24 flex-none">
          <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
            <circle
              cx="50"
              cy="50"
              r={radius}
              className="fill-none stroke-ink-950"
              strokeWidth="8"
            />

            <motion.circle
              cx="50"
              cy="50"
              r={radius}
              className="fill-none stroke-amber"
              strokeLinecap="round"
              strokeWidth="8"
              strokeDasharray={circumference}
              initial={{ strokeDashoffset: circumference }}
              whileInView={{ strokeDashoffset: offset }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
            />
          </svg>

          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-mono text-xl font-semibold text-paper">
              {safe}
            </span>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold text-paper">
            {scoreStatus(safe)}
          </p>

          <p className="mt-1 text-xs leading-relaxed text-mist">
            {explanation || "No explanation available."}
          </p>
        </div>
      </div>
    </motion.article>
  );
}

export default function ScoreDashboard({ scores = {} }) {
  const explanations = scores.explanation || [];

  return (
    <section className="space-y-4">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
      >
        <h4 className="font-display text-2xl font-medium text-paper">
          Score Breakdown Dashboard
        </h4>

        <p className="mt-1 text-sm text-mist">
          Quantified AI scoring across core investment dimensions.
        </p>
      </motion.div>

      <div className="grid gap-4 sm:grid-cols-2">
        <ScoreDial
          label="Financial Health"
          value={scores.financialHealth}
          explanation={explanations[0]}
        />

        <ScoreDial
          label="Valuation"
          value={scores.valuation}
          explanation={explanations[1]}
        />

        <ScoreDial
          label="Growth Potential"
          value={scores.growthPotential}
          explanation={explanations[2]}
        />

        <ScoreDial
          label="Risk Level"
          value={scores.riskLevel}
          explanation={explanations[3]}
        />
      </div>
    </section>
  );
}