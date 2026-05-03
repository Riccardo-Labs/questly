'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { hero, heroWidgetItems, serviceDetails } from '@/lib/content'
import ServiceSidebar from '@/components/ui/ServiceSidebar'
import VantaBackground from '@/components/ui/VantaBackground'

/* ── ServicesWidget ───────────────────────────────────────────────────────── */

function ServicesWidget({
  activeIndex,
  onServiceClick,
}: {
  activeIndex: number | null
  onServiceClick: (index: number) => void
}) {
  return (
    <div className="relative rounded-[25px] border border-[rgba(99,130,255,0.22)] bg-[#0d1120] p-[30px] overflow-hidden h-full flex flex-col">
      {/* Scanline */}
      <div className="scanline" />

      {/* Title bar */}
      <div className="flex items-center gap-3 pb-6 mb-6 border-b border-[rgba(99,130,255,0.12)] -mx-[30px] px-[30px]">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
        </div>
        <span className="font-mono text-[13px] text-[rgba(180,195,255,0.5)]">questly_services.js</span>
      </div>

      {/* Service items */}
      <div className="flex flex-col gap-5">
        {heroWidgetItems.map((s, i) => {
          const isActive = i === activeIndex
          return (
            <button
              key={s.num}
              onClick={() => onServiceClick(i)}
              className={`w-full text-left flex items-center justify-between px-[25px] py-5 rounded-[13px] border transition-all cursor-pointer ${
                isActive
                  ? 'border-[rgba(61,106,255,0.4)] bg-[rgba(61,106,255,0.06)] translate-x-1'
                  : 'border-[rgba(99,130,255,0.12)] hover:border-[rgba(61,106,255,0.4)] hover:bg-[rgba(61,106,255,0.06)] hover:translate-x-1'
              }`}
            >
              <div className="flex items-center gap-4">
                <span className="font-mono text-[14px] text-[#5c85ff] opacity-60 w-6 shrink-0">
                  {s.num}
                </span>
                <div>
                  <p className="text-[17px] font-semibold text-[#e8ecff]">{s.title}</p>
                  <p className="font-mono text-[14px] text-[rgba(180,195,255,0.5)] mt-0.5">{s.sub}</p>
                </div>
              </div>
              <span className="text-[#5c85ff] text-base opacity-60 shrink-0">&gt;</span>
            </button>
          )
        })}
      </div>

      {/* Status bar */}
      <div className="flex items-center justify-between mt-6 pt-5 pb-1 border-t border-[rgba(99,130,255,0.12)] -mx-[30px] px-[30px]">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 shrink-0" />
          <span className="font-mono text-[13px] text-[rgba(180,195,255,0.5)]">Disponibile — prima consulenza gratuita</span>
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
        <VantaBackground />
        {/* Dot grid */}
        <div className="absolute inset-0 hero-grid-bg pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 max-w-[1750px] mx-auto px-[clamp(1.875rem,6.25vw,7.5rem)] pt-[119px] pb-[50px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(2.5rem,5vw,6.25rem)] items-start">

            {/* Left */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-6">{hero.badge}</Badge>

              <h1
                className="font-sans font-bold leading-[1.02] tracking-[-0.04em] mb-8"
                style={{ fontSize: 'clamp(3.125rem, 7.5vw, 105px)' }}
              >
                {hero.headlinePart1}
                {hero.headlinePart2 && (
                  <>
                    <br />
                    {hero.headlinePart2}
                  </>
                )}
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

              <p className="text-[rgba(180,195,255,0.5)] text-[21px] max-w-xl mb-10 leading-relaxed">
                {hero.sub}
              </p>

              <ul className="flex flex-col gap-4 mb-12 list-none">
                {hero.bullets.map(b => (
                  <li key={b.num} className="flex items-center gap-6 text-[15px] font-medium text-[rgba(180,195,255,0.5)]">
                    <span className="text-[#5c85ff] font-bold shrink-0">✓</span>
                    {b.text}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-5">
                {hero.ctas.map(cta =>
                  cta.variant === 'primary' ? (
                    <Button key={cta.label} variant="primary" onClick={onContactOpen} className="!py-2.5 !px-5 !text-sm">
                      {cta.label}
                    </Button>
                  ) : (
                    <Button key={cta.label} variant="secondary" href={cta.href} className="!py-2.5 !px-5 !text-sm">
                      {cta.label}
                    </Button>
                  )
                )}
              </div>
            </motion.div>

            {/* Right — hidden on mobile */}
            <motion.div
              className="hidden lg:flex lg:flex-col"
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
