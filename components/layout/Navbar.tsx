'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useScrollPosition } from '@/hooks/useScrollPosition'
import { ContactModal } from '@/components/ui/ContactModal'
import { Logo } from '@/components/ui/Logo'
import { nav } from '@/lib/content'

/**
 * Navbar fissa in cima alla pagina. Diventa opaca con blur dopo 10px di scroll.
 * Su mobile mostra hamburger menu con link e CTA. Gestisce il modal di contatto.
 */
export function Navbar() {
  const scrollY = useScrollPosition()
  const [menuOpen, setMenuOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  const scrolled = scrollY > 10

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 h-16 flex items-center justify-between px-[5%] transition-all duration-300 ${
          scrolled ? 'bg-bg/85 backdrop-blur-md border-b border-subtle' : 'bg-transparent'
        }`}
      >
        <Link href="/" aria-label="Questly home">
          <Logo height={55} className="text-white" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Navigazione principale">
          <ul className="flex gap-8 list-none">
            {nav.links.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-muted text-sm font-medium hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-blue text-white px-5 py-2 rounded-md text-sm font-semibold hover:bg-blue-dark transition-colors"
          >
            {nav.cta}
          </button>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 text-muted hover:text-text transition-colors"
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label={menuOpen ? 'Chiudi menu' : 'Apri menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <span className="text-xl leading-none">✕</span>
          ) : (
            <>
              <span className="w-5 h-0.5 bg-current block" />
              <span className="w-5 h-0.5 bg-current block" />
              <span className="w-5 h-0.5 bg-current block" />
            </>
          )}
        </button>
      </header>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed top-16 left-0 right-0 z-30 bg-bg2 border-b border-subtle flex flex-col p-6 gap-4 md:hidden">
          {nav.links.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-text text-base font-medium py-1"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => { setMenuOpen(false); setModalOpen(true) }}
            className="bg-blue text-white px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-blue-dark transition-colors text-left"
          >
            {nav.cta}
          </button>
        </div>
      )}

      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
