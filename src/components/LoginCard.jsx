import React, { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'
import PrimaryButton from './PrimaryButton.jsx'

export default function LoginCard({
  title,
  subtitle,
  icon,
  onSubmit,
  buttonLabel = 'Sign In',
  onForgotPassword,
  onBack,
}) {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <section className="w-full max-w-md rounded-3xl bg-white/95 p-8 shadow-2xl shadow-sky-900/40 backdrop-blur">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-sky-600 text-white shadow-lg">
          {icon}
        </div>
        <div>
          <h1 className="text-lg font-semibold text-slate-900">{title}</h1>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-sky-600">
            SafeCommute+ Portal
          </p>
        </div>
      </div>

      <p className="mb-6 text-sm text-slate-600">{subtitle}</p>

      <form
        className="space-y-4"
        onSubmit={(event) => {
          event.preventDefault()
          if (onSubmit) onSubmit()
        }}
      >
        <label className="block space-y-1 text-sm">
          <span className="font-medium text-slate-700">Email Address</span>
          <input
            type="email"
            required
            placeholder="Type in your email..."
            className="w-full rounded-full border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-200"
          />
        </label>

        <label className="block space-y-1 text-sm">
          <span className="font-medium text-slate-700">Password</span>
          <div className="flex items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 outline-none transition focus-within:border-sky-500 focus-within:bg-white focus-within:ring-2 focus-within:ring-sky-200">
            <input
              type={showPassword ? 'text' : 'password'}
              required
              placeholder="Type in your password..."
              className="mr-2 w-full border-none bg-transparent text-sm text-slate-900 outline-none"
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="text-slate-400 hover:text-slate-600"
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </label>

        <PrimaryButton className="mt-2 w-full" type="submit">
          {buttonLabel}
        </PrimaryButton>
      </form>

      <div className="mt-4 flex flex-col items-center gap-2">
        {onForgotPassword && (
          <button
            type="button"
            onClick={onForgotPassword}
            className="block w-full text-center text-xs font-medium text-sky-700 underline underline-offset-2 hover:text-sky-800"
          >
            Forgot Password?
          </button>
        )}
        {onBack && (
          <button
            type="button"
            onClick={onBack}
            className="text-xs font-medium text-slate-500 hover:text-slate-700"
          >
            ← Back
          </button>
        )}
      </div>
    </section>
  )
}

