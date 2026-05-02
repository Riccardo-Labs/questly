'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ContactModal } from '@/components/ui/ContactModal'
import { Logo } from '@/components/ui/Logo'
import { nav } from '@/lib/content'

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 h-[68px] flex items-center justify-between px-12 bg-[rgba(6,8,15,0.7)] backdrop-blur-[16px] border-b border-[rgba(99,130,255,0.12)]">
        <Link href="/" aria-label="Questly home">
          <Logo height={36} />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Navigazione principale">
          <ul className="flex gap-8 list-none">
            {nav.links.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-mono text-[14px] text-[rgba(180,195,255,0.5)] hover:text-[#e8ecff] transition-colors"
                >
                  {'// ' + link.label.toLowerCase()}
                </a>
              </li>
            ))}
          </ul>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-[#3d6aff] text-white px-[22px] py-[10px] rounded-lg text-[14px] font-semibold hover:bg-[#2952cc] transition-colors border border-[rgba(99,130,255,0.3)] shadow-[0_0_20px_rgba(61,106,255,0.4)]"
          >
            {nav.cta}
          </button>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 text-[rgba(180,195,255,0.5)] hover:text-[#e8ecff] transition-colors"
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
        <div className="fixed top-[68px] left-0 right-0 z-30 bg-[#0d1120] border-b border-[rgba(99,130,255,0.12)] flex flex-col p-6 gap-4 md:hidden">
          {nav.links.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#e8ecff] text-base font-medium py-1"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => { setMenuOpen(false); setModalOpen(true) }}
            className="bg-[#3d6aff] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#2952cc] transition-colors text-left"
          >
            {nav.cta}
          </button>
        </div>
      )}

      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
