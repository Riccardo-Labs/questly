'use client'

import { motion } from 'framer-motion'
import { IconButton } from '@/components/ui/IconButton' 
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { whyQuestly } from '@/lib/content'
import type { WhyFeature } from '@/types'

/** Card singola caratteristica distintiva di Questly (icona + titolo + testo). */
function FeatureCard({ f }: { f: WhyFeature }) {
  return (
    <div className="bg-bg2 border border-subtle rounded-xl p-6">
      <span className="text-xl block mb-3">{f.icon}</span>
      <h4 className="font-bold text-sm mb-1">{f.title}</h4>
      <p className="text-muted text-xs leading-relaxed">{f.body}</p>
    </div>
  )
}

/** Sezione "Perché Questly": testo descrittivo a sinistra, griglia 2x2 di feature card a destra. */
export function WhyQuestly({ onContactOpen }: { onContactOpen: () => void }) {
  return (
    <section id="perche" className="py-24">
      <Container>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          <SectionLabel>{whyQuestly.label}</SectionLabel>
          <h2 className="font-extrabold text-[clamp(2.2rem,4vw,3.5rem)] leading-tight tracking-[-1.5px] mb-6">
            {whyQuestly.headline}
          </h2>
          <p className="text-muted text-sm leading-relaxed mb-4">{whyQuestly.sub1}</p>
          <p className="text-muted text-sm leading-relaxed mb-10">{whyQuestly.sub2}</p>
          <Button variant="primary" onClick={onContactOpen}>{whyQuestly.cta}</Button>
        </motion.div>
        

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {whyQuestly.features.map(f => (
            <FeatureCard key={f.title} f={f} />
          ))}
        </motion.div>
      </div>
      </Container>
    </section>
  )
}
