import Image from 'next/image'
import { site } from '@/lib/site'
import { ToggleTema } from '@/components/toggle-tema'

const links = [
  { href: '/#catalogo', rotulo: 'Catálogo' },
  { href: '/#sobre', rotulo: 'Sobre o TCC' },
  { href: '/#instagram', rotulo: 'Instagram' },
]

export function SiteLogo({ className }: { className?: string }) {
  if (!site.logo) {
    return <span className="text-base font-semibold tracking-tight text-foreground">{site.nome}</span>
  }
  return (
    <Image
      src={site.logo.src}
      alt={site.logo.alt}
      width={site.logo.width}
      height={site.logo.height}
      className={`${className ?? 'h-10 w-auto'} shrink-0 self-start object-contain`}
      priority
    />
  )
}

export function SiteHeader() {
  return (
    <header className="glass-bar sticky top-0 z-40">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <a href="/#inicio" className="flex items-center gap-3 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
          <SiteLogo />
        </a>
        <nav aria-label="Navegação principal" className="hidden sm:block">
          <ul className="glass flex items-center gap-1 rounded-full p-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-[var(--glass-hover)] hover:text-primary focus-visible:outline-2 focus-visible:outline-primary"
                >
                  {l.rotulo}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <ToggleTema />
      </div>
    </header>
  )
}
