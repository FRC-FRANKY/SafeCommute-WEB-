import React, { useState, useEffect } from 'react'
import {
  AlertTriangle,
  Camera,
  Download,
  Lock,
  MapPin,
  Pause,
  Play,
  Radio,
  RefreshCw,
  Maximize2,
  User,
  Video,
  Volume2,
  Wifi,
  X,
} from 'lucide-react'

function Badge({ children, variant = 'default' }) {
  const variants = {
    blue: 'bg-sky-100 text-sky-700',
    green: 'bg-emerald-100 text-emerald-700',
    purple: 'bg-indigo-100 text-indigo-700',
    red: 'bg-rose-100 text-rose-700',
    default: 'bg-slate-100 text-slate-700',
  }
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-lg px-2.5 py-0.5 text-xs font-semibold ${variants[variant] || variants.default}`}
    >
      {children}
    </span>
  )
}

function Header({ title, onClose }) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div className="flex items-center gap-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
          <Camera size={18} />
        </div>
        <h1 className="text-lg font-semibold text-slate-900">{title}</h1>
      </div>
      <button
        type="button"
        onClick={onClose}
        className="flex h-9 w-9 items-center justify-center rounded-full text-slate-500 transition hover:bg-slate-100 hover:text-slate-700"
        aria-label="Close"
      >
        <X size={20} />
      </button>
    </div>
  )
}

function VideoPanel({ vehicle = 'Bus 17', position = 'Front', viewedBy = 'Admin User (OP-2341)' }) {
  const [time, setTime] = useState(() => {
    const now = new Date()
    return now.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    })
  })

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date()
      setTime(
        now.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        })
      )
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative overflow-hidden rounded-2xl bg-slate-900">
      <div className="aspect-video min-h-[240px] flex items-center justify-center">
        <div className="absolute left-4 top-4 z-10 flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose-500 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-rose-500" />
          </span>
          <span className="text-xs font-semibold text-white">LIVE</span>
        </div>

        <div className="absolute right-4 top-4 z-10 font-mono text-sm font-medium tracking-wider text-white">
          {time}
        </div>

        <div className="flex flex-col items-center justify-center gap-2 text-white/90">
          <Video size={48} className="text-white/70" strokeWidth={1.5} />
          <p className="text-sm font-semibold">Live Feed - {vehicle} - {position}</p>
          <p className="text-xs text-white/70">Streaming at HD Quality</p>
        </div>

        <div className="absolute bottom-4 left-4 z-10 text-left">
          <p className="text-sm font-semibold text-white">{vehicle}</p>
          <p className="text-xs text-white/80">{vehicle} - {position}</p>
        </div>

        <div className="absolute bottom-4 right-4 z-10 rounded-xl border border-white/20 bg-white/10 px-3 py-2 backdrop-blur-md">
          <p className="flex items-center gap-2 text-xs text-white">
            <User size={14} className="text-white/80" />
            Viewed by {viewedBy}
          </p>
        </div>
      </div>
    </div>
  )
}

function Controls({ isPlaying = true }) {
  const buttons = [
    { icon: Play, label: 'Play', primary: true, active: isPlaying },
    { icon: Pause, label: 'Pause', primary: false },
    { icon: Volume2, label: 'Volume', primary: false },
    { icon: Download, label: 'Capture', primary: false },
    { icon: RefreshCw, label: 'Refresh', primary: false },
    { icon: Maximize2, label: 'Fullscreen', primary: false },
  ]

  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      {buttons.map(({ icon: Icon, label, primary, active }) => (
        <button
          key={label}
          type="button"
          title={label}
          className={`flex h-10 w-10 items-center justify-center rounded-xl shadow-md transition hover:shadow-lg ${
            primary && active
              ? 'bg-sky-600 text-white hover:bg-sky-700'
              : 'bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-800'
          }`}
        >
          <Icon size={18} strokeWidth={2} />
        </button>
      ))}
    </div>
  )
}

function InfoCards({ vehicle = 'Bus 17', position = 'Front', quality = 'HD 1080p' }) {
  const cards = [
    { label: 'Vehicle', value: vehicle, icon: Video, bg: 'bg-sky-50', iconBg: 'bg-sky-100', iconColor: 'text-sky-600' },
    { label: 'Position', value: position, icon: MapPin, bg: 'bg-emerald-50', iconBg: 'bg-emerald-100', iconColor: 'text-emerald-600' },
    { label: 'Quality', value: quality, icon: Radio, bg: 'bg-indigo-50', iconBg: 'bg-indigo-100', iconColor: 'text-indigo-600' },
  ]

  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {cards.map(({ label, value, icon: Icon, bg, iconBg, iconColor }) => (
        <div
          key={label}
          className={`flex items-center gap-4 rounded-2xl border border-slate-100 p-4 ${bg}`}
        >
          <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${iconBg} ${iconColor}`}>
            <Icon size={20} />
          </div>
          <div>
            <p className="text-[11px] font-medium uppercase tracking-wider text-slate-500">{label}</p>
            <p className="text-sm font-semibold text-slate-900">- {value}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

