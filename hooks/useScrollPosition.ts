'use client'

import { useState, useEffect } from 'react'

/** Restituisce la posizione verticale di scroll corrente (window.scrollY). Listener passive per non bloccare il thread principale. */
export function useScrollPosition(): number {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return scrollY
}
