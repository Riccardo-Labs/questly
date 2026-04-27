import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — Questly.it',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-bg px-[5%] py-32 max-w-3xl mx-auto">
      <Link href="/" className="font-mono text-xs text-blue hover:underline mb-8 block">← Torna alla home</Link>
      <h1 className="font-extrabold text-4xl tracking-tight mb-6">Privacy Policy</h1>
      <p className="text-muted text-sm leading-relaxed mb-4">
        Questa pagina descrive le modalità di trattamento dei dati personali degli utenti che consultano il sito <strong className="text-text">questly.it</strong>.
      </p>
      <p className="text-muted text-sm leading-relaxed mb-4">
        Il titolare del trattamento è <strong className="text-text">Questly</strong>. I dati raccolti tramite il modulo di contatto (nome, email, messaggio) sono utilizzati esclusivamente per rispondere alle richieste degli utenti e non vengono ceduti a terzi.
      </p>
      <p className="text-muted text-sm leading-relaxed">
        Per esercitare i tuoi diritti (accesso, rettifica, cancellazione) scrivi a{' '}
        <a href="mailto:privacy@questly.it" className="text-blue hover:underline">privacy@questly.it</a>.
      </p>
    </div>
  )
}
