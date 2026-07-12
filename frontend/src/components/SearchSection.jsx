import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Search, ArrowRight } from 'lucide-react'
import apiClient from '../api/client.js'

const suggestions = ['AAPL', 'TSLA', 'MSFT', 'AMZN', 'GOOGL']

export default function SearchSection() {
  const [value, setValue] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleAnalyze = async (e) => {
    e.preventDefault()
    if (!value.trim()) return

    setLoading(true)
    setError('')

    try {
      const response = await apiClient.post('/research', { companyName: value.trim() })
      const report = response.data?.data || null
      sessionStorage.setItem(
        'investiq-report',
        JSON.stringify({
          companyName: value.trim(),
          report,
        }),
      )
      navigate('/report', {
        state: {
          companyName: value.trim(),
          report,
        },
      })
    } catch (err) {
      setError(err.response?.data?.message || 'Unable to analyze right now.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="relative mx-auto max-w-[88rem] px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <span className="eyebrow">Terminal access</span>
        <h2 className="mt-3 font-display text-3xl font-medium tracking-tight text-paper sm:text-4xl">
          Type a ticker. Get a verdict.
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm text-mist sm:text-base">
          Search any public company to see its live AI Score, bull and bear cases, and a
          drafted investment memo.
        </p>
      </motion.div>

      <motion.form
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, delay: 0.15 }}
        onSubmit={handleAnalyze}
        className="glass-panel mx-auto mt-8 flex max-w-xl items-center gap-2 rounded-xl p-2 pl-4 shadow-card"
      >
        <Search size={18} className="flex-none text-mist" />
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
          placeholder="Search a company or ticker — e.g. NVDA"
          className="w-full bg-transparent py-2.5 text-sm text-paper placeholder:text-mist/60 outline-none"
        />
        <motion.button
          whileHover={{ x: 2 }}
          whileTap={{ scale: 0.96 }}
          type="submit"
          disabled={loading}
          className="btn-primary !py-2.5"
        >
          {loading ? 'Analyzing...' : 'Analyze'}
          <ArrowRight size={15} />
        </motion.button>
      </motion.form>
      {error ? <p className="mx-auto mt-4 max-w-xl px-1 text-center text-xs text-red-300">{error}</p> : null}

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-5 flex flex-wrap items-center justify-center gap-2"
      >
        <span className="text-xs text-mist/70">Trending:</span>
        {suggestions.map((s) => (
          <button
            key={s}
            onClick={() => setValue(s)}
            className="rounded-md border border-white/10 bg-white/[0.02] px-2.5 py-1 font-mono text-xs text-mist transition-colors hover:border-amber/30 hover:text-amber"
          >
            {s}
          </button>
        ))}
      </motion.div>
    </section>
  )
}
