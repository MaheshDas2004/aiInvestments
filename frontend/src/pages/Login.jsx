import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Lock, ArrowRight } from 'lucide-react'
import AuthLayout from '../components/auth/AuthLayout.jsx'
import InputField from '../components/auth/InputField.jsx'
import apiClient from '../api/client.js'
import { useAuth } from '../context/AuthContext.jsx'

export default function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { refreshAuth } = useAuth()

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }))
    setError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      await apiClient.post('/auth/login', formData)
      await refreshAuth()
      navigate('/dashboard')
    } catch (err) {
      setError(err.response?.data?.message || 'Unable to login right now.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <AuthLayout
      eyebrow="Welcome back"
      title="Log in to your terminal"
      subtitle="Pick up where your last research session left off."
      footer={
        <>
          New to InvestIQ?{' '}
          <Link to="/register" className="font-medium text-amber hover:text-amber-light">
            Create an account
          </Link>
        </>
      }
    >
      <form className="space-y-5" onSubmit={handleSubmit}>
        <InputField
          id="email"
          label="Email address"
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
          placeholder="••••••••"
          autoComplete="current-password"
          value={formData.password}
          onChange={handleChange('password')}
          required
        />

        <motion.button
          whileHover={{ y: -1 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={loading}
          className="btn-primary w-full"
        >
          {loading ? 'Logging in...' : 'Log in'}
          <ArrowRight size={16} />
        </motion.button>
        {error ? <p className="text-xs text-red-300">{error}</p> : null}
      </form>
    </AuthLayout>
  )
}
