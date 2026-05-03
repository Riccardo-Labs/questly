'use client'

import { motion } from 'framer-motion'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Container } from '@/components/ui/Container'
import { problems } from '@/lib/content'
import type { Problem as ProblemType } from '@/types'

/** Singola card problema con animazione fade-up ritardata in base all'indice. */
function ProblemCard({ item, index }: { item: ProblemType; index: number }) {
  return (
    <motion.div
      className="bg-bg p-10 hover:bg-bg2 transition-colors"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <p className="font-mono text-xs text-blue opacity-70 mb-4">{item.num}</p>
      <h3 className="font-bold text-lg mb-3 tracking-tight">{item.title}</h3>
      <p className="text-muted text-sm leading-relaxed">{item.body}</p>
    </motion.div>
  )
}

/** Sezione "Il Problema": griglia 2x2 con i 4 pain point comuni delle PMI. */
export function Problem() {
  return (
    <section id="problema" className="py-24">
      <Container>
      <SectionLabel>Il problema</SectionLabel>
      <h2 className="font-extrabold text-[clamp(2.2rem,4vw,3.5rem)] leading-tight tracking-[-1.5px] mb-4">
        Ti riconosci in una<br />di queste situazioni?
      </h2>
      <p className="text-muted text-base max-w-md mb-14 leading-relaxed">
        Sono le difficoltà più comuni che sentiamo ogni giorno da imprenditori e PMI che vogliono crescere online.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-subtle border border-subtle rounded-xl overflow-hidden">
        {problems.map((item, i) => (
          <ProblemCard key={item.num} item={item} index={i} />
        ))}
      </div>
      </Container>
    </section>
  )
}
