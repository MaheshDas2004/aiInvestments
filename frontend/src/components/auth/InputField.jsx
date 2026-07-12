import { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'

/**
 * Reusable auth input. Pass `type="password"` to get a show/hide toggle automatically.
 */
export default function InputField({ label, type = 'text', icon: Icon, id, ...props }) {
  const [show, setShow] = useState(false)
  const isPassword = type === 'password'
  const resolvedType = isPassword ? (show ? 'text' : 'password') : type

  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-xs font-medium text-mist">
        {label}
      </label>
      <div className="relative">
        {Icon && (
          <Icon size={16} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-mist/50" />
        )}
        <input
          id={id}
          type={resolvedType}
          className={`input-terminal ${Icon ? 'pl-10' : ''} ${isPassword ? 'pr-10' : ''}`}
          {...props}
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShow((s) => !s)}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-mist/50 transition-colors hover:text-mist"
            aria-label={show ? 'Hide password' : 'Show password'}
          >
            {show ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        )}
      </div>
    </div>
  )
}
