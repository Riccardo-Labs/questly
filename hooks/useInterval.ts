'use client'

import { useEffect, useRef } from 'react'

/** Versione React-safe di setInterval: aggiorna sempre il callback più recente senza resettare il timer. Passa delay=null per mettere in pausa. */
export function useInterval(callback: () => void, delay: number | null): void {
  const savedCallback = useRef(callback)

  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    if (delay === null) return
    const id = setInterval(() => savedCallback.current(), delay)
    return () => clearInterval(id)
  }, [delay])
}
