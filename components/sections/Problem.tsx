'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/Badge'
import { Container } from '@/components/ui/Container'
import { problems } from '@/lib/content'
import type { Problem as ProblemType } from '@/types'

/** Singola card problema con animazione fade-up ritardata in base all'indice. */
function ProblemCard({ item, index }: { item: ProblemType; index: number }) {
  return (
    <motion.div
      className="bg-surface-light p-10 hover:bg-[#eef1ff] transition-colors"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <p className="font-mono text-xs text-blue opacity-70 mb-4">{item.num}</p>
      <h3 className="font-bold text-lg mb-3 tracking-tight text-text-body">{item.title}</h3>
      <p className="text-text-secondary text-sm leading-relaxed">{item.body}</p>
    </motion.div>
  )
}

/** Sezione "Il Problema": griglia 2x2 con i 4 pain point comuni delle PMI. */
export function Problem() {
  return (
    <section id="problema" className="bg-bg-light py-24 min-h-[90vh] flex flex-col justify-center">
      <Container>
      <Badge variant="light" className="mb-6">Il problema</Badge>
      <h2 className="font-extrabold text-[clamp(2.2rem,4vw,3.5rem)] leading-tight tracking-[-1.5px] mb-4 text-text-body">
        Ti riconosci in una di queste situazioni?
      </h2>
      <p className="text-text-secondary text-base max-w-full mb-14 leading-relaxed">
        Sono le difficoltà più comuni che sentiamo ogni giorno da imprenditori e PMI che vogliono crescere online.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border-light border border-border-light rounded-xl overflow-hidden">
        {problems.map((item, i) => (
          <ProblemCard key={item.num} item={item} index={i} />
        ))}
      </div>
      </Container>
    </section>
  )
}
