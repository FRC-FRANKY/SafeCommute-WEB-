import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  ArrowLeft,
  Bell,
  LogOut,
  Search,
  Shield,
  UserCircle2,
  Users,
  Eye,
  Pencil,
  KeyRound,
  TrendingUp,
  Ban,
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
          <span className="absolute right-1 top-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
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

const commuters = [
  { name: 'Rajesh Kumar', email: 'contact@metroexpress.com', status: 'active' },
  { name: 'Mohammed Ali', email: 'hello@urbantransit.com', status: 'inactive' },
  { name: 'Suresh Patel', email: 'hello@suresh.com', status: 'active' },
  { name: 'Maria Santos', email: 'maria@citybus.ph', status: 'active' },
  { name: 'James Wilson', email: 'jwilson@transit.co', status: 'inactive' },
]

export default function CommutersManagement() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-400 via-sky-500 to-sky-700 px-6 py-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-5">
        <TopNav />

        <div className="rounded-2xl bg-slate-800/40 px-5 py-4">
          <button
            type="button"
            onClick={() => navigate('/admin-dashboard')}
            className="mb-3 inline-flex items-center gap-2 text-xs font-medium text-sky-200 hover:text-white"
          >
            <ArrowLeft size={16} />
            Back
          </button>
          <h1 className="text-lg font-bold text-white">Commuters Management</h1>
          <p className="mt-1 text-sm text-slate-300">Manage transport operators and their access</p>
        </div>

        <section className="grid grid-cols-3 gap-4">
          <article className="rounded-2xl bg-white/95 px-4 py-3 shadow-xl shadow-sky-900/20">
            <div className="flex items-center justify-between">
              <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-slate-500">Total Commuters</p>
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
                <Users size={18} />
              </div>
            </div>
            <p className="mt-2 text-2xl font-semibold text-slate-900">96</p>
          </article>
          <article className="rounded-2xl bg-white/95 px-4 py-3 shadow-xl shadow-sky-900/20">
            <div className="flex items-center justify-between">
              <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-slate-500">Active Today</p>
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <TrendingUp size={18} />
              </div>
            </div>
            <p className="mt-2 text-2xl font-semibold text-slate-900">84</p>
          </article>
          <article className="rounded-2xl bg-white/95 px-4 py-3 shadow-xl shadow-sky-900/20">
            <div className="flex items-center justify-between">
              <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-slate-500">Suspended</p>
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-rose-50 text-rose-600">
                <Ban size={18} />
              </div>
            </div>
            <p className="mt-2 text-2xl font-semibold text-slate-900">4</p>
          </article>
        </section>

        <section className="rounded-3xl bg-white/95 p-5 shadow-xl shadow-sky-900/20">
          <div className="mb-4 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Users size={18} className="text-sky-600" />
              <h2 className="text-sm font-semibold text-slate-900">All Commuters</h2>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-slate-50 px-3 py-2 shadow-inner">
              <Search size={14} className="text-slate-400" />
              <input
                type="text"
                placeholder="Search commuters"
                className="w-48 border-none bg-transparent text-xs text-slate-700 outline-none placeholder:text-slate-400"
              />
            </div>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-100">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50/80">
                  <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.1em] text-slate-500">Name</th>
                  <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.1em] text-slate-500">Email</th>
                  <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.1em] text-slate-500">Status</th>
                  <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.1em] text-slate-500">Actions</th>
                </tr>
              </thead>
              <tbody>
                {commuters.map((c) => (
                  <tr
                    key={c.email}
                    className="border-b border-slate-50 transition hover:bg-slate-50/50"
                  >
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-100 text-xs font-semibold text-sky-700">
                          {c.name.split(' ').map((n) => n[0]).join('')}
                        </div>
                        <span className="font-medium text-slate-900">{c.name}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-slate-600">{c.email}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`inline-flex rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${
                          c.status === 'active' ? 'bg-emerald-50 text-emerald-700' : 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        {c.status === 'active' ? 'Active' : 'Inactive'}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-1">
                        <button
                          type="button"
                          className="rounded-full p-1.5 text-slate-500 hover:bg-sky-50 hover:text-sky-600"
                          title="View"
                        >
                          <Eye size={14} />
                        </button>
                        <button
                          type="button"
                          className="rounded-full p-1.5 text-slate-500 hover:bg-sky-50 hover:text-sky-600"
                          title="Edit"
                        >
                          <Pencil size={14} />
                        </button>
                        <button
                          type="button"
                          className="rounded-full p-1.5 text-slate-500 hover:bg-sky-50 hover:text-sky-600"
                          title="Manage access"
                        >
                          <KeyRound size={14} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  )
}
