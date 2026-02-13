import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  ArrowLeft,
  Bell,
  Database,
  Download,
  HardDrive,
  LogOut,
  Search,
  Shield,
  UserCircle2,
  Wifi,
  Zap,
  Clock,
  Upload,
} from 'lucide-react'

function TopNav() {
  return (
    <header className="flex items-center justify-between rounded-3xl bg-white/95 px-6 py-4 shadow-xl shadow-sky-900/25">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-500 text-white shadow-md">
          <Shield size={22} />
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-900">System Administration</p>
          <p className="text-xs text-slate-500">SafeCommute+ Co.</p>
        </div>
      </div>

      <div className="flex min-w-[320px] max-w-md flex-1 items-center justify-center px-8">
        <div className="flex w-full items-center gap-2 rounded-full bg-slate-50 px-4 py-2 shadow-inner shadow-slate-200/60">
          <Search size={16} className="text-slate-400" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full border-none bg-transparent text-xs text-slate-700 outline-none placeholder:text-slate-400"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button
          type="button"
          className="relative rounded-full bg-slate-50 p-2 text-slate-500 shadow-sm hover:bg-slate-100"
        >
          <Bell size={18} />
          <span className="absolute right-1 top-1 h-1.5 w-1.5 rounded-full bg-rose-500" />
        </button>

        <div className="flex items-center gap-2 rounded-full bg-slate-50 px-3 py-1.5 shadow-sm">
          <UserCircle2 size={22} className="text-sky-500" />
          <div className="text-xs leading-tight">
            <p className="font-semibold text-slate-800">Admin User</p>
            <p className="text-[10px] text-slate-500">Operator</p>
          </div>
        </div>

        <button
          type="button"
          className="rounded-full bg-rose-50 p-2 text-rose-500 shadow-sm hover:bg-rose-100"
        >
          <LogOut size={18} />
        </button>
      </div>
    </header>
  )
}

const metricCards = [
  { label: 'Storage Used', value: '124.8 GB', sublabel: '75% capacity', accent: 'border-t-sky-500', icon: <HardDrive size={18} /> },
  { label: 'Active Connections', value: '1,248', sublabel: 'Normal', accent: 'border-t-emerald-500', icon: <Wifi size={18} /> },
  { label: 'Query Performance', value: '42ms', sublabel: 'Optimal', accent: 'border-t-indigo-500', icon: <Zap size={18} /> },
  { label: 'Last Backup', value: '2 hours', sublabel: 'Successful', accent: 'border-t-amber-500', icon: <Clock size={18} /> },
]

const recentBackups = [
  { name: 'Full System Backup', size: '24.8 GB', time: '2 hours ago', status: 'success' },
  { name: 'Incremental Backup', size: '2.1 GB', time: '6 hours ago', status: 'success' },
  { name: 'Full System Backup', size: '24.6 GB', time: '1 day ago', status: 'success' },
]

const storageDistribution = [
  { label: 'Trips', value: 48.2, unit: 'GB' },
  { label: 'Users', value: 32.4, unit: 'GB' },
  { label: 'Vehicles', value: 18.6, unit: 'GB' },
  { label: 'Alerts', value: 12.1, unit: 'GB' },
  { label: 'Logs', value: 13.5, unit: 'GB' },
]

const systemResources = [
  { label: 'CPU Usage', value: 42, tone: 'emerald' },
  { label: 'Memory Usage', value: 68, tone: 'amber' },
  { label: 'Disk I/O', value: 34, tone: 'slate' },
]

