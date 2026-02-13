import React, { useState } from 'react'
import CCTVCameraModal from '../components/CCTVCameraModal.jsx'
import {
  Activity,
  Bell,
  BusFront,
  Clock,
  Compass,
  LogOut,
  MapPin,
  MoreVertical,
  Search,
  Settings,
  Shield,
  TrendingUp,
  UserCircle2,
  UserPlus,
  Users,
  Video,
  Wrench,
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

function StatCard({ label, value, icon, tone, change, changePositive }) {
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
          {change != null && (
            <p className={`mt-0.5 text-[11px] font-semibold ${changePositive ? 'text-emerald-700' : 'text-rose-600'}`}>
              {change}
            </p>
          )}
        </div>
        <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/60 text-slate-700 shadow-sm">
          {icon}
        </div>
      </div>
    </article>
  )
}

function TabStrip({ activeTab, onTabChange }) {
  const tabs = ['Overview', 'CCTV Monitoring', 'Drivers', 'Conductors', 'Vehicles', 'Analytics']

  return (
    <nav className="flex gap-2 rounded-2xl bg-white/80 px-2 py-2 text-xs font-medium text-slate-500 shadow-md">
      {tabs.map((tab) => {
        const active = tab === activeTab
        return (
          <button
            key={tab}
            type="button"
            onClick={() => onTabChange(tab)}
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

function CCTVMonitoring({ onViewCamera }) {
  const cameras = [
    { bus: '17', position: 'Front', resolution: 'HD', recording: true, status: 'online', lastUpdate: 'John Doe • 5 mins ago' },
    { bus: '42', position: 'Front', resolution: 'HD', recording: true, status: 'online', lastUpdate: 'Admin User • Yesterday' },
    { bus: '42', position: 'Interior', resolution: 'HD', recording: false, status: 'offline', lastUpdate: 'Tech Support • 2 days ago' },
    { bus: '23', position: 'Front', resolution: 'HD', recording: true, status: 'online', lastUpdate: 'John Doe • 12 mins ago' },
    { bus: '23', position: 'Interior', resolution: 'HD', recording: true, status: 'online', lastUpdate: 'Admin User • 1 hr ago' },
    { bus: '08', position: 'Front', resolution: 'HD', recording: false, status: 'maintenance', lastUpdate: 'Tech Support • 2 days ago' },
  ]

  const statusStyles = {
    online: 'bg-emerald-50 text-emerald-700',
    offline: 'bg-rose-50 text-rose-700',
    maintenance: 'bg-slate-100 text-slate-600',
  }

  return (
    <section className="rounded-3xl bg-white/95 p-5 shadow-xl shadow-sky-900/20">
      <h2 className="mb-4 text-sm font-semibold text-slate-900">CCTV Monitoring</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cameras.map((cam, i) => (
          <article
            key={`${cam.bus}-${cam.position}-${i}`}
            className="flex flex-col gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm transition hover:shadow-md"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
                  <Video size={18} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">Bus {cam.bus} – {cam.position}</p>
                  <p className="text-[11px] text-slate-500">{cam.resolution}</p>
                </div>
              </div>
              <span
                className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold capitalize ${statusStyles[cam.status]}`}
              >
                {cam.status}
              </span>
            </div>
            <div className="flex items-center justify-between text-[11px] text-slate-600">
              <span>Recording: {cam.recording ? 'Yes' : 'No'}</span>
            </div>
            <p className="text-[11px] text-slate-500">Last: {cam.lastUpdate}</p>
            <button
              type="button"
              onClick={() => onViewCamera(cam)}
              className="mt-auto w-full rounded-full bg-sky-50 py-2 text-xs font-medium text-sky-700 transition hover:bg-sky-100"
            >
              View
            </button>
          </article>
        )        )}
      </div>
    </section>
  )
}

function ConductorsManagement() {
  const conductors = [
    { id: 'CON-1892', name: 'Priya Sharma', experience: '5 years', status: 'on-duty', vehicle: 'Bus 17' },
    { id: 'CON-2104', name: 'Anita Desai', experience: '6 years', status: 'off-duty', vehicle: '-' },
    { id: 'CON-1675', name: 'Lakshmi Reddy', experience: '4 years', status: 'on-duty', vehicle: 'Bus 42' },
    { id: 'CON-1956', name: 'Meera Patel', experience: '7 years', status: 'off-duty', vehicle: '-' },
    { id: 'CON-2231', name: 'Kavita Nair', experience: '3 years', status: 'on-duty', vehicle: 'Bus 08' },
  ]

  const statusStyles = {
    'on-duty': 'bg-emerald-50 text-emerald-700',
    'off-duty': 'bg-slate-100 text-slate-600',
  }

  return (
    <section className="rounded-3xl bg-white/95 p-5 shadow-xl shadow-sky-900/20">
      <div className="mb-4 flex items-center justify-between gap-4">
        <h2 className="text-sm font-semibold text-slate-900">Conductors Management</h2>
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-4 py-2 text-xs font-medium text-white shadow-md transition hover:bg-sky-700"
        >
          <UserPlus size={16} />
          Add Conductor
        </button>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-slate-100">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-slate-100 bg-slate-50/80">
              <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.1em] text-slate-500">Conductor ID</th>
              <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.1em] text-slate-500">Name</th>
              <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.1em] text-slate-500">Experience</th>
              <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.1em] text-slate-500">Status</th>
              <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.1em] text-slate-500">Current Vehicle</th>
              <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.1em] text-slate-500">Actions</th>
            </tr>
          </thead>
          <tbody>
            {conductors.map((c) => (
              <tr key={c.id} className="border-b border-slate-50 transition hover:bg-slate-50/50">
                <td className="px-4 py-3 text-slate-600">{c.id}</td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-100 text-xs font-semibold text-sky-700">
                      {c.name.split(' ').map((n) => n[0]).join('')}
                    </div>
                    <span className="font-medium text-slate-900">{c.name}</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-slate-600">{c.experience}</td>
                <td className="px-4 py-3">
                  <span className={`inline-flex rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${statusStyles[c.status]}`}>
                    {c.status === 'on-duty' ? 'On Duty' : 'Off Duty'}
                  </span>
                </td>
                <td className="px-4 py-3 text-slate-600">{c.vehicle}</td>
                <td className="px-4 py-3">
                  <button
                    type="button"
                    className="rounded-full p-1.5 text-slate-500 hover:bg-slate-100 hover:text-slate-700"
                    title="More actions"
                  >
                    <MoreVertical size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

function FleetManagement() {
  const vehicles = [
    { id: 'Bus 17', route: 'Blue Line Express', gpsStatus: 'active', capacity: '45/60', location: 'Central Station', lastMaintenance: '2 days ago' },
    { id: 'Bus 23', route: 'Downtown Loop', gpsStatus: 'active', capacity: '-', location: 'Depot', lastMaintenance: 'Today' },
    { id: 'Bus 42', route: 'Airport Shuttle', gpsStatus: 'active', capacity: '52/60', location: 'North Terminal', lastMaintenance: '5 days ago' },
    { id: 'Bus 08', route: 'Coastal Express', gpsStatus: 'active', capacity: '38/60', location: 'South Hub', lastMaintenance: '1 day ago' },
    { id: 'Bus 24A', route: 'Inner City', gpsStatus: 'active', capacity: '60/60', location: 'Bay 3', lastMaintenance: '3 days ago' },
  ]

  return (
    <section className="rounded-3xl bg-white/95 p-5 shadow-xl shadow-sky-900/20">
      <div className="mb-4 flex items-center justify-between gap-4">
        <h2 className="text-sm font-semibold text-slate-900">Fleet Management</h2>
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-4 py-2 text-xs font-medium text-white shadow-md transition hover:bg-sky-700"
        >
          <BusFront size={16} />
          Add Vehicle
        </button>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-slate-100">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-slate-100 bg-slate-50/80">
              <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.1em] text-slate-500">Vehicle ID</th>
              <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.1em] text-slate-500">Route</th>
              <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.1em] text-slate-500">GPS Status</th>
              <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.1em] text-slate-500">Capacity</th>
              <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.1em] text-slate-500">Location</th>
              <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.1em] text-slate-500">Last Maintenance</th>
              <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.1em] text-slate-500">Actions</th>
            </tr>
          </thead>
          <tbody>
            {vehicles.map((v) => (
              <tr key={v.id} className="border-b border-slate-50 transition hover:bg-slate-50/50">
                <td className="px-4 py-3 font-medium text-slate-900">{v.id}</td>
                <td className="px-4 py-3 text-slate-600">{v.route}</td>
                <td className="px-4 py-3">
                  <span className="inline-flex rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-700">
                    Active
                  </span>
                </td>
                <td className="px-4 py-3 text-slate-600">{v.capacity}</td>
                <td className="px-4 py-3">
                  <span className="flex items-center gap-1.5 text-slate-600">
                    <MapPin size={14} className="text-sky-500" />
                    {v.location}
                  </span>
                </td>
                <td className="px-4 py-3 text-slate-600">{v.lastMaintenance}</td>
                <td className="px-4 py-3">
                  <button
                    type="button"
                    className="rounded-full p-1.5 text-slate-500 hover:bg-slate-100 hover:text-slate-700"
                    title="Maintenance"
                  >
                    <Wrench size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

function DriversManagement() {
  const drivers = [
    { id: 'DRV-001', name: 'Rajesh Kumar', experience: '8 years', status: 'on-duty', vehicle: 'Bus 17' },
    { id: 'DRV-002', name: 'Mohammed Ali', experience: '5 years', status: 'off-duty', vehicle: '-' },
    { id: 'DRV-003', name: 'Suresh Patel', experience: '12 years', status: 'on-duty', vehicle: 'Bus 24A' },
    { id: 'DRV-004', name: 'Maria Santos', experience: '3 years', status: 'off-duty', vehicle: '-' },
    { id: 'DRV-005', name: 'James Wilson', experience: '6 years', status: 'on-duty', vehicle: 'Bus 08' },
  ]

  const statusStyles = {
    'on-duty': 'bg-emerald-50 text-emerald-700',
    'off-duty': 'bg-slate-100 text-slate-600',
  }

  return (
    <section className="rounded-3xl bg-white/95 p-5 shadow-xl shadow-sky-900/20">
      <div className="mb-4 flex items-center justify-between gap-4">
        <h2 className="text-sm font-semibold text-slate-900">Drivers Management</h2>
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-4 py-2 text-xs font-medium text-white shadow-md transition hover:bg-sky-700"
        >
          <UserPlus size={16} />
          Add Driver
        </button>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-slate-100">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-slate-100 bg-slate-50/80">
              <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.1em] text-slate-500">Driver ID</th>
              <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.1em] text-slate-500">Name</th>
              <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.1em] text-slate-500">Experience</th>
              <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.1em] text-slate-500">Status</th>
              <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.1em] text-slate-500">Current Vehicle</th>
              <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.1em] text-slate-500">Actions</th>
            </tr>
          </thead>
          <tbody>
            {drivers.map((d) => (
              <tr key={d.id} className="border-b border-slate-50 transition hover:bg-slate-50/50">
                <td className="px-4 py-3 text-slate-600">{d.id}</td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-100 text-xs font-semibold text-sky-700">
                      {d.name.split(' ').map((n) => n[0]).join('')}
                    </div>
                    <span className="font-medium text-slate-900">{d.name}</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-slate-600">{d.experience}</td>
                <td className="px-4 py-3">
                  <span className={`inline-flex rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${statusStyles[d.status]}`}>
                    {d.status === 'on-duty' ? 'On Duty' : 'Off Duty'}
                  </span>
                </td>
                <td className="px-4 py-3 text-slate-600">{d.vehicle}</td>
                <td className="px-4 py-3">
                  <button
                    type="button"
                    className="rounded-full p-1.5 text-slate-500 hover:bg-slate-100 hover:text-slate-700"
                    title="More actions"
                  >
                    <MoreVertical size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
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

function ProgressBar({ label, value, max, unit = '%', tone = 'sky' }) {
  const toneClasses = {
    green: 'bg-emerald-500',
    blue: 'bg-sky-500',
    purple: 'bg-indigo-500',
    amber: 'bg-amber-500',
  }[tone]
  const percent = max ? Math.round((value / max) * 100) : value

  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between text-xs">
        <span className="font-medium text-slate-700">{label}</span>
        <span className="font-bold text-slate-900">
          {max ? `${value}/${max}` : `${value}${unit}`}
        </span>
      </div>
      <div className="h-2.5 overflow-hidden rounded-full bg-slate-100">
        <div
          className={`h-full rounded-full transition-all ${toneClasses}`}
          style={{ width: `${Math.min(percent, 100)}%` }}
        />
      </div>
    </div>
  )
}

function PerformanceOverview() {
  const metrics = [
    { label: 'On-Time Performance', value: 87, tone: 'green' },
    { label: 'Safety Rating', value: 4.7, max: 5.0, tone: 'blue' },
    { label: 'Customer Satisfaction', value: 4.5, max: 5.0, tone: 'purple' },
    { label: 'Fleet Utilization', value: 82, tone: 'amber' },
  ]

  return (
    <section className="rounded-3xl bg-white/95 p-5 shadow-xl shadow-sky-900/20">
      <h2 className="mb-4 text-sm font-semibold text-slate-900">Performance Overview</h2>
      <div className="space-y-5">
        {metrics.map((m) => (
          <ProgressBar
            key={m.label}
            label={m.label}
            value={m.value}
            max={m.max}
            unit="%"
            tone={m.tone}
          />
        ))}
      </div>
    </section>
  )
}

function MonthlyStatistics() {
  const stats = [
    { title: 'Total Trips', value: '10,248', change: '+8%', positive: true, icon: TrendingUp, iconBg: 'bg-sky-100', iconColor: 'text-sky-600' },
    { title: 'Passengers Served', value: '245,892', change: '+12%', positive: true, icon: Users, iconBg: 'bg-emerald-100', iconColor: 'text-emerald-600' },
    { title: 'Avg Trip Duration', value: '18 mins', change: '-2 min', positive: true, icon: Clock, iconBg: 'bg-indigo-100', iconColor: 'text-indigo-600' },
  ]

  return (
    <section className="rounded-3xl bg-white/95 p-5 shadow-xl shadow-sky-900/20">
      <h2 className="mb-4 text-sm font-semibold text-slate-900">Monthly Statistics</h2>
      <div className="space-y-3">
        {stats.map((s) => (
          <div
            key={s.title}
            className="flex items-center justify-between gap-4 rounded-2xl bg-slate-50/80 px-4 py-3 transition hover:bg-slate-100/80"
          >
            <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${s.iconBg} ${s.iconColor}`}>
              <s.icon size={18} />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[11px] font-medium text-slate-500">{s.title}</p>
              <p className="text-sm font-bold text-slate-900">{s.value}</p>
            </div>
            <span className="shrink-0 rounded-full bg-emerald-100 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-700">
              {s.change}
            </span>
          </div>
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
  const [activeTab, setActiveTab] = useState('Analytics')
  const [cctvModalOpen, setCctvModalOpen] = useState(false)
  const [selectedCamera, setSelectedCamera] = useState(null)

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
            icon={<TrendingUp size={18} />}
            change="+12%"
            changePositive
          />
          <StatCard
            label="Safety Score"
            value="4.7"
            tone="amber"
            icon={<Shield size={18} />}
            change="-0.2"
            changePositive={false}
          />
        </section>

        <TabStrip activeTab={activeTab} onTabChange={setActiveTab} />

        {activeTab === 'CCTV Monitoring' ? (
          <>
            <CCTVMonitoring onViewCamera={(cam) => { setSelectedCamera(cam); setCctvModalOpen(true) }} />
            <CCTVCameraModal
              open={cctvModalOpen}
              onClose={() => setCctvModalOpen(false)}
              camera={selectedCamera || {}}
            />
          </>
        ) : activeTab === 'Drivers' ? (
          <DriversManagement />
        ) : activeTab === 'Conductors' ? (
          <ConductorsManagement />
        ) : activeTab === 'Vehicles' ? (
          <FleetManagement />
        ) : activeTab === 'Overview' ? (
          <>
            <section className="grid gap-4 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
              <RecentAlerts />
              <QuickActions />
            </section>
            <ActiveVehicles />
          </>
        ) : activeTab === 'Analytics' ? (
          <section className="grid gap-4 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
            <PerformanceOverview />
            <MonthlyStatistics />
          </section>
        ) : (
          <section className="rounded-3xl bg-white/95 p-8 shadow-xl shadow-sky-900/20">
            <p className="text-sm text-slate-600">{activeTab} content coming soon.</p>
          </section>
        )}
      </div>
    </div>
  )
}

