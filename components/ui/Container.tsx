export function Container({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`max-w-[1750px] mx-auto px-[clamp(1.875rem,6.25vw,7.5rem)] ${className}`}>
      {children}
    </div>
  )
}
