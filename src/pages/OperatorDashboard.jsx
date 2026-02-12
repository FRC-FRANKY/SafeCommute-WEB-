  import React from 'react'
import {
  Activity,
  Bell,
  BusFront,
  Compass,
  LogOut,
  MapPin,
  Search,
  UserCircle2,
  Users,
} from 'lucide-react'

function TopNav() {
  return (
    <header className="flex items-center justify-between rounded-3xl bg-white/95 px-6 py-4 shadow-xl shadow-sky-900/25">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-500 text-white shadow-md">
          <BusFront size={22} />
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-900">Operator Dashboard</p>
          <p className="text-xs text-slate-500">SafeCommute+ Co.</p>
        </div>
      </div>

      <div className="flex min-w-[320px] max-w-md flex-1 items-center justify-center px-8">
        <div className="flex w-full items-center gap-2 rounded-full bg-slate-50 px-4 py-2 shadow-inner shadow-slate-200/60">
          <Search size={16} className="text-slate-400" />
          <input
            type="text"
            placeholder="Search routes, vehicles, or alerts..."
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

function StatCard({ label, value, icon, tone }) {
  const toneClasses = {
    blue: 'from-sky-50 to-sky-100 text-sky-800',
    green: 'from-emerald-50 to-emerald-100 text-emerald-800',
    purple: 'from-indigo-50 to-indigo-100 text-indigo-800',
    amber: 'from-amber-50 to-amber-100 text-amber-800',
  }[tone]

  return (
    <article className={`rounded-2xl bg-gradient-to-br ${toneClasses} px-4 py-3 shadow-md`}>
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-slate-500">
            {label}
          </p>
          <p className="mt-1 text-xl font-semibold">{value}</p>
        </div>
        <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/60 text-slate-700 shadow-sm">
          {icon}
        </div>
      </div>
    </article>
  )
}

function TabStrip() {
  const tabs = ['Overview', 'CCTV Monitoring', 'Drivers', 'Conductors', 'Vehicles', 'Analytics']

  return (
    <nav className="flex gap-2 rounded-2xl bg-white/80 px-2 py-2 text-xs font-medium text-slate-500 shadow-md">
      {tabs.map((tab) => {
        const active = tab === 'Overview'
        return (
          <button
            key={tab}
            type="button"
            className={`rounded-full px-4 py-1.5 transition ${
              active
                ? 'bg-sky-600 text-white shadow-sm'
                : 'hover:bg-slate-100 hover:text-slate-700'
            }`}
          >
            {tab}
          </button>
        )
      })}
    </nav>
  )
}

function RecentAlerts() {
  const alerts = [
    {
      title: 'High Crowd',
      detail: 'Terminal 3 • Platform B',
      badge: 'Critical',
      badgeClass: 'bg-rose-50 text-rose-700',
    },
    {
      title: 'Safety Alert',
      detail: 'Bus 24A • Sudden braking event',
      badge: 'Warning',
      badgeClass: 'bg-amber-50 text-amber-700',
    },
    {
      title: 'System Alert',
      detail: 'Camera 5 • Offline > 5 min',
      badge: 'System',
      badgeClass: 'bg-sky-50 text-sky-700',
    },
  ]

  return (
    <section className="rounded-3xl bg-white/95 p-5 shadow-xl shadow-sky-900/20">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-sm font-semibold text-slate-900">Recent Alerts</h2>
        <button
          type="button"
          className="text-xs font-medium text-sky-600 hover:text-sky-700 hover:underline"
        >
          View all
        </button>
      </div>

      <div className="space-y-2">
        {alerts.map((alert) => (
          <div
            key={alert.title}
            className="flex items-center justify-between gap-3 rounded-2xl bg-slate-50 px-4 py-3 text-xs text-slate-700 transition hover:bg-slate-100"
          >
            <div>
              <p className="text-sm font-medium text-slate-900">{alert.title}</p>
              <p className="mt-0.5 text-[11px] text-slate-500">{alert.detail}</p>
            </div>
            <div className="flex items-center gap-3">
              <span
                className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${alert.badgeClass}`}
              >
                {alert.badge}
              </span>
              <button
                type="button"
                className="rounded-full border border-sky-200 px-3 py-1 text-[11px] font-medium text-sky-600 hover:bg-sky-50"
              >
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function QuickActions() {
  const actions = ['Add New Driver', 'Add New Conductor', 'Add New Vehicle', 'View Reports', 'Settings']

  return (
    <section className="rounded-3xl bg-white/95 p-5 shadow-xl shadow-sky-900/20">
      <h2 className="mb-3 text-sm font-semibold text-slate-900">Quick Actions</h2>
      <div className="space-y-2">
        {actions.map((label) => (
          <button
            key={label}
            type="button"
            className="flex w-full items-center justify-between rounded-full bg-sky-50 px-4 py-2 text-xs font-medium text-sky-800 shadow-inner shadow-sky-100 transition hover:bg-sky-100"
          >
            <span>{label}</span>
            <span className="text-[10px] text-sky-500">›</span>
          </button>
        ))}
      </div>
    </section>
  )
}

function ActiveVehicles() {
  const vehicles = [
    {
      id: '01K',
      route: 'Lantawan Cooperative',
      detail: 'Downtown loop • Inner city',
      location: 'Bay 3 • North Terminal',
      capacity: '82% capacity',
    },
    {
      id: '04L',
      route: 'Lantawan Cooperative',
      detail: 'Coastal express • Seaside highway',
      location: 'Gate 2 • Coastal Hub',
      capacity: '73% capacity',
    },
    {
      id: '24A',
      route: 'Lantawan Cooperative',
      detail: 'Airport shuttle • Direct',
      location: 'Airport • Bay 1',
      capacity: '64% capacity',
    },
  ]

  return (
    <section className="rounded-3xl bg-white/95 p-5 shadow-xl shadow-sky-900/20">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-sm font-semibold text-slate-900">Active Vehicles</h2>
        <button
          type="button"
          className="text-xs font-medium text-sky-600 hover:text-sky-700 hover:underline"
        >
          View fleet map
        </button>
      </div>

      <div className="grid gap-3 md:grid-cols-3">
        {vehicles.map((v) => (
          <article
            key={v.id}
            className="flex flex-col gap-1.5 rounded-2xl bg-sky-50/80 p-4 text-xs text-slate-700 shadow-inner shadow-sky-100/60"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-sky-700">
              Vehicle {v.id}
            </p>
            <p className="text-sm font-semibold text-slate-900">{v.route}</p>
            <p className="text-[11px] text-slate-500">{v.detail}</p>
            <p className="mt-1 flex items-center gap-1 text-[11px] text-slate-600">
              <MapPin size={12} className="text-sky-600" />
              {v.location}
            </p>
            <p className="mt-1 flex items-center gap-1 text-[11px] text-emerald-700">
              <Activity size={12} />
              {v.capacity}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default function OperatorDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-400 via-sky-500 to-sky-700 px-6 py-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-5">
        <TopNav />

        <section className="grid grid-cols-4 gap-4">
          <StatCard
            label="Active Vehicles"
            value="24"
            tone="blue"
            icon={<BusFront size={18} />}
          />
          <StatCard label="Total Operators" value="38" tone="green" icon={<Users size={18} />} />
          <StatCard
            label="Daily Trips"
            value="342"
            tone="purple"
            icon={<Compass size={18} />}
          />
          <StatCard
            label="Safety Score"
            value="4.7"
            tone="amber"
            icon={<Activity size={18} />}
          />
        </section>

        <TabStrip />

        <section className="grid gap-4 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
          <RecentAlerts />
          <QuickActions />
        </section>

        <ActiveVehicles />
      </div>
    </div>
  )
}

