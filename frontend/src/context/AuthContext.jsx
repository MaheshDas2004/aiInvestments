import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import apiClient from '../api/client.js'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const refreshAuth = async () => {
    try {
      const response = await apiClient.get('/auth/me')
      setUser(response.data?.user || null)
    } catch {
      setUser(null)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    refreshAuth()
  }, [])

  const logout = async () => {
    await apiClient.post('/auth/logout')
    setUser(null)
  }

  const value = useMemo(
    () => ({
      user,
      isAuthenticated: Boolean(user),
      loading,
      refreshAuth,
      logout,
    }),
    [user, loading],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used inside AuthProvider')
  }
  return context
}
