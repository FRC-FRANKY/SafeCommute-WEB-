import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Activity,
  Bell,
  Database,
  FileText,
  LogOut,
  Search,
  Server,
  Settings,
  Shield,
  UserCircle2,
  Users,
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
            placeholder="Search systems, users, or logs..."
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
          <span className="absolute right-1 top-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
        </button>

        <div className="flex items-center gap-2 rounded-full bg-slate-50 px-3 py-1.5 shadow-sm">
          <UserCircle2 size={22} className="text-sky-500" />
          <div className="text-xs leading-tight">
            <p className="font-semibold text-slate-800">Admin User</p>
            <p className="text-[10px] text-slate-500">Super Admin</p>
          </div>
        </div>

        <button
          type="button"
          className="rounded-full bg-slate-50 p-2 text-slate-500 shadow-sm hover:bg-slate-100"
        >
          <Settings size={18} />
        </button>

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

function KpiCard({ label, value, tone }) {
  const toneClasses = {
    blue: 'from-sky-50 to-sky-100 text-sky-800',
    green: 'from-emerald-50 to-emerald-100 text-emerald-800',
    violet: 'from-indigo-50 to-indigo-100 text-indigo-800',
    amber: 'from-amber-50 to-amber-100 text-amber-800',
  }[tone]

  return (
    <article className={`rounded-2xl bg-gradient-to-br ${toneClasses} px-4 py-3 shadow-md`}>
      <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-slate-500">{label}</p>
      <p className="mt-1 text-xl font-semibold">{value}</p>
    </article>
  )
}

function QuickActionRow({ onManageCommuters, onOperators, onDatabase }) {
  const actions = [
    { label: 'Settings', icon: <Settings size={16} />, onClick: () => {} },
    { label: 'Manage Commuters', icon: <Users size={16} />, onClick: onManageCommuters },
    { label: 'Operators', icon: <UserCircle2 size={16} />, onClick: onOperators },
    { label: 'Database', icon: <Database size={16} />, onClick: onDatabase },
    { label: 'Reports', icon: <FileText size={16} />, onClick: () => {} },
    { label: 'Logs', icon: <Activity size={16} />, onClick: () => {} },
  ]

  return (
    <section className="rounded-3xl bg-white/95 px-4 py-3 shadow-md shadow-sky-900/20">
      <div className="flex flex-wrap items-center gap-2">
        {actions.map((action) => (
          <button
            key={action.label}
            type="button"
            onClick={action.onClick}
            className="flex items-center gap-2 rounded-full bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm transition hover:bg-sky-50 hover:text-sky-700"
          >
            {action.icon}
            <span>{action.label}</span>
          </button>
        ))}
      </div>
    </section>
  )
}

function StatusRow({ label, status, tone }) {
  const toneClasses =
    tone === 'emerald'
      ? 'bg-emerald-50 text-emerald-700'
      : tone === 'sky'
        ? 'bg-sky-50 text-sky-700'
        : 'bg-amber-50 text-amber-700'

  const dotColor =
    tone === 'emerald'
      ? 'bg-emerald-500'
      : tone === 'sky'
        ? 'bg-sky-500'
        : 'bg-amber-500'

  return (
    <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-3 py-2">
      <span className="text-[11px] font-medium text-slate-600">{label}</span>
      <span
        className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${toneClasses}`}
      >
        <span className={`h-1.5 w-1.5 rounded-full ${dotColor}`} />
        {status}
      </span>
    </div>
  )
}

function SystemHealthCard() {
  return (
    <section className="rounded-3xl bg-white/95 p-5 shadow-xl shadow-sky-900/20">
      <h2 className="mb-4 text-sm font-semibold text-slate-900">System Health &amp; Performance</h2>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-3 text-xs text-slate-700">
          <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-3 py-2">
            <span className="text-[11px] font-medium text-slate-500">Uptime</span>
            <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-semibold text-emerald-700">
              99.8% operational
            </span>
          </div>
          <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-3 py-2">
            <span className="text-[11px] font-medium text-slate-500">API Calls (24h)</span>
            <span className="text-xs font-semibold text-slate-800">1.24M</span>
          </div>
          <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-3 py-2">
            <span className="text-[11px] font-medium text-slate-500">Response Time (p95)</span>
            <span className="rounded-full bg-sky-50 px-2 py-0.5 text-[11px] font-semibold text-sky-700">
              162 ms good
            </span>
          </div>
          <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-3 py-2">
            <span className="text-[11px] font-medium text-slate-500">Data Processed (24h)</span>
            <span className="text-xs font-semibold text-slate-800">24.8 GB</span>
          </div>
        </div>

        <div className="space-y-3 text-xs text-slate-700">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
            Live System Status
          </p>
          <StatusRow label="API Services" status="Operational" tone="emerald" />
          <StatusRow label="Database Cluster" status="Healthy" tone="sky" />
          <StatusRow label="Cache Servers" status="Degraded" tone="amber" />
        </div>
      </div>
    </section>
  )
}

function RecentActivity() {
  const items = [
    {
      title: 'New Operator Registered',
      detail: 'Operator “J. Santos” onboarded.',
      tone: 'sky',
      time: '2 min ago',
    },
    {
      title: 'Overcrowding Alert',
      detail: 'Bus 24A exceeded safe capacity.',
      tone: 'rose',
      time: '14 min ago',
    },
    {
      title: 'System Update Applied',
      detail: 'Security patch 1.4.2 installed.',
      tone: 'emerald',
      time: '1 hr ago',
    },
    {
      title: 'Maintenance Log',
      detail: 'Camera 05 scheduled for inspection.',
      tone: 'amber',
      time: '3 hr ago',
    },
  ]

  const toneClasses = {
    sky: 'bg-sky-50 text-sky-700',
    rose: 'bg-rose-50 text-rose-700',
    emerald: 'bg-emerald-50 text-emerald-700',
    amber: 'bg-amber-50 text-amber-700',
  }

  return (
    <section className="rounded-3xl bg-white/95 p-5 shadow-xl shadow-sky-900/20">
      <h2 className="mb-3 text-sm font-semibold text-slate-900">Recent Activity</h2>
      <div className="space-y-2 text-xs text-slate-700">
        {items.map((item) => (
          <div
            key={item.title}
            className="flex items-start justify-between gap-3 rounded-2xl bg-slate-50 px-3 py-2.5 transition hover:bg-slate-100"
          >
            <div className="flex items-start gap-2">
              <div
                className={`mt-0.5 flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-semibold ${
                  toneClasses[item.tone]
                }`}
              >
                •
              </div>
              <div>
                <p className="text-[13px] font-medium text-slate-900">{item.title}</p>
                <p className="text-[11px] text-slate-500">{item.detail}</p>
              </div>
            </div>
            <p className="whitespace-nowrap text-[11px] text-slate-400">{item.time}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default function AdminDashboard() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-400 via-sky-500 to-sky-700 px-6 py-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-5">
        <TopNav />

        <section className="grid grid-cols-4 gap-4">
          <KpiCard label="Total Operators" value="96" tone="blue" />
          <KpiCard label="Total Commuters" value="125,482" tone="green" />
          <KpiCard label="Active Vehicles" value="2,284" tone="violet" />
          <KpiCard label="Active Users" value="8,456" tone="amber" />
        </section>

        <QuickActionRow
          onManageCommuters={() => navigate('/admin-commuters')}
          onOperators={() => navigate('/admin-operators')}
          onDatabase={() => navigate('/admin-database')}
        />

        <section className="grid gap-4 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
          <SystemHealthCard />
          <RecentActivity />
        </section>
      </div>
    </div>
  )
}

