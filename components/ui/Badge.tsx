interface BadgeProps {
  children: React.ReactNode
  className?: string
  variant?: 'dark' | 'light'
}

export function Badge({ children, className = '', variant = 'dark' }: BadgeProps) {
  const styles = variant === 'light'
    ? 'border-[rgba(61,106,255,0.35)] bg-[rgba(61,106,255,0.1)] text-[#3d6aff]'
    : 'border-[rgba(61,106,255,0.2)] bg-[rgba(61,106,255,0.06)] text-[#5c85ff]'

  return (
    <span
      className={`inline-flex items-center gap-2 border text-[12px] font-mono px-3.5 py-1.5 rounded-full ${styles} ${className}`}
    >
      <span className="w-1.5 h-1.5 bg-[#3d6aff] rounded-full badge-dot-pulse shrink-0" />
      {children}
    </span>
  )
}
