'use client'

import { motion } from 'framer-motion'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Container } from '@/components/ui/Container'
import { howWeWork } from '@/lib/content'
import type { Step } from '@/types'

/** Card singolo step del processo. Mostra la freccia separatrice solo se non è l'ultimo step. */
function StepCard({ step, index, isLast }: { step: Step; index: number; isLast: boolean }) {
  return (
    <motion.div
      className={`bg-bg p-8 relative ${!isLast ? 'border-r-0 md:border-r border-subtle' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {!isLast && (
        <span className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 text-blue text-lg z-10 bg-bg px-1">
          →
        </span>
      )}
      <p className="font-mono text-[10px] text-blue tracking-wider mb-6">{step.num}</p>
      <h3 className="font-bold text-base mb-3">{step.title}</h3>
      <p className="text-muted text-xs leading-relaxed">{step.body}</p>
    </motion.div>
  )
}

/** Sezione "Come Lavoriamo": 4 step in sequenza orizzontale su desktop, verticale su mobile. */
export function HowWeWork() {
  return (
    <section id="come-lavoriamo" className="bg-bg2 py-24">
      <Container>
      <SectionLabel>{howWeWork.label}</SectionLabel>
      <h2 className="font-extrabold text-[clamp(2.2rem,4vw,3.5rem)] leading-tight tracking-[-1.5px] mb-14">
        {howWeWork.headline}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 border border-subtle rounded-xl overflow-hidden">
        {howWeWork.steps.map((step, i) => (
          <StepCard
            key={step.num}
            step={step}
            index={i}
            isLast={i === howWeWork.steps.length - 1}
          />
        ))}
      </div>
      </Container>
    </section>
  )
}
