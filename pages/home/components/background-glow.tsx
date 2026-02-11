"use client"

export function BackgroundGlow() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 via-background to-background" />
      <div className="absolute left-1/2 top-[-12rem] h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />
      <div className="absolute bottom-[-14rem] right-[-10rem] h-[26rem] w-[26rem] rounded-full bg-emerald-500/10 blur-3xl" />
      <div className="absolute inset-0 opacity-[0.06] [background:repeating-linear-gradient(180deg,rgba(16,185,129,0.35)_0px,rgba(16,185,129,0.35)_1px,transparent_2px,transparent_7px)]" />
    </div>
  )
}
