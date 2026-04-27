interface SectionLabelProps {
  children: React.ReactNode
  className?: string
}

/** Etichetta monospaziata con prefisso "//" usata sopra ogni titolo di sezione. */
export function SectionLabel({ children, className = '' }: SectionLabelProps) {
  return (
    <p
      className={`font-mono text-xs font-medium text-blue tracking-widest uppercase flex items-center gap-2 mb-6 ${className}`}
    >
      <span className="opacity-60">//</span>
      {children}
    </p>
  )
}
