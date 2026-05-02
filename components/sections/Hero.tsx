'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { hero, heroWidgetItems, serviceDetails } from '@/lib/content'
import ServiceSidebar from '@/components/ui/ServiceSidebar'

/* ── ServicesWidget ───────────────────────────────────────────────────────── */

function ServicesWidget({
  activeIndex,
  onServiceClick,
}: {
  activeIndex: number | null
  onServiceClick: (index: number) => void
}) {
  return (
    <div className="relative rounded-[20px] border border-[rgba(99,130,255,0.12)] bg-[#0d1120] p-6 overflow-hidden">
      {/* Scanline */}
      <div className="scanline" />

      {/* Title bar */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
        </div>
        <span className="font-mono text-[11px] text-[rgba(180,195,255,0.5)]">questly_services.js</span>
      </div>

      {/* Service items */}
      <div className="flex flex-col gap-2">
        {heroWidgetItems.map((s, i) => {
          const isActive = i === activeIndex
          return (
            <button
              key={s.num}
              onClick={() => onServiceClick(i)}
              className={`w-full text-left flex items-center justify-between px-5 py-4 rounded-[10px] border transition-all cursor-pointer ${
                isActive
                  ? 'border-[rgba(61,106,255,0.4)] bg-[rgba(61,106,255,0.06)] translate-x-1'
                  : 'border-[rgba(99,130,255,0.12)] hover:border-[rgba(61,106,255,0.4)] hover:bg-[rgba(61,106,255,0.06)] hover:translate-x-1'
              }`}
            >
              <div className="flex items-center gap-4">
                <span className="font-mono text-[11px] text-[#5c85ff] opacity-60 w-5 shrink-0">
                  {s.num}
                </span>
                <div>
                  <p className="text-[14px] font-semibold text-[#e8ecff]">{s.title}</p>
                  <p className="font-mono text-[11px] text-[rgba(180,195,255,0.5)] mt-0.5">{s.sub}</p>
                </div>
              </div>
              <span className="text-[#5c85ff] text-base opacity-60 shrink-0">›</span>
            </button>
          )
        })}
      </div>

      {/* Status bar */}
      <div className="flex items-center justify-between mt-5 pt-4 border-t border-[rgba(99,130,255,0.12)]">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 shrink-0" />
          <span className="font-mono text-[11px] text-[rgba(180,195,255,0.5)]">Disponibile — prima consulenza gratuita</span>
        </div>
      </div>
    </div>
  )
}

/* ── Hero ─────────────────────────────────────────────────────────────────── */

export function Hero({ onContactOpen }: { onContactOpen: () => void }) {
  const [activeService, setActiveService] = useState<number | null>(null)

  return (
    <>
      <section className="relative min-h-[auto] overflow-hidden">
        {/* Dot grid */}
        <div className="absolute inset-0 hero-grid-bg pointer-events-none" />

        {/* Orb */}
        <div className="fixed top-[-200px] right-[-100px] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(61,106,255,0.15)_0%,transparent_70%)] pointer-events-none z-0" />

        {/* Content */}
        <div className="relative z-10 max-w-[1400px] mx-auto px-[clamp(1.5rem,5vw,6rem)] pt-[136px] pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(2rem,4vw,5rem)] items-center">

            {/* Left */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-8">{hero.badge}</Badge>

              <h1
                className="font-sans font-bold leading-[1.02] tracking-[-0.04em] mb-6"
                style={{ fontSize: 'clamp(2.5rem, 6vw, 84px)' }}
              >
                {hero.headlinePart1}
                {hero.headlineAccent && (
                  <>
                    <br />
                    <em
                      className="not-italic"
                      style={{
                        background: 'linear-gradient(135deg, #5c85ff, #8fabff)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                    >
                      {hero.headlineAccent}
                    </em>
                  </>
                )}
              </h1>

              <p className="text-[rgba(180,195,255,0.5)] text-[17px] max-w-xl mb-8 leading-relaxed">
                {hero.sub}
              </p>

              <ul className="flex flex-col gap-3 mb-12 list-none">
                {hero.bullets.map(b => (
                  <li key={b.num} className="flex items-center gap-3 text-[14px] font-medium text-[rgba(180,195,255,0.5)]">
                    <span className="text-[#5c85ff] font-bold shrink-0">✓</span>
                    {b.text}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-4">
                {hero.ctas.map(cta =>
                  cta.variant === 'primary' ? (
                    <Button key={cta.label} variant="primary" onClick={onContactOpen}>
                      {cta.label}
                    </Button>
                  ) : (
                    <Button key={cta.label} variant="secondary" href={cta.href}>
                      {cta.label}
                    </Button>
                  )
                )}
              </div>
            </motion.div>

            {/* Right — hidden on mobile */}
            <motion.div
              className="hidden lg:block"
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <ServicesWidget activeIndex={activeService} onServiceClick={setActiveService} />
            </motion.div>
          </div>
        </div>
      </section>

      <ServiceSidebar
        service={activeService !== null ? serviceDetails[activeService] : null}
        onClose={() => setActiveService(null)}
      />
    </>
  )
}
