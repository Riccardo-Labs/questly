'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/Badge'
import { Container } from '@/components/ui/Container'
import { solution } from '@/lib/content'
import type { TerminalLine } from '@/types'

/** Renderizza una singola riga del terminale con stile diverso per tipo: cmd, ok, arrow, blank. */
function TerminalLineRow({ line }: { line: TerminalLine }) {
  if (line.type === 'blank') return <div className="h-3" />
  if (line.type === 'cmd') {
    return (
      <div className="font-mono text-xs leading-loose text-white">
        <span className="text-blue">$ </span>{line.text}
      </div>
    )
  }
  if (line.type === 'ok') {
    return (
      <div className="font-mono text-xs leading-loose text-[#28c840]">
        <span className="text-[10px]">✓ </span>{line.text}
      </div>
    )
  }
  return (
    <div className="font-mono text-xs leading-loose text-blue">
      <span>→ </span>{line.text}
    </div>
  )
}

/** Terminale decorativo che simula un'analisi aziendale. Il cursore lampeggia via CSS. */
function Terminal() {
  return (
    <div className="bg-[#050a14] border border-subtle rounded-xl overflow-hidden font-mono">
      <div className="bg-bg2 px-4 py-3 flex items-center gap-2 border-b border-subtle">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        <span className="text-muted text-xs ml-2">{solution.terminalTitle}</span>
      </div>
      <div className="p-6">
        {solution.terminal.map((line, i) => (
          <TerminalLineRow key={i} line={line} />
        ))}
        <span className="inline-block w-2 h-3.5 bg-blue animate-blink align-middle" />
      </div>
    </div>
  )
}

/** Sezione "La Soluzione": lista features a sinistra, terminale animato a destra. Layout 2 colonne su desktop. */
export function Solution() {
  return (
    <section id="soluzione" className="bg-bg2 py-24 min-h-[90vh] flex flex-col justify-center">
      <Container>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          <Badge className="mb-6">La soluzione</Badge>
          <h2 className="font-extrabold text-[clamp(2.2rem,4vw,3.5rem)] leading-tight tracking-[-1.5px] mb-6">
            {solution.headline}
          </h2>
          <p className="text-muted text-sm leading-relaxed mb-8">{solution.sub}</p>

          <div className="flex flex-col">
            {solution.features.map((f, i) => (
              <div
                key={f.title}
                className={`flex gap-4 items-start py-6 ${i < solution.features.length - 1 ? 'border-b border-subtle' : ''}`}
              >
                <div className="w-9 h-9 bg-blue/10 border border-accent rounded-lg flex items-center justify-center text-base flex-shrink-0">
                  {f.icon}
                </div>
                <div>
                  <h4 className="font-bold text-sm mb-1">{f.title}</h4>
                  <p className="text-muted text-xs leading-relaxed">{f.body}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <Terminal />
        </motion.div>
      </div>
      </Container>
    </section>
  )
}
