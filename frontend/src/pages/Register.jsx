import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Lock, User, ArrowRight } from 'lucide-react'
import AuthLayout from '../components/auth/AuthLayout.jsx'
import InputField from '../components/auth/InputField.jsx'
import apiClient from '../api/client.js'

export default function Register() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' })
  const [acceptedTerms, setAcceptedTerms] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }))
    setError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!acceptedTerms) {
      setError('Please accept Terms of Service and Privacy Policy.')
      return
    }

    setLoading(true)
    setError('')
    try {
      await apiClient.post('/auth/register', formData)
      navigate('/login')
    } catch (err) {
      setError(err.response?.data?.error || err.response?.data?.message || 'Unable to register right now.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <AuthLayout
      eyebrow="Get started"
      title="Create your research desk"
      subtitle="Free for your first 10 tickers. No card required."
      footer={
        <>
          Already have an account?{' '}
          <Link to="/login" className="font-medium text-amber hover:text-amber-light">
            Log in
          </Link>
        </>
      }
    >
      <form className="space-y-5" onSubmit={handleSubmit}>
        <InputField
          id="name"
          label="Full name"
          type="text"
          icon={User}
          placeholder="Jordan Lee"
          autoComplete="name"
          value={formData.name}
          onChange={handleChange('name')}
          required
        />
        <InputField
          id="email"
          label="Work email"
          type="email"
          icon={Mail}
          placeholder="you@fund.com"
          autoComplete="email"
          value={formData.email}
          onChange={handleChange('email')}
          required
        />
        <InputField
          id="password"
          label="Password"
          type="password"
          icon={Lock}
          placeholder="At least 8 characters"
          autoComplete="new-password"
          value={formData.password}
          onChange={handleChange('password')}
          required
        />

        <label className="flex items-start gap-2 text-xs text-mist">
          <input
            type="checkbox"
            className="mt-0.5 h-3.5 w-3.5 rounded border-white/20 bg-ink-950 accent-amber"
            checked={acceptedTerms}
            onChange={(e) => setAcceptedTerms(e.target.checked)}
          />
          <span>
            I agree to the{' '}
            <a href="#" className="text-amber hover:text-amber-light">Terms of Service</a> and{' '}
            <a href="#" className="text-amber hover:text-amber-light">Privacy Policy</a>.
          </span>
        </label>

        <motion.button
          whileHover={{ y: -1 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={loading}
          className="btn-primary w-full"
        >
          {loading ? 'Creating account...' : 'Create account'}
          <ArrowRight size={16} />
        </motion.button>
        {error ? <p className="text-xs text-red-300">{error}</p> : null}
      </form>
    </AuthLayout>
  )
}
