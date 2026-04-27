'use client'

import { useEffect, useRef, useState } from 'react'
import { Button } from './Button'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

/**
 * Modal di contatto accessibile (role="dialog", focus trap, chiusura con Escape).
 * Al submit costruisce un link mailto con i dati del form e mostra la schermata di conferma.
 */
export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [sent, setSent] = useState(false)
  const firstInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (!isOpen) return
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleKey)
    firstInputRef.current?.focus()
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const mailto = `mailto:info@questly.it?subject=Consulenza da ${data.get('nome')}&body=${encodeURIComponent(`Nome: ${data.get('nome')}\nEmail: ${data.get('email')}\n\n${data.get('messaggio')}`)}`
    window.location.href = mailto
    setSent(true)
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
      role="presentation"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className="bg-bg2 border border-subtle rounded-2xl p-8 w-full max-w-md relative"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted hover:text-text transition-colors text-xl leading-none"
          aria-label="Chiudi"
        >
          ✕
        </button>

        {sent ? (
          <div className="text-center py-8">
            <div className="text-4xl mb-4">✅</div>
            <h3 className="text-text font-bold text-xl mb-2">Messaggio inviato!</h3>
            <p className="text-muted text-sm">Ti risponderemo entro 24 ore.</p>
            <Button variant="primary" className="mt-6" onClick={onClose}>Chiudi</Button>
          </div>
        ) : (
          <>
            <h2 id="modal-title" className="text-text font-extrabold text-2xl mb-1 tracking-tight">
              Parliamo del tuo progetto.
            </h2>
            <p className="text-muted text-sm mb-6">Risponderemo entro 24 ore.</p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label htmlFor="nome" className="block text-xs font-semibold text-muted mb-1.5">Nome</label>
                <input
                  ref={firstInputRef}
                  id="nome"
                  name="nome"
                  type="text"
                  required
                  placeholder="Mario Rossi"
                  className="w-full bg-bg border border-subtle rounded-lg px-4 py-2.5 text-text text-sm placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-semibold text-muted mb-1.5">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="mario@azienda.it"
                  className="w-full bg-bg border border-subtle rounded-lg px-4 py-2.5 text-text text-sm placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div>
                <label htmlFor="messaggio" className="block text-xs font-semibold text-muted mb-1.5">Messaggio</label>
                <textarea
                  id="messaggio"
                  name="messaggio"
                  required
                  rows={4}
                  placeholder="Raccontaci il tuo progetto..."
                  className="w-full bg-bg border border-subtle rounded-lg px-4 py-2.5 text-text text-sm placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors resize-none"
                />
              </div>
              <Button variant="primary" type="submit" className="w-full justify-center mt-2">
                Invia messaggio →
              </Button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
