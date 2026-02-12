import React from 'react'
import { useNavigate } from 'react-router-dom'
import { BusFront, Shield } from 'lucide-react'
import PrimaryButton from '../components/PrimaryButton.jsx'
import BusScene from '../components/BusScene.jsx'

function AccessCard({ title, description, bullets, icon, variant, onClick }) {
  const isSecondary = variant === 'secondary'

  return (
    <article className="flex flex-col gap-3 rounded-3xl bg-white/95 p-7 shadow-2xl shadow-sky-900/35 backdrop-blur-sm transition hover:-translate-y-1.5 hover:shadow-3xl">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-sky-600 text-white shadow-md">
          {icon}
        </div>
        <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
      </div>
      <p className="text-sm text-slate-600">{description}</p>
      <ul className="mt-1 list-disc space-y-1 pl-5 text-sm text-slate-700">
        {bullets.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <PrimaryButton
        variant={isSecondary ? 'secondary' : 'primary'}
        className="mt-3 self-start px-6"
        onClick={onClick}
      >
        Access Dashboard
      </PrimaryButton>
    </article>
  )
}

export default function LandingPage() {
  const navigate = useNavigate()

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-sky-400 via-sky-500 to-sky-700 px-6">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,255,255,0.35),transparent_55%),radial-gradient(circle_at_85%_18%,rgba(255,255,255,0.3),transparent_55%)]" />

      <div className="relative z-10 flex w-full max-w-6xl flex-col items-center gap-8 text-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-[0.35em] text-white uppercase">
          SafeCommute+ Portal
        </h1>

        <section className="grid w-full gap-6 md:grid-cols-2">
          <AccessCard
            title="Operator Access"
            description="Manage transport operations, routes, fleet, and real‑time safety events."
            bullets={[
              'Fleet & driver oversight',
              'Route and schedule control',
              'Incident and safety logs',
              'Operational insights',
            ]}
            icon={<BusFront size={22} />}
            onClick={() => navigate('/operator-login')}
          />

          <AccessCard
            title="System Administration"
            description="Configure backend systems, devices, and security policies for the network."
            bullets={[
              'System configuration',
              'Device & terminal management',
              'Security & access policies',
              'User and role management',
            ]}
            icon={<Shield size={22} />}
            variant="secondary"
            onClick={() => navigate('/admin-login')}
          />
        </section>

        <BusScene />

        <p className="mt-2 text-xs font-medium uppercase tracking-[0.25em] text-sky-100">
          SafeCommute+ Operator Portal v1.0 • Secure Access Only
        </p>
      </div>
    </div>
  )
}

