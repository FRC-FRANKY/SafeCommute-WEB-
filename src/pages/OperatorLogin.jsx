import React, { useState } from 'react'
import { ArrowLeft, BusFront, HelpCircle, KeyRound, UserPlus } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import LoginCard from '../components/LoginCard.jsx'
import BusScene from '../components/BusScene.jsx'
import PrimaryButton from '../components/PrimaryButton.jsx'

const VIEW = {
  ACCOUNT_CHECK: 'account-check',
  NO_ACCOUNT: 'no-account',
  FORGOT_PASSWORD: 'forgot-password',
  LOGIN: 'login',
}

export default function OperatorLogin() {
  const navigate = useNavigate()
  const [view, setView] = useState(VIEW.ACCOUNT_CHECK)
  const [resetError, setResetError] = useState('')
  const [resetSuccess, setResetSuccess] = useState(false)
  const [supportForm, setSupportForm] = useState({ name: '', email: '', phone: '' })
  const [supportSubmitted, setSupportSubmitted] = useState(false)
  const [resetForm, setResetForm] = useState({ email: '', newPassword: '', confirmPassword: '' })

  const hasAccount = () => {
    setView(VIEW.FORGOT_PASSWORD)
    setResetError('')
    setResetSuccess(false)
    setResetForm({ email: '', newPassword: '', confirmPassword: '' })
  }

  const noAccount = () => {
    setView(VIEW.NO_ACCOUNT)
    setSupportForm({ name: '', email: '', phone: '' })
    setSupportSubmitted(false)
  }

  const goToLogin = () => {
    setView(VIEW.LOGIN)
    setResetError('')
    setResetSuccess(false)
  }

  const handleForgotPasswordSubmit = (e) => {
    e.preventDefault()
    setResetError('')
    const { email, newPassword, confirmPassword } = resetForm
    if (!email.trim() || !newPassword.trim() || !confirmPassword.trim()) {
      setResetError('Please fill in all required information.')
      return
    }
    if (newPassword !== confirmPassword) {
      setResetError('Passwords do not match. Please re-enter the required information.')
      return
    }
    if (newPassword.length < 6) {
      setResetError('Password must be at least 6 characters. Please re-enter.')
      return
    }
    const success = Math.random() > 0.3
    if (success) {
      setResetSuccess(true)
    } else {
      setResetError('Reset unsuccessful. Please re-enter the required information and try again.')
    }
  }

  const handleSupportSubmit = (e) => {
    e.preventDefault()
    if (!supportForm.name.trim() || !supportForm.email.trim() || !supportForm.phone.trim()) {
      return
    }
    setSupportSubmitted(true)
  }

  const handleBack = () => {
    if (view === VIEW.ACCOUNT_CHECK) navigate(-1)
    else if (view === VIEW.LOGIN) setView(VIEW.FORGOT_PASSWORD)
    else if (view === VIEW.FORGOT_PASSWORD) setView(VIEW.ACCOUNT_CHECK)
    else if (view === VIEW.NO_ACCOUNT) setView(VIEW.ACCOUNT_CHECK)
  }

  const renderCard = () => {
    if (view === VIEW.ACCOUNT_CHECK) {
      return (
        <section className="w-full max-w-md rounded-3xl bg-white/95 p-8 shadow-2xl shadow-sky-900/40 backdrop-blur">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-sky-600 text-white shadow-lg">
              <BusFront size={20} />
            </div>
            <div>
              <h1 className="text-lg font-semibold text-slate-900">Operator Access</h1>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-sky-600">
                SafeCommute+ Portal
              </p>
            </div>
          </div>
          <p className="mb-6 text-sm text-slate-600">
            Does the operator already have an account?
          </p>
          <div className="flex flex-col gap-3">
            <PrimaryButton onClick={hasAccount} className="w-full">
              Yes, I have an account
            </PrimaryButton>
            <PrimaryButton variant="secondary" onClick={noAccount} className="w-full">
              No, I need an account
            </PrimaryButton>
          </div>
        </section>
      )
    }

    if (view === VIEW.NO_ACCOUNT) {
      if (supportSubmitted) {
        return (
          <section className="w-full max-w-md rounded-3xl bg-white/95 p-8 shadow-2xl shadow-sky-900/40 backdrop-blur">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
              <UserPlus size={24} />
            </div>
            <h1 className="mb-2 text-lg font-semibold text-slate-900">Request Received</h1>
            <p className="mb-6 text-sm text-slate-600">
              Thank you. Contact support for account creation. When your account is ready, you may
              proceed to the login process.
            </p>
            <PrimaryButton onClick={goToLogin} className="w-full">
              Proceed to Login
            </PrimaryButton>
          </section>
        )
      }
      return (
        <section className="w-full max-w-md rounded-3xl bg-white/95 p-8 shadow-2xl shadow-sky-900/40 backdrop-blur">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-600">
              <HelpCircle size={20} />
            </div>
            <div>
              <h1 className="text-lg font-semibold text-slate-900">Contact Support</h1>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-sky-600">
                Account creation
              </p>
            </div>
          </div>
          <p className="mb-6 text-sm text-slate-600">
            You do not have an account. Contact support for account creation and fill in the required
            information below before proceeding to the login process.
          </p>
          <form onSubmit={handleSupportSubmit} className="space-y-4">
            <label className="block space-y-1 text-sm">
              <span className="font-medium text-slate-700">Full Name</span>
              <input
                type="text"
                required
                value={supportForm.name}
                onChange={(e) => setSupportForm((p) => ({ ...p, name: e.target.value }))}
                placeholder="Your full name..."
                className="w-full rounded-full border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-200"
              />
            </label>
            <label className="block space-y-1 text-sm">
              <span className="font-medium text-slate-700">Email Address</span>
              <input
                type="email"
                required
                value={supportForm.email}
                onChange={(e) => setSupportForm((p) => ({ ...p, email: e.target.value }))}
                placeholder="Your email..."
                className="w-full rounded-full border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-200"
              />
            </label>
            <label className="block space-y-1 text-sm">
              <span className="font-medium text-slate-700">Phone Number</span>
              <input
                type="tel"
                required
                value={supportForm.phone}
                onChange={(e) => setSupportForm((p) => ({ ...p, phone: e.target.value }))}
                placeholder="Your phone..."
                className="w-full rounded-full border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-200"
              />
            </label>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setView(VIEW.ACCOUNT_CHECK)}
                className="flex-1 rounded-full border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                Back
              </button>
              <PrimaryButton type="submit" className="flex-1">
                Submit Request
              </PrimaryButton>
            </div>
          </form>
        </section>
      )
    }

    if (view === VIEW.FORGOT_PASSWORD) {
      if (resetSuccess) {
        return (
          <section className="w-full max-w-md rounded-3xl bg-white/95 p-8 shadow-2xl shadow-sky-900/40 backdrop-blur">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
              <KeyRound size={24} />
            </div>
            <h1 className="mb-2 text-lg font-semibold text-slate-900">Password Reset Successful</h1>
            <p className="mb-6 text-sm text-slate-600">
              Your password has been reset. You may now sign in with your new password.
            </p>
            <PrimaryButton onClick={goToLogin} className="w-full">
              Continue to Login
            </PrimaryButton>
          </section>
        )
      }
      return (
        <section className="w-full max-w-md rounded-3xl bg-white/95 p-8 shadow-2xl shadow-sky-900/40 backdrop-blur">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-100 text-sky-600">
              <KeyRound size={20} />
            </div>
            <div>
              <h1 className="text-lg font-semibold text-slate-900">Reset Password</h1>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-sky-600">
                Provide the required information
              </p>
            </div>
          </div>
          <p className="mb-6 text-sm text-slate-600">
            Enter your email and new password. The system will verify the reset.
          </p>
          <form onSubmit={handleForgotPasswordSubmit} className="space-y-4">
            {resetError && (
              <div className="rounded-full bg-rose-50 px-4 py-2 text-xs font-medium text-rose-700">
                {resetError}
              </div>
            )}
            <label className="block space-y-1 text-sm">
              <span className="font-medium text-slate-700">Email Address</span>
              <input
                type="email"
                required
                value={resetForm.email}
                onChange={(e) => setResetForm((p) => ({ ...p, email: e.target.value }))}
                placeholder="Your registered email..."
                className="w-full rounded-full border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-200"
              />
            </label>
            <label className="block space-y-1 text-sm">
              <span className="font-medium text-slate-700">New Password</span>
              <input
                type="password"
                required
                minLength={6}
                value={resetForm.newPassword}
                onChange={(e) => setResetForm((p) => ({ ...p, newPassword: e.target.value }))}
                placeholder="At least 6 characters..."
                className="w-full rounded-full border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-200"
              />
            </label>
            <label className="block space-y-1 text-sm">
              <span className="font-medium text-slate-700">Confirm New Password</span>
              <input
                type="password"
                required
                value={resetForm.confirmPassword}
                onChange={(e) => setResetForm((p) => ({ ...p, confirmPassword: e.target.value }))}
                placeholder="Re-enter new password..."
                className="w-full rounded-full border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-200"
              />
            </label>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={goToLogin}
                className="flex-1 rounded-full border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                I remember my password
              </button>
              <PrimaryButton type="submit" className="flex-1">
                Reset Password
              </PrimaryButton>
            </div>
          </form>
        </section>
      )
    }

    return (
      <LoginCard
        title="Operator Login"
        subtitle="Enter your credentials to access the dashboard."
        icon={<BusFront size={20} />}
        onSubmit={() => navigate('/operator-dashboard')}
        onForgotPassword={() => {
          setView(VIEW.FORGOT_PASSWORD)
          setResetSuccess(false)
          setResetError('')
          setResetForm({ email: '', newPassword: '', confirmPassword: '' })
        }}
        onBack={handleBack}
      />
    )
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-sky-400 via-sky-500 to-sky-700 px-6">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,255,255,0.35),transparent_55%),radial-gradient(circle_at_85%_18%,rgba(255,255,255,0.3),transparent_55%)]" />

      <div className="relative z-10 flex w-full max-w-5xl flex-col items-center gap-6">
        <div className="flex w-full max-w-md items-center justify-between">
          <button
            type="button"
            onClick={handleBack}
            className="inline-flex items-center gap-1 rounded-full bg-sky-500/20 px-3 py-1 text-xs font-medium text-white backdrop-blur transition hover:bg-sky-500/35"
          >
            <ArrowLeft size={14} />
            Back
          </button>
        </div>

        {renderCard()}

        <BusScene />

        <p className="mt-2 text-xs font-medium uppercase tracking-[0.25em] text-sky-100">
          SafeCommute+ Operator Portal v1.0 • Secure Access Only
        </p>
      </div>
    </div>
  )
}
