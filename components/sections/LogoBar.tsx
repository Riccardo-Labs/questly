import { logos } from '@/lib/content'

/** Singola lista di loghi/tecnologie. Renderizzata due volte per creare l'effetto marquee infinito. */
function LogoList() {
  return (
    <>
      {logos.map(logo => (
        <span key={logo} className="font-mono text-xs text-muted whitespace-nowrap px-8">
          {logo}
        </span>
      ))}
    </>
  )
}

/** Barra con scorrimento continuo (marquee) delle tecnologie usate da Questly. */
export function LogoBar() {
  return (
    <div className="bg-bg2 border-t border-subtle border-b py-10 overflow-hidden">
      <div className="flex animate-marquee">
        <LogoList />
        <LogoList />
      </div>
    </div>
  )
}
