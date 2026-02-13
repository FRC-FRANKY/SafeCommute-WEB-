import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  ArrowLeft,
  Bell,
  AlertTriangle,
  BarChart3,
  FileText,
  LogOut,
  Search,
  Settings,
  Shield,
  UserCircle2,
  TrendingDown,
  TrendingUp,
  Wrench,
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

const incidents = [
  { label: 'Overcrowding', count: 45, change: -12, positive: true },
  { label: 'Vehicle Breakdown', count: 28, change: 5, positive: false },
  { label: 'Traffic Delays', count: 67, change: -8, positive: true },
  { label: 'Safety Alerts', count: 234, change: 15, positive: false },
]

const barData = [
  { day: 'Mon', value: 82000 },
  { day: 'Tue', value: 95000 },
  { day: 'Wed', value: 112000 },
  { day: 'Thu', value: 105000 },
  { day: 'Fri', value: 128000 },
  { day: 'Sat', value: 98000 },
  { day: 'Sun', value: 75000 },
]

const recentReports = [
  { name: 'Camera mode offline', type: 'Device', generated: '10/28/2022', size: '-' },
]

export default function ReportsAnalytics() {
  const navigate = useNavigate()
  const maxBar = Math.max(...barData.map((d) => d.value))

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
          <h1 className="text-lg font-bold text-white">Reports &amp; Analytics</h1>
          <p className="mt-1 text-sm text-slate-300">Generate and view comprehensive system reports</p>
        </div>

        <section className="rounded-3xl bg-white/95 p-5 shadow-xl shadow-sky-900/20">
          <div className="flex flex-wrap items-end gap-4">
            <div className="flex-1 min-w-[140px]">
              <label className="mb-1 block text-[11px] font-medium uppercase tracking-[0.1em] text-slate-500">Report Type</label>
              <select className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-800 outline-none focus:border-sky-500">
                <option>Revenue Report</option>
                <option>Safety Report</option>
                <option>Fleet Report</option>
              </select>
            </div>
            <div className="flex-1 min-w-[140px]">
              <label className="mb-1 block text-[11px] font-medium uppercase tracking-[0.1em] text-slate-500">Date Range</label>
              <select className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-800 outline-none focus:border-sky-500">
                <option>Last 30 Days</option>
                <option>Last 7 Days</option>
                <option>Last 90 Days</option>
              </select>
            </div>
            <div className="flex-1 min-w-[120px]">
              <label className="mb-1 block text-[11px] font-medium uppercase tracking-[0.1em] text-slate-500">Format</label>
              <select className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-800 outline-none focus:border-sky-500">
                <option>PDF</option>
                <option>Excel</option>
                <option>CSV</option>
              </select>
            </div>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-5 py-2.5 text-xs font-medium text-white shadow-md transition hover:bg-sky-700"
            >
              <FileText size={16} />
              Generate Report
            </button>
          </div>
        </section>

        <section className="grid gap-4 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
          <div className="space-y-4">
            <div className="rounded-3xl bg-white/95 p-5 shadow-xl shadow-sky-900/20">
              <div className="mb-4 flex items-center gap-2">
                <AlertTriangle size={18} className="text-sky-600" />
                <h2 className="text-sm font-semibold text-slate-900">Safety Incidents Summary</h2>
              </div>
              <div className="space-y-3">
                {incidents.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3 transition hover:bg-slate-100"
                  >
                    <span className="text-sm font-medium text-slate-900">{item.label}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-semibold text-slate-800">{item.count} incidents</span>
                      <span
                        className={`inline-flex items-center gap-0.5 rounded-full px-2 py-0.5 text-[11px] font-semibold ${
                          item.positive ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-700'
                        }`}
                      >
                        {item.positive ? <TrendingDown size={12} /> : <TrendingUp size={12} />}
                        {item.change > 0 ? '+' : ''}{item.change}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-white/95 p-5 shadow-xl shadow-sky-900/20">
              <div className="mb-4 flex items-center gap-2">
                <Wrench size={18} className="text-sky-600" />
                <h2 className="text-sm font-semibold text-slate-900">Maintenance Summary</h2>
              </div>
              <div className="flex min-h-[120px] items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50/50">
                <p className="text-xs text-slate-400">No maintenance data available</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-3xl bg-white/95 p-5 shadow-xl shadow-sky-900/20">
              <div className="mb-4 flex items-center gap-2">
                <BarChart3 size={18} className="text-sky-600" />
                <h2 className="text-sm font-semibold text-slate-900">Monthly Performance</h2>
              </div>
              <div className="flex h-48 items-end justify-between gap-2">
                {barData.map((d) => (
                  <div key={d.day} className="flex flex-1 flex-col items-center gap-1">
                    <div className="relative h-32 w-full overflow-hidden rounded-t-lg bg-slate-100">
                      <div
                        className="absolute bottom-0 left-0 right-0 rounded-t-lg bg-sky-500 transition"
                        style={{ height: `${(d.value / maxBar) * 100}%` }}
                      />
                    </div>
                    <span className="text-[10px] font-medium text-slate-500">{d.day}</span>
                  </div>
                ))}
              </div>
              <p className="mt-2 text-center text-[10px] text-slate-500">0 - 140,000 trips</p>
            </div>

            <div className="rounded-3xl bg-white/95 p-5 shadow-xl shadow-sky-900/20">
              <div className="mb-4 flex items-center gap-2">
                <FileText size={18} className="text-sky-600" />
                <h2 className="text-sm font-semibold text-slate-900">Recent Reports</h2>
              </div>
              <div className="overflow-x-auto rounded-2xl border border-slate-100">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-slate-100 bg-slate-50/80">
                      <th className="px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.1em] text-slate-500">Report Name</th>
                      <th className="px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.1em] text-slate-500">Type</th>
                      <th className="px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.1em] text-slate-500">Generated</th>
                      <th className="px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.1em] text-slate-500">Size</th>
                      <th className="px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.1em] text-slate-500">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentReports.map((r, i) => (
                      <tr key={i} className="border-b border-slate-50 transition hover:bg-slate-50/50">
                        <td className="px-3 py-2 font-medium text-slate-900">{r.name}</td>
                        <td className="px-3 py-2 text-slate-600">{r.type}</td>
                        <td className="px-3 py-2 text-slate-600">{r.generated}</td>
                        <td className="px-3 py-2 text-slate-600">{r.size}</td>
                        <td className="px-3 py-2">
                          <button
                            type="button"
                            className="rounded-full border border-sky-200 px-2.5 py-1 text-[10px] font-medium text-sky-600 hover:bg-sky-50"
                          >
                            View
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
