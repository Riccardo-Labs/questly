import Link from 'next/link'

type Variant = 'primary' | 'secondary' | 'white' | 'outline'

interface ButtonProps {
  variant?: Variant
  href?: string
  onClick?: () => void
  children: React.ReactNode
  className?: string
  type?: 'button' | 'submit'
}

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-[#3d6aff] text-white font-semibold hover:bg-[#2952cc] hover:-translate-y-px transition-all shadow-[0_0_30px_rgba(61,106,255,0.4)] border border-[rgba(99,130,255,0.3)]',
  secondary:
    'bg-transparent text-[#e8ecff] border border-[rgba(99,130,255,0.12)] font-semibold hover:border-[rgba(61,106,255,0.4)] hover:bg-[rgba(61,106,255,0.06)] transition-all',
  white:
    'bg-white text-blue font-bold hover:-translate-y-px hover:shadow-xl transition-all',
  outline:
    'bg-transparent text-muted border border-subtle font-semibold hover:border-white/20 hover:text-text transition-all',
}

/**
 * Bottone polivalente: se riceve `href` interno usa next/link, se ancora hash/mailto usa `<a>`, altrimenti `<button>`.
 * Varianti: primary (blu), secondary (outline muted), white (su sfondi blu), outline (trasparente).
 */
export function Button({ variant = 'primary', href, onClick, children, className = '', type = 'button' }: ButtonProps) {
  const base = 'inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm cursor-pointer'
  const classes = `${base} ${variantClasses[variant]} ${className}`

  if (href && !href.startsWith('#') && !href.startsWith('mailto')) {
    return <Link href={href} className={classes}>{children}</Link>
  }

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  )
}
