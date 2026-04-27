interface BadgeProps {
  children: React.ReactNode
  className?: string
}

/** Pill badge con punto blu e bordo accent. Usato nell'hero come etichetta di categoria. */
export function Badge({ children, className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 border border-accent bg-blue/10 text-blue text-xs font-semibold tracking-wide px-3.5 py-1.5 rounded-full uppercase ${className}`}
    >
      <span className="w-1.5 h-1.5 bg-blue rounded-full" />
      {children}
    </span>
  )
}
