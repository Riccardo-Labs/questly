'use client'

import { useEffect, useRef } from 'react'

export default function VantaBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const effectRef = useRef<any>(null)

  useEffect(() => {
    const init = async () => {
      const THREE = await import('three')
      const NET = (await import('vanta/dist/vanta.net.min')).default
      if (!containerRef.current || effectRef.current) return

      effectRef.current = NET({
        el: containerRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200,
        minWidth: 200,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0x3d6aff,
        backgroundColor: 0x06080f,
        points: 10,
        maxDistance: 17,
        spacing: 13,
        showDots: true,
      })
    }

    init()

    return () => {
      if (effectRef.current) {
        effectRef.current.destroy()
        effectRef.current = null
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0 pointer-events-none"
      style={{
        opacity: 0.20,
        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, transparent 30%, black 70%, black 100%)',
        maskImage: 'linear-gradient(to right, transparent 0%, transparent 35%, black 50%, black 100%)',
      }}
      aria-hidden="true"
    />
  )
}