function ActivityList() {
  const activities = [
    { text: 'Camera online and recording - 2 minutes ago', color: 'bg-emerald-50 border-emerald-100', dot: 'bg-emerald-500' },
    { text: 'High crowd density detected - 15 minutes ago', color: 'bg-amber-50 border-amber-100', dot: 'bg-amber-500' },
    { text: 'Motion detected at front entrance - 32 minutes ago', color: 'bg-sky-50 border-sky-100', dot: 'bg-sky-500' },
  ]

  return (
    <section>
      <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-900">
        <AlertTriangle size={16} className="text-amber-600" />
        Recent Activity
      </h3>
      <div className="space-y-2">
        {activities.map((a, i) => (
          <div
            key={i}
            className={`flex items-center gap-3 rounded-2xl border px-4 py-3 ${a.color}`}
          >
            <span className={`h-2 w-2 shrink-0 rounded-full ${a.dot}`} />
            <p className="text-xs font-medium text-slate-800">{a.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function AccessHistory() {
  const entries = [
    { user: 'Admin User (OP-2341)', action: 'Viewed Camera', time: 'Just now', duration: 'Active' },
    { user: 'Admin User (OP-2341)', action: 'Viewed Camera', time: '5 minutes ago', duration: '3 mins' },
    { user: 'John Doe (OP-1892)', action: 'Viewed Camera', time: '12 minutes ago', duration: '8 mins' },
    { user: 'Sarah Smith (OP-3421)', action: 'Downloaded Footage', time: '1 hour ago', duration: '15 mins' },
    { user: 'Mike Johnson (OP-2156)', action: 'Viewed Camera', time: '2 hours ago', duration: '5 mins' },
  ]

  return (
    <section>
      <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-900">
        <Lock size={16} className="text-slate-600" />
        Access History
      </h3>
      <div className="space-y-2">
        {entries.map((e, i) => (
          <div
            key={i}
            className="flex flex-wrap items-center justify-between gap-2 rounded-2xl border border-slate-100 bg-white px-4 py-3 transition hover:bg-slate-50/50"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-2 w-2 shrink-0 rounded-full bg-slate-300" />
              <div>
                <p className="text-xs font-medium text-slate-900">{e.user}</p>
                <p className="text-[11px] text-slate-600">{e.action}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-[11px] text-slate-500">{e.time}</p>
              <p className="text-[11px] font-medium text-slate-700">{e.duration}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default function CCTVCameraModal({ open, onClose, camera = {} }) {
  const vehicle = camera.bus ? `Bus ${camera.bus}` : camera.vehicle ? `Bus ${camera.vehicle}` : 'Bus 17'
  const position = camera.position || 'Front'
  const status = camera.status || 'online'
  const hasOutput = status === 'online'
  const isOfflineOrMaintenance = status === 'offline' || status === 'maintenance'
  const riskDetected = hasOutput && (camera.bus === '17' && camera.position === 'Front')

  useEffect(() => {
    if (!open) return
    const handleEscape = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
        onClick={onClose}
        onKeyDown={(e) => e.key === 'Escape' && onClose()}
        role="button"
        tabIndex={0}
        aria-label="Close modal"
      />

      <div
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <Header title="CCTV Camera Monitoring" onClose={onClose} />

        <div className="mt-4 flex flex-wrap items-center gap-2">
          <Badge variant="blue">CAM-001</Badge>
          <span className="text-sm text-slate-700">{vehicle} - {position}</span>
          {hasOutput && (
            <>
              <Badge variant="green">
                <Wifi size={12} strokeWidth={2.5} />
                Online
              </Badge>
              <Badge variant="purple">HD</Badge>
              <Badge variant="red">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose-500 opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-rose-500" />
                </span>
                Recording
              </Badge>
            </>
          )}
        </div>

        {isOfflineOrMaintenance && (
          <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-6 text-center">
            <Video size={40} className="mx-auto mb-2 text-amber-600" strokeWidth={1.5} />
            <p className="text-sm font-semibold text-amber-800">Camera offline or under maintenance</p>
            <p className="mt-1 text-xs text-amber-700">
              No camera output is available for {vehicle} – {position}. Please try again later or contact support.
            </p>
          </div>
        )}

        {hasOutput && !riskDetected && (
          <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-center">
            <AlertTriangle size={40} className="mx-auto mb-2 text-emerald-600" />
            <p className="text-sm font-semibold text-emerald-800">No safety incidents detected</p>
            <p className="mt-1 text-xs text-emerald-700">
              The system has analyzed the camera feed. No safety risks were found for {vehicle} – {position}.
            </p>
          </div>
        )}

        {hasOutput && riskDetected && (
          <>
            <div className="mt-5">
              <VideoPanel vehicle={vehicle} position={position} />
            </div>
            <div className="mt-5">
              <Controls isPlaying />
            </div>
            <div className="mt-6">
              <InfoCards vehicle={vehicle} position={position} />
            </div>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <ActivityList />
              <AccessHistory />
            </div>
          </>
        )}
      </div>
    </div>
  )
}
