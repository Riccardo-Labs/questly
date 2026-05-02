interface BadgeProps {
  children: React.ReactNode
  className?: string
}

export function Badge({ children, className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 border border-[rgba(61,106,255,0.2)] bg-[rgba(61,106,255,0.06)] text-[#5c85ff] text-[10px] font-mono px-3.5 py-1.5 rounded-full ${className}`}
    >
      <span className="w-1.5 h-1.5 bg-[#5c85ff] rounded-full badge-dot-pulse shrink-0" />
      {children}
    </span>
  )
}
