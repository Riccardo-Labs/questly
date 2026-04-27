'use client'

import { Button } from '@/components/ui/Button'
import { ctaBanner } from '@/lib/content'

/** Banner CTA a sfondo blu tra le sezioni. Apre il modal di contatto al click. */
export function CtaBanner({ onContactOpen }: { onContactOpen: () => void }) {
  return (
    <div className="mx-[5%] bg-blue rounded-2xl px-10 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
      <div>
        <h3 className="font-extrabold text-3xl tracking-tight text-white max-w-lg">
          {ctaBanner.headline}
        </h3>
        <p className="text-white/75 text-sm mt-2">{ctaBanner.sub}</p>
      </div>
      <Button variant="white" onClick={onContactOpen} className="whitespace-nowrap">
        {ctaBanner.cta}
      </Button>
    </div>
  )
}