export default function DatabaseManagement() {
  const navigate = useNavigate()
  const [activeOpTab, setActiveOpTab] = useState('Backups')

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-600 via-slate-500 to-sky-700 px-6 py-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-5">
        <TopNav />

        <div className="rounded-2xl bg-slate-800/60 px-5 py-4">
          <button
            type="button"
            onClick={() => navigate('/admin-dashboard')}
            className="mb-3 inline-flex items-center gap-2 text-xs font-medium text-sky-200 hover:text-white"
          >
            <ArrowLeft size={16} />
            Back
          </button>
          <h1 className="text-lg font-bold text-white">Database Management</h1>
          <p className="mt-1 text-sm text-slate-300">Monitor database health and perform maintenance operations</p>
        </div>

        <section className="grid grid-cols-4 gap-4">
          {metricCards.map((card) => (
            <article
              key={card.label}
              className={`rounded-2xl border-t-4 bg-white/95 px-4 py-3 shadow-xl shadow-sky-900/20 ${card.accent}`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-slate-500">{card.label}</p>
                  <p className="mt-1 text-xl font-semibold text-slate-900">{card.value}</p>
                  <p className="mt-0.5 text-[11px] text-slate-500">{card.sublabel}</p>
                </div>
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 text-slate-600">
                  {card.icon}
                </div>
              </div>
            </article>
          ))}
        </section>

        <section className="grid gap-4 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          <div className="rounded-3xl bg-white/95 p-5 shadow-xl shadow-sky-900/20">
            <div className="mb-4 flex items-center gap-2">
              <Database size={18} className="text-sky-600" />
              <h2 className="text-sm font-semibold text-slate-900">Database Operations</h2>
            </div>

            <nav className="mb-4 flex gap-1 rounded-2xl bg-slate-50 p-1 text-xs">
              {['Backups', 'Maintenance', 'Configuration'].map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveOpTab(tab)}
                  className={`rounded-full px-3 py-1.5 font-medium transition ${
                    activeOpTab === tab ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>

            <div className="mb-4 flex gap-2">
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-4 py-2 text-xs font-medium text-white shadow-md transition hover:bg-sky-700"
              >
                <Download size={16} />
                Create Backup
              </button>
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-full border border-sky-200 px-4 py-2 text-xs font-medium text-sky-600 transition hover:bg-sky-50"
              >
                <Upload size={16} />
                Restore Backup
              </button>
            </div>

            <div>
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.1em] text-slate-500">Recent Backups</p>
              <div className="space-y-2">
                {recentBackups.map((b, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between gap-3 rounded-2xl bg-slate-50 px-4 py-3 text-xs transition hover:bg-slate-100"
                  >
                    <div>
                      <p className="font-medium text-slate-900">{b.name}</p>
                      <p className="text-[11px] text-slate-500">{b.size} • {b.time}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-700">
                        Success
                      </span>
                      <button
                        type="button"
                        className="rounded-full p-1.5 text-slate-500 hover:bg-sky-50 hover:text-sky-600"
                        title="Download"
                      >
                        <Download size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="rounded-3xl bg-white/95 p-5 shadow-xl shadow-sky-900/20">
              <h2 className="mb-4 text-sm font-semibold text-slate-900">Storage Distribution</h2>
              <div className="space-y-3">
                {storageDistribution.map((item) => (
                  <div key={item.label} className="space-y-1">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="font-medium text-slate-600">{item.label}</span>
                      <span className="text-slate-500">{item.value} {item.unit}</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
                      <div
                        className="h-full rounded-full bg-sky-500 transition"
                        style={{ width: `${Math.min((item.value / 50) * 100, 100)}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-white/95 p-5 shadow-xl shadow-sky-900/20">
              <h2 className="mb-4 text-sm font-semibold text-slate-900">System Resources</h2>
              <div className="space-y-3">
                {systemResources.map((r) => {
                  const barClass =
                    r.tone === 'emerald' ? 'bg-emerald-500' :
                    r.tone === 'amber' ? 'bg-amber-500' : 'bg-slate-400'
                  return (
                    <div key={r.label} className="space-y-1">
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="font-medium text-slate-600">{r.label}</span>
                        <span className="text-slate-500">{r.value}%</span>
                      </div>
                      <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
                        <div
                          className={`h-full rounded-full ${barClass} transition`}
                          style={{ width: `${r.value}%` }}
                        />
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
