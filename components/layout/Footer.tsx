import Link from 'next/link'
import { Logo } from '@/components/ui/Logo'
import { footer } from '@/lib/content'

/** Footer con logo, copyright e link a Privacy/Cookie Policy. Layout row su desktop, colonna su mobile. */
export function Footer() {
  return (
    <footer className="bg-bg border-t border-subtle px-[5%] py-8 flex flex-col md:flex-row justify-between items-center gap-3">
      <Logo height={24} className="text-white" />
      <p className="text-muted text-xs">{footer.copyright}</p>
      <div className="flex gap-4">
        {footer.links.map(link => (
          <Link
            key={link.href}
            href={link.href}
            className="text-muted text-xs hover:text-text transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </footer>
  )
}
