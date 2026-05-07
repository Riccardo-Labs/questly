'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/Badge'
import { Container } from '@/components/ui/Container'
import { services } from '@/lib/content'
import type { ServiceItem } from '@/types'

/** Card singolo servizio con hover animato e lista bullet dei dettagli. */
function ServiceCard({ item, index }: { item: ServiceItem; index: number }) {
  return (
    <motion.div
      className="bg-surface-light border border-border-light rounded-xl p-8 flex flex-col hover:border-accent hover:bg-[#eef1ff] hover:-translate-y-1 transition-all duration-200 cursor-default"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <p className="font-mono text-[10px] text-blue tracking-wider mb-4">{item.tag}</p>
      <div className="h-px bg-border-light mb-6" />
      <div className="w-12 h-12 bg-blue/10 border border-accent rounded-xl flex items-center justify-center text-xl mb-6">
        {item.icon}
      </div>
      <h3 className="font-bold text-lg mb-3 tracking-tight text-text-body">{item.title}</h3>
      <p className="text-text-secondary text-xs leading-relaxed mb-6 flex-1">{item.body}</p>
      <ul className="flex flex-col gap-2 list-none">
        {item.list.map(li => (
          <li key={li} className="text-xs text-text-secondary flex items-center gap-2">
            <span className="text-blue text-xs">→</span>
            {li}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

/** Sezione "Cosa Facciamo": griglia 3 colonne con le aree di servizio (Web, Marketing, AI). */
export function Services() {
  return (
    <section id="servizi" className="bg-bg-light py-24 min-h-[90vh] flex flex-col justify-center">
      <Container>
      <Badge variant="light" className="mb-6">{services.label}</Badge>
      <h2 className="font-extrabold text-[clamp(2.2rem,4vw,3.5rem)] leading-tight tracking-[-1.5px] mb-4 text-text-body">
        {services.headline}
      </h2>
      <p className="text-text-secondary text-base max-w-full mb-14 leading-relaxed">{services.sub}</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.items.map((item, i) => (
          <ServiceCard key={item.tag} item={item} index={i} />
        ))}
      </div>
      </Container>
    </section>
  )
}
