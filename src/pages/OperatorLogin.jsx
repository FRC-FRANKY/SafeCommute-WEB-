import React from 'react'
import { ArrowLeft, BusFront } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import LoginCard from '../components/LoginCard.jsx'
import BusScene from '../components/BusScene.jsx'

export default function OperatorLogin() {
  const navigate = useNavigate()

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-sky-400 via-sky-500 to-sky-700 px-6">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,255,255,0.35),transparent_55%),radial-gradient(circle_at_85%_18%,rgba(255,255,255,0.3),transparent_55%)]" />

      <div className="relative z-10 flex w-full max-w-5xl flex-col items-center gap-6">
        <div className="flex w-full max-w-md items-center justify-between">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-1 rounded-full bg-sky-500/20 px-3 py-1 text-xs font-medium text-white backdrop-blur transition hover:bg-sky-500/35"
          >
            <ArrowLeft size={14} />
            Back
          </button>
        </div>

        <LoginCard
          title="Operator Login"
          subtitle="Enter your credentials to access the dashboard."
          icon={<BusFront size={20} />}
          onSubmit={() => navigate('/operator-dashboard')}
          onForgotPassword={() => window.alert('Forgot password flow not implemented yet.')}
        />

        <BusScene />

        <p className="mt-2 text-xs font-medium uppercase tracking-[0.25em] text-sky-100">
          SafeCommute+ Operator Portal v1.0 • Secure Access Only
        </p>
      </div>
    </div>
  )
}

