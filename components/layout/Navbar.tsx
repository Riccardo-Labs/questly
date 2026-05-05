'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ContactModal } from '@/components/ui/ContactModal'
import { Logo } from '@/components/ui/Logo'
import { nav } from '@/lib/content'

const navLinks = [
  { label: 'Servizi', href: '/servizi' },
  { label: 'FAQ', href: '/faq' },
]

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const pathname = usePathname()

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 h-[68px] bg-[#08102a] border-b border-[rgba(99,130,255,0.12)]">
        <div className="max-w-[1750px] mx-auto px-[clamp(1.875rem,6.25vw,7.5rem)] h-full flex items-center justify-between">
          <Link href="/" aria-label="Questly home">
            <Logo height={50} />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Navigazione principale">
            <ul className="flex gap-2 list-none mr-4">
              {navLinks.map(link => {
                const isActive = pathname === link.href
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`font-mono text-[14px] px-9 py-1.5 transition-colors border-t-2 ${
                        isActive
                          ? 'border-[#3d6aff] text-[#3d6aff]'
                          : 'border-transparent text-[#d4dcff] hover:text-white'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
            <button
              onClick={() => setModalOpen(true)}
              className="bg-[#3d6aff] text-white px-8 py-2 rounded-lg text-sm font-semibold hover:bg-[#2952cc] transition-colors"
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
        </div>
      </header>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed top-[68px] left-0 right-0 z-30 bg-[#08102a] border-b border-[rgba(99,130,255,0.12)] flex flex-col p-6 gap-4 md:hidden">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[#e8ecff] text-base font-medium py-1"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
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
