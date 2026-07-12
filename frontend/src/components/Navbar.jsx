import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { LineChart } from 'lucide-react'
import { useAuth } from '../context/AuthContext.jsx'

export default function Navbar() {
  const { isAuthenticated, logout } = useAuth()

  const handleLogout = async () => {
    await logout()
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink-950/85 backdrop-blur-xl">
      <div className="mx-auto max-w-[88rem] px-4 sm:px-6 lg:px-8">
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between py-3.5"
        >
          <Link to="/" className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-amber/20 bg-amber/15 text-amber">
              <LineChart size={20} strokeWidth={2.25} />
            </span>
            <span className="font-display text-xl font-semibold tracking-tight text-paper">
              InvestIQ<span className="text-amber">.</span>
            </span>
          </Link>

          <div className="flex items-center gap-2 sm:gap-3">
            {isAuthenticated ? (
              <>
                <Link to="/dashboard" className="btn-ghost !px-3 !py-2 text-sm sm:!px-4">
                  Start search
                </Link>
                <button onClick={handleLogout} className="btn-primary !px-3 !py-2 text-sm sm:!px-4">
                  Log out
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="btn-ghost !px-3 !py-2 text-sm sm:!px-4">
                  Log in
                </Link>
                <Link to="/register" className="btn-ghost !px-3 !py-2 text-sm sm:!px-4">
                  Register
                </Link>
                <Link to="/login" className="btn-primary !px-3 !py-2 text-sm sm:!px-4">
                  Start search
                </Link>
              </>
            )}
          </div>
        </motion.nav>
      </div>
    </header>
  )
}
