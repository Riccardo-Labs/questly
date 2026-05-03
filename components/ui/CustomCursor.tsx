'use client'

import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const dot = dotRef.current
    const glow = glowRef.current
    if (!dot || !glow) return

    const move = (e: MouseEvent) => {
      dot.style.left = `${e.clientX}px`
      dot.style.top = `${e.clientY}px`
      glow.style.left = `${e.clientX}px`
      glow.style.top = `${e.clientY}px`
    }

    const grow = () => dot.classList.add('cursor-hover')
    const shrink = () => dot.classList.remove('cursor-hover')

    const interactives = document.querySelectorAll('a, button, [role="button"], select, summary')
    interactives.forEach(el => {
      el.addEventListener('mouseenter', grow)
      el.addEventListener('mouseleave', shrink)
    })

    window.addEventListener('mousemove', move)
    return () => {
      window.removeEventListener('mousemove', move)
      interactives.forEach(el => {
        el.removeEventListener('mouseenter', grow)
        el.removeEventListener('mouseleave', shrink)
      })
    }
  }, [])

  return (
    <>
      <div
        ref={glowRef}
        className="fixed pointer-events-none z-[9998] hidden md:block -translate-x-1/2 -translate-y-1/2"
        style={{
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(61,106,255,0.08) 0%, rgba(92,133,255,0.03) 25%, transparent 60%)',
        }}
      />
      <div
        ref={dotRef}
        className="fixed pointer-events-none z-[9999] hidden md:block -translate-x-1/2 -translate-y-1/2 transition-[width,height] duration-200"
        style={{
          width: 14,
          height: 14,
          borderRadius: '50%',
          background: 'radial-gradient(circle at 50% 50%, #5c85ff, #3d6aff)',
          boxShadow: '0 0 10px rgba(61,106,255,0.5), 0 0 25px rgba(61,106,255,0.15)',
        }}
      />
    </>
  )
}
