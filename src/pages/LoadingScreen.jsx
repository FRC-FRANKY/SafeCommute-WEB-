import React from 'react'
import BusScene from '../components/BusScene.jsx'

export default function LoadingScreen() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-sky-400 via-sky-500 to-sky-700 px-6">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,255,255,0.35),transparent_55%),radial-gradient(circle_at_85%_18%,rgba(255,255,255,0.3),transparent_55%)]" />

      <div className="relative z-10 flex flex-col items-center gap-6 text-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-[0.35em] text-white uppercase">
          SafeCommute+ Portal
        </h1>

        <div
          aria-label="Loading"
          className="mt-4 h-12 w-12 animate-spin rounded-full border-4 border-white/40 border-t-white"
        />

        <BusScene />

        <p className="mt-4 text-xs font-medium uppercase tracking-[0.25em] text-sky-100">
          SafeCommute+ Portal v1.0 • Secure Access Only
        </p>
      </div>
    </div>
  )
}

