import { motion } from 'framer-motion'

/**
 * Reusable button. variant: 'primary' | 'ghost'
 */
export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const base = variant === 'primary' ? 'btn-primary' : 'btn-ghost'
  return (
    <motion.button
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.98 }}
      className={`${base} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  )
}
