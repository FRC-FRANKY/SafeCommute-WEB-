import React from 'react'
import clsx from 'clsx'

export default function PrimaryButton({ variant = 'primary', className = '', children, ...props }) {
  const base =
    'inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-medium transition ' +
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-sky-500'

  const styles =
    variant === 'secondary'
      ? 'bg-slate-900 text-slate-50 hover:bg-slate-950 shadow-lg shadow-slate-900/40 focus-visible:ring-slate-300'
      : 'bg-sky-600 text-white hover:bg-sky-700 shadow-lg shadow-sky-900/40 focus-visible:ring-sky-200'

  return (
    <button type="button" className={clsx(base, styles, className)} {...props}>
      {children}
    </button>
  )
}

