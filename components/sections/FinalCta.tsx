'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { finalCta } from '@/lib/content'

/** Sezione di chiusura pagina con headline e due CTA: modal contatto + link telefono. */
export function FinalCta({ onContactOpen }: { onContactOpen: () => void }) {
  return (
    <section className="bg-bg2 px-[5%] py-28 text-center">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="font-extrabold text-[clamp(2.5rem,5vw,4.5rem)] leading-tight tracking-[-2px] mb-4">
          {finalCta.headlinePart1}
          <br />
          <span className="text-blue">{finalCta.headlineAccent}</span>
        </h2>
        <p className="text-muted text-base mb-10">{finalCta.sub}</p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button variant="primary" onClick={onContactOpen}>
            {finalCta.primary}
          </Button>
          <Button variant="outline" href="tel:+39">
            {finalCta.secondary}
          </Button>
        </div>
      </motion.div>
    </section>
  )
}
