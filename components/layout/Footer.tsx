import Link from 'next/link'
import { Logo } from '@/components/ui/Logo'
import { Container } from '@/components/ui/Container'
import { footer } from '@/lib/content'

/** Footer con logo, copyright e link a Privacy/Cookie Policy. Layout row su desktop, colonna su mobile. */
export function Footer() {
  return (
    <footer className="bg-bg border-t border-subtle py-8">
      <Container className="flex flex-col md:flex-row items-center gap-3">
      <p className="text-muted text-xs flex-1">{footer.copyright}</p>
      <p className="text-muted text-xs">P. IVA 13325480963</p>
      <div className="flex gap-4 flex-1 justify-end">
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
      </Container>
    </footer>
  )
}
