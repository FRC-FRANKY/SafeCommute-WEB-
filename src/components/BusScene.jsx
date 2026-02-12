import React from 'react'

export default function BusScene() {
  return (
    <div className="relative mt-10 w-full max-w-4xl">
      <div className="absolute inset-x-10 bottom-0 h-6 rounded-full bg-sky-900/40 blur-sm" />

      <div className="relative h-32 w-full rounded-3xl border-4 border-sky-900/70 bg-gradient-to-br from-slate-900 to-slate-700 shadow-2xl">
        <div className="absolute left-[8%] right-[14%] top-2 h-10 rounded-2xl rounded-tr-3xl bg-gradient-to-br from-slate-900 to-slate-800" />

        <div className="absolute left-[12%] right-[20%] top-4 grid h-8 grid-cols-[repeat(3,minmax(0,1fr))_1.4fr] gap-1.5 px-1.5">
          <div className="rounded-lg bg-gradient-to-br from-sky-50 to-sky-200" />
          <div className="rounded-lg bg-gradient-to-br from-sky-50 to-sky-200" />
          <div className="rounded-lg bg-gradient-to-br from-sky-50 to-sky-200" />
          <div className="rounded-lg bg-gradient-to-br from-sky-50 to-sky-200" />
        </div>

        <div className="absolute bottom-6 left-[6%] right-[24%] h-6 rounded-2xl bg-gradient-to-r from-slate-100 via-slate-200 to-sky-400" />

        <div className="absolute bottom-5 right-[6%] h-14 w-14 rounded-xl bg-gradient-to-b from-slate-100 to-slate-400" />
      </div>

      <div className="absolute bottom-[-14px] left-[16%] flex w-2/3 justify-between">
        <div className="h-11 w-11 rounded-full border-4 border-slate-900 bg-gradient-to-br from-slate-400 to-slate-900 shadow-xl shadow-slate-900/70" />
        <div className="h-11 w-11 rounded-full border-4 border-slate-900 bg-gradient-to-br from-slate-400 to-slate-900 shadow-xl shadow-slate-900/70" />
      </div>
    </div>
  )
}

