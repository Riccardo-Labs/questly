'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/Badge'
import { Container } from '@/components/ui/Container'
import { faq } from '@/lib/content'
import type { FaqItem } from '@/types'

/** Singola riga FAQ con accordion: il testo della risposta si espande/chiude via max-height CSS. */
function FaqRow({ item, isOpen, onToggle }: { item: FaqItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-subtle">
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center gap-4 py-5 text-left text-text text-sm font-semibold hover:text-blue transition-colors"
        aria-expanded={isOpen}
      >
        {item.q}
        <span
          className={`text-blue text-xl font-light flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`}
        >
          +
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}
      >
        <p className="text-muted text-sm leading-relaxed pb-5">{item.a}</p>
      </div>
    </div>
  )
}

/** Sezione FAQ con accordion: un solo elemento aperto per volta, gestito tramite useState. */
export function Faq() {
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  const toggle = (i: number) => setOpenIdx(prev => (prev === i ? null : i))

  return (
    <section id="faq" className="bg-bg py-24">
      <Container>
      <motion.div
        className="max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5 }}
      >
        <Badge className="mb-6">{faq.label}</Badge>
        <h2 className="font-extrabold text-[clamp(2.2rem,4vw,3.5rem)] leading-tight tracking-[-1.5px]">
          {faq.headline}
        </h2>
        <p className="text-muted text-sm mt-3">{faq.sub}</p>

        <div className="mt-12 text-left">
          {faq.items.map((item, i) => (
            <FaqRow
              key={item.q}
              item={item}
              isOpen={openIdx === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>
      </motion.div>
      </Container>
    </section>
  )
}
