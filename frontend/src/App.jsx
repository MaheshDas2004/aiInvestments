import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Landing from './pages/Landing.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Report from './pages/Report.jsx'
import { useAuth } from './context/AuthContext.jsx'

const pageTransition = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
  transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
}

function PageWrapper({ children }) {
  return (
    <motion.div
      initial={pageTransition.initial}
      animate={pageTransition.animate}
      exit={pageTransition.exit}
      transition={pageTransition.transition}
    >
      {children}
    </motion.div>
  )
}

function ProtectedRoute({ children }) {
  const { isAuthenticated, loading } = useAuth()

  if (loading) {
    return null
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  return children
}

export default function App() {
  const location = useLocation()
  const { isAuthenticated, loading } = useAuth()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Landing /></PageWrapper>} />
        <Route
          path="/login"
          element={
            <PageWrapper>
              {loading ? null : isAuthenticated ? <Navigate to="/dashboard" replace /> : <Login />}
            </PageWrapper>
          }
        />
        <Route path="/register" element={<PageWrapper><Register /></PageWrapper>} />
        <Route path="/report" element={<PageWrapper><Report /></PageWrapper>} />
        <Route
          path="/dashboard"
          element={
            <PageWrapper>
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            </PageWrapper>
          }
        />
      </Routes>
    </AnimatePresence>
  )
}
