import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy — Questly.it',
}

export default function CookiePage() {
  return (
    <div className="min-h-screen bg-bg px-[5%] py-32 max-w-3xl mx-auto">
      <Link href="/" className="font-mono text-xs text-blue hover:underline mb-8 block">← Torna alla home</Link>
      <h1 className="font-extrabold text-4xl tracking-tight mb-6">Cookie Policy</h1>
      <p className="text-muted text-sm leading-relaxed mb-4">
        Il sito <strong className="text-text">questly.it</strong> utilizza esclusivamente cookie tecnici necessari al funzionamento del sito. Non vengono utilizzati cookie di profilazione o di tracciamento di terze parti.
      </p>
      <p className="text-muted text-sm leading-relaxed mb-4">
        I cookie tecnici non richiedono consenso ai sensi del Regolamento EU 2016/679 (GDPR) e della normativa italiana vigente.
      </p>
      <p className="text-muted text-sm leading-relaxed">
        Per ulteriori informazioni scrivi a{' '}
        <a href="mailto:privacy@questly.it" className="text-blue hover:underline">privacy@questly.it</a>.
      </p>
    </div>
  )
}
