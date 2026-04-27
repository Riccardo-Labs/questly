'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { ContactModal } from '@/components/ui/ContactModal'
import { useInterval } from '@/hooks/useInterval'
import { hero } from '@/lib/content'

/** Tag verticali visibili solo su desktop (lg+). Evidenzia il tag attivo con bordo blu. */
function HeroTags({ activeIdx }: { activeIdx: number }) {
  return (
    <div className="hidden lg:flex flex-col gap-3 absolute right-[5%] top-1/2 -translate-y-1/2 z-10">
      {hero.tags.map((tag, i) => (
        <div
          key={tag}
          className={`font-mono text-xs px-4 py-2 rounded-md border text-right transition-all duration-300 ${
            i === activeIdx
              ? 'border-accent text-blue bg-bg2'
              : 'border-subtle text-muted bg-bg2'
          }`}
        >
          {tag}
        </div>
      ))}
    </div>
  )
}

/** Tag orizzontali scrollabili visibili solo su mobile/tablet (< lg). */
function HeroTagsMobile({ activeIdx }: { activeIdx: number }) {
  return (
    <div className="flex lg:hidden gap-2 overflow-x-auto pb-2 scrollbar-hide">
      {hero.tags.map((tag, i) => (
        <div
          key={tag}
          className={`font-mono text-xs px-3 py-1.5 rounded-md border whitespace-nowrap transition-all duration-300 flex-shrink-0 ${
            i === activeIdx ? 'border-accent text-blue bg-bg2' : 'border-subtle text-muted bg-bg2'
          }`}
        >
          {tag}
        </div>
      ))}
    </div>
  )
}

/**
 * Sezione hero a schermo intero. Contiene headline, sottotitolo, bullet point e CTA.
 * I tag laterali ruotano ogni 2s tramite useInterval. Animazione fade-up all'entrata.
 */
export function Hero({ onContactOpen }: { onContactOpen: () => void }) {
  const [activeIdx, setActiveIdx] = useState(0)

  useInterval(() => {
    setActiveIdx(prev => (prev + 1) % hero.tags.length)
  }, 2000)

  return (
    <section className="min-h-screen flex items-center px-[5%] pt-24 pb-20 relative overflow-hidden">
      {/* Grid bg */}
      <div className="absolute inset-0 hero-grid-bg pointer-events-none" />
      {/* Glow */}
      <div className="absolute -top-48 -left-48 w-[700px] h-[700px] rounded-full bg-blue/[0.08] blur-3xl pointer-events-none" />

      <motion.div
        className="max-w-2xl relative z-10"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Badge className="mb-8">{hero.badge}</Badge>

        <h1 className="font-sans font-extrabold text-[clamp(3rem,6vw,5.5rem)] leading-[1.05] tracking-[-2px] mb-6">
          {hero.headlinePart1}
          <br />
          <span className="text-blue">{hero.headlineAccent}</span>
        </h1>

        <p className="text-muted text-lg max-w-xl mb-10 leading-relaxed">{hero.sub}</p>

        <ul className="flex flex-col gap-3 mb-12 list-none">
          {hero.bullets.map(b => (
            <li key={b.num} className="flex items-center gap-3 text-sm font-semibold text-muted">
              <span className="font-mono text-[11px] text-blue bg-blue/10 border border-accent px-2 py-0.5 rounded min-w-[2rem] text-center">
                {b.num}
              </span>
              {b.text}
            </li>
          ))}
        </ul>

        <HeroTagsMobile activeIdx={activeIdx} />

        <div className="flex flex-wrap gap-4 mt-6">
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

      <HeroTags activeIdx={activeIdx} />
    </section>
  )
}
